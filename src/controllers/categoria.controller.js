//importación conexión
import { getConnection } from "./../database/database";

//consulta mostrar las categorias
const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * from category");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//consulta filtrar datos categorias
const filterCategorias = async (req, res) => {
  try {
    const connection = await getConnection();
    const {id} = req.params;
    const result = await connection.query("SELECT product.name,product.url_image,product.price FROM product INNER JOIN category on product.category = category.id WHERE category=?",[id]);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
//exportación de métodos

export const methods = {
  getCategorias,filterCategorias
};
