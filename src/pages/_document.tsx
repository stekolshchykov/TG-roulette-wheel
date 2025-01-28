import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    render() {

        return (
            <Html>
                <Head>
                    <script src="https://telegram.org/js/telegram-web-app.js"></script>

                    {/*<link rel="icon" href="/favicon.png"/>*/}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
