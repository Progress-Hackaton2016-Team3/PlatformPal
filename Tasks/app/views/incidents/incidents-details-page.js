var mainPage = require("../../main-page");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = mainPage.selectedIncidentItem;
}
exports.pageLoaded = pageLoaded;
