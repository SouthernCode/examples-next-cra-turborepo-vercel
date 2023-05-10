import { blogPosts } from "../../../data/BlogPosts.sample";

export async function GET(request: Request) {
    return new Response(JSON.stringify(blogPosts), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}