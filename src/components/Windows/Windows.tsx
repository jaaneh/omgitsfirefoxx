import { ReactChild } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import s from './Windows.module.css'

type IWindowBase = {
  constraintsRef: any
  iconSrc?: string
  title: string
  isOpen: any
  setIsOpen: any
  questionMarkIcon?: boolean
  style?: any
  children: ReactChild
}

const WindowBase = ({
  constraintsRef,
  iconSrc,
  title,
  isOpen,
  setIsOpen,
  questionMarkIcon = true,
  style,
  children
}: IWindowBase): JSX.Element => {
  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={false}
      dragTransition={{
        power: 0
      }}
      className={s.window}
      style={{
        ...style,
        display: isOpen ? 'block' : 'none'
      }}
    >
      <div className={s.windowTopBar}>
        <div className={s.windowTitle}>
          {iconSrc ? (
            <>
              <img src={iconSrc} />
              <span>{title}</span>
            </>
          ) : (
            title
          )}
        </div>
        <div>
          {questionMarkIcon && (
            <button className={clsx(s.windowButton, s.helpButton)}></button>
          )}
          <button
            className={clsx(s.windowButton, s.closeButton)}
            onClick={() => setIsOpen(false)}
          ></button>
        </div>
      </div>
      <div className={s.windowBody}>{children}</div>
    </motion.div>
  )
}

export default WindowBase
