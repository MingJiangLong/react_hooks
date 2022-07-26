import PropertyError from "./PropertyError"

export default class PropertyMissError extends PropertyError {
    constructor(message?: string) {
        super(message)
        this.name = 'PropertyMissError'
    }
}