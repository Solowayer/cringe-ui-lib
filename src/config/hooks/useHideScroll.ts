import { useEffect } from 'react'

export const useHideScroll = (handler: boolean) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    if (handler) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      setTimeout(() => {
        document.body.style.overflow = 'unset'
        document.body.style.paddingRight = '0px'
      }, 200)
    }
  }, [handler])
}
