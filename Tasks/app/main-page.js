var frames = require("ui/frame");
var status_view_model_2 = require("./views/status/status-view-model");
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new status_view_model_2.StatusViewModel();
}
exports.pageLoaded = pageLoaded;
function statusItemTap(args) {
    // Navigate to the details page with context set to the current data item
    frames.topmost().navigate("./views/status/status-details-page");
    exports.selectedItem = args.view.bindingContext;
    //vmModule.statusViewModel.set("selectedItem", args.view.bindingContext);
}
exports.statusItemTap = statusItemTap;
//# sourceMappingURL=main-page.js.map