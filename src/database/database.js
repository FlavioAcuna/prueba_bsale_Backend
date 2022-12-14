//importaciones
import mysql from "promise-mysql";
import config from "./../config.js";
import pool from "promise-mysql";
//pool conexión 
const connections = pool.createPool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  connectionLimit: 3,
  acquireTimeout: 4000,
});


//exportar conexión
export function getConnection() {
  return connections;
};