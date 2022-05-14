import path from "path";
import express, { Express } from "express";
import dotenv from "dotenv";
import expressEjsLayouts from "express-ejs-layouts";
import routesIndex from "./routes/index";
import { ExceptionHandler } from "./exceptions/exception.handler";

const bootstrap = () => {
  dotenv.config();
  const app: Express = express();

  // Set templates config
  app.set("view engine", "ejs");
  app.use(expressEjsLayouts);
  app.set('views', path.join(__dirname, '../../public'));
  app.use(express.static(path.join(__dirname, '../../public')));

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
