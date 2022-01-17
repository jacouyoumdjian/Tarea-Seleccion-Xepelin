# Tarea de Selección | Product Engineer - Xepelin

### Autor: Joaquín Couyoumdjian | [@jacouyoumdjian](https://www.github.com/jacouyoumdjian)

## 1) Descripción

A continuación, se presenta el código de la tarea de selección para Product Engineer en Xepelin. Este corresponde a una aplicación web que contiene un login básico y una [Google Sheet](https://docs.google.com/spreadsheets/d/1E_EgUoAWKhc6GyT4992oMUroDHPR7HLw4X3KpVVfPVQ/edit#gid=0) embebida a la que se le aplican las acciones que se mencionan más adelante. Cabe desctacar que la aplicación se modeló para que funcionara de forma local.

## 2) Estructura del repositorio

```
project
└───📂backend
│   └───💻server.js
│
└───📂node_modules
└───📂public
└───📂src
│   └───📂components
│   │   └───⚛️Edit.jsx
│   │   └───⚛️Home.jsx
│   │   └───💻index.js
│   │   └───⚛️Login.jsx
│   │   └───⚛️Title.jsx
│   │   └───⚛️useToken.jsx
│   │
│   └───🎨App.css
│   └───💻App.js
│   └───💻index.js
│
└───⚙️.gitignore
└───🖹package-lock.json
└───🖹package.json
└───📑README.md

```

## 3) Tecnologías empleadas

Para la siguiente tarea se utilizaron los lenguajes HTML, CSS y JavaScript. Además, para construir la interfaz de usuario de la aplicación se utilizó la biblioteca de JavaScript, ReactJs. Por último, una sección de la tarea relacionada al login se realizó utilizando el _framework_ Node Express.

## 4) Decisiones de Diseño y Modelación

- Para el login de la aplicación se utilizó un sistema de autenticación basado en tokens, los que se almacenan en el localStorage del navegador.
- Para la conexión de la aplicación con la hoja Google Sheet se utilizó la plataforma [sheet.best](https://sheet.best/), la que convierte las hojas de cálculo en REST APIs. Así, la aplicación le puede hacer consultas a la hoja de cálculo referenciada anteriormente para obtener la información contenida y editarla. **Cabe destacar que la conexión de la hoja de cálculo se encuentra implementada en un plan que permite un número limitado de consultas, en particular, un máximo de 250 consultas a la hoja de cálculo. Esto para que lo tenga en consideración a la hora de probar la aplicación**
- La hoja de cálculo con la se trabaja cumple con la estructura de:

```
| idOp        | tasa        | email
| ----------- | ----------- |-----------
| idOp_1      | Tasa_1      | Email_1
| idOp_2      | Tasa_2      | Email_2
| .           | .           | .
| .           | .           | .
| .           | .           | .

```

## 5) Funcionamiento de la Aplicación

### 5.1) Ejecución del programa

Para ejecutar la aplicación en primer lugar se requiere descargar el repositorio en su dispositivo. Cabe destacar que para ejecutar exitosamente la aplicación se requiere que el dispositivo tenga descargado npm y node.js.

Luego, abra dos consolas al interior del repositorio navegando a las siguientes rutas, y ejecute los comandos que se presentan a continuación en cada una:

- _Consola 1_: `ruta\local\Tarea-Seleccion-Xepelin\` -> Ejecutar: `npm install` y luego `npm start`.
- _Consola 2_: `ruta\local\Tarea-Seleccion-Xepelin\backend\` -> Ejecutar: `node server.js`.

### 5.2) Caso de uso y Alcances

Tal como se mencionó anteriormente, la tarea se modeló para ser implementada de manera local. Una vez ejecutados los comandos anteriores, se le presentará la vista del login. Ahí se le solicitará ingresar un nombre de usuario y una contraseña. Cabe destacar que no se le mostrará ninguna otra vista de la aplicación hasta que haya ingresado los parámetros solicitados.

Luego, una vez loggeado, se le presentará una lista de facturas con sus tasas y un email asociado. Esta información corresponde a la presentada en la hoja de cálculo y se obtiene por medio de una consulta del tipo `GET`. Cada una de las facturas tiene la opción de editar su tasa asociada. Para ello debe presionar el botón de editar correspondiente y se le redireccionará a la vista para editar.

En la vista de edición de tasa, se le solicitará ingresar un nuevo valor para la tasa que desea editar. Una vez ingresado el nuevo valor, presione el botón de editar, y esto gatillará dos acciones. Primero, se le redireccionará a la vista donde están todas las otras facturas y en particular, podrá apreciar que el valor de la tasa de la factura escogida ha cambiado por el nuevo valor. Consistentemente, este cambio también se ve reflejado en la hoja de cálculo.

Segundo, al presionar el botón de editar se gatilla una consulta del tipo `POST` a https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/ para enviar un correo al email correspondiente a la factura editada, informando el cambio de tasas.

## 6) Referencias:

- How To Add Login Authentication to React Applications. Recuperado de https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
- íconos. Recuperado de https://www.flaticon.com/
- React Google Sheet CRUD app. Recuperado de https://www.youtube.com/channel/UCxBXSL74oOJ_0yqC4bHc18Q
