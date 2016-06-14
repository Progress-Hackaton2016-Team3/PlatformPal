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