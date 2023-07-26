import { compose } from 'ramda'
import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { setLayout } from './actions'
import { BREAKPOINTS, COLORS } from './constants'
import {
  Links,
  Hero,
  Particles
} from './containers'
import { layout as layoutUtil } from './utils'
import { withState } from './state'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "Berkeley Mono";
    font-style: normal;
    font-weight: 300;
    font-display: block;
    src: url(/fonts/BerkeleyMono-Regular.woff2) format("woff2"), url(/fonts/BerkeleyMono-Regular.woff) format("woff");
  }

  html {
    background: ${COLORS.DARK_BLUE};
    font-size: 13px;
    @media (min-width: ${BREAKPOINTS.SMALL}) {
      font-size: 14px;
    }
    @media (min-width: ${BREAKPOINTS.MEDIUM}) {
      font-size: 15px;
    }
    @media (min-width: ${BREAKPOINTS.LARGE}) {
      font-size: 16px;
    }
  }
`

const Layout = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: ${({ height }) => height}px;
  justify-content: center;
  max-height: 100vh;
  overflow: hidden;
  padding: 15px;
  position: relative;
  width: 100vw;
`

export default () => {
  const [{ layout }, dispatch] = withState()

  useEffect(() => window.addEventListener('resize', compose(
    dispatch,
    setLayout,
    layoutUtil.calc
  )), [])

  return (
    <>
      <GlobalStyle />
      <Layout height={layout.height}>
        <Hero />
        <Links />
        <Particles />
      </Layout>
    </>
  )
}
