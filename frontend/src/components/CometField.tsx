import { useMemo } from 'react'
import '../comets.css'

type Comet = {
  id: number
  top: string
  left: string
  angle: number
  duration: number
  delay: number
  length: number
  thickness: number
  opacity: number
}

type CometFieldProps = {
  count?: number
}

function makeComet(id: number): Comet {
  return {
    id,
    top: `${Math.random() * 95}%`,
    left: `${-30 - Math.random() * 40}%`,
    angle: 8 + Math.random() * 16,
    duration: 6 + Math.random() * 6,
    delay: Math.random() * 6,
    length: 120 + Math.random() * 140,
    thickness: 1 + Math.random() * 1.5,
    opacity: 0.4 + Math.random() * 0.4,
  }
}

function CometField({ count = 2 }: CometFieldProps) {
  const comets = useMemo(
    () => Array.from({ length: count }, (_, i) => makeComet(i)),
    [count],
  )

  return (
    <div className="comet-field" aria-hidden="true">
      {comets.map((comet) => (
        <div
          key={comet.id}
          className="comet"
          style={{
            top: comet.top,
            left: comet.left,
            transform: `rotate(${comet.angle}deg)`,
          }}
        >
          <span
            className="comet__trail"
            style={{
              width: comet.length,
              height: comet.thickness,
              opacity: comet.opacity,
              animationDuration: `${comet.duration}s`,
              animationDelay: `${comet.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default CometField
