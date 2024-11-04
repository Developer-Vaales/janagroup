import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scrollVariants = {
  initial: { y: '.5rem', opacity: 0 },
  animate: {
    y: '0rem',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  // the scroll event fires when the document view has been scrolled
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          variants={scrollVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          title="scroll to top"
          name="scroll to top"
          aria-label="scroll to top"
        >
          {/* <FontAwesomeIcon icon={faArrowAltCircleUp} /> */}
          <svg
            width="48"
            height="80"
            viewBox="0 0 139 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M76.45 111.2H62.55V55.6L38.225 79.925L28.356 70.056L69.5 28.912L110.644 70.056L100.775 79.925L76.45 55.6V111.2ZM69.5 0C78.6269 0 87.6644 1.79767 96.0965 5.29037C104.529 8.78307 112.19 13.9024 118.644 20.3561C125.098 26.8097 130.217 34.4714 133.71 42.9035C137.202 51.3356 139 60.3731 139 69.5C139 87.9325 131.678 105.61 118.644 118.644C105.61 131.678 87.9325 139 69.5 139C60.3731 139 51.3356 137.202 42.9035 133.71C34.4714 130.217 26.8097 125.098 20.3561 118.644C7.3223 105.61 0 87.9325 0 69.5C0 51.0675 7.3223 33.3899 20.3561 20.3561C33.3899 7.3223 51.0675 0 69.5 0ZM69.5 13.9C54.754 13.9 40.6119 19.7578 30.1849 30.1849C19.7578 40.6119 13.9 54.754 13.9 69.5C13.9 84.246 19.7578 98.3881 30.1849 108.815C40.6119 119.242 54.754 125.1 69.5 125.1C84.246 125.1 98.3881 119.242 108.815 108.815C119.242 98.3881 125.1 84.246 125.1 69.5C125.1 54.754 119.242 40.6119 108.815 30.1849C98.3881 19.7578 84.246 13.9 69.5 13.9Z"
              fill="#D3E1C4"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
export default ScrollToTop
