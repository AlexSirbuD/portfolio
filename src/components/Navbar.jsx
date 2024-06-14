import { useState } from "react"
import { Link } from "react-router-dom"

import { styles } from "../styles"
import { navLinks } from "../constants"
import { new_logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={new_logo} alt="logo"
            className="w-10 h-10 object-contain" />
          <p className="text-[#EDEDED] text [18px] font-bold cursor-pointer flex">Alex &nbsp; <span
            className="sm:block hidden">| &nbsp; JS Developer</span></p>

        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? 'text-[#0099FF]' : 'text-[#0066CC]'
                } hover:text-[#0099FF] text[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu"
            className="w-[15px] h[15px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-4 bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl`}>
            <ul className="list-none flex flex-col justify-end items-start gap-5">
              {navLinks.map((link) => (
                <li key={link.id}
                  className={`${active === link.title ? 'text-[#0099FF]' : 'text-[#0066CC]'
                    } hover:text-text-[#0099FF]' : 'text-[#0099FF] font-poppins text[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    console.log(link.title)
                    setToggle(!toggle)
                    setActive(link.title)
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </nav >
  )
}

export default Navbar