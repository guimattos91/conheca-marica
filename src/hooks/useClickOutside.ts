import { useEffect, RefObject } from 'react'

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: (event: MouseEvent | TouchEvent) => void,
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node | null)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}
