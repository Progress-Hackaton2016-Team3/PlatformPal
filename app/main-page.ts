import observable = require("data/observable");
import pages = require("ui/page");
import frames = require("ui/frame");
import platform = require("platform");
import application = require("application");
import listView = require("ui/list-view");

import { MainViewModel } from "./main-view-model";

if(application.ios){
    import {NotificationsService} from "./services/notifications/local-notifications";
    import {PushNotificationsService} from "./services/notifications/push-notifications";

    PushNotificationsService.register(function (message, title) {
        NotificationsService.raiseNotification(message, title);
    });
}
// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    page.bindingContext = new MainViewModel();
}

export let selectedStatusItem: any;
export function statusItemTap(args: listView.ItemEventData) {
    selectedStatusItem = args.view.bindingContext; 
    frames.topmost().navigate("./views/status/status-details-page");
}
    
export let selectedIncidentItem: any;
export function incidentsItemTap(args: listView.ItemEventData) {    
    selectedIncidentItem = args.view.bindingContext; 
    frames.topmost().navigate("./views/incidents/incidents-details-page");
}

export let selectedBlogItem: any;
export function blogItemTap(args: listView.ItemEventData) {    
    selectedBlogItem = args.view.bindingContext; 
    frames.topmost().navigate("./views/news/news-details-page");
}

export let selectedNotificationItem: any;
export function notificationItemTap(args: any) {    
    selectedNotificationItem = args.view.bindingContext;
    frames.topmost().navigate("./views/notifications/notifications-details-page");
}
