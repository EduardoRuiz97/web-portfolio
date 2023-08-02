import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/Sidebar";
import classes from './Layout.module.css';

const LayoutRoot = (props) => {

  return (
    <body>

      <header>
        <Navbar />
      </header>

      <main className={classes.main}>


        <SideBar />

        <div className={classes.content}>
          {props.children}
        </div>

      </main>


      <div className={classes.patternA}></div>
      <div className={classes.patternB}></div>
    
    </body>
  )
};


export default LayoutRoot;