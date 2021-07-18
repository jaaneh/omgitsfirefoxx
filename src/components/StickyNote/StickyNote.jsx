import { useState } from 'react'
import { motion } from 'framer-motion'

import s from './StickyNote.module.css'

const StickyNote = ({ constraintsRef }) => {
  const [showNote, setShowNote] = useState(true)

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={false}
      dragTransition={{
        power: 0
      }}
      className={s.stickyWrapper}
      style={{
        display: showNote ? 'block' : 'none'
      }}
    >
      <button className={s.stickyClose} onClick={() => setShowNote(false)}>
        X
      </button>
      <span
        className={s.stickyNote}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        Hey! For Business, be sure to drop me an email! - Firefoxx
      </span>
    </motion.div>
  )
}

export default StickyNote
