export class ServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ServerError';
  }
}

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Bad Request Error';
  }
}

// msg main
export class DbError extends Error {
  constructor(message-main) {
    super(message);
    this.name = 'Database Error';
  }
}

