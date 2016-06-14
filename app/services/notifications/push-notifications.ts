import {Notifications} from "./../../utils/notifications";
import application = require("application");

let Everlive = require('./everlive');
let everlive = new Everlive({
    appId: 'r70pgro2ncmch5w4',
    scheme: 'https'
});

export module PushNotificationsService {
    export function register(callback: (message: string, title ? : string) => void) {
        var pushSettings = {
            iOS: {
                badge: true,
                sound: true,
                alert: true
            },
            notificationCallbackIOS: function (message) {
                if (callback) callback(message);
            },
            android: {
                projectNumber: '342072530071'
            },
            notificationCallbackAndroid: function (message, pushNotificationObject) {
                var notification = JSON.parse(pushNotificationObject);

                console.log("Received notification: title=" + notification.title + ", message=" + notification.message);
                if (callback) callback(notification.message, notification.title);
            }
        };
		
        if(application.android) {
            everlive.push.register(pushSettings,
                function () {
                    console.log("Push notifications: device registration success!")
                },
                function (error) {
                    Notifications.showInfo(JSON.stringify(error));
                });
        }
    }
}