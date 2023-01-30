import { BaseError } from "../lib/error/base-error"

export class BadRequest extends BaseError {
  constructor(message: string) {
    super(message, 400)
  }
}

export class Unauthorized extends BaseError {
  constructor(message: string) {
    super(message, 401)
  }
}

export class Conflict extends BaseError {
  constructor(message: string) {
    super(message, 409)
  }
}

export class BadGateway extends BaseError {
  constructor(message: string) {
    super(message, 502)
  }
}

export class NotFound extends BaseError {
  constructor(message: string) {
    super(message, 404)
  }
}