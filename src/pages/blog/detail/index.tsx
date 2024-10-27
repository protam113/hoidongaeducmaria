import Banner from '@/assets/image/banner.png'
import Image from "next/image";

export default function DetailPage() {
    return (
        <section className="mx-auto py-4 sm:py-16 lg:py-10">
            <article>
                <header className="text-center">

                    <h1 className="leading-tighter mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
                        Hướng dẫn sử dụng Next.js
                    </h1>
                    <p className="mx-auto max-w-3xl px-4 sm:px-6">
                        <time dateTime="2024-10-25">October 25, 2024</time>
                        ~ 5 min read
                    </p>
                    <Image
                        src={Banner}
                        className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
                        sizes="(max-width: 900px) 400px, 900px"
                        alt="Một bài viết chi tiết về cách sử dụng Next.js trong dự án của bạn."
                        loading="eager"
                        priority
                        width={900}
                        height={480}
                    />
                </header>
                <div
                    className="prose-md container prose prose-lg mx-auto mt-8 max-w-3xl px-6 sm:px-6 lg:prose-xl"
                    dangerouslySetInnerHTML={{
                        __html: "<p>Nội dung bài viết về Next.js.</p>",
                    }}
                />
            </article>
        </section>
    );
}

