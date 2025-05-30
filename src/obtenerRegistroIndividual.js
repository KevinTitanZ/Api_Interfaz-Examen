const AWS = require("aws-sdk");

exports.obtenerRegistroIndividual = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    const result = await dynamoDB
      .get({
        TableName: "examen_kevin",
        Key: {
          id,
        },
      })
      .promise();

    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Persona no encontrada",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: result.Item,
      }),
    };
  } catch (error) {
    console.error("Error al obtener persona:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error al obtener persona",
        error: error.message,
      }),
    };
  }
};
