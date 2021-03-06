const Joi = require("joi");

const handler = (event, context, callback) => {
  const { email, subject, message } = JSON.parse(event.body);
  let body = {
    email: email,
    subject: subject,
    message: message,
  };

  const validationSchema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.empty": "Email nesmí být prázndý",
      "string.email": "Nesprávný formát emailu",
    }),
    subject: Joi.string().max(60).required().messages({
      "string.empty": "Předmět nesmí být prázndý",
      "string.max": "Předmět přesahuje maximální povolenou délku",
    }),
    message: Joi.string().required().messages({
      "string.empty": "Zpráva nesmí být prázdná",
    }),
  });

  const { error } = validationSchema.validate(body);

  if (error) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        status: "❌",
        error: error.details[0],
      }),
    });
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      status: "✅",
      error: "",
    }),
  });
};

module.exports = { handler };
