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
         <Html lang="en" >
            <Head >
               <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
               <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            </Head>
            <body data-mode="light">
               <Main />
               <NextScript />
               <div id="modal-root"></div>
            </body>
         </Html>
      )
   }
}