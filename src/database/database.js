import mysql from "promise-mysql";
import config from "./../config";
import pool from "promise-mysql";

const connections = pool.createPool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  connectionLimit: 3,
  acquireTimeout: 4000,
});


const getConnection = () => {
  return connections;
};

module.exports = {
  getConnection,
};
