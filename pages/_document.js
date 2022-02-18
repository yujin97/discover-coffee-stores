import Document, { Head, Html, Link, Main, NextScript} from 'next/document';

class MyDocument extends Document{
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link 
                        rel= 'reload'
                        href="/fonts/IBMPlexSans-Bold.ttf" 
                        as= 'font' 
                        crossOrigin="anonymous"
                    ></link>
                    <link 
                        rel= 'reload'
                        href="/fonts/IBMPlexSans-Regular.ttf" 
                        as= 'font' 
                        crossOrigin="anonymous"
                    ></link>
                    <link 
                        rel= 'reload'
                        href="/fonts/IBMPlexSans-SemiBold.ttf" 
                        as= 'font' 
                        crossOrigin="anonymous"
                    ></link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;