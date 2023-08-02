import Image from 'next/image';
import classes from '../styles/home.module.css';


export default function Home() {
  return (
    <section className={classes.intro}>
      
      <div className={classes.text}>

        <h1>Hello, I'm Jesus Ruiz</h1>

        <h2>Frontend Developer</h2>

        <p>Enthusiastic Web Developer exploring the realms of design and development. Skilled in JavaScript, React, and Nextjs. Committed to continuous growth and creating captivating digital experiences. Let's collaborate and shape the web of tomorrow! </p>

        <button>Contact Me</button>
      </div>

      <div className={classes.profile}>


        <div className={classes['img-container']}>
          <Image
          src={'/images/avatar.png'}
          width={300}
          height={300}
          alt='avatar image for portfolio' 
          className={classes.avatar}
          />
        </div>
        


      </div>

    </section>
  )
}
