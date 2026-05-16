import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const isTouch = window.matchMedia('(pointer: coarse)').matches

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const rafRef = useRef(null)
  const targetRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (isTouch) return
    const move = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
    }

    const updateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.12,
        y: prev.y + (targetRef.current.y - prev.y) * 0.12,
      }))
      rafRef.current = requestAnimationFrame(updateTrail)
    }

    const onEnter = (e) => {
      if (
        e.target.closest('a, button, [data-hover]')
      ) {
        setHovered(true)
      }
    }
    const onLeave = (e) => {
      if (
        e.target.closest('a, button, [data-hover]')
      ) {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    rafRef.current = requestAnimationFrame(updateTrail)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: trail.x,
          top: trail.y,
          x: '-50%',
          y: '-50%',
          zIndex: 99999,
          pointerEvents: 'none',
          borderRadius: '50%',
          border: `1.5px solid ${hovered ? '#C9A84C' : 'rgba(201,168,76,0.5)'}`,
        }}
        animate={{
          width: hovered ? 44 : 28,
          height: hovered ? 44 : 28,
          opacity: hovered ? 0.9 : 0.5,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      {/* Gold dot */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: hovered ? 6 : 5,
          height: hovered ? 6 : 5,
          background: '#C9A84C',
          borderRadius: '50%',
          zIndex: 99999,
          pointerEvents: 'none',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
    </>
  )
}
