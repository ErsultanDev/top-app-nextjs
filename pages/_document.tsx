import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import Document from "next/document";

class MyDocument extends Document {
  static async getInititalProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const intitalProps = await Document.getInitialProps(ctx);
    return { ...intitalProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

export default MyDocument;
