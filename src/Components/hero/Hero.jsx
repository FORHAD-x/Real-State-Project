import { HiLocationMarker } from "react-icons/hi"; 
import "./Hero.css"
import CountUp from "react-countup";
import { easeIn, motion, spring } from "framer-motion";
const Hero = () => {
  return (
    <>
    <section className='hero_wrapper'>
      <div className="hero-container paddings innerWidth flexCenter">
          {/* hero left */}
          <div className="hero-left flexColStart">
            <div className="hero-title">
              <div className="orange-circle"></div>
              <motion.h1
              initial={{y:"2rem ",opacity: 0 }}
              animate={{y:0, opacity: 1 }}
              transition={{ duration: 2,type:"spring" }}
              >Discover <br/> Most Suitable <br /> Property</motion.h1>
            </div>
            <div className="hero-des flexColStart">
              <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
              <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
            </div>
            <div className="search_bar flexCenter">
              <HiLocationMarker color="var(--blue)" size={25}/>
              <input type="text"/>
              <button className="button">Search</button>
            </div>
            {/*============= stats counter start ===============*/} 
            <div className="stats flexCenter">

              <div className="stat flexColCenter">
                <span>
                  <CountUp start={8900} end={9000} duration={4}/>
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>

              <div className="stat flexColCenter">
                <span>
                  <CountUp start={1900} end={2000} duration={4}/>
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
              </div>

              <div className="stat flexColCenter">
                <span>
                  <CountUp  end={28} duration={4}/>
                  <span>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
              </div>

            </div>
          {/*============= stats counter end ==========*/} 

            
          </div>
          {/*hero right */}
          <div className="hero-right flexCenter">
            <motion.div
             initial={{x:"7rem", opacity: 0 }}
             animate={{x:0, opacity: 1 }}
             transition={{ duration: 1.5,type:"spring"}}
             className="img-container">
              <img src="./hero-image.png" alt="" />
            </motion.div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Hero