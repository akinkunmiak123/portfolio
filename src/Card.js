import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';


const Card = () => {
  const [content, setContent] = useState()

  // Set 'Akinkunmi' as the initial active button
  const [activeButton, setActiveButton] = useState('Akinkunmi')

  const handleClick = (text, buttonName) => {
    setContent(text)
    setActiveButton(buttonName)
  }

  useEffect(() => {
    handleClick(
      <>
        <p>
          I spend most days crafting engaging web pages that not only boast
          stunning visuals but also provide users with exceptional experiences.
          My professional journey is driven by an unwavering commitment to
          continually refine and elevate my skills.
        </p>
        <p>
          In my free time, I love delving into the vast world of technology—from
          cool gadgets and tech tools to the intricacies of computer processors.
          Additionally, I have a passion for design—check out more of my work on
          my Portfolio
        </p>
      </>
    )
  }, []) // Add dependencies if needed

  return (
    <div className="card">
      <div className="buttons">
        <button
          className={activeButton === 'Akinkunmi' ? 'active' : ''}
          onClick={() =>
            handleClick(
              <>
                <p>
                  I spend most days crafting engaging web pages that not only
                  boast stunning visuals but also provide users with exceptional
                  experiences. My professional journey is driven by an
                  unwavering commitment to continually refine and elevate my
                  skills.
                </p>
                <p>
                  In my free time, I love delving into the vast world of
                  technology—from cool gadgets and tech tools to the intricacies
                  of computer processors. Additionally, I have a passion for
                  design—check out more of my work on my Portfolio
                </p>
              </>
            )
          }
        >
          <h3 className="linkstyle">Akinkunmi</h3>
        </button>
        <button
          className={activeButton === 'Portfolio' ? 'active' : ''}
          onClick={() =>
            handleClick(
              <>
                <p>
                  I specialize in crafting interactive, user-friendly websites
                  with a keen focus on stunning web interfaces, responsive
                  designs, seamless interactivity, thorough testing, debugging,
                  and the art of creating a distinct user experience. Explore
                  some of my showcased projects in my portfolio:
                </p>
                <div>
                  <a
                    href="https://temp-backroadapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-link"
                  >
                    <i className="fas fa-map-marker-alt"></i> Backroads App For
                    Tours
                  </a>
                </div>
                <div>
                  <a
                    href="https://akinreact-fundamentals.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-link"
                  >
                    <i className="fa-solid fa-book"></i> Amazon Best Sellers
                  </a>
                </div>
                <div>
                  <a
                    href="https://akinkunmi1.github.io/Bikeshop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-link"
                  >
                    <i class="fa-solid fa-bicycle"></i> Mobile Bike Repairs
                  </a>
                </div>
                <div>
                  <a
                    href="https://akinkunmi1.github.io/Resturant/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-link"
                  >
                    <i class="fa-solid fa-utensils"></i> Resturant Resevation
                  </a>
                </div>
                <div>
                  <a
                    href="https://akinkunmi1.github.io/Responsive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-link"
                  >
                    <i class="fa-solid fa-mobile"></i> Responsive Logo Design
                  </a>
                </div>
              </>
            )
          }
        >
          <h3 className="linkstyle">Portfolio</h3>
        </button>
      </div>
      <div className="content">{content}</div>
      <Footer />
    </div>
  )
}




export default Card
