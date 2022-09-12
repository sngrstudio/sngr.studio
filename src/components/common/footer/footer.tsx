import type { FC } from 'react'
import type { IMenu } from '~/components/site/menu'
import site from '~/components/site/site'
import { externalMenu, socialMenu, footerMenu } from '~/components/site/menu'
import style from './footer.module.scss'

interface IGenerateMenu {
  title: string
  menus: IMenu[]
}

const GenerateMenu: FC<IGenerateMenu> = ({ title, menus }) => (
  <div>
    <h2 className="footer-title">{title}</h2>
    <ul className={style.__footer_links}>
      {menus.map((menu, i) => (
        <li key={`link-${i}`}>
          <a
            href={menu.link}
            className="link link-hover"
            rel={[
              menu.isExternal && 'noreferrer noopener',
              !menu.noPrefetch && 'prefetch',
            ]
              .filter(Boolean)
              .join(' ')}
            target={menu.isExternal ? '_blank' : ''}
          >
            {menu.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Footer: FC = () => (
  <footer className={`footer ${style.__footer}`}>
    <div className={style.__company_box}>
      <site.logo.white className="w-max h-[48px]" />
      <h2>{site.name}</h2>
      <p>{site.legal?.name}</p>
    </div>
    <GenerateMenu title="Layanan Lainnya" menus={externalMenu} />
    <GenerateMenu title="Sosial Media" menus={socialMenu} />
    <GenerateMenu title="Lain-lain" menus={footerMenu} />
  </footer>
)

export default Footer
