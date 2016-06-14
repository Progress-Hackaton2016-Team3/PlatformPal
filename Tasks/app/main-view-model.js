var news_view_model_1 = require("./views/news/news-view-model");
var status_view_model_1 = require("./views/status/status-view-model");
var MainViewModel = (function () {
    function MainViewModel() {
        this._blogsViewModel = new news_view_model_1.BlogViewModel();
        this._statusViewModel = new status_view_model_1.StatusViewModel();
    }
    Object.defineProperty(MainViewModel.prototype, "blogs", {
        get: function () {
            return this._blogsViewModel.blogs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "items", {
        get: function () {
            return this._statusViewModel.items;
        },
        enumerable: true,
        configurable: true
    });
    return MainViewModel;
})();
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map