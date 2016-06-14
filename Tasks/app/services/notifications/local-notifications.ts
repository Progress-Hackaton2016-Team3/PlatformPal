import LocalNotifications = require("nativescript-local-notifications");

export module NotificationsService {
    export function raiseNotification(message: string, title?: string) {
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
    }
    export function getNotifications() {
        LocalNotifications.getScheduledIds().then(
            function (ids) {
                console.log("ID's: " + ids);
            }
        );
    }
    export function cancelNotification(id) {
        LocalNotifications.cancel(id).then(
            function (foundAndCanceled) {
                if (foundAndCanceled) {
                    console.log("OK, it's gone!");
                } else {
                    console.log("No ID " + id + " was scheduled");
                }
            }
        );
    }
    export function cancelAllNotifications() {
        LocalNotifications.cancelAll();
    }
    export function requestPermissions() {
        LocalNotifications.requestPermission().then(
            function (granted) {
                console.log("Permission granted? " + granted);
            }
        );
    }
    export function hasPermissions() {
        LocalNotifications.hasPermission().then(
            function (granted) {
                console.log("Permission granted? " + granted);
            }
        );
    }
}