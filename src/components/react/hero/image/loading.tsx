import type { FC } from 'react'
import LoadingIcon from '~icons/mdi/loading'
import { motion } from 'framer-motion'
import style from './image.module.scss'

const Loading: FC = () => (
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
        <span className="animate-spin">
          <LoadingIcon />
        </span>
      </div>
    </div>
  </motion.div>
)

export default Loading
