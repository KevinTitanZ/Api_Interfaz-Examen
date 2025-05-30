const AWS = require("aws-sdk");

exports.eliminarRegistro = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    await dynamoDB
      .delete({
        TableName: "examen_kevin",
        Key: {
          id,
        },
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Persona eliminada correctamente",
      }),
    };
  } catch (error) {
    console.error("Error al eliminar:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error al eliminar la persona",
        error: error.message,
      }),
    };
  }
};
