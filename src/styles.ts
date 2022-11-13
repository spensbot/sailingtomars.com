import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { createGlobalStyle } from 'styled-components'

const theme = {
  bg: '#eee',
  text: '#111',
  accent: 'rgb(55,55,70)',
  accentText: 'rgb(240,240,240)',
}

const weight = 'lighter'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    font-size: 1rem;
  }
  h1 {
    font-size: 4rem;
    font-weight: ${weight};
    margin: 0.1rem;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: ${weight};
    margin: 0.1rem;
  }
  h3 {
    font-size: 3.0rem;
    font-weight: ${weight};
    margin: 0.1rem;
  }
  h4 {
    font-size: 2rem;
    font-weight: ${weight};
    margin: 0.1rem;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: ${weight};
    margin: 0.1rem;
  }
  h6 {
    font-size: 1.3rem;
    font-weight: ${weight};
    margin: 0.1rem;
  }
`

export { theme, GlobalStyle }
