import application = require("application");

import {NotificationsService} from "./services/notifications/local-notifications";
import {PushNotificationsService} from "./services/notifications/push-notifications";

application.on(application.launchEvent, function (args) {
    PushNotificationsService.register(function (message, title) {
        NotificationsService.raiseNotification(message, title);
    });
});

application.cssFile = "./app.css"
application.start({ moduleName: "main-page" });