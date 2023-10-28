import React from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import {useRef} from 'react'

const items = [
    {
        id: 1,
        title: "React Ecommerce",
        img: "https://images.pexels.com/photos/11464383/pexels-photo-11464383.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
    },
    {
        id: 2,
        title: "JS Blog",
        img: "https://images.pexels.com/photos/5990261/pexels-photo-5990261.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
    },
    {
        id: 3,
        title: "Next App",
        img: "https://images.pexels.com/photos/18078709/pexels-photo-18078709/free-photo-of-clint-malik-am-munztelefon.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
    }
]

const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress}= useScroll({target: ref, /* offset: ["start start", "end start"] */})
    const y = useTransform(scrollYProgress, [0,1], [-200, 40])

    return (
        <section>
            <div className="container">
                <div className="imgContainer" ref={ref}>
                    <img src={item.img} alt={item.title} />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See More</button>
                </motion.div>
            </div>
        </section>
    )
}

export default function Portfolio() {
    const ref = useRef()
    const {scrollYProgress}= useScroll({target: ref, offset: ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100, 
        damping: 30
    })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}
