
import React, { Component } from "react";
import "./App.css";
import { FaAirbnb } from "react-icons/fa";
const NewComponent = function () {
        return (
            <div>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>숙소, 체험, 장소를 모두 한 곳에서 - 에어비앤비</title>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
                    integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
                    crossOrigin="anonymous"
                />
  
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
                                <a href="https://www.airbnb.co.kr/host/homes">
                                    호스트되기
                                </a>
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



                    <div className="box">
                        <a
                            href="https://www.airbnb.co.kr/rooms/604726298950758799?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2023-01-28&check_out=2023-02-04&previous_page_section_name=1000&federated_search_id=5cd3cb23-ef7e-4964-9577-687501392deb"
                            target="_blank"
                        >
                            {" "}
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-604726298950758799/original/78d55499-cb48-4e83-a75f-faa42dd7d1ff.jpeg?im_w=720"
                                width={300}
                                height={300}
                                alt="덴마크"
                            />
                        </a>
                        <button>
                            {" "}
                            <a
                                href="https://www.airbnb.co.kr/rooms/604726298950758799?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2023-01-28&check_out=2023-02-04&previous_page_section_name=1000&federated_search_id=5cd3cb23-ef7e-4964-9577-687501392deb"
                                target="_blank"
                            >
                                Vestervig 덴마크 숙소 둘러보기
                            </a>
                        </button>
                        <a
                            href="https://www.airbnb.co.kr/rooms/604726298950758799?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2023-01-28&check_out=2023-02-04&previous_page_section_name=1000&federated_search_id=5cd3cb23-ef7e-4964-9577-687501392deb"
                            target="_blank"
                        ></a>
                        <a
                            href="https://www.airbnb.co.kr/rooms/41015249?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-31&check_out=2022-06-05&federated_search_id=c18ee362-8941-4cc0-8259-b36f07df8436&source_impression_id=p3_1652855578_Imhp%2FCUoZul5K%2FUk"
                            target="_blank"
                        >
                            <img
                                src="https://a0.muscache.com/im/pictures/d12de01d-61ad-48eb-8def-e3208a669dcb.jpg?im_w=720"
                                width={300}
                                height={300}
                                alt=""
                            />
                        </a>
                        <button onclick="location.href='https://www.airbnb.co.kr/rooms/41015249?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-31&check_out=2022-06-05&federated_search_id=c18ee362-8941-4cc0-8259-b36f07df8436&source_impression_id=p3_1652855578_Imhp%2FCUoZul5K%2FUk'">
                            Pemuteran, 인도네시아 숙소 둘러보기
                        </button>
                    </div>
                    <div className="box">
                        <a
                            href="https://www.airbnb.co.kr/luxury/listing/553449454187790697?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-18&check_out=2022-05-23&previous_page_section_name=1000&federated_search_id=5ce725fb-2c15-4cdc-a508-04a98f1d4ed5"
                            target="_blank"
                        >
                            <img
                                src="https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720"
                                width={300}
                                height={300}
                                alt=""
                            />
                        </a>
                        <button onclick="location.href='https://www.airbnb.co.kr/luxury/listing/553449454187790697?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-18&check_out=2022-05-23&previous_page_section_name=1000&federated_search_id=5ce725fb-2c15-4cdc-a508-04a98f1d4ed5'">
                            Gardone Riviera, 이탈리아 숙소 둘러보기
                        </button>
                        <a
                            href="https://www.airbnb.co.kr/rooms/45465864?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-28&check_out=2022-06-02&previous_page_section_name=1000&federated_search_id=5ce725fb-2c15-4cdc-a508-04a98f1d4ed5"
                            target="_blank"
                        >
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=720"
                                width={300}
                                height={300}
                                alt=""
                            />
                        </a>
                        <button onclick="location.href='https://www.airbnb.co.kr/rooms/45465864?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-28&check_out=2022-06-02&previous_page_section_name=1000&federated_search_id=5ce725fb-2c15-4cdc-a508-04a98f1d4ed5'">
                            Terrasini, 이탈리아 숙소 둘러보기
                        </button>
                    </div>
                    <div className="box">
                        <a
                            href="https://www.airbnb.co.kr/rooms/plus/34444025?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-09-25&check_out=2022-09-30&federated_search_id=516a0bf9-8807-4e2a-82d6-674ba179a6d3&source_impression_id=p3_1652848111_1%2FlXRDmJbHxQcx9a"
                            target="_blank"
                        >
                            {" "}
                            <img
                                src="https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720"
                                width={300}
                                height={300}
                                alt="노르웨이"
                            />
                        </a>
                        <button>
                            {" "}
                            <a
                                href="https://www.airbnb.co.kr/rooms/plus/34444025?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-09-25&check_out=2022-09-30&federated_search_id=516a0bf9-8807-4e2a-82d6-674ba179a6d3&source_impression_id=p3_1652848111_1%2FlXRDmJbHxQcx9a"
                                target="_blank"
                            >
                                Raelingen, 노르웨이 숙소 둘러보기
                            </a>
                        </button>
                        <a
                            href="https://www.airbnb.co.kr/rooms/plus/34444025?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-09-25&check_out=2022-09-30&federated_search_id=516a0bf9-8807-4e2a-82d6-674ba179a6d3&source_impression_id=p3_1652848111_1%2FlXRDmJbHxQcx9a"
                            target="_blank"
                        ></a>
                        <a
                            href="https://www.airbnb.co.kr/luxury/listing/41232703?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-23&check_out=2022-05-28&federated_search_id=16a92388-5f78-4ba0-af9b-b94ec7e7cb91&source_impression_id=p3_1652989647_DE3VC1lNh0oXmU2X"
                            target="_blank"
                        >
                            <img
                                src="https://a0.muscache.com/im/pictures/monet/Luxury-41232703/original/6572e163-647b-4a5c-a738-8bd3c044fc70?im_w=720"
                                width={300}
                                height={300}
                                alt=""
                            />
                        </a>
                        <button onclick="location.href='https://www.airbnb.co.kr/luxury/listing/41232703?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-23&check_out=2022-05-28&federated_search_id=16a92388-5f78-4ba0-af9b-b94ec7e7cb91&source_impression_id=p3_1652989647_DE3VC1lNh0oXmU2X'">
                            Kecamatan Mengwi, 인도네시아 숙소 둘러보기
                        </button>
                    </div>
                    <div className="box">
                        <a
                            href="https://www.airbnb.co.kr/rooms/47771464?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-10-24&check_out=2022-10-29&previous_page_section_name=1000&federated_search_id=c18ee362-8941-4cc0-8259-b36f07df8436"
                            target="_blank"
                        >
                            {" "}
                            <img
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720"
                                width={300}
                                height={300}
                                alt=""
                            />
                        </a>
                        <button onclick="location.href='https://www.airbnb.co.kr/rooms/47771464?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-10-24&check_out=2022-10-29&previous_page_section_name=1000&federated_search_id=c18ee362-8941-4cc0-8259-b36f07df8436'">
                            트위젤, 뉴질랜드 숙소 둘러보기
                        </button>
                        <a
                            href="https://www.airbnb.co.kr/luxury/listing/28540017?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-20&check_out=2022-05-25&federated_search_id=16a92388-5f78-4ba0-af9b-b94ec7e7cb91&source_impression_id=p3_1652989756_6Teb6%2FrUKKIR0ENg"
                            target="_blank"
                        >
                            <img
                                src="https://a0.muscache.com/im/pictures/monet/Luxury-28540017/original/42cde801-3346-41c6-a63a-40bd5a2d5867?im_w=720"
                                width={300}
                                height={300}
                                alt=""
                            />
                        </a>
                        <button onclick="location.href='https://www.airbnb.co.kr/luxury/listing/28540017?adults=1&category_tag=Tag%3A8528&children=0&infants=0&search_mode=flex_destinations_search&check_in=2022-05-20&check_out=2022-05-25&federated_search_id=16a92388-5f78-4ba0-af9b-b94ec7e7cb91&source_impression_id=p3_1652989756_6Teb6%2FrUKKIR0ENg'">
                            Kabupaten Badung, 인도네시아 숙소 둘러보기
                        </button>
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
