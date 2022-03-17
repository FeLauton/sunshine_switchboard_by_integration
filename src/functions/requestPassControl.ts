/**
 * Code snippet leveraged from Sunshine.
 * Documentation: https://docs.smooch.io/rest/#operation/passControl
 * Description: this component performs a request on the Sunshine API.
 */
import { NextApiResponse } from "next";

const requestPassControl = (
  conversationId: string,
  passControlBody: object,
  res: NextApiResponse
) => {
  const SunshineConversationsClient = require("sunshine-conversations-client");
  const defaultClient = SunshineConversationsClient.ApiClient.instance;
  const basicAuth = defaultClient.authentications["basicAuth"];
  basicAuth.username = process.env.SUNSHINE_USERNAME;
  basicAuth.password = process.env.SUNSHINE_PASSWORD;
  const appId = process.env.SUNSHINE_APPID;
  const apiInstance = new SunshineConversationsClient.SwitchboardActionsApi();

  apiInstance
    .passControl(appId, conversationId, passControlBody)
    .then(() => {
      console.log(
        `pass Control successfully executed for conversation id: ${conversationId}!`
      );
      res.json({
        statusCode: 200,
        message: `pass Control successfully executed for conversation id: ${conversationId}!`,
      });
    })
    .catch(() => {
      console.log(
        `error on execute Pass Control for conversation id: ${conversationId}!`
      );
      res.json({
        statusCode: 400,
        message: `error on execute Pass Control for conversation id: ${conversationId}!`,
      });
    });
};

export default requestPassControl;
