export const getScreenshotUrl = (url: string, w?: number, h?: number) =>
  ['/screenshot', w && `${w}w`, h && `${h}h`, encodeURIComponent(url)]
    .filter(Boolean)
    .join('/')

export const getScreenshotUrlWQuery = (url: string, w?: number, h?: number) =>
  '/screenshot?' +
  [w && `w=${w}w`, h && `h=${h}h`, `url=${url}`].filter(Boolean).join('&')

const getScreenshot = async (src: string) => {
  const res = await fetch(src)
  const blob = await res.blob()
  return URL.createObjectURL(blob)
}

export default getScreenshot
