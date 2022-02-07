import Document, { Html, Main, Head, NextScript, DocumentContext, DocumentInitialProps } from "next/document"

export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(): JSX.Element {
        return (
            <Html lang="ru">
                <Head></Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}