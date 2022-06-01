import React, { Component } from "react";
import "../css/Main.css";
import  LodgingCard  from "../components/LodgingCard"
import  LodgingCard1  from "../components/LodgingCard1"
import  LodgingCard2  from "../components/LodgingCard2"
import  LodgingCard3  from "../components/LodgingCard3"
import  LodgingCard4  from "../components/LodgingCard4"
import  LodgingCard5  from "../components/LodgingCard5"
import  LodgingCard6  from "../components/LodgingCard6"
import  LodgingCard7  from "../components/LodgingCard7"
import  LodgingCard8  from "../components/LodgingCard8"
import { FaAirbnb } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewComponent =  () => {
        return (

            <div>                
                <main id="main-page">
                    <nav className="main-navi">
                        <div className="logo">
                            <a href="https://www.airbnb.co.kr/">
                                <FaAirbnb /> airbnb
                            </a>
                        </div>
                        <div className="search">
                            <button className="button">
                                <div>어디든지 | 언제든 일주일 | 게스트추가</div>
                                <div className="rButton">
                                    <i className="fas fa-search" />
                                </div>
                            </button>
                        </div>
                        <div className="menu">
                            <div className="item">
                            <Link
                            to="/host"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                            }}>
                            <div className="host-btn">호스트 되기</div>
                        </Link>
                            </div>
                            <div className="item">
                                <i
                                    className="fas fa-globe"
                                    onclick="window.open() "
                                />
                            </div>
                            <button className="item">
                                <i className="fas fa-bars" />
                                <i className="fas fa-user-circle" />
                            </button>
                        </div>
                        <div />
                    </nav>
                    <div id="category-container">
                        <div id="category" />
                            <img src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" width = "30px" height = "30px" alt="" />
                            <img src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"width = "30px" height = "30px" alt=""/>
                            <img src= "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"width = "30px" height = "30px" alt=""/>
                            <img src= "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"width = "30px" height = "30px" alt=""/>
                            <img src= "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"width = "30px" height = "30px" alt=""/>
                            <img src= "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"width = "30px" height = "30px" alt=""/>
                            <img src=  "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"width = "30px" height = "30px" alt=""/>
                        </div>

                    <div id="main">              
                        <LodgingCard />
                        <LodgingCard1 />
                        <LodgingCard2 />
                        <LodgingCard3 />
                        <LodgingCard4 />
                        <LodgingCard5 />
                        <LodgingCard6 />
                        <LodgingCard7 />
                        <LodgingCard8 />
                    </div>
                
                </main>
                <footer id="footer">
                    <div className="grid">
                        <h3 />
                        <h4>
                            © 2022 Airbnb, Inc. · 개인정보 처리방침 · 이용약관 ·
                            사이트맵 · 한국의 변경된 환불 정책 · 회사 세부정보
                        </h4>
                        <h5>
                            {" "}
                            <i className="fas fa-globe" /> 한국어 (KR) ₩ KRW
                            지원 및 참고 자료
                            <i className="fas fa-angle-up" />
                        </h5>
                    </div>
                </footer>
            </div>
        );
    };

export default NewComponent;

export const NewComponent2 =  () => {
    return(
        <div>hi</div>
    )
}