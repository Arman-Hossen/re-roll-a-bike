import React from 'react';
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";
import logo from '../../../assets/favicon.ico'

const Footer = () => {
    return (
        <div >
           <footer className="footer footer-center p-10 ">
            <div>
                <img className="h-32 w-32 rounded-full" src={logo} alt="" />
                <h1 className='text-center'> REROllABIKE</h1>
                <p className="font-bold">
                Yesterday is history, tomorrow is a mystery; <br /> Ride and live today
                </p>
                <p>Copyright © 2022 - All right reserved - REROllABIKE</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className='h-24' href="https://github.com/Arman-Hossen">
                        <BsGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/md-arman-hossen-9699b5227/">
                        <BsFacebook />
                    </a>
                    <a href="https://www.instagram.com/arman_nur_tousif/">
                        <BsInstagram />
                    </a>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;