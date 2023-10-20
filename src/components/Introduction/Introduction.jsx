import React, {useState} from 'react';
import './Introdustion.scss'
import mainImg from "../../assets/img/MAN.png"
import Popup from "../Popup/Popup";
function Introduction(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <section className="main container">
                <h1 className="main_heading">Нe упусти <br/> возможность войти <br/>в <b>прибыльную нишу</b></h1>
                <p className="main_subheading">Получи все нужные навыки для заработка <br/>на NFT всего за 28 дней!</p>
                <button onClick={openPopup} className="main_button button">Начать зарабатывать на NFT</button>
                <div className="main_wrapper-img">
                    <img className="main_img" src={mainImg} alt="man"/>
                    <svg className="main_ellipse" xmlns="http://www.w3.org/2000/svg" width="97" height="97" viewBox="0 0 97 97" fill="none">
                        <g filter="url(#filter0_f_2_688)">
                            <circle cx="48.4168" cy="48.4168" r="43.758" transform="rotate(-25.7323 48.4168 48.4168)" fill="url(#paint0_radial_2_688)"/>
                            <circle cx="48.4168" cy="48.4168" r="43.258" transform="rotate(-25.7323 48.4168 48.4168)" stroke="url(#paint1_radial_2_688)"/>
                        </g>
                        <defs>
                            <filter id="filter0_f_2_688" x="0.648804" y="0.648804" width="95.536" height="95.5361" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2_688"/>
                            </filter>
                            <radialGradient id="paint0_radial_2_688" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.09 8.69807) rotate(90.4621) scale(83.4794)">
                                <stop stopColor="#DDF92C"/>
                                <stop offset="0.445112" stopColor="#8FEC36"/>
                                <stop offset="1" stopColor="#00D448"/>
                            </radialGradient>
                            <radialGradient id="paint1_radial_2_688" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.3479 12.107) rotate(80.1061) scale(81.2765)">
                                <stop stopColor="#E2C1FF" stopOpacity="0.53"/>
                                <stop offset="1" stopColor="#853DF2" stopOpacity="0.55"/>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <Popup isOpen={isOpen} closePopup={closePopup}/>

        </section>
    );
}

export default Introduction;