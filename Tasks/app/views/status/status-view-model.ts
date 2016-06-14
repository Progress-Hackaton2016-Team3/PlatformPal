import observable = require("data/observable");
import observableArray = require("data/observable-array");
import {StatusCodes} from "../../utils/status-codes";
import {Notifications} from "../../utils/notifications"; 
import * as http from "http"; 

export class ViewModelItem {
    constructor(public name: string, public status: string) {
    }
}

export class StatusViewModel {
    private _items: observableArray.ObservableArray<ViewModelItem>;
    //private _items: OperationalStatus[];
    
    constructor() {
        let data = [
            { name: "Telerik Analytics Services", status:"Operational"},            
            { name: "Telerik Platform Web Portal", status:"Operational"},            
            { name: "Telerik Analytics Monitor Data Services", status:"Operational"},            
            { name: "Telerik AppBuilder Services", status:"Operational"},            
            { name: "Telerik AppFeedback Services", status:"Fail"},            
            { name: "Telerik AppManager Services", status:"Fail"},            
            { name: "Telerik AppPrototyper Services", status:"Fail"},            
            { name: "Telerik Backend API Services", status:"Fail"},            
            { name: "Telerik Backend Push Notifications Services", status:"Operational"},            
            { name: "Telerik Backend Cloud Code Services", status:"Operational"},            
            { name: "Telerik Mobile Testing Services", status:"Operational"},            
            { name: "Telerik Web Site ", status:"Operational"}
        ]
        this._items = new observableArray.ObservableArray<ViewModelItem>();
        for (var i = 0; i < data.length; i++) {
            this._items.push(new ViewModelItem(data[i].name, data[i].status));
        }
    }

    public get items(): observableArray.ObservableArray<ViewModelItem> {
        return this._items;
    }

    /*public get items(): OperationalStatus[] {
		if (!this._items) {
			http.request({
				url: "http://2lh8n3fl4jfr.statuspage.io/api/v2/components.json",
				method: "GET",
				timeout: 2000 // miliseconds 
			}).then((response: http.HttpResponse) => {
				if (StatusCodes.isOK(response.statusCode)) {
					let jsonResponse: OperationalStatus[] = response.content.toJSON().components;
					this.items = jsonResponse;
					return jsonResponse;
				} else {
					let errorMessage = response.content.toString();
					Notifications.showError(errorMessage);
					throw new Error(errorMessage);
				}
			}, (error: any) => {
				Notifications.showError(error.message);
				throw new Error(error);
			});
		} else {
			return this._items;
		}
	}

	public set items(value: OperationalStatus[]) {
		this._items = value;
		//this.notifyPropertyChange("items", value);
	}*/
}