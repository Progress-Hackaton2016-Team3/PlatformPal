var StatusCodes;
(function (StatusCodes) {
    function isOK(statusCode) {
        return ~~(statusCode / 100) === 2;
    }
    StatusCodes.isOK = isOK;
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
//# sourceMappingURL=status-codes.js.map