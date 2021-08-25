import React from 'react'
import styled from 'styled-components'

import {
  COLORS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  TIMINGS,
} from '../constants'

const Link = styled.a`
  color: ${COLORS.WHITE};
  font-family: ${FONT_FAMILIES.MONOSPACE};
  font-size: ${FONT_SIZES.LARGE};
  font-weight: ${FONT_WEIGHTS.LIGHT};
  margin: 2.5rem 1rem;
  line-height: 1;
  text-decoration: none;
  transition: color ${TIMINGS.SHORT} ease-in-out;

  &:hover {
    color: ${COLORS.BLUE}
  }
`

export default ({
  children,
  className,
  href,
  target,
}) => (
  <Link className={className} href={href} target={target}>
    {children}
  </Link>
)
