import observableModule = require("data/observable");
import appSettings = require("application-settings");

import viewModelBaseModule = require("../common/view-model-base");
import serviceModule = require("../../utils/service");
import navigationModule = require("../../utils/navigation");
import viewsModule = require("../../utils/views");

export class LoginViewModel extends viewModelBaseModule.ViewModelBase {
    private _url: string;

    constructor() {
        super();
        this._url = "https://platform.telerik.com/appbuilder/Mist/ClientLogin?client=Desktop&client_name=IceniumGraphite";
    }

    get url(): string {
        return this._url;
    }

    processLogin(data: any) {
        let regex = /notify\(\"(.*)\"\)/gm,
            match = regex.exec(data);
        if (match) {
            var token = JSON.stringify(JSON.parse(decodeURIComponent(match[1])));
            appSettings.setString("AUTH_TOKEN", token);
            navigationModule.navigate({
                moduleName: viewsModule.Views.main
            });
        }
    }
}