var LocalNotifications = require("nativescript-local-notifications");
var NotificationsService;
(function (NotificationsService) {
    function raiseNotification(message, title) {
        LocalNotifications.schedule([{
                title: title || 'PlatformPal',
                body: message || 'No notification body',
                ticker: message
            }]).then(function () {
            console.log("Notification scheduled");
        }, function (error) {
            console.log("Notification scheduling error: " + error);
        });
    }
    NotificationsService.raiseNotification = raiseNotification;
    function getNotifications() {
        LocalNotifications.getScheduledIds().then(function (ids) {
            console.log("ID's: " + ids);
        });
    }
    NotificationsService.getNotifications = getNotifications;
    function cancelNotification(id) {
        LocalNotifications.cancel(id).then(function (foundAndCanceled) {
            if (foundAndCanceled) {
                console.log("OK, it's gone!");
            }
            else {
                console.log("No ID " + id + " was scheduled");
            }
        });
    }
    NotificationsService.cancelNotification = cancelNotification;
    function cancelAllNotifications() {
        LocalNotifications.cancelAll();
    }
    NotificationsService.cancelAllNotifications = cancelAllNotifications;
    function requestPermissions() {
        LocalNotifications.requestPermission().then(function (granted) {
            console.log("Permission granted? " + granted);
        });
    }
    NotificationsService.requestPermissions = requestPermissions;
    function hasPermissions() {
        LocalNotifications.hasPermission().then(function (granted) {
            console.log("Permission granted? " + granted);
        });
    }
    NotificationsService.hasPermissions = hasPermissions;
})(NotificationsService = exports.NotificationsService || (exports.NotificationsService = {}));
