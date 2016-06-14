import {EventData} from "data/observable";
import {Page} from "ui/page";
import {selectedNotificationItem} from "../../main-page";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = selectedNotificationItem;
}