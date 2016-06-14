var observableArray = require("data/observable-array");
var ViewModelItem = (function () {
    function ViewModelItem(title, info) {
        this.title = title;
        this.info = info;
    }
    return ViewModelItem;
})();
exports.ViewModelItem = ViewModelItem;
var StatusViewModel = (function () {
    function StatusViewModel() {
        var data = [
            { name: "Telerik Analytics Services", status: "Operational" },
            { name: "Telerik Platform Web Portal", status: "Operational" },
            { name: "Telerik Analytics Monitor Data Services", status: "Operational" },
            { name: "Telerik AppBuilder Services", status: "Operational" },
            { name: "Telerik AppFeedback Services", status: "Operational" },
            { name: "Telerik AppManager Services", status: "Operational" },
            { name: "Telerik AppPrototyper Services", status: "Operational" },
            { name: "Telerik Backend API Services", status: "Operational" },
            { name: "Telerik Backend Push Notifications Services", status: "Operational" },
            { name: "Telerik Backend Cloud Code Services", status: "Operational" },
            { name: "Telerik Mobile Testing Services", status: "Operational" },
            { name: "Telerik Web Site ", status: "Operational" }
        ];
        this._items = new observableArray.ObservableArray();
        for (var i = 0; i < data.length; i++) {
            this._items.push(new ViewModelItem(data[i].name, "This is the item with status - " + data[i].status));
        }
    }
    Object.defineProperty(StatusViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    StatusViewModel.prototype.refresh = function () {
    };
    return StatusViewModel;
})();
exports.StatusViewModel = StatusViewModel;
//# sourceMappingURL=status-view-model.js.map