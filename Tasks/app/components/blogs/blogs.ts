import {EventData} from "data/observable";
import {Page} from "ui/page";
import {BlogViewModel} from "./blogs-view-model";
import {Notifications} from "../../utils/notifications"; 
import {Views} from "../../utils/views"; 
import navigationModule = require("../../utils/navigation");

let viewModel = new BlogViewModel();
export function navigatingTo(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = viewModel
}

export function itemTap(args: any) {
    let currentBlog: Blog = args.object.bindingContext.blogs[args.index];
    console.log(currentBlog.link);
    // navigationModule.navigate({
    //     moduleName: "components/webview/webview",
    //     backstackVisible: false
    // });
}