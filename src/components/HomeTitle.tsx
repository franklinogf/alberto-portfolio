import { useState } from 'react'
import { useScramble } from 'use-scramble'
const titles = ['Product development', 'Production', 'Art direction', 'Accessories'] as const

export default function HomeTitle () {
  const [titleIndex, setTitleIndex] = useState(0)
  const { ref } = useScramble({
    text: titles[titleIndex],
    speed: 0.25,
    tick: 1,
    scramble: 5,
    range: [65, 122],
    onAnimationEnd: () => {
      setTimeout(() => {
        if (titleIndex === titles.length - 1) {
          setTitleIndex(0)
        } else {
          setTitleIndex(titleIndex + 1)
        }
      }, 500)
    }
  })

  return <h1 ref={ref} className='text-5xl font-bold' />
}
