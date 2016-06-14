"use strict";
var Everlive = require('./everlive');
var everlive = new Everlive({
    appId: 'r70pgro2ncmch5w4',
    scheme: 'https'
});
var PushNotificationsService;
(function (PushNotificationsService) {
    function register(callback) {
        var pushSettings = {
            iOS: {
                badge: true,
                sound: true,
                alert: true
            },
            notificationCallbackIOS: function (message) {
                console.log(message);
                if (callback)
                    callback(message);
            },
            android: {
                projectNumber: '342072530071'
            },
            notificationCallbackAndroid: function (message, pushNotificationObject) {
                var notification = JSON.parse(pushNotificationObject);
                console.log("Received notification: title=" + notification.title + ", message=" + notification.message);
                if (callback)
                    callback(notification.message, notification.title);
            }
        };
        everlive.push.register(pushSettings, function () {
            console.log("Push notifications: device registration success!");
        }, function (error) {
            console.log(error);
            //Notifications.showInfo(JSON.stringify(error));
        });
    }
    PushNotificationsService.register = register;
})(PushNotificationsService = exports.PushNotificationsService || (exports.PushNotificationsService = {}));
//# sourceMappingURL=push-notifications.js.map