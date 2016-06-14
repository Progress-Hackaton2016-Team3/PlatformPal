import observable = require("data/observable");
import observableArray = require("data/observable-array");

export class ViewModelItem {
    constructor(public title: string, public info: string) {
    }
}

export class StatusViewModel {
    private _items: observableArray.ObservableArray<ViewModelItem>;
    
    constructor() {
        let data = [
            { name: "Telerik Analytics Services", status:"Operational"},            
            { name: "Telerik Platform Web Portal", status:"Operational"},            
            { name: "Telerik Analytics Monitor Data Services", status:"Operational"},            
            { name: "Telerik AppBuilder Services", status:"Operational"},            
            { name: "Telerik AppFeedback Services", status:"Operational"},            
            { name: "Telerik AppManager Services", status:"Operational"},            
            { name: "Telerik AppPrototyper Services", status:"Operational"},            
            { name: "Telerik Backend API Services", status:"Operational"},            
            { name: "Telerik Backend Push Notifications Services", status:"Operational"},            
            { name: "Telerik Backend Cloud Code Services", status:"Operational"},            
            { name: "Telerik Mobile Testing Services", status:"Operational"},            
            { name: "Telerik Web Site ", status:"Operational"}
        ]
        this._items = new observableArray.ObservableArray<ViewModelItem>();
        for (var i = 0; i < data.length; i++) {
            this._items.push(new ViewModelItem(data[i].name, "This is the item with status - " + data[i].status));
        }
    }

    public get items(): observableArray.ObservableArray<ViewModelItem> {
        return this._items;
    }

    refresh() {
    }
}