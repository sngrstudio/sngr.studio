import type { FC, PropsWithChildren } from 'react'
import LoadingIcon from '~icons/mdi/loading'
import ErrorIcon from '~icons/mdi/error'
import { motion } from 'framer-motion'
import style from './screenshot.module.scss'

const State: FC<PropsWithChildren> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className={style.__window}
    key="loadingComp"
  >
    <div className="aspect-w-16 aspect-h-9 relative">
      <div
        className="min-w-[320px] pb-[52.65%]"
        dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  </motion.div>
)

export const Loading: FC = () => (
  <State>
    <span className="animate-spin">
      <LoadingIcon />
    </span>
  </State>
)

export const Error: FC = () => (
  <State>
    <span>
      <ErrorIcon />
    </span>
  </State>
)
