import type { FC } from 'react'
import style from './header.module.scss'

interface IProjectHeader {
  title: string
  slogan?: string
}

const ProjectHeader: FC<IProjectHeader> = ({ title, slogan }) => (
  <section className={style.__section}>
    <h1>{title}</h1>
    <p>{slogan}</p>
  </section>
)

export default ProjectHeader
