import observableModule = require("data/observable");
import application = require("application");
import appSettings = require("application-settings");

import pageModule = require("ui/page");
import dialogs = require("ui/dialogs"); 

import loginViewModelModule = require("./login-view-model");
import navigationModule = require("../../utils/navigation");
import viewsModule = require("../../utils/views");

var viewModel : loginViewModelModule.LoginViewModel;
export function navigatingTo(args: observableModule.EventData) {
    
    if(appSettings.getString("AUTH_TOKEN")) {            
    	navigationModule.navigate({
        	moduleName: viewsModule.Views.main
        });
     	return;
    }
    
    var page = <pageModule.Page>args.object; 
    viewModel = new loginViewModelModule.LoginViewModel();
    page.bindingContext = viewModel;
    var webView = page.getViewById('webView');
    webView.on('loadFinished', (args: any) => {
        if(args.url.indexOf("Mist/ClientLogin") > -1){            
            if(application.ios){
            	let result = webView.ios.stringByEvaluatingJavaScriptFromString("document.getElementsByTagName('head')[0].innerHTML");
                viewModel.processLogin(result);
            }
            else
            {
                viewModel.processLogin({});
                // NOT WORKING AT THE MOMENT, PLEASE TRY AGAIN LATER
                // webView.android.addJavascriptInterface({
                //     onWebViewEvent: function(webViewId, eventName, jsonData){
                //        dialogs.alert(jsonData); 
                //        if(webViewId === 'androidWebViewInterface'){
                //        		processLogin(jsonData);
                //        }
                //     }
                // }, 'androidWebViewInterface');
                // webView.android.loadUrl("javascript:document.getElementsByTagName('head')[0].innerHTML");   
            }
        }
    });
}