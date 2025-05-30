const AWS = require("aws-sdk");
exports.obtenerRegistros = async () => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  try {
    const result = await dynamoDB
      .scan({
        TableName: "examen_kevin",
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: result.Items,
      }),
    };
  } catch (error) {
    console.error("Error al obtener personas:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error al obtener personas",
        error: error.message,
      }),
    };
  }
};
