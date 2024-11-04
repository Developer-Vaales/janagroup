import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { fadeInUpSlowerY } from './animations'

const FadeInWhenVisibleY = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start('animate')
    } else {
      controls.start('initial')
    }
  }, [controls, inView])

  return (
    <motion.div
      style={{ margin: 0 }}
      ref={ref}
      animate={controls}
      initial="initial"
      variants={fadeInUpSlowerY}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisibleY
