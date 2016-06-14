"use strict";
var application = require("application");
var local_notifications_1 = require("./services/notifications/local-notifications");
var push_notifications_1 = require("./services/notifications/push-notifications");
application.on(application.launchEvent, function (args) {
    push_notifications_1.PushNotificationsService.register(function (message, title) {
        local_notifications_1.NotificationsService.raiseNotification(message, title);
    });
});
application.cssFile = "./app.css";
application.start({ moduleName: "main-page" });
//# sourceMappingURL=app.js.map