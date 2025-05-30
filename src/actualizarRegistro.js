const AWS = require("aws-sdk");
exports.actualizarRegistro = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const { nombre, fechaNacimiento, numeroCedula, ciudadNacimiento, pais, sexo, tipoSangre } = JSON.parse(event.body);

  try {
    await dynamoDB
      .update({
        TableName: "examen_kevin",
        Key: {
          id,
        },
        UpdateExpression: "set nombre = :nombre, fechaNacimiento = :fechaNacimiento, numeroCedula = :numeroCedula, ciudadNacimiento = :ciudadNacimiento, pais = :pais, sexo = :sexo, tipoSangre = :tipoSangre",
        ExpressionAttributeValues: {
          ":nombre": nombre,
          ":fechaNacimiento": fechaNacimiento,
          ":numeroCedula": numeroCedula,
          ":ciudadNacimiento": ciudadNacimiento,
          ":pais": pais,
          ":sexo": sexo,
          ":tipoSangre": tipoSangre,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Persona actualizada correctamente",
      }),
    };
  } catch (error) {
    console.error("Error al actualizar:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error al actualizar la persona",
        error: error.message,
      }),
    };
  }
};
