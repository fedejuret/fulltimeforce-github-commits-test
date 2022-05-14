import { NextFunction, Request, Response } from "express";
import { ErrorException } from "./error.exception";

export class ExceptionHandler {
  public handle(error: Error, req: Request, res: Response, next: NextFunction) {
    let status = 500;
    const message = error.message || "Internal Server Error";

    if (error instanceof ErrorException) {
      status = error.status;
    }

    return res.status(status).send({
      status,
      message,
    });
  }
}
