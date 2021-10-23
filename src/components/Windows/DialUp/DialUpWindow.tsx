import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

const DialUpWindow = ({ constraintsRef }): JSX.Element => {
  const { dialUpOpen, setDialUpOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      iconSrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA10lEQVQokY2S0RHDMAhDpV4HcyYDJoPN1A/Hjpu0TXWnn8TAswwlwd2Fk9yd528XSUJmCsC0mUkS7vxcugDuX4cMupXosfz9wUdFBNwDADUazcnZ2jxaVe+l7GDkgAyQocfosrUNALBtG1prIKkx1QyoSkiAWYc02wNbwxqWhB4c1AWZHQYg7sXfJJJvWUYAmYmqws/iqhKAcY1ZdMQozUNrYO5OksrMS4gRAUk8lqRfUjD7uCQjh9V/vjP6pJNu35kd7vOe74gXnTH7mhyeu+03yB37Ov0FcBYB8lB2fZwAAAAASUVORK5CYII='
      title='Dial-Up Connection'
      isOpen={dialUpOpen}
      setIsOpen={setDialUpOpen}
    >
      <p>Dial-Up Window</p>
    </WindowBase>
  )
}

export default DialUpWindow
