import observable = require("data/observable");
import observableArray = require("data/observable-array");
import {
    Notifications
} from "../../utils/notifications";
import * as http from "http";

export class ViewModelItem {
    constructor(public title: string, public info: string) {}
}

export class IncidentsViewModel {
    private _items: observableArray.ObservableArray < ViewModelItem > ;

    constructor() {
        this._items = new observableArray.ObservableArray < ViewModelItem > ();
        http.request({
                url: "https://api.statuspage.io/v1/pages/2lh8n3fl4jfr/incidents.json",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "OAuth 82135836-4bf5-47bb-ae76-6d9037187951"
                },
                timeout: 5000 /* miliseconds */
            })
            .then((response: http.HttpResponse) => {
                if ( response.statusCode == 200) {
                    let data = response.content.toJSON();
                    console.log(response);
                    for (var i = 0; i < data.length; i++) {
                        this._items.push(new ViewModelItem(data[i].name, data[i].incident_updates[0].body));
                    }
                } else {
                    Notifications.showError(response.content.toString());
                }
            }, (error: any) => {
                Notifications.showError(error.message);
                //this.endLoading();
            });
    }

    public get items(): observableArray.ObservableArray < ViewModelItem > {
        return this._items;
    }

    refresh() {}
}