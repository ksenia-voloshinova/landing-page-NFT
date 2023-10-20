import React from 'react';
import "./Popup.scss"
import { FaTimes } from 'react-icons/fa';

function Popup({isOpen, closePopup}) {
    return (
        <div className={ isOpen ? "popup active" : "popup"}>
            <div className="popup_content">
                <h2>Начни прямо сейчас!</h2>
                <p>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                <form className="popup_content_form" action="submit">
                    <input className="popup_content_form_input" placeholder="Ваш email" type="email"/>
                    <button className="button">Оплатить</button>
                </form>
                <FaTimes onClick={closePopup} className="popup_content_close"/>
            </div>

        </div>
    );
}

export default Popup;