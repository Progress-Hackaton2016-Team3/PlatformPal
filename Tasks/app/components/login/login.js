var application = require("application");
var appSettings = require("application-settings");
var loginViewModelModule = require("./login-view-model");
var navigationModule = require("../../utils/navigation");
var viewsModule = require("../../utils/views");
var viewModel;
function navigatingTo(args) {
    if (appSettings.getString("AUTH_TOKEN")) {
        navigationModule.navigate({
            moduleName: viewsModule.Views.main
        });
        return;
    }
    var page = args.object;
    viewModel = new loginViewModelModule.LoginViewModel();
    page.bindingContext = viewModel;
    var webView = page.getViewById('webView');
    webView.on('loadFinished', function (args) {
        if (args.url.indexOf("Mist/ClientLogin") > -1) {
            if (application.ios) {
                var result = webView.ios.stringByEvaluatingJavaScriptFromString("document.getElementsByTagName('head')[0].innerHTML");
                viewModel.processLogin(result);
            }
            else {
                viewModel.processLogin({});
            }
        }
    });
}
exports.navigatingTo = navigatingTo;
