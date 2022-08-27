const getScreenshot = (url: string, w?: number, h?: number) =>
  ['/screenshot', w && `${w}w`, h && `${h}h`, encodeURIComponent(url)]
    .filter(Boolean)
    .join('/')

export default getScreenshot
