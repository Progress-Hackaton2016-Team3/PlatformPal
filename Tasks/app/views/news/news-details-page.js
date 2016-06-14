var main_page_1 = require("../../main-page");
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = main_page_1.selectedBlogItem;
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=news-details-page.js.map