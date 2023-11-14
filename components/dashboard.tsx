import Link from "next/link";
import { BiMessageSquareEdit } from 'react-icons/bi';
import { SiExercism } from 'react-icons/si';
import { PiChatsCircleDuotone, 
         PiGithubLogoDuotone,
         PiInstagramLogoDuotone,
         PiLinkedinLogoDuotone } from 'react-icons/pi';
import styles from './dashboard.module.css'; // Import the CSS file





// add day night mode switch to top right. reduce size of glow. think about diffferent colors. elastic scroll ease-out-back 
const Dashboard = () => {
  const appClass = "mx-auto p-5 bg-white dashboard-icon hover:cursor-pointer rounded-3xl";
  const iconColor = "#222222"
  return (
<div className="dashboard flex flex-direction-right mt-[40vh] mb-[10vh]">
      <div className="dashboard-icon-wrapper m-7 justify-center text-center sr1">
        <Link href="https://linkedin.com/in/alexcodes" target="_blank" rel="noopener noreferrer">
          <PiLinkedinLogoDuotone size="100%" color={iconColor} className={appClass} />
        </Link>
        <p className="text-lg mt-3">Linkedin</p>
      </div>
      <div className="dashboard-icon-wrapper m-7 justify-center text-center sr2">
      <Link href="#projects">
        <SiExercism size="100%" color={iconColor} className={appClass} />
      </Link>
      <p className="text-lg mt-3">Projects</p>
    </div>
      <div className="dashboard-icon-wrapper m-7 justify-center text-center sr3">
        <Link href="https://github.com/hereisalex" target="_blank" rel="noopener noreferrer">
          <PiGithubLogoDuotone size="100%" color={iconColor} className={appClass}  />
        </Link>
      <p className="text-lg mt-3">Github</p>
    </div>
      <div className="dashboard-icon-wrapper m-7 justify-center text-center sr4">
        <Link href="#blog">
          <BiMessageSquareEdit size="100%" color={iconColor} className={appClass} />
        </Link>
        <p className="text-lg mt-3">Blog</p>
      </div>
    <div className="dashboard-icon-wrapper m-7 justify-center text-center sr5">
      <Link href="https://instagram.com/alexmckenzie" target="_blank" rel="noopener noreferrer">
        <PiInstagramLogoDuotone size="100%" color={iconColor} className={appClass} />
      </Link>
      <p className="text-lg mt-3">Instagram</p>
    </div>
<div className="dashboard-icon-wrapper m-7 justify-center text-center sr6">
  <Link href="mailto:here.is.alex@gmail.com" target="_blank" rel="noopener noreferrer">
    <PiChatsCircleDuotone size="100%" color={iconColor} className={appClass} />
  </Link>
  <p className="text-lg mt-3">Contact</p>
</div>
<div className="absolute bottom-8 right-10">
<Link href="#blog">
<div className={styles.shakeVertical}>
        <h1 className="text-9xl">☟</h1>
      </div>
      </Link>
</div>
</div>
  );
};

export default Dashboard;
