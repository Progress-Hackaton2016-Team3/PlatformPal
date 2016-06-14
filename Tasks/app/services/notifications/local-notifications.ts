import LocalNotifications = require("nativescript-local-notifications");

module.exports = {
    raiseNotification: function (title, message) {
        LocalNotifications.schedule([{
            title: title || 'PlatformPal',
            body: message || 'No notification body',
            ticker: message
  		}]).then(
            function () {
                console.log("Notification scheduled");
            },
            function (error) {
                console.log("Notification scheduling error: " + error);
            }
        );
    },
    getNotifications: function () {
        LocalNotifications.getScheduledIds().then(
            function (ids) {
                console.log("ID's: " + ids);
            }
        );
    },
    cancelNotification: function (id) {
        LocalNotifications.cancel(id).then(
            function (foundAndCanceled) {
                if (foundAndCanceled) {
                    console.log("OK, it's gone!");
                } else {
                    console.log("No ID " + id + " was scheduled");
                }
            }
        );
    },
    cancelAllNotifications: function () {
        LocalNotifications.cancelAll();
    },
    requestPermissions: function () {
        LocalNotifications.requestPermission().then(
            function (granted) {
                console.log("Permission granted? " + granted);
            }
        );
    },
    hasPermissions: function () {
        LocalNotifications.hasPermission().then(
            function (granted) {
                console.log("Permission granted? " + granted);
            }
        );
    }
};