import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <motion.div id='div1'
        initial={{
          x:-1000,
          opacity: 0
        }}
        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}>
          Complete documentation of the Framer Motion animation library. 
          A production-ready motion library for React.
      </motion.div>

      <motion.div id='div2'
        initial={{
          opacity:0,
        }}
        animate={{
          y:0,
          opacity:1
        }}
        transition={{
          delay:1,
          duration:2
        }}>
        <motion.img
          src='img/banner-new.jpeg'
          className='banner'
          width={850}
          initial={{
            opacity:0.6
          }}
          transition={{
            duration:5
          }}
          whileTap={{rotate:360}}
        />
      </motion.div>
      
      <div id='divImg'>
        <motion.div id='div3'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>
          <motion.img
            src='img/ball.jpg'
            className='ball'
            width={200}
            initial={{
              opacity:0.6
            }}
            transition={{
              duration:5
            }}
            whileHover={{
              scale:1.5,
              transition:{
                duration:2
              }
            }}
          />
        </motion.div>

        <motion.div id='div4'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>
          <motion.img drag='x'
            src='img/ball.jpg'
            className='ball'
            width={200}
            initial={{
              opacity:0.6
            }}
            transition={{
              duration:5
            }}
            whileDrag={{
              scale:1.5,
            }}
          />
        </motion.div>
        <motion.button className='btn btn-primary'
        whileHover={{
          scale:1.2
        }}>Нажми</motion.button>
      </div>
    </div>
  )
}

export default Description