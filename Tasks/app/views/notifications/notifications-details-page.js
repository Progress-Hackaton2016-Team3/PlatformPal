var main_page_1 = require("../../main-page");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = main_page_1.selectedNotificationItem;
}
exports.pageLoaded = pageLoaded;
