var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var appSettings = require("application-settings");
var viewModelBaseModule = require("../common/view-model-base");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var LoginViewModel = (function (_super) {
    __extends(LoginViewModel, _super);
    function LoginViewModel() {
        _super.call(this);
        this._url = "https://platform.telerik.com/appbuilder/Mist/ClientLogin?client=Desktop&client_name=IceniumGraphite";
    }
    Object.defineProperty(LoginViewModel.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    LoginViewModel.prototype.processLogin = function (data) {
        var regex = /notify\(\"(.*)\"\)/gm, match = regex.exec(data);
        if (match) {
            var token = JSON.stringify(JSON.parse(decodeURIComponent(match[1])));
            appSettings.setString("AUTH_TOKEN", token);
            navigationModule.navigate({
                moduleName: viewsModule.Views.main
            });
        }
    };
    return LoginViewModel;
})(viewModelBaseModule.ViewModelBase);
exports.LoginViewModel = LoginViewModel;
