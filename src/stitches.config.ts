import { createStitches, PropertyValue } from '@stitches/react';
import { extend, merge } from 'lodash';
import { config, globalStyles, globalCss as libGlobalCss } from '@planda/design-system';
// { blackA, blue, blueDark, crimson, crimsonA, crimsonDark, crimsonDarkA, gray, grayDark, green, greenDark, mauve, mauveDark, pink, pinkDark, red, redDark, sage, sageDark, teal, tealDark, whiteA, yellow, yellowDark }
// to understand color scale: https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale

export const {
    styled,
    getCssText,
    createTheme,
    keyframes,
    globalCss
} = createStitches(merge({}, { ...config }, {
    theme: {
    }
}))

// #endregion

const GlobalStylesApply = globalCss(merge(globalStyles, {body: { backgroundColor: '#FDFDFC'}}))
//we can declare the styles here or in pages/_app.tsx
GlobalStylesApply();