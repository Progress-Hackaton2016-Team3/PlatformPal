var StatusCodes;
(function (StatusCodes) {
    function isUnauthorizedError(statusCode) {
        return statusCode === 401;
    }
    StatusCodes.isUnauthorizedError = isUnauthorizedError;
    function isUserError(statusCode) {
        return ~~(statusCode / 100) === 4;
    }
    StatusCodes.isUserError = isUserError;
    function isOK(statusCode) {
        return ~~(statusCode / 100) === 2;
    }
    StatusCodes.isOK = isOK;
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
