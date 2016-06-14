import { BlogViewModel } from "./views/news/news-view-model";
import { StatusViewModel } from "./views/status/status-view-model";
import { ViewModelItem } from "./views/status/status-view-model";
import { ObservableArray } from "data/observable-array";

export class MainViewModel {
    private _blogsViewModel: BlogViewModel;
    private _statusViewModel: StatusViewModel;

	constructor() {
        this._blogsViewModel = new BlogViewModel();
        this._statusViewModel = new StatusViewModel();
    }

	public get blogs(): Blog[] {
        return this._blogsViewModel.blogs;
    }

	public get items(): ObservableArray<ViewModelItem> {
        return this._statusViewModel.items;
    }
}
