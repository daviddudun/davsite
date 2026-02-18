import { useMemo } from 'react'
import '../stars.css'

type Star = {
  id: number
  size: number
  left: string
  top: string
  opacity: number
  duration: number
  delay: number
}

type StarFieldProps = {
  count?: number
  countLarge?: number
}

function makeStar(id: number, size: number): Star {
  return {
    id,
    size,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: 0.25,
    duration: 2 + Math.random() * 3,
    delay: Math.random() * 4,
  }
}

function StarField({ count = 140, countLarge = 40 }: StarFieldProps) {
  const { smallStars, largeStars } = useMemo(() => {
    const small = Array.from({ length: count }, (_, i) => makeStar(i, 1))
    const large = Array.from({ length: countLarge }, (_, i) =>
      makeStar(i + count, 2),
    )
    return { smallStars: small, largeStars: large }
  }, [count, countLarge])

  return (
    <div className="starfield" aria-hidden="true">
      {smallStars.map((star) => (
        <span
          key={star.id}
          className="star"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {largeStars.map((star) => (
        <span
          key={star.id}
          className="star star--large"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
            opacity: star.opacity,
            animationDuration: `${star.duration + 2}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default StarField
