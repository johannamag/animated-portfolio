import React from 'react'
import {useRef} from 'react'
import './services.scss'
import {motion, useInView} from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1, 
            staggerChildren: 0.1
        }
    },
}

export default function Services() {

    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div className='services' variants={variants} initial="initial" animate={isInView && "animate"} ref={ref}>
        <motion.div className="textContainer" variants={variants}>
            <p>I am helping your brand grow<br /> and move forward</p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="People" />
                <h1>
                    <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business
                </h1>
                <button>Our Services</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "lightgrey", color: "#000"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla consequatur consequuntur!</p>
                <button>More</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgrey", color: "#000"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla consequatur consequuntur!</p>
                <button>More</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgrey", color: "#000"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla consequatur consequuntur!</p>
                <button>More</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgrey", color: "#000"}}>
                <h2>Branding</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla consequatur consequuntur!</p>
                <button>More</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
