/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  try {
    const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const configuration = new Configuration({
      basePath: PlaidEnvironments.sandbox,
      baseOptions: {
        headers: {
          "PLAID-CLIENT-ID": "655a2ac0bd746d001cc94993",
          "PLAID-SECRET": "e0c5c16d5ae70638bd01b7daa95bfb",
        },
      },
    });

    console.info("Connecting to plaid client...");
    const client = new PlaidApi(configuration);

    console.info(
      "Successfully connected to plaid client. Exchanging public token for access token."
    );

    const body = JSON.parse(event.body);
    const accessToken = body.accessToken;

    if (!accessToken) {
      throw new Error("Please try request with valid access token.");
    }

    console.info("Retrieving account details with access token...");

    const accountsResponse = await client.accountsGet({
      access_token: accessToken,
    });

    console.info("Successfully retrieved account details...");

    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: JSON.stringify(accountsResponse.data),
    };
  } catch (error) {}
};
