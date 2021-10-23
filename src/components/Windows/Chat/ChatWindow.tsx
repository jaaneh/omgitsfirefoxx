import { useContext } from 'react'

import StateContext from '@context/StateContext'
import WindowBase from '../Windows'

const ChatWindow = ({ constraintsRef }): JSX.Element => {
  const { chatOpen, setChatOpen } = useContext(StateContext)

  return (
    <WindowBase
      constraintsRef={constraintsRef}
      title='FoxxBot'
      isOpen={chatOpen}
      setIsOpen={setChatOpen}
      // style={{
      //   minWidth: isLoggedIn ? 623 : 225
      // }}
      questionMarkIcon={false}
    >
      <p>Chat Window</p>
    </WindowBase>
  )
}

export default ChatWindow
