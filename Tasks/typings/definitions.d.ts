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
}

interface OperationalStatus {
    name: string;
    status: string;
    id: string;
}

declare module "nativescript-local-notifications" {
    export function schedule(arg: any) => void;
    export function getScheduledIds() => void;
    export function cancel(id: number) => void;
    export function cancelAll() => void;
    export function requestPermission() => any;
    export function hasPermission() => any;
}

declare module "everlive" {
    export function schedule(arg: any) => void;
    export function getScheduledIds() => void;
    export function cancel(id: number) => void;
    export function cancelAll() => void;
    export function requestPermission() => any;
    export function hasPermission() => any;
}