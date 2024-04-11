import { useState } from 'react'
import { useScramble } from 'use-scramble'
const titles = ['Title 1', 'Title  2', 'Title 3']
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
      }, 1000)
    }
  })

  return <h1 ref={ref} className="text-5xl font-bold" />
}
