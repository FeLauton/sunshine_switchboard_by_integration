/**
 * Author: Fellipe Lauton C. Pinto
 * Description: this component is responsible for receiving the webhook from Sunshine and selecting the data to be sent to switchByChannel.ts
 */
import { NextApiRequest, NextApiResponse } from "next";
import switchByChannel from "../../functions/switchByChannel";

const passControl = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.events) {
    const payload = req.body.events[0].payload;
    if (payload.message.source) {
      const PassControlValidationData = {
        conversationId: payload.conversation.id,
        integrationId: payload.message.source.integrationId,
        first_message_id: payload.message.id,
      };
      console.log("PassControlValidationData: ", PassControlValidationData);
      switchByChannel(PassControlValidationData, res);
    } else {
      res.json({
        statusCode: 200,
        message: `this message has no events source in the body!`,
      });
    }
  } else {
    res.json({
      statusCode: 200,
      message: `this message has no events in the body!`,
    });
  }
};

export default passControl;
