import viewModelBaseModule = require("../common/view-model-base");

import serviceModule = require("../../utils/service");
import navigationModule = require("../../utils/navigation");
import viewsModule = require("../../utils/views");

export class MainViewModel extends viewModelBaseModule.ViewModelBase {
    private _user: any;
   
	constructor() {
        super();

        var tasksView = {
            Id: 1,
            Name: "Tasks",
            View: viewsModule.Views.tasks
        };

        var projectsView = {
            Id: 2,
            Name: "Projects",
            View: viewsModule.Views.projects
        };
    }

    get user(): any {
        return this._user;
    }

    set user(value: any) {
        if (this._user !== value) {
            this._user = value;
            this.notifyPropertyChange("user", value);
        }
    }

    logout() {
        serviceModule.service.logout();
        navigationModule.navigate({
            moduleName: viewsModule.Views.login,
            backstackVisible: false,
            clearHistory: true
        });
    }
}
