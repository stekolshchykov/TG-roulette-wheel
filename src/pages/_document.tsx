import Document, {Head, Html, Main, NextScript} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {

    render() {

        return (
            <Html>
                <Head>
                    {/*<link rel="icon" href="/favicon.png"/>*/}
                    <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
