# Tarea de Selección | Product Engineer - Xepelin

### Autor: Joaquín Couyoumdjian | [@jacouyoumdjian](https://www.github.com/jacouyoumdjian)

## Descripción

A continuación se presenta el código de una aplicación web que contiene un login básico y una Google Sheet embebida a la que se le aplican las acciones que se mencionan más adelante.

## Estructura del repositorio

```
project
│__ 📂tests
|__ ⚙️.gitignore
│__ 📑README.md
│__ 💻classes.py
│__ 💻main.py
│__ 💻main_test.py

```

## Lenguaje de Programación, Bibliotecas o _Frameworks_ utilizados

Para la siguiente tarea se utilizaron los lenguajes HTML, CSS y JavaScript. Además, para construir la interfaz de usuario de la aplicación se utilizó la biblioteca de JavaScript, ReactJs. Por último, una sección de la tarea relacionada al login se realizó utilizando el _framework_ Node Express.

## Decisiones de Diseño

- Para el cumplimiento del objetivo de la tarea, se realizó la función `get_shortest_path` la cual recibe los parámetros `file_name, start_node, end_node, train_color` y se encuentra en el archivo `main.py`. En otras palabras, toda la lógica de calcular la ruta más corta se encuentra dentro de esta función.

- Se utilizó una Programación Orientada a Objetos (Clases) para modelar las estaciones y la simulación de la ruta más corta.

- Para el almacenamiento de los datos, se utilizaron diccionarios para que el acceso a la información sea más eficiente. En esta línea, la complejidad global del algoritmo es O(n^2).

- En el caso de que exista más de una ruta con la menor cantidad de estaciones (es decir, más de una respuesta correcta), se realizará una selección por abecedario según el nombre de las estaciones. Por ejemplo, si es que se tienen las rutas:

```
A -> C -> E -> I -> B
A -> C -> F -> J -> B
```

El programa escogerá la ruta `A -> C -> E -> I -> B` debido a que la "E" se encuentra antes que la "F" en el abecedario.

## Ejecución del programa

Para ejecutar el programa se debe introducir el siguiente comando por consola:

`py main.py <ruta\archivo_input.txt>`

Tal como se ilustra, es necesario introducir como parámetro la ruta del archivo que representa una red de metro. Por ejemplo, puede correr el comando: `py main.py tests\input.txt`.

Luego, en la ejecución misma, se solicitará introducir por consola los siguiente parámetros:

- Una estación inicial de las que se muestra en consola (Ej: A, B, ...).
- Una estación final de las que se muestra en consola (Ej: A, B, ...).
- (Opcional) Un color de tren Rojo o Verde ingresando 0 o 1 respectivamente. Sino no se escoge un color, solamente presione "Enter".

Cabe destacar que ejecutando el programa con la ruta `tests\input.txt` se puede testear un _happy path_ correspondiente a la red de metro presentada en el enunciado de la tarea.

## Formato del archivo de entrada (_input_)

A continuación, se presente el formato del archivo que recibe el programa como _input_. Este es un archivo de texto (.txt) que representa una red de metro y todas las líneas del archivo tienen el siguiente formato:

`NODO,COLOR_DEL_NODO;VECINO_1,VECINO_2,...,VECINO_N`

A modo de ejemplo, un posible archivo `ejemplo_input.txt` sería:

```
A,SinColor;B
B,Verde;A,C
C,Rojo;B
```

## Salida (_output_)

El _output_ del programa se visualiza por consola y corresponde a la menor ruta según los parámetros indicados anteriormente. Este representa todas las estaciones que componen la ruta. Un ejemplo posible _output_ sería:

```
A -> B -> C -> H -> F
```

## Manejo de Errores

Los principales errores manejados en el código son los casos en que:

- Se ingresan valores para la estación inicial, final o para el color de tren, que generan una ruta que no es alcanzable. Por ejemplo, si es que se quiere llegar desde una estación inicial sin color a una estación final color verde, con un tren de color rojo. También, se maneja el caso de que se ingrese como parámetro una estación (inicial o final) que no pertenezca a la red de metro mostrada en consola. Para estos casos se imprime en pantalla: `Los valores ingresados generan una ruta no alcanzable`.

- Se ingresa un valor para el color para el tren que no corresponde ni a "sin color", "rojo" o "verde". Para este caso se imprime en pantalla: `Se ingresó un valor para el color del tren incorrecto, por favor inténtelo de nuevo`.

## Ejecución de _tests_ automáticos

En el programa se implementan _tests_ automáticos para evaluar la correctitud de las partes más importantes (casos bordes) del algoritmo en distintas redes de metro.

### Casos bordes

- Ruta que no es alcanzable debido a que los colores de la estación inicial, final o del tren, no permiten que este último la recorra.
- Caso en que existan dos o más rutas con la menor cantidad de estaciones según los parámetros iniciales. Se entrega solamente una ruta según lo expuesto en las decisiones de diseño.
- Caso en que la red de metro se componga de 1 o 2 estaciones.

Para correr los _tests_ automáticos se debe ejecutar el siguiente comando:

`py main_test.py`

Los _tests_ se construyeron con la lógica de calcular la ruta más corta entre dos estaciones fijas para distintas redes de metros, probando con cada uno de los posibles colores de tren (sin color, rojo o verde). Las rutas obtenidas se comparan con las respuestas presentes en el archivo `output.txt` indicando por consola el resultado del test (CORRECTO o INCORRECTO).

Para efecto de los _tests_, las dos estaciones fijas serán la `A` y la `B`, las cuáles siempre se encontrarán a distancias distintas una de la otra dada la configuración única de cada red de metro de prueba.

Tanto el archivo `output.txt` como los archivos de prueba que representan las redes de metro, se encuentran en la carpeta `tests`. Cada línea del archivo `output.txt` contiene las respuestas correctas para cada red de metro con el siguiente formato:

```
RUTA_CORRECTA_TREN_SIN_COLOR;RUTA_CORRECTA_TREN_ROJO;RUTA_CORRECTA_TREN_VERDE
```

Cabe destacar que los archivos de prueba corresponden a archivos de texto que tienen el formato mencionado en el apartado _input_.

## Supuestos de Modelación

- En términos de la simulación de las estaciones, no habrán dos estaciones del mismo color seguidas. Sin embargo, si pueden haber estaciones sin color seguidas.

## REFERNCIAS:

- How To Add Login Authentication to React Applications. Recuperado de https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
- https://www.flaticon.com/
- React Google Sheet CRUD app. Recuperado de https://www.youtube.com/channel/UCxBXSL74oOJ_0yqC4bHc18Q
