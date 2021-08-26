import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

import { withState } from '../state'
import { PARTICLE_PER_SQUARE_PIXELS, ZINDEX } from '../constants'

const StyledParticles = styled(Particles)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZINDEX.BACKGROUND};
`

export default () => {
  const { layout } = withState()

  return (
    <StyledParticles
      height={layout.height}
      params={{
        particles: {
          number: {
            value: Math.ceil((layout.height * layout.width) / PARTICLE_PER_SQUARE_PIXELS),
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.02
          },
          move: {
            direction: 'right',
            speed: 0.05
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        }
      }}
      width={layout.width}
    />
  )
}
