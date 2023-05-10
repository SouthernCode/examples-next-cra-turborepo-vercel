// 'use client';
import { Header } from "../../../components/Header";
import { IBlogPost } from "../../../types/IBlogPost.interface";
import Link from "next/link";

async function getData(slug: string): Promise<IBlogPost | null> {
    const MAIN_APP_BASE_URL = process.env.MAIN_APP_BASE_URL || 'http://localhost:3000';

    const res = await fetch(`${MAIN_APP_BASE_URL}/api/blog/${slug}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

    return (
        <div>
            <Header />
            <Link href="/blog">Back to blog</Link>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    )
}
