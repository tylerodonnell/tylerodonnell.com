import { compose, mergeLeft, objOf } from 'ramda'

import { SET_LAYOUT } from './types'

export default compose(
  mergeLeft({ type: SET_LAYOUT }),
  objOf('payload')
)
