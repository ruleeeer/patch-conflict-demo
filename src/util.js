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
// msg -patch
export class DbError extends Error {
  constructor(msg-resolved) {
    super(message);
    this.name = 'Database Error';
  }
}

