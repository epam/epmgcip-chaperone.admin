export class Logger {
  static logError(message: unknown, ...optionalParams: unknown[]): void {
    if (Logger.shouldLogMessage()) {
      console.error(message, ...optionalParams);
    }
  }

  private static shouldLogMessage(): boolean {
    return process.env.NODE_ENV !== 'test';
  }
}
