import express from "express";
import morgan from "morgan";
import cors from "cors"
//rutas
import Productos from "./routes/productos"
import Categorias from "./routes/categoria"


const app = express();
//Configuraciones

app.set("port", 4000);

//Middlewares 
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

app.get("/productos",Productos)
app.get("/categorias",Categorias)


app.get("*", (req, res) => {
    res.status(404).send("esta pagina no existe");
  });


export default app;