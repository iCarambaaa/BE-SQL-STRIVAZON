import pg from "pg";
//ref : https://node-postgres.com/features/pooling


const pool = new pg.Pool();

export default pool;