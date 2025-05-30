API RESTful Serverless con AWS Lambda y DynamoDB
Nombre del estudiante: Ordoñez Kevin
Fecha de entrega: 30/05/2025

Introducción
Este proyecto implementa una API RESTful utilizando tecnologías serverless, específicamente AWS Lambda, DynamoDB y API Gateway, gestionadas mediante el Framework Serverless. El objetivo es crear un sistema eficiente y escalable para la gestión de registros personales, permitiendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de manera sencilla y sin la necesidad de administrar servidores tradicionales.

Las tecnologías serverless son fundamentales en el desarrollo de aplicaciones distribuidas modernas, ya que permiten escalar automáticamente, reducir costos operativos y simplificar la gestión de la infraestructura, enfocando el esfuerzo en la lógica de negocio.

Requisitos del Proyecto
Funcionalidades requeridas:

Crear un registro personal (nombre, fecha de nacimiento, número de cédula, ciudad de nacimiento, país, sexo, tipo de sangre).
Obtener todos los registros.
Obtener un registro individual por ID.
Actualizar un registro existente.
Eliminar un registro.
Herramientas y tecnologías utilizadas:

AWS Lambda
DynamoDB
API Gateway
Serverless Framework
Node.js
Implementación del Proyecto
La estructura del proyecto está organizada de la siguiente manera:

src/: Contiene los archivos de las funciones Lambda para cada operación CRUD:

agregarRegistro.js: Agrega un nuevo registro.
obtenerRegistros.js: Obtiene todos los registros.
obtenerRegistroIndividual.js: Obtiene un registro por ID.
actualizarRegistro.js: Actualiza un registro existente.
eliminarRegistro.js: Elimina un registro.
index.html: Interfaz web para interactuar con la API.

serverless.yml: Configuración del Framework Serverless para desplegar las funciones y recursos en AWS.

Operaciones CRUD implementadas
Crear: Se utiliza una función Lambda para insertar un nuevo registro en DynamoDB.
Leer: Dos funciones Lambda permiten obtener todos los registros o uno individual.
Actualizar: Una función Lambda actualiza los datos de un registro existente.
Eliminar: Una función Lambda elimina un registro por su ID.
Capturas de pantalla
Agrega aquí tus capturas de pantalla mostrando:

El formulario web funcionando.
Respuestas de la API en Postman o navegador.
La consola de AWS Lambda o DynamoDB mostrando los registros.
Instrucciones de Ejecución
Requisitos previos
Tener instalado Node.js y npm.
Tener una cuenta de AWS y configurar credenciales.
Instalar Serverless Framework globalmente:
npm install -g serverless

Pasos para ejecutar localmente y desplegar en AWS
Clonar el repositorio y entrar a la carpeta del proyecto:

Instalar dependencias:
npm install
Configurar credenciales de AWS:
serverless config credentials --provider aws --key  --secret 

Desplegar la API en AWS:
serverless deploy
Obtener el endpoint de la API:

El comando anterior mostrará la URL base de la API.
Probar la API:

Puedes usar la interfaz web (index.html) o herramientas como Postman para probar los endpoints.
