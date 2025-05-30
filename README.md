# API RESTful Serverless con AWS Lambda y DynamoDB

**Nombre del estudiante:** Ordoñez Kevin  
**Fecha de entrega:** 30/05/2025

---

##  Introducción

Este proyecto implementa una **API RESTful** utilizando tecnologías **serverless**, específicamente **AWS Lambda**, **DynamoDB** y **API Gateway**, gestionadas mediante el **Serverless Framework**.

El propósito de esta aplicación es permitir la gestión de registros personales (crear, leer, actualizar y eliminar) de forma escalable, eficiente y sin la necesidad de gestionar servidores tradicionales.

Las tecnologías serverless permiten una arquitectura distribuida moderna, con escalabilidad automática, reducción de costos operativos y una mayor concentración en la lógica de negocio en lugar de la infraestructura.

---

## Requisitos del Proyecto

### Funcionalidades requeridas

- Crear un registro personal (nombre, fecha de nacimiento, cédula, ciudad, país, sexo, tipo de sangre).
- Obtener todos los registros.
- Obtener un registro individual por ID.
- Actualizar un registro existente.
- Eliminar un registro por su ID.

### Herramientas y tecnologías utilizadas

- AWS Lambda  
- Amazon DynamoDB  
- API Gateway  
- Serverless Framework  
- Node.js  
- HTML + JavaScript (para la interfaz web)

---

## Implementación del Proyecto

### Estructura del Código


![Estructura](https://i.imgur.com/XXXXX.png)



### 🔄 Operaciones CRUD

- **Crear:** Inserta un nuevo registro en DynamoDB usando Lambda.
- **Leer:** Obtiene todos los registros o uno individual por ID.
- **Actualizar:** Modifica datos de un registro existente.
- **Eliminar:** Borra un registro a través del ID.

---
## Capturas de Pantalla

### Formulario Web funcionando
![Formulario 1](https://i.imgur.com/2eRf7vg.png)  
![Formulario 2](https://i.imgur.com/TsPvQzy.png)

### Endpoints
![Endpoints](https://i.imgur.com/6Y22a6r.png)

### Resultado en Postman 
**CREAR**
![Postman 1](https://i.imgur.com/XvoSVkW.png)  
**VISUALIZAR**
![Postman 2](https://i.imgur.com/EzeB7Sx.png)  
***VISUALIZAR INDIVIDUAL**
![Postman 3](https://i.imgur.com/hfTCZmX.png)  
**ACTUALIZAR**
![Postman 4](https://i.imgur.com/5ho8fyh.png)  
**ELIMINAR**
![Postman 5](https://i.imgur.com/GPwyQ50.png)

### Registros en DynamoDB
![DynamoDB](https://i.imgur.com/lzOzl1r.png)

- Instalar Serverless Framework:
  ```bash
  npm install -g serverless


Pasos para clonar y desplegar



Instala las dependencias del proyecto:

npm install
Configura tus credenciales de AWS:

serverless config credentials --provider aws --key TU_AWS_KEY --secret TU_AWS_SECRET
Despliega la API:

serverless deploy
Obtén el endpoint de la API.

Prueba la API desde el navegador, Postman o usando index.html.

**Conclusiones**
-Durante el desarrollo de este proyecto aprendí a:

-Implementar funciones Lambda para operaciones CRUD.

-Utilizar DynamoDB como base de datos NoSQL.

-Configurar y desplegar un proyecto usando Serverless Framework.

-Conectar una interfaz web con endpoints RESTful.

**Dificultades enfrentadas**
-Problemas iniciales con la configuración del repositorio Git (push bloqueado por secretos).

-Validación de datos al consumir los endpoints desde HTML/JavaScript.

-Permisos IAM mal configurados en un principio.

-Todas estas dificultades fueron resueltas revisando documentación oficial, usando herramientas como Postman y con práctica constante.


 **Referencias**


**Link**
https://github.com/KevinTitanZ/Api_Interfaz-Examen?tab=readme-ov-file