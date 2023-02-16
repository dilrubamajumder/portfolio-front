import React from 'react'
import { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Backgound from "../Images/Background-img1.jpeg";
import foreground from "../Images/Bookgif.gif"
import readin from "../Images/readin.gif"
import "./paralex.css"

function Intro({introRef}) {
  // return (
  //   <div ref= {introRef}> 
    {/* <div   className="books-page-jumbotron">
      <h1>Welcome to Books Exchange</h1>
      <p>Message about why this exist wed;jbedjbcdecje</p>
    </div> */}

      const ref = useRef()
  return (
    <div className='paralex' >
    <Parallax pages={3} ref={ref}>
 
    <ParallaxLayer offset={1} speed={0.5}>
    <h2 className='quote1'>'I have lives a thousand lives and I have loved a thousand loves. I've walked on distant worlds and seen the end of time. <br/> Because I read.'</h2>

    </ParallaxLayer>

    <ParallaxLayer
      offset={0}
      speed={1}
      factor={1}
      style={{
        backgroundImage: `url('${Backgound}')`,
        backgroundSize: 'cover',
      }}
    />
     <ParallaxLayer
      offset={3}
      speed={0.05}
      factor={3}
      sticky={{ start: 0.3, end: 4 }}
      style={{ textAlign: 'center' }}
      onClick={() => ref.current.scrollTo(3)}
    >
      <h1>Welcome to ReviewED</h1>
    </ParallaxLayer>

    <ParallaxLayer
    className='bookshelf'
      offset={1}
      speed={1}
      factor={2}
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/f5/37/d4/f537d4e900facfeaae5a0ca55644ec7f.png')`,
        backgroundSize: 'fit',
        width: '100vw'
      }}
    ></ParallaxLayer>

    <ParallaxLayer
    offset={1}
    speed={0.05}
    factor={2}
      sticky={{ start: 0.3, end: 2.5 }}
      style={{ textAlign: 'right' }}
    >
      <img src={"https://media1.giphy.com/media/WPT7MrXvO47mWzugDa/giphy.gif"} />
    </ParallaxLayer>

   

    <ParallaxLayer
      offset={3}
      speed={2}
      onClick={() => ref.current.scrollTo(0)}
    >
      <h2>'I have lives a thousand lives and I have loved a thousand loves. I've walked on distant worlds and seen the end of time. <br/> Because I read.'</h2>
    </ParallaxLayer>
  </Parallax>
</div>
  )
}
// }

export default Intro