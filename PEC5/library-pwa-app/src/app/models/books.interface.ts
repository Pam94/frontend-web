export interface Book {
    ID: string;
    title: string;
    author: string;
    content: string;
    content_short: string;
    publisher: string;
    publisher_date: string;
    pages: string;
    language: string;
    url_details: string;
    url_download: string;
    cover: string;
    thumbnail: string;
    num_comments: string;
    categories: Category[];
    tags: Tag[];
}

interface Tag {
    tag_id: number;
    name: string;
    nicename: string;
}

interface Category {
    category_id: number;
    name: string;
    nicename: string;
}