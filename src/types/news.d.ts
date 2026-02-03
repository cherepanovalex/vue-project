export interface newsApi {
  status: string;
  totalResults: number;
  articles: {
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string;
    source: {
      id: string | null;
      name: string;
    };
  }[];
}