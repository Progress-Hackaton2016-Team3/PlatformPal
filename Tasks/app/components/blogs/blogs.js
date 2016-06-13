var blogs_view_model_1 = require("./blogs-view-model");
var viewModel = new blogs_view_model_1.BlogViewModel();
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}
exports.navigatingTo = navigatingTo;
function itemTap(args) {
    var currentBlog = args.object.bindingContext.blogs[args.index];
    console.log(currentBlog.link);
}
exports.itemTap = itemTap;
