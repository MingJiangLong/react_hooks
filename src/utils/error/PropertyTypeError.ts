import PropertyError from "./PropertyError"

export default class PropertyTypeError extends PropertyError {
    constructor(message?: string) {
        super(message)
        this.name = 'PropertyTypeError'
    }
}