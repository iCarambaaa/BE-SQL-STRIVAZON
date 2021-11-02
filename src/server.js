import express from 'express';
import listEndpoints from "express-list-endpoints";
import router from "./services/routers.js";
import { genericErrorHandler, badRequestHandler, unauthorizedHandler, notFoundHandler } from "./errorHandlers.js"
import cors from "cors";
import createTables from "./db/createTables.js";

const server = express();

server.use(cors());
server.use(express.json())


// ************************ ENDPOINTS **********************
server.use("/products", router)


// *********************** ERROR MIDDLEWARES ***************************

server.use(badRequestHandler)
server.use(unauthorizedHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

const PORT = process.env.PORT;

console.table(listEndpoints(server))

server.listen(PORT, async () => {
    console.log("Server is running on port:", PORT);
    await createTables();
  })

server.on('error', (err) => console.log(err))