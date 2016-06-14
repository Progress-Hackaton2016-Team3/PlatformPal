let Everlive = require('./everlive');
let everlive = new Everlive({
    appId: 'r70pgro2ncmch5w4',
    scheme: 'https'
});

module.exports = {
    register: (callback: (message: string, title: string) => void) => {
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
                callback && callback(message);
            },
            android: {
                projectNumber: '342072530071'
            },
            notificationCallbackAndroid: function (message, pushNotificationObject) {
                var notification = JSON.parse(pushNotificationObject);

                console.log("Received notification: title=" + notification.title + ", message=" + notification.message);
                callback && callback(notification.title, notification.message);
            }
        };

        everlive.push.register(pushSettings,
            function () {
                console.log("Push notifications: device registration success!")
            },
            function (error) {
                alert(JSON.stringify(error));
            });
    }
};