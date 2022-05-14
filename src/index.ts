import express, { Express } from "express";
import dotenv from "dotenv";
import routesIndex from "./routes/index";

const bootstrap = () => {
  dotenv.config();
  const app: Express = express();

  app.use(routesIndex);

  app.listen(process.env.PORT, () => {
    console.log(
      `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
    );
  });
};

bootstrap();
