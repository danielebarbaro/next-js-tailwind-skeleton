import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {NextSeo} from "next-seo";

export default function Home() {
    return (
        <main>
            <NextSeo
                title="A new NextJs App"
                description="This is the description meta."
            />

            <Navbar/>

            <div className="max-w-6xl mx-auto p-6 ">
                <h1 className="font-bold text-center text-3xl p-8">
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <div className="space-y-4">
                    <div className="p-6 bg-gray-200 dark:bg-gray-800 shadow rounded-lg">
                        <h2 className="text-xl font-semibold border-red-800 border-b-2">Documentation &rarr;</h2>
                        <a target="_blank"
                           rel="noopener noreferrer"
                           href="https://nextjs.org/docs">Find in-depth information about Next.js features and API.</a>
                    </div>

                    <div className="p-6 bg-gray-50 dark:bg-gray-600 shadow rounded-lg">
                        <h2 className="text-xl font-semibold border-red-800 border-b-2">Learn &rarr;</h2>
                        <a target="_blank"
                           rel="noopener noreferrer"
                           href="https://nextjs.org/learn">Learn about Next.js in an interactive course with quizzes!</a>
                    </div>

                    <div className="p-6 bg-gray-200 dark:bg-gray-800 shadow rounded-lg">
                        <h2 className="text-xl font-semibold border-red-800 border-b-2">Examples &rarr;</h2>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/vercel/next.js/tree/canary/examples"
                        >Discover and deploy boilerplate example Next.js projects.</a>
                    </div>

                    <div className="p-6  bg-gray-50 dark:bg-gray-600 shadow rounded-lg">
                        <h2 className="text-xl font-semibold border-red-800 border-b-2">Deploy &rarr;</h2>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        >Instantly deploy your Next.js site to a public URL with Vercel.</a>
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    )
}
