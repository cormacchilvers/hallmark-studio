import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TICKER_TEXT =
  'WEB DESIGN · CHELMSFORD ESSEX · FROM £599 · STAND OUT · STAY AHEAD · PREMIUM BUILDS · NO TEMPLATES · CUSTOM EVERY TIME · '

export default function Marquee() {
  const trackRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    // Base animation
    tweenRef.current = gsap.to(el, {
      x: '-50%',
      duration: 22,
      ease: 'none',
      repeat: -1,
    })

    // Accelerate slightly on scroll proximity
    const trigger = ScrollTrigger.create({
      trigger: el.parentElement,
      start: 'top 90%',
      end: 'bottom 10%',
      onEnter: () => gsap.to(tweenRef.current, { timeScale: 1.5, duration: 0.5 }),
      onLeave: () => gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8 }),
      onEnterBack: () => gsap.to(tweenRef.current, { timeScale: 1.5, duration: 0.5 }),
      onLeaveBack: () => gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8 }),
    })

    return () => {
      tweenRef.current?.kill()
      trigger.kill()
    }
  }, [])

  const repeated = Array(4).fill(TICKER_TEXT).join('')

  return (
    <div className="overflow-hidden bg-dark border-y border-gold/10 py-4" aria-hidden="true">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {[0, 1].map((i) => (
          <span key={i} className="text-gold text-sm font-bold tracking-[0.2em] pr-0">
            {repeated}
          </span>
        ))}
      </div>
    </div>
  )
}
