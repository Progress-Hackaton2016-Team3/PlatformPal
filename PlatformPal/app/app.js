"use strict";
var application = require("application");
try {
    var notificationsService_1 = require("./services/notifications/local-notifications");
    var pushNotificationsService_1 = require("./services/notifications/push-notifications");
    application.on(application.launchEvent, function (args) {
        pushNotificationsService_1.PushNotificationsService.register(function (message, title) {
            notificationsService_1.NotificationsService.raiseNotification(message, title);
        });
    });
}
catch (e) { }
application.cssFile = "./app.css";
application.start({ moduleName: "main-page" });
//# sourceMappingURL=app.js.map