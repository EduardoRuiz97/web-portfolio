import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail, BiSolidPhone} from "react-icons/bi";
import classes from './SideBar.module.css';

export default function SideBar() {
  return (
    <aside className={classes.sideBar}>

      <div className={classes.content}>

        <ul>
          <li>
            <a href="#">
              <AiFillGithub className={classes.icon}/>
            </a>
          </li>

          <li>
            <a>
              <AiFillLinkedin className={classes.icon}/>
            </a>
          </li>

          <li>
            <BiLogoGmail className={classes.icon}/>
            {/* <span className={classes.popUp}>jerpig97@gmail.com</span> */}
          </li>

          <li>
            <BiSolidPhone className={classes.icon}/>
            {/* <span className={classes.popUp}>437 255 2196</span> */}
          </li>

        </ul>

      </div>

    </aside>
  )
};
