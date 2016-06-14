import application = require("application");

try {
    let notificationsService = require("./services/notifications/local-notifications");
	let pushNotificationsService = require("./services/notifications/push-notifications");
    
    application.on(application.launchEvent, function (args) {
        pushNotificationsService.PushNotificationsService.register(function (message, title) {
            notificationsService.NotificationsService.raiseNotification(message, title);
        });
	});
} catch(e) {}

application.cssFile = "./app.css"
application.start({ moduleName: "main-page" });