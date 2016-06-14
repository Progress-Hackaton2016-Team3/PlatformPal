var news_view_model_1 = require("./views/news/news-view-model");
var status_view_model_1 = require("./views/status/status-view-model");
var notifications_view_model_1 = require("./views/notifications/notifications-view-model");
var incidents_view_model_1 = require("./views/incidents/incidents-view-model");
var MainViewModel = (function () {
    function MainViewModel() {
        this._blogsViewModel = new news_view_model_1.BlogViewModel();
        this._statusViewModel = new status_view_model_1.StatusViewModel();
        this._incidentsViewModel = new incidents_view_model_1.IncidentsViewModel();
        this._platformNotificationsViewModel = new notifications_view_model_1.PlatformNotificationsViewModel();
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
    Object.defineProperty(MainViewModel.prototype, "incidentItems", {
        get: function () {
            return this._incidentsViewModel.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainViewModel.prototype, "notifications", {
        get: function () {
            return this._platformNotificationsViewModel.items;
        },
        enumerable: true,
        configurable: true
    });
    return MainViewModel;
})();
exports.MainViewModel = MainViewModel;
