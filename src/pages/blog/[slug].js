'use client';
import { usePathname } from 'next/navigation';
import { ArrowLeft, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { BLOGDETAIL_SECTION_DATA } from '@/lib/blogsDetails_constant';





export default function BlogPost({ params }) {
    const pathname = usePathname();
    const id = pathname?.split("/")?.pop()
    console.log('params', params, pathname);
    const post = BLOGDETAIL_SECTION_DATA?.blogArray?.find((val) => val?.id == id);

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-[1404px] mx-auto">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
                        <Link href="/blog">
                            <button variant="outline">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Blog
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pb-12">
            <main className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Back button */}
                <div className="py-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </div>

                {/* Article header */}
                <article className="bg-white rounded-lg pb-5">
                    {/* Featured image */}
                    <div className="mb-8">
                        <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={1340}
                            height={816}
                            className="w-full h-[300px] sm:h-[400px] md:h-[600px]  object-cover rounded-lg"
                        />
                    </div>
                    <div className="mb-6">
                        <h1 className="blog-detail text-[1.5rem] md:text-[2rem] font-['Erstoria',_sans-serif] text-[#25355b] uppercase mt-[30px] mb-[10px] md:mt-[20px] md:mb-[14px] lg:mt-[35px] lg:mb-[20px] font-bold">{post.title}</h1>

                        <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                            <div className="flex items-center space-x-2">
                                {/* <User className="w-4 h-4" /> */}
                                <p className='text-[1rem] md:text-[1.125rem]'>{post.description}</p>
                            </div>
                            {/* <span>{post.date}</span> */}
                        </div>
                    </div>



                    {/* Article content */}
                    <div className="prose prose-lg max-w-none">
                        {/* {post.content.split("\n\n").map((paragraph, index) => (
                            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                                {paragraph.trim()}
                            </p>
                        ))} */}
                    </div>
                </article>
            </main>
        </div>
    )
}
