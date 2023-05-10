import { Header } from "../../components/Header";
import { IBlogPost } from "../../types/IBlogPost.interface";
import Link from 'next/link';


async function getData(): Promise<Array<IBlogPost> | null> {
    const MAIN_APP_BASE_URL = process.env.MAIN_APP_BASE_URL || 'http://localhost:3000';

    const res = await fetch(`${MAIN_APP_BASE_URL}/api/blog`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Blog() {
    const data = await getData();

    return (
        <div>
            <Header />
            <h1>Blog served by Next.js App!</h1>
            {data?.map((post) => {
                return (
                    <div key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </div>
                );
            })
            }
        </div>
    )
}
