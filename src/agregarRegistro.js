const { v4: uuidv4 } = require('uuid');
const { DynamoDB } = require('aws-sdk');

exports.agregarRegistro = async (event) => {
    const { nombre, fechaNacimiento, numeroCedula, ciudadNacimiento, pais, sexo, tipoSangre } = JSON.parse(event.body);

    // Validar que todos los campos estén presentes
    if (!nombre || !fechaNacimiento || !numeroCedula || !ciudadNacimiento || !pais || !sexo || !tipoSangre) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Todos los campos son requeridos: nombre, fechaNacimiento, numeroCedula, ciudadNacimiento, pais, sexo, tipoSangre'
            })
        };
    }

    const id = uuidv4();
    const dynamoDB = new DynamoDB.DocumentClient();

    const item = {
        id,
        nombre,
        fechaNacimiento,
        numeroCedula,
        ciudadNacimiento,
        pais,
        sexo,
        tipoSangre
    };

    try {
        await dynamoDB.put({
            TableName: 'examen_kevin',
            Item: item
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Persona agregada con éxito',
                data: item
            })
        };
    } catch (error) {
        console.error("Error al guardar en DynamoDB:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error al guardar persona',
                error: error.message
            })
        };
    }
};
