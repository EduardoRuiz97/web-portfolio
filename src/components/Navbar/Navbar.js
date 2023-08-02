import Link from "next/link";
import classes from './Navbar.module.css';

export default function Navbar (){
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <Link href='/' class='links'>Home</Link>
        </li>

        <li>
          <Link href='/' class='links'>About me</Link>
        </li>

        <li>
          <Link href='/' class='links'>Skills</Link>
        </li>

        <li>
          <Link href='/' class='links'>Portfolio</Link>
        </li>
      </ul>
    </nav>
  )
};
