import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints, mode } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  components: {
    Text: {
      variants: {
        gradient: () => ({
          background: 'linear-gradient( 90.69deg ,#88ffea 13.42%,#ff4ecd 42.37%,#1a75ff 103.09%);',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }),
      },
    },
    Heading: {
      variants: {
        gradient: () => ({
          background: 'linear-gradient( 90.69deg ,#88ffea 13.42%,#ff4ecd 42.37%,#1a75ff 103.09%);',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }),
      },
    },
    Button: {
      variants: {
        moon: ({ colorMode }) => ({
          rounded: 'xl',
          size: 'lg',
          bg: colorMode === 'light' ? 'black' : 'white',
          color: colorMode === 'light' ? 'white' : 'black',
        }),
        moonInvert: ({ colorMode }) => ({
          rounded: 'xl',
          size: 'lg',
          borderWidth: '1px',
          borderColor: colorMode === 'light' ? 'black' : 'white',
          bg: colorMode === 'light' ? 'white' : 'black',
          color: colorMode === 'light' ? 'black' : 'white',
        }),
      },
    },
  },
  styles: {
    global: (props) => ({
      '*::-webkit-scrollbar': {
        display: 'none',
      },
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        cursor: `url("data:image/svg+xml,%3Csvg shape-rendering='geometricPrecision' xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath fill='%23666' d='M9.63 6.9a1 1 0 011.27-1.27l11.25 3.75a1 1 0 010 1.9l-4.68 1.56a1 1 0 00-.63.63l-1.56 4.68a1 1 0 01-1.9 0L9.63 6.9z'/%3E%3Cpath stroke='%23fff' stroke-width='1.5' d='M11.13 4.92a1.75 1.75 0 00-2.2 2.21l3.74 11.26a1.75 1.75 0 003.32 0l1.56-4.68a.25.25 0 01.16-.16L22.4 12a1.75 1.75 0 000-3.32L11.13 4.92z'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' width='32.26' height='32.26' x='.08' y='.08' filterUnits='userSpaceOnUse'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='4'/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'/%3E%3CfeBlend in2='BackgroundImageFix' mode='normal' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' mode='normal' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E") 6 2, default;`,
        background: mode(
          'linear-gradient(90deg,white 21px,transparent 1%) 50%,linear-gradient(white 21px,transparent 1%) 50%,#444',
          'linear-gradient(90deg,#000 21px,transparent 1%) 50%,linear-gradient(#000 21px,transparent 1%) 50%,#444',
        )(props),
        backgroundSize: '22px 22px',
      },
    }),
  },
  colors: {
    lightWhite: '#fafafa',
    alert: '#ff007f',
    violet: '#7a29c9',
    secondary: '#666666',
    red: '#ee0202',
    highlightPink: '#ff0080',
    violetLight: '#8a63d2',
    successLight: '#3291ff',
  },
  fonts: {
    heading: 'Roboto mono',
    body: 'Open Sans',
  },
  breakpoints,
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  },
})

export default theme
