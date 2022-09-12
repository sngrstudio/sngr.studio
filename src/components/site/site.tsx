import siteData from '~/data/site.yaml'
import LogoBlack from '~icons/sngr-studio-brand/text-black'
import LogoColor from '~icons/sngr-studio-brand/text-color'
import LogoWhite from '~icons/sngr-studio-brand/text-white'

interface ISiteData {
  name: string
  slogan: string
  description: string
  legal: {
    name: string
    nib: string
    npwp: string
    address: string
  }
}

const logo = {
  black: LogoBlack,
  color: LogoColor,
  white: LogoWhite,
}

const site = { ...(siteData as Partial<ISiteData>), logo }

export default site
