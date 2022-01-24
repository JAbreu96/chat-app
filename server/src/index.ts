import express from "express";
import masterRoutes from "./routes/routes.js";

const everyRoute: any = masterRoutes;
const app = express();
const port = 3030;

app.use('/', everyRoute);

app.listen(port, () => {
  console.log(`Server listening to Port ${port}`);
})
