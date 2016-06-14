var frames = require("ui/frame");
var main_view_model_1 = require("./main-view-model");
var local_notifications_1 = require("./services/notifications/local-notifications");
var push_notifications_1 = require("./services/notifications/push-notifications");
push_notifications_1.PushNotificationsService.register(function (message, title) {
    local_notifications_1.NotificationsService.raiseNotification(message, title);
});
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new main_view_model_1.MainViewModel();
}
exports.pageLoaded = pageLoaded;
function statusItemTap(args) {
    exports.selectedStatusItem = args.view.bindingContext;
    frames.topmost().navigate("./views/status/status-details-page");
}
exports.statusItemTap = statusItemTap;
function incidentsItemTap(args) {
    exports.selectedIncidentItem = args.view.bindingContext;
    frames.topmost().navigate("./views/status/status-details-page");
}
exports.incidentsItemTap = incidentsItemTap;
