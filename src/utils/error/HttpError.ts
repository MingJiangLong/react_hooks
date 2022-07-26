import BaseError from "./BaseError"

export default class HttpError extends BaseError {
    constructor(message?: string) {
        super(message)
        this.name = 'HttpError'
    }
}