var mainPage = require("../../main-page");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = mainPage.selectedStatusItem;
}
exports.pageLoaded = pageLoaded;
