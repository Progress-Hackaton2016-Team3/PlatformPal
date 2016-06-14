import {StatusCodes} from "../../utils/status-codes";
import * as http from "http";

export class PlatformNotificationsViewModel {
    // private _items: [];

    public get items() {
        var unreadNotifications = require("./unread.json").unreadNotifications;
        var readNotifications = require("./read.json");
        
        unreadNotifications.forEach(item => item["unread"] = true);
        
        return unreadNotifications.concat(readNotifications);

        // if (!this._items) {
        //     // http.request({
        //     //     url: "https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q=http://feeds.telerik.com/blogs",
        //     //     method: "GET",
        //     //     headers: { "Accept": "application/json" },
        //     //     timeout: 2000 /* miliseconds */
        //     // })
        //     // .then((response: http.HttpResponse) => {
        //     //     if (StatusCodes.isOK(response.statusCode)) {
        //     //         let jsonResponse: BlogPostsResponse = response.content.toJSON();
        //     //         this.blogs = jsonResponse.responseData.feed.entries;
        //     //         return jsonResponse;
        //     //     } else {
        //     //         let errorMessage = response.content.toString();
        //     //     	throw new Error(errorMessage);
        //     //     }
        //     // }, (error: any) => {
        //     //     throw new Error(error);
        //     // });
        // } else {
        //     return this._items;
        // }
    }
}