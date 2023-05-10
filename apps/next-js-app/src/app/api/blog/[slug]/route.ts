import { blogPosts } from "../../../../data/BlogPosts.sample";

export async function GET( request: Request,
    {
      params,
    }: {
      params: { slug: string };
    },) {
    const slug = params.slug;
    const blogPost = blogPosts.find((post) => post.slug === slug);
    if (!blogPost) {
        return new Response(JSON.stringify({ error: 'Not found' }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 404,
        });
    }
    return new Response(JSON.stringify(blogPost), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}