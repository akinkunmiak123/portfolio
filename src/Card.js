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
          Hello there! I am Akinkunmi, an enthusiastic front-end developer. I
          excel at the intersection of creativity and technology, where I bring
          ideas to life, turning them into engaging user experiences. Front-end
          development is not just a skill for me; it is where I truly shine.
          Proficient in a range of front-end technologies, including{' '}
          <span className="inline">HTML5, CSS3, and JavaScript,</span> along
          with expertise in popular frameworks like{' '}
          <span className="inline"> React.js,</span> I craft pixel-perfect,
          responsive web applications that captivate users and ensure seamless
          interactions. What drives my passion for front-end development is the
          opportunity to design
          <span className="inline">
            {' '}
            visually stunning and intuitive user interfaces.
          </span>
        </p>
        <p>
          I am meticulous about the details every button and layout contributes
          to a flawless user journey. Looking forward, I am excited to channel
          my front-end development expertise into innovative projects,
          collaborating with talented professionals. I am captivated by the vast
          potential of web development and the chance to create solutions that
          make a lasting impact. If you are as passionate about{' '}
          <span className="inline"> front-end development</span> as I am, or if
          the idea of collaborating on web projects intrigues you,{' '}
          <span className="inline">
            {' '}
            let us connect! Feel free to get in touch,
          </span>
          and together, let us explore the boundless opportunities of web
          development.
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
                  Hello there! I am Akinkunmi, an enthusiastic front-end
                  developer. I excel at the intersection of creativity and
                  technology, where I bring ideas to life, turning them into
                  engaging user experiences. Front-end development is not just a
                  skill for me; it is where I truly shine. Proficient in a range
                  of front-end technologies, including{' '}
                  <span className="inline">HTML5, CSS3, and JavaScript,</span>{' '}
                  along with expertise in popular frameworks like{' '}
                  <span className="inline"> React.js,</span> I craft
                  pixel-perfect, responsive web applications that captivate
                  users and ensure seamless interactions. What drives my passion
                  for front-end development is the opportunity to design
                  <span className="inline">
                    {' '}
                    visually stunning and intuitive user interfaces.
                  </span>
                </p>
                <p>
                  I am meticulous about the details every button and layout
                  contributes to a flawless user journey. Looking forward, I am
                  excited to channel my front-end development expertise into
                  innovative projects, collaborating with talented
                  professionals. I am captivated by the vast potential of web
                  development and the chance to create solutions that make a
                  lasting impact. If you are as passionate about{' '}
                  <span className="inline"> front-end development</span> as I
                  am, or if the idea of collaborating on web projects intrigues
                  you,{' '}
                  <span className="inline">
                    {' '}
                    let us connect! Feel free to get in touch,
                  </span>
                  and together, let us explore the boundless opportunities of
                  web development.
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
                    href="https://youtubeakin.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="black-link"
                  >
                    <i class="fa-brands fa-youtube"></i> Youtube Clone
                  </a>
                </div>
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
                    href="https://reactbooklists.netlify.app/"
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
