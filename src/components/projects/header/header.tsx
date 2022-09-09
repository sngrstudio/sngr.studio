import type { FC } from 'react'
import style from './header.module.scss'

interface IProjectHeader {
  title: string
}

const ProjectHeader: FC<IProjectHeader> = ({ title }) => (
  <section className={style.__section}>
    <h1>{title}</h1>
  </section>
)

export default ProjectHeader
