import BaseError from "./BaseError"

export default class PropertyError extends BaseError {
    constructor(message?: string) {
        super(message)
        this.name = 'ParamError'
    }
}