var observableArray = require("data/observable-array");
var ViewModelItem = (function () {
    function ViewModelItem(name, status) {
        this.name = name;
        this.status = status;
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
            this._items.push(new ViewModelItem(data[i].name, data[i].status));
        }
    }
    Object.defineProperty(StatusViewModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    return StatusViewModel;
})();
exports.StatusViewModel = StatusViewModel;
