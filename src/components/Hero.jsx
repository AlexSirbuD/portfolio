/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { fadeIn } from '../utils/motion'

import { styles } from '../styles'
import { canvas } from '../assets'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5 '>
          <Tilt >
            <motion.div
              variants={fadeIn('right', 'spring', 0.5, 0.75)}
            >
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
              >
                <div className='w-[170px] h-[170px] rounded-full bg-cover bg-[url("/src/assets/1000000514-2.jpg")] border-2 border-[#0066CC]' />
              </div>
            </motion.div>
          </Tilt>
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div className=''>
          <h1 className={`${styles.heroHeadText} text-[#EDEDED] ml-8 mt-7`}>Hi, I'm <span className='text-[#0066CC]'>Alex</span></h1>
          <p className={`${styles.heroSubText}  text-[#EDEDED] ml-8 `}>
            I'm a junior JavaScript developer
          </p>

          <div className=''>
            <img className=" h-auto w-[800px]" src={canvas} alt="computer" />
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-2 h-2 rounded-full bg-[#EDEDED] mb-1'
            />

          </div>

        </a>
      </div>

    </section>
  )
}

export default Hero