# Documentación Backend



## Comenzando 🚀
_Ejercio postulacion Bsale el cual consiste en la creacion de una tienda web que obtendra los datos de una api rest_

## Índice
* [Comenzando](#Comenzando-)
* [Objetivo](#Objetivo-)
* [Productos](#Productos) 
* [GET lista de productos](#get-lista-de-productos)
* [GET productos por nombre](#get-productos-por-nombre)
* [Categorias](#Categorias)
* [GET lista de categorias](#get-lista-de-categorias)
* [GET de una categoria](#get--de-una-categoria)
* [Despliegue 📦](#despliegue-)
* [Construido con 🛠️](#construido-con-%EF%B8%8F)
* [Autor ✒️](#autor-%EF%B8%8F)


### Objetivo 📋

_Entregar los datos para que se puedan consumir desde una aplicacion web(Frontend)_

### Productos 

## _GET lista de productos_
- ``` GET /productos``` retornara todos los productos<br>
_Esta peticion muestra todos los productos que se encuentran en la base de datos_<br>
_Respuesta_
```
{
"id": 5,
"name": "ENERGETICA MR BIG",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
"price": 1490,
"discount": 20,
"category": 1
},
{
"id": 6,
"name": "ENERGETICA RED BULL",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
"price": 1490,
"discount": 0,
"category": 1
},
```
## _GET productos por nombre_
- ``` GET /productos/energetica``` retornara los productos que cumplan con el nombre indicado<br>
_Esta peticion muestra los productos que se encuentran en la base de datos y cumplen con el criterio en este caso se filtra por nombre_<br>
_Respuesta_
```
{
"name": "ENERGETICA MR BIG",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
"price": 1490
},
{
"name": "ENERGETICA RED BULL",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
"price": 1490
},
{
"name": "ENERGETICA SCORE",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
"price": 1290
},
{
"name": "ENERGETICA MONSTER RIPPER",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
"price": 1990
},
```

### Categorias

## _GET lista de categorias_
- ``` GET /categorias``` retornara todos las categorias<br>
_Esta peticion muestra todos las categorias que se encuentran en la base de datos_<br>
_Respuesta_
```
{
"id": 1,
"name": "bebida energetica"
},
{
"id": 2,
"name": "pisco"
},
{
"id": 3,
"name": "ron"
},
```
## _GET  de una categoria_
- ``` GET /categorias/1.json``` retornara una categoria especifica<br>
_Esta peticion filtra los productos que se encuentren en dicha categoria_<br>
_Respuesta_
```
{
"name": "ENERGETICA MR BIG",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
"price": 1490
},
{
"name": "ENERGETICA RED BULL",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
"price": 1490
},
{
"name": "ENERGETICA SCORE",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
"price": 1290
},
{
"name": "ENERGETICA MONSTER RIPPER",
"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg",
"price": 1990
},
```

## Despliegue 📦

_Para el despliegue de la api se debera incluir un archivo .env_
_en el cual deberan encontrarse los siguentes datos
```
HOST=""
DATABASE=""
USERNAME=""
PASSWORD=""
```

## Construido con 🛠️

* JavaScript - Lenguaje utilizado
* NodeJS - Entorno de tiempo de ejecución
* Express - Framework usado 
* Mysql- Base de datos otorgada

## Autor ✒️

* **Flavio Acuña** - [FlavioAcuna](https://github.com/FlavioAcuna)
