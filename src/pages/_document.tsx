import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config';
import { getCssText as dsGet, reset as dsReset, fixStitchesCssNumbers } from '@planda/design-system';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: fixStitchesCssNumbers(getCssText(), dsGet()) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
