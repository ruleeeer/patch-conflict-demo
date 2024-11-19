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
// msg -patch
export class DbError extends Error {
  constructor(msg-patch) {
    super(message);
    this.name = 'Database Error';
  }
}

