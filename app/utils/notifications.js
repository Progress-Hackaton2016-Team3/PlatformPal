"use strict";
var dialogsModule = require("ui/dialogs");
var Notifications;
(function (Notifications) {
    function showError(error) {
        return dialogsModule.alert({ title: "Oops", message: error, okButtonText: "Close" });
    }
    Notifications.showError = showError;
    function showInfo(message) {
        return dialogsModule.alert({ title: "Info", message: message, okButtonText: "OK" });
    }
    Notifications.showInfo = showInfo;
    function confirm(title, message) {
        return dialogsModule.confirm({
            title: title,
            message: message,
            okButtonText: "YES",
            cancelButtonText: "NO"
        });
    }
    Notifications.confirm = confirm;
})(Notifications = exports.Notifications || (exports.Notifications = {}));
//# sourceMappingURL=notifications.js.map