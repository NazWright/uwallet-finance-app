/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const publicToken = event.body.publicToken;

  const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
      headers: {
        "PLAID-CLIENT-ID": "655a2ac0bd746d001cc94993",
        "PLAID-SECRET": "e0c5c16d5ae70638bd01b7daa95bfb",
      },
    },
  });

  const client = new PlaidApi(configuration);

  try {
    const response = await client.itemPublicTokenExchange({
      public_token: publicToken,
      redirect_uri: "https://main.djtegc4mzj3vp.amplifyapp.com/",
    });
    // These values should be saved to a persistent database and
    // associated with the currently signed-in user
    const accessToken = response.data.access_token;
    const itemID = response.data.item_id;

    return {
      statusCode: 200,
      //  Uncomment below to enable CORS requests
      //  headers: {
      //      "Access-Control-Allow-Origin": "*",
      //      "Access-Control-Allow-Headers": "*"
      //  },
      body: JSON.stringify("Hello from Lambda!"),
    };
  } catch (error) {
    // handle error
  }
};
