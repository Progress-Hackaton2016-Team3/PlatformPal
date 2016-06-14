interface BlogPostsResponse {
    responseData: BlogPostsResponseData;
    responseDetails: any;
    responseStatus: number;
}

interface BlogPostsResponseData {
    feed: BlogFeed;
}

interface BlogFeed {
    entries: Blog[];
    feedUrl: string;
}

interface Blog {
    author: string;
    categories: string[];
    content: string;
    contentSnippet: string;
    link: string;
    publishedDate: string;
    title: string;
    img: string;
}

interface OperationalStatus {
    name: string;
    status: string;
    id: string;
}

declare module "nativescript-local-notifications" {
    export function schedule(arg: any): Promise<any>;
    export function getScheduledIds(): Promise<any>;
    export function cancel(id: number): Promise<any>;
    export function cancelAll(): Promise<any>;
    export function requestPermission(): Promise<any>;
    export function hasPermission(): Promise<any>;
}
