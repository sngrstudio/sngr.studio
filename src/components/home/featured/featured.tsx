import type { FC, PropsWithChildren } from 'react'
import type { IProject } from '~/components/common/types/projects.type'
import RightArrow from '~icons/mdi/arrow-right-circle'
import style from './featured.module.scss'

interface IFeatured {
  project: IProject
  url: string
}

const Featured: FC<PropsWithChildren<IFeatured>> = ({
  project,
  url,
  children,
}) => {
  return (
    <section className={style.__section} data-theme={project.theme || ''}>
      <article className={style.__container}>
        <span className="badge badge-accent font-bold">Karya SNGR Studio</span>
        <h2 className={style.__title}>{project.title}</h2>
        <p className={style.__slogan}>{project.slogan}</p>
        <a className={style.__window} href={url} rel="prefetch">
          {children}
        </a>
        <div className={style.__buttons}>
          <a className="btn btn-accent btn-xl gap-1" href={url}>
            <span>Ini Kisahnya</span>
            <RightArrow className="text-xl" />
          </a>
          <a className="btn btn-accent btn-xl gap-1" href="/projects">
            <span>Semua Karya</span>
            <RightArrow className="text-xl" />
          </a>
        </div>
      </article>
    </section>
  )
}

export default Featured
