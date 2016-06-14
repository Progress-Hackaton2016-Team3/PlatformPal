var mainPage = require("../../main-page");
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = mainPage.selectedItem;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=status-details-page.js.map