var PlatformNotificationsViewModel = (function () {
    function PlatformNotificationsViewModel() {
    }
    Object.defineProperty(PlatformNotificationsViewModel.prototype, "items", {
        get: function () {
            var unreadNotifications = require("./unread.json").unreadNotifications;
            var readNotifications = require("./read.json");
            unreadNotifications.forEach(function (item) { return item["unread"] = true; });
            return unreadNotifications.concat(readNotifications);
        },
        enumerable: true,
        configurable: true
    });
    return PlatformNotificationsViewModel;
})();
exports.PlatformNotificationsViewModel = PlatformNotificationsViewModel;
