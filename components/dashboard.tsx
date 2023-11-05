import Link from "next/link";


import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { GrBlog } from 'react-icons/gr';
import { BsEnvelopeHeart } from 'react-icons/bs';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { SiExercism } from 'react-icons/si';
import {PiChatsCircleDuotone, PiGithubLogoDuotone, PiSealQuestionDuotone, PiInstagramLogoDuotone, PiLinkedinLogoDuotone } from 'react-icons/pi';
import { LiaGithubAlt } from 'react-icons/lia';
import { GiCrystalShrine, GiFloatingCrystal } from 'react-icons/gi';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

type App = {
  title: string;
  link: string;
  icon: React.ReactNode;
};
// add day night mode switch to top right. reduce size of glow. think about diffferent colors. elastic scroll ease-out-back 
const Dashboard = () => {
  const appClass = "mx-auto p-5 bg-white dashboard-icon hover:cursor-pointer rounded-3xl";
  const iconColor = "#222222"
  return (
<div className="dashboard my-3 flex flex-direction-right mt-[20vh]">
      <div className="dashboard-icon-wrapper m-7 justify-center text-center slide-in1">
        <Link href="https://linkedin.com/in/alexcodes">
          <PiLinkedinLogoDuotone size="100%" color={iconColor} className={appClass} />
        </Link>
        <p className="text-lg mt-3">Linkedin</p>
      </div>
<div className="dashboard-icon-wrapper m-7 justify-center text-center slide-in1">
  <Link href="mailto:here.is.alex@gmail.com">
    <PiChatsCircleDuotone size="100%" color={iconColor} className={appClass} />
  </Link>
  <p className="text-lg mt-3">Contact</p>
</div>
      <div className="dashboard-icon-wrapper m-7 justify-center text-center slide-in1">
        <Link href="https://github.com/hereisalex">
          <PiGithubLogoDuotone size="100%" color={iconColor} className={appClass}  />
        </Link>
      <p className="text-lg mt-3">Github</p>
    </div>
    <div className="dashboard-icon-wrapper m-7 justify-center text-center slide-in1">
      <Link href="/projects">
        <SiExercism size="100%" color={iconColor} className={appClass} />
      </Link>
      <p className="text-lg mt-3">Projects</p>
    </div>
    <div className="dashboard-icon-wrapper m-7 justify-center text-center slide-in1">
      <Link href="https://instagram.com/alexmckenzie">
        <PiInstagramLogoDuotone size="100%" color={iconColor} className={appClass} />
      </Link>
      <p className="text-lg mt-3">Instagram</p>
    </div>
      <div className="dashboard-icon-wrapper m-7 justify-center text-center slide-in1">
        <Link href="#blog">
          <BiMessageSquareEdit size="100%" color={iconColor} className={appClass} />
        </Link>
        <p className="text-lg mt-3">Blog</p>
      </div>
    <div className="dashboard-icon-wrapper m-7 justify-center text-center slide-in1">
      <Link href="/lucky">
        <PiSealQuestionDuotone size="100%" color={iconColor} className={appClass} />
      </Link>
      <p className="text-lg mt-3">I'm Feeling Lucky</p>
    </div>
  </div>
  );
};

export default Dashboard;
