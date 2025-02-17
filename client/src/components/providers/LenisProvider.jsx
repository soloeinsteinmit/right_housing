import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LenisProvider = ({ children }) => {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])

  const lenisOptions = {
    lerp: 0.1,
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    infinite: false,
  }

  return (
    <ReactLenis ref={lenisRef} root options={{ ...lenisOptions, autoRaf: false }}>
      {children}
    </ReactLenis>
  )
}

export default LenisProvider
