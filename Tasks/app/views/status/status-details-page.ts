import observable = require("data/observable");
import pages = require("ui/page");
import frames = require("ui/frame");
import listView = require("ui/list-view");

import mainPage = require("../../main-page");

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    var page = <pages.Page>args.object;
    page.bindingContext = mainPage.selectedItem;
}