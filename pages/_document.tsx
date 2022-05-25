import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";


export default class MyDocument extends Document {
   static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(context)
      return {
         ...initialProps
      }
   }
   render(): JSX.Element {
      return (
         <Html lang="en">
            <Head />
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}