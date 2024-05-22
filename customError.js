class NerdError extends Error {
    constructor(message) {
        super(message);
        this.name = "NerdError";
    }
}
