var notifications_1 = require("./../../utils/notifications");
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
            interactiveSettings: {
                actions: [{
                        identifier: 'READ_IDENTIFIER',
                        title: 'Read',
                        activationMode: "foreground",
                        destructive: false,
                        authenticationRequired: true
                    }, {
                        identifier: 'CANCEL_IDENTIFIER',
                        title: 'Cancel',
                        activationMode: "foreground",
                        destructive: true,
                        authenticationRequired: true
                    }],
                categories: [{
                        identifier: 'READ_CATEGORY',
                        actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
                        actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
                    }]
            },
            notificationCallbackIOS: function (message) {
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
            notifications_1.Notifications.showInfo(JSON.stringify(error));
        });
    }
    PushNotificationsService.register = register;
})(PushNotificationsService = exports.PushNotificationsService || (exports.PushNotificationsService = {}));
