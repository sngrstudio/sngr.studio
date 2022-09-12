import type { FC, PropsWithChildren, ElementType } from 'react'
import type { IProject } from '~/components/common/types/projects.type'
import RightArrow from '~icons/mdi/arrow-right-circle'
import style from './featured.module.scss'

interface IFeatured {
  project: IProject
  projectUrl: string
  projectLink: string
}

interface IButton {
  title: string
  url: string | undefined
  icon: ElementType
  newWindow?: boolean
}

const Featured: FC<PropsWithChildren<IFeatured>> = ({
  project,
  projectUrl,
  projectLink,
  children,
}) => {
  const buttons: IButton[] = [
    {
      title: 'Ini Kisahnya',
      url: projectUrl,
      icon: () => <RightArrow className="text-xl" />,
    },
    {
      title: 'Lihat Karya',
      url: projectLink,
      icon: () => <RightArrow className="text-xl" />,
      newWindow: true,
    },
    {
      title: 'Semua Karya',
      url: '/projects',
      icon: () => <RightArrow className="text-xl" />,
    },
  ]

  return (
    <section className={style.__section} data-theme={project.theme || ''}>
      <article className={style.__container}>
        <div className="flex justify-center">
          <span className="badge badge-accent font-bold">
            Karya SNGR Studio
          </span>
        </div>
        <h2 className={style.__title}>{project.title}</h2>
        <p className={style.__slogan}>{project.slogan}</p>
        <a className={style.__window} href={projectUrl} rel="prefetch">
          {children}
        </a>
        <div className={style.__buttons}>
          {buttons.map((btn, i) => (
            <a
              className="btn btn-accent md:btn-xl gap-1"
              href={btn.url}
              rel="prefetch"
              target={btn.newWindow ? '_blank' : ''}
              key={`btn-${i}`}
            >
              <span>{btn.title}</span>
              <btn.icon />
            </a>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Featured
