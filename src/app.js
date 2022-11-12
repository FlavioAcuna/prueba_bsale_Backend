import express from "express";
import morgan from "morgan";
import cors from "cors"
//rutas
import productosRoutes from "./routes/productos.js"
import categoriasRoutes from "./routes/categoria.js"


const app = express();
//Configuraciones

app.set("port", 4000);

//Middlewares 
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

app.use(productosRoutes)
app.use(categoriasRoutes)


app.get("*", (req, res) => {
    res.status(404).send("esta pagina no existe");
  });


export default app;