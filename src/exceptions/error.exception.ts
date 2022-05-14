export class ErrorException extends Error {
  public status: number;

  constructor(message: string, status: number, error?: Error) {
    super(message);
    this.status = status;
  }
}
