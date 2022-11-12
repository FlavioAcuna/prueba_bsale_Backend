import { getConnection } from "./../database/database";

const getProductos = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * from product");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const filterProductos = async (req, res) => {
  try {
    const connection = await getConnection();
    const { name } = req.params;
    const result = await connection.query(
        "SELECT product.name,product.url_image,product.price FROM product WHERE name LIKE ?" , '%' + [name] + '%'
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
export const methods = {
  getProductos,filterProductos
};
