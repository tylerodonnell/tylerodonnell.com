import React from 'react'
import styled from 'styled-components'

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  TIMINGS,
  ZINDEX
} from '../constants'
import { animations } from '../utils'

const Headline = styled.h1`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.MONOSPACE};
  font-size: ${FONT_SIZES.XLARGE};
  font-weight: ${FONT_WEIGHTS.LIGHT};
  line-height: 1.5;
  text-align: center;
`

const Title = styled.h2`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.MONOSPACE};
  font-size: ${FONT_SIZES.LARGE};
  font-weight: ${FONT_WEIGHTS.LIGHT};
  line-height: 1.5;
  text-align: center;
`

const Hero = styled.section`
  align-items: center;
  animation: ${animations.fadeInDown} ${TIMINGS.LONG} ease ${TIMINGS.SHORT} 1 forwards;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(-2%);
  z-index: ${ZINDEX.CONTENT};
`

export default () => (
  <Hero>
    <Headline>
      Tyler O&apos;Donnell
    </Headline>
    <Title>
      Information Security Leader
    </Title>
  </Hero>
)
