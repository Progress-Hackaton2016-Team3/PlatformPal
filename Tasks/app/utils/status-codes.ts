export module StatusCodes {
    export function isOK(statusCode: number): boolean {
        return ~~(statusCode / 100) === 2;
    }
}