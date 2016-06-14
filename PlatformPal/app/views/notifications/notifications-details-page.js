"use strict";
var main_page_1 = require("../../main-page");
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = main_page_1.selectedNotificationItem;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=notifications-details-page.js.map