import {OpenGraph} from "../_data/social-media";
import {ThemeProvider} from "next-themes";
import {AppProps} from "next/app";
import {DefaultSeo} from "next-seo";

import '../styles/globals.css';

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <DefaultSeo {...OpenGraph} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
