import { motion } from "framer-motion"
import { styles } from "../styles"

import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

import { contacts } from "../constants"


const Contact = () => {

  console.log(contacts.adress)


  return (
    <div className="xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-[#000033] p-8 rounded-2xl">
        <p className={styles.sectionSubText}> Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contacts.</h3>



        <ul className="flex flex-col">
          {contacts.adress.map((contact) => {
            console.log(contact.title)
            return (
              <div key={contact.title}>

                <li className="mt-3 gap-2 flex text-[12px] justify-start items-center" >
                  <span className="w-[35px] h-[35px] mr-3">
                    <img src={contact.icon} alt="icons" />
                  </span>

                  &nbsp;{contact.title}</li>
              </div>
            )
          })
          }

        </ul>

        <hr className="mt-4  max-w-[280px] h-px border-0 bg-gray-800" />
        <ul>
          {contacts.social.map((contact) => {
            console.log(contact.title)
            return (
              <div key={contact.title}>
                <a href=""></a>

                <a href={`https://www.${contact.title}`} target="_blank" className="mt-3 gap-2 flex text-[12px] justify-start items-center" >
                  <span className="w-[35px] h-[35px] mr-3">
                    <img src={contact.icon} alt="icons" />
                  </span>

                  &nbsp;{contact.title}</a>
              </div>
            )
          })
          }

        </ul>

      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact')