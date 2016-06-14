var frames = require("ui/frame");
var status_view_model_1 = require("./views/status/status-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new status_view_model_1.StatusViewModel();
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
