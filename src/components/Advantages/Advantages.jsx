import React from 'react';
import "./Advantages.scss"
import Balloons from "../Baloons/Baloons";
import emojis_1 from "../../assets/img/advantages_emojis_1.png"
import emojis_2 from "../../assets/img/advantages_emojis_2.png"
import emojis_3 from "../../assets/img/advantages_emojis_3.png"
import emojis_4   from "../../assets/img/advantages_emojis_4.png"
import bg  from "../../assets/img/advantages_card.svg"
function Advantages(props) {
    return (
        <section className="section_advantages">
            <div className="container section_advantages-p-0">
                <div className="section_advantages_wrapper">
                    <h2>Что даст тебе обучение?</h2>
                    <Balloons/>
                    <div className="section_advantages_cards">
                        <div className="section_advantages_card">
                            <img className="section_advantages_card_emoji" src={emojis_1} alt="emojis"/>
                            <span>Откроешь свой первый криптокошелек и научишься с ним работать</span>
                            <img  className="section_advantages_card_bg" src={bg} alt=""/>
                        </div>
                        <div className="section_advantages_card">
                            <img className="section_advantages_card_emoji" src={emojis_4} alt="emojis"/>
                            <span>Поймёшь, как выбирать правильные дропы</span>
                            <img  className="section_advantages_card_bg" src={bg} alt=""/>

                        </div>
                        <div className="section_advantages_card">
                            <img className="section_advantages_card_emoji" src={emojis_2} alt="emojis"/>
                            <span>Построишь план по быстрому приумножению заработанных средств</span>
                            <img  className="section_advantages_card_bg" src={bg} alt=""/>

                        </div>
                        <div className="section_advantages_card">
                            <img className="section_advantages_card_emoji" src={emojis_3} alt="emojis"/>
                            <span>Узнаешь кто такие холдеры и флипперы</span>
                            <img  className="section_advantages_card_bg" src={bg} alt=""/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advantages;