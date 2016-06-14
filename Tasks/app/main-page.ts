import observable = require("data/observable");
import pages = require("ui/page");
import frames = require("ui/frame");
import platform = require("platform");
import listView = require("ui/list-view");

import { StatusViewModel } from "./views/status/status-view-model";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    page.bindingContext = new StatusViewModel();
}
    
export var selectedStatusItem: any;

export function statusItemTap(args: listView.ItemEventData) {
    selectedStatusItem = args.view.bindingContext; 
    frames.topmost().navigate("./views/status/status-details-page");
}
    
export var selectedIncidentItem: any;
export function incidentsItemTap(args: listView.ItemEventData) {    
    selectedIncidentItem = args.view.bindingContext; 
    frames.topmost().navigate("./views/status/status-details-page");
}



