import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaGithub, FaKeybase, FaLinkedin } from "react-icons/fa";

import { Link } from '../components'
import {
  TIMINGS,
  ZINDEX,
} from '../constants'
import { animations } from '../utils'

const Links = styled.section`
  animation: ${animations.fadeInDown} ${TIMINGS.LONG} ease ${TIMINGS.SHORT} 1 forwards;
  display: flex;
  flex-direction: row;
  opacity: 0;
  z-index: ${ZINDEX.CONTENT};
`

export default () => (
  <Links>
    <Link href="mailto:tyler@tylerodonnell.com" target="_blank" rel="noopener noreferrer">
      <FaEnvelope />
    </Link>

    <Link href="https://github.com/tylerodonnell" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </Link>

    <Link href="https://www.linkedin.com/in/tylerodonnell" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </Link>

    <Link href="https://keybase.io/tylerodonnell" target="_blank" rel="noopener noreferrer">
      <FaKeybase />
    </Link>
  </Links>
)
