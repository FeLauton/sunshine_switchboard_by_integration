/**
 * Developed by: Fellipe Lauton C. Pinto
 * Author: Fellipe Lauton C. Pinto
 * Description: this component checks the integration sending message and defines a new switchboardIntegration
 */
import { NextApiResponse } from "next";
import { PassControlValidation } from "../model/PassControlValidation";
import requestPassControl from "./requestPassControl";

const switchByChannel = (
  PassControlValidationData: PassControlValidation,
  res: NextApiResponse
) => {
  const { integrationId, first_message_id, conversationId } =
    PassControlValidationData;

  let passControlBody = {
    switchboardIntegration: process.env.SWITCHBOARD_DEFAULT_INTEGRATION,
    metadata: { first_message_id: first_message_id },
  };

  switch (integrationId) {
    // validation for the integration 1
    case process.env.INTEGRATION_1:
      passControlBody.switchboardIntegration =
        process.env.SWITCHBOARD_1_INTEGRATION;
      return requestPassControl(conversationId, passControlBody, res);

    // validation for the integration 2
    case process.env.INTEGRATION_2:
      passControlBody.switchboardIntegration =
        process.env.SWITCHBOARD_2_INTEGRATION;
      return requestPassControl(conversationId, passControlBody, res);

    // validation for the integrations 3 / 4 / 5 / 6
    case process.env.INTEGRATION_3:
    case process.env.INTEGRATION_4:
    case process.env.INTEGRATION_5:
    case process.env.INTEGRATION_6:
      passControlBody.switchboardIntegration =
        process.env.SWITCHBOARD_3_INTEGRATION;
      return requestPassControl(conversationId, passControlBody, res);

    // validation for the integrations 7 / 8 / 9
    case process.env.INTEGRATION_7:
    case process.env.INTEGRATION_8:
    case process.env.INTEGRATION_9:
      passControlBody.switchboardIntegration =
        process.env.SWITCHBOARD_4_INTEGRATION;
      return requestPassControl(conversationId, passControlBody, res);

    // integrations default
    default:
      passControlBody.switchboardIntegration =
        process.env.SWITCHBOARD_DEFAULT_INTEGRATION;
      return requestPassControl(conversationId, passControlBody, res);
  }
};

export default switchByChannel;
