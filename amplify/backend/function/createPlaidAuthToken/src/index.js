/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_SECRET,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Content-Type": "",
    },
  },
});
const client = new PlaidApi(configuration);

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const request = {
    user: {
      // This should correspond to a unique id for the current user.
      client_user_id: 1,
    },
    client_name: "Plaid Test App",
    products: ["auth"],
    language: "en",
    webhook: "https://webhook.example.com",
    redirect_uri: "https://domainname.com/oauth-page.html",
    country_codes: ["US"],
  };

  try {
    const createTokenResponse = await client.linkTokenCreate(request);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      body: JSON.stringify(createTokenResponse.data),
    };
  } catch (error) {
    // handle error
  }
};
