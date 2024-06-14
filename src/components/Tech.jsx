// import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"

import { useEffect, useRef } from "react"
import TagCloud from "TagCloud"

const Tech = () => {

  const sphereMounted = useRef(false)

  useEffect(() => {
    if (sphereMounted.current === false) {
      const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'React', 'tailwind',
        'Python', 'git',
        'JSON', 'ES5/ES6',
        'github', 'Django', 'TypeScript', 'PostgreSQL', 'Postman', 'API'
      ];

      TagCloud('.sphere', myTags, {
        radius: 200,
        maxSpeed: 'fast',
        initSpeed: 'slow',
        direction: 135,
        keep: true,
      })
    }
    return () => sphereMounted.current = true
  }, [])


  return (

    <div className="sphere cursor-pointer"></div>

  )
}

export default SectionWrapper(Tech, "")