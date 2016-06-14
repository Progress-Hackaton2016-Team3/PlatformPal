"use strict";
var mainPage = require("../../main-page");
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = mainPage.selectedIncidentItem;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=incidents-details-page.js.map