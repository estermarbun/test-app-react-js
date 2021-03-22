import React from "react";
import logo from "./image/logo.png";
import searchIcon from "./image/search.png";
import notifIcon from "./image/notification.png";
import imgBox from "./image/mobel.png";
import imgCarousel from "./image/mobile_legend.jpg";
import imgCarousel2 from "./image/Garena-Free-Fire.jpg";
import imgCarousel3 from "./image/pubg.jpg";

import "./Style.css";

var slideIndex = 1;

class TestApp extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }
  handleOnClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  handleTabOnClick(event, name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(name).style.cssText = "display: block;";
    event.currentTarget.className += " active";
  }

  plusSides(e) {
    this.showSlides((slideIndex += e));
  }

  currentSlides(e) {
    this.showSlides((slideIndex = e));
  }

  showSlides(e) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (e > slides.length) {
      slideIndex = 1;
    }
    if (e < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  render() {
    let clicked = this.state.clicked;
    return (
      <div className="app">
        <header id="header" className="fixed-top">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <a href="/" className="a">
                <img src={logo} alt="" className="img-fluid" />
              </a>
            </div>

            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li>
                  <a href="/" className="a">
                    <img src={searchIcon} alt="" className="icon" />
                  </a>
                </li>
                <li>
                  <a href="/" className="a">
                    <img src={notifIcon} alt="" className="icon" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main id="body" onLoad={() => this.showSlides(1)}>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img src={imgCarousel} className="slideImg" alt="" />
            </div>

            <div className="mySlides fade">
              <img src={imgCarousel2} className="slideImg" alt="" />
            </div>

            <div className="mySlides fade">
              <img src={imgCarousel3} className="slideImg" alt="" />
            </div>

            <button className="prev" onClick={() => this.plusSides(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => this.plusSides(1)}>
              &#10095;
            </button>
          </div>
          <div>
            <div style={{ textAlign: "left", marginLeft: "50px" }}>
              <span
                className="dot"
                onClick={() => this.currentSlides(1)}
              ></span>
              <span
                className="dot"
                onClick={() => this.currentSlides(2)}
              ></span>
              <span
                className="dot"
                onClick={() => this.currentSlides(3)}
              ></span>
            </div>
          </div>

          <div className="container">
            <div className="wrapper tab">
              <button
                className="tab-link"
                onClick={(e) => this.handleTabOnClick(e, "ML")}
              >
                <div className="menu-item"> Mobile Legend </div>
              </button>
              <button
                className="tab-link"
                onClick={(e) => this.handleTabOnClick(e, "FF")}
              >
                <div className="menu-item">Free Fire</div>
              </button>
              <button
                className="tab-link"
                onClick={(e) => this.handleTabOnClick(e, "VL")}
              >
                {" "}
                <div className="menu-item">Voucher Lytho</div>
              </button>
              <button
                className="tab-link"
                onClick={(e) => this.handleTabOnClick(e, "VG")}
              >
                {" "}
                <div className="menu-item">Voucher Garena</div>
              </button>
              <button
                className="tab-link"
                onClick={(e) => this.handleTabOnClick(e, "PB")}
              >
                <div className="menu-item">PUBG</div>
              </button>
            </div>
          </div>

          <div id="ML" className="tab-content box">
            <div className="row  box-body imgShadow">
              <div className="col-md-4 col-sm-4">
                <img src={imgBox} alt="" className="box-img" />
              </div>
              <div className="col-md-6 col-sm-6">
                <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
              </div>
              <div className="col-md-2 col-sm-2">
                {
                  <button
                    onClick={() => this.handleOnClick()}
                    className="icon-button"
                  >
                    <div
                      className={
                        clicked ? "icon-empty-heart" : "icon-full-heart"
                      }
                    ></div>
                  </button>
                }
              </div>
            </div>

            <div className="row  box-body imgShadow">
              <div className="col-md-4 col-sm-4">
                <img src={imgBox} alt="" className="box-img" />
              </div>
              <div className="col-md-6 col-sm-6">
                <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
              </div>
              <div className="col-md-2 col-sm-2">
                {
                  <button
                    onClick={() => this.handleOnClick()}
                    className="icon-button"
                  >
                    <div
                      className={
                        clicked ? "icon-empty-heart" : "icon-full-heart"
                      }
                    ></div>
                  </button>
                }
              </div>
            </div>

            <div className="row  box-body imgShadow">
              <div className="col-md-4 col-sm-4">
                <img src={imgBox} alt="" className="box-img" />
              </div>
              <div className="col-md-6 col-sm-6">
                <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
              </div>
              <div className="col-md-2 col-sm-2">
                {
                  <button
                    onClick={() => this.handleOnClick()}
                    className="icon-button"
                  >
                    <div
                      className={
                        clicked ? "icon-empty-heart" : "icon-full-heart"
                      }
                    ></div>
                  </button>
                }
              </div>
            </div>
          </div>

          <div id="FF" className="tab-content box">
            <a href="/" className="a">
              <div className="row  box-body imgShadow">
                <div className="col-md-4 col-sm-4">
                  <img src={imgBox} alt="" className="box-img" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                  <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                  <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
                </div>
                <div className="col-md-2 col-sm-2">
                  {
                    <button
                      onClick={() => this.handleOnClick()}
                      className="icon-button"
                    >
                      <div
                        className={
                          clicked ? "icon-empty-heart" : "icon-full-heart"
                        }
                      ></div>
                    </button>
                  }
                </div>
              </div>
            </a>
          </div>

          <div id="VL" className="tab-content box">
            <a href="/" className="a">
              <div className="row  box-body imgShadow">
                <div className="col-md-4 col-sm-4">
                  <img src={imgBox} alt="" className="box-img" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                  <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                  <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
                </div>
                <div className="col-md-2 col-sm-2">
                  {
                    <button
                      onClick={() => this.handleOnClick()}
                      className="icon-button"
                    >
                      <div
                        className={
                          clicked ? "icon-empty-heart" : "icon-full-heart"
                        }
                      ></div>
                    </button>
                  }
                </div>
              </div>
            </a>
            <a href="/" className="a">
              <div className="row  box-body imgShadow">
                <div className="col-md-4 col-sm-4">
                  <img src={imgBox} alt="" className="box-img" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                  <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                  <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
                </div>
                <div className="col-md-2 col-sm-2">
                  {
                    <button
                      onClick={() => this.handleOnClick()}
                      className="icon-button"
                    >
                      <div
                        className={
                          clicked ? "icon-empty-heart" : "icon-full-heart"
                        }
                      ></div>
                    </button>
                  }
                </div>
              </div>
            </a>{" "}
          </div>

          <div id="VG" className="tab-content box">
            <a href="/" className="a">
              <div className="row  box-body imgShadow">
                <div className="col-md-4 col-sm-4">
                  <img src={imgBox} alt="" className="box-img" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                  <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                  <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
                </div>
                <div className="col-md-2 col-sm-2">
                  {
                    <button
                      onClick={() => this.handleOnClick()}
                      className="icon-button"
                    >
                      <div
                        className={
                          clicked ? "icon-empty-heart" : "icon-full-heart"
                        }
                      ></div>
                    </button>
                  }
                </div>
              </div>
            </a>
            <a href="/" className="a">
              <div className="row  box-body imgShadow">
                <div className="col-md-4 col-sm-4">
                  <img src={imgBox} alt="" className="box-img" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                  <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                  <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
                </div>
                <div className="col-md-2 col-sm-2">
                  {
                    <button
                      onClick={() => this.handleOnClick()}
                      className="icon-button"
                    >
                      <div
                        className={
                          clicked ? "icon-empty-heart" : "icon-full-heart"
                        }
                      ></div>
                    </button>
                  }
                </div>
              </div>
            </a>
            <a href="/" className="a">
              <div className="row  box-body imgShadow">
                <div className="col-md-4 col-sm-4">
                  <img src={imgBox} alt="" className="box-img" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                  <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                  <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
                </div>
                <div className="col-md-2 col-sm-2">
                  {
                    <button
                      onClick={() => this.handleOnClick()}
                      className="icon-button"
                    >
                      <div
                        className={
                          clicked ? "icon-empty-heart" : "icon-full-heart"
                        }
                      ></div>
                    </button>
                  }
                </div>
              </div>
            </a>{" "}
          </div>

          <div id="PB" className="tab-content box">
            <a href="/" className="a">
              <div className="row  box-body imgShadow">
                <div className="col-md-4 col-sm-4">
                  <img src={imgBox} alt="" className="box-img" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <h2 style={{ fontSize: "100%" }}>King of The Fighter</h2>
                  <h2 style={{ color: "red", fontSize: "100%" }}>Rp 100.000</h2>
                  <label style={{ fontSize: "50%" }}>999+ Produk Terjual</label>
                </div>
                <div className="col-md-2 col-sm-2">
                  {
                    <button
                      onClick={() => this.handleOnClick()}
                      className="icon-button"
                    >
                      <div
                        className={
                          clicked ? "icon-empty-heart" : "icon-full-heart"
                        }
                      ></div>
                    </button>
                  }
                </div>
              </div>
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default TestApp;
