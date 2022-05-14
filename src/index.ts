import express, { Express } from "express";
import dotenv from "dotenv";
import routesIndex from "./routes/index";
import { ExceptionHandler } from "./exceptions/exception.handler";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const bootstrap = () => {
  dotenv.config();
  const app: Express = express();

  app.set("view engine", "ejs");
  app.use(expressEjsLayouts);
  app.set('views', path.join(__dirname, '../public'));
  app.use(express.static(path.join(__dirname, '../public')));

  // Include routers
  app.use(routesIndex);

  // Exception handler
  app.use(new ExceptionHandler().handle);

  app.listen(process.env.PORT, () => {
    console.log(
      `⚡️[server]: Server is running at https://localhost:${process.env.PORT}`
    );
  });
};

bootstrap();
