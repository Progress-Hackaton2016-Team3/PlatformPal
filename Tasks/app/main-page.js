var frames = require("ui/frame");
var main_view_model_1 = require("./main-view-model");
// Event handler for Page "loaded" event attached in main-page.xml
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
//# sourceMappingURL=main-page.js.map