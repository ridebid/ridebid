import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

import '../styles/BidContainer.css';

class BidContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper--bid">
        <header className="bid--header">
          <h1>Your Bids</h1>
        </header>
        <main className="bid--main">
          <div className="main--container">
            <div className="container--tile">
              <div className="tile--pic1"></div>
              <div className="tile--info">
                <h4 className="info--name">Lexus</h4>
                <p className="info--price">$70</p>
                <p className="info--time">00:30:59</p>
              </div>
            </div>
            <div className="container--tile">
              <div className="tile--lose">END</div>
              <div className="tile--pic2"></div>
              <div className="tile--info">
                <h4 className="info--name">Lexus</h4>
                <p className="info--price">$70</p>
                <p className="info--time">00:00:00</p>
              </div>
            </div>
            <div className="container--tile tile--win">

              <svg className="crown" width="109" height="109" viewBox="0 0 109 109">
                <g clip-path="url(#clip0)">
                  <path d="M65.1214 82.3555L23.7721 54.709C23.1404 54.2866 22.7589 53.5798 22.7522 52.8201C22.6457 41.1721 32.5169 25.5026 34.0127 23.1968C34.0706 23.106 34.1301 23.0148 34.1903 22.9248C34.8945 21.8715 36.3186 21.5874 37.3731 22.2896L37.3771 22.2923C38.4283 22.9951 38.7141 24.4168 38.0149 25.4712C38.0063 25.484 37.9313 25.5971 37.8022 25.8C34.3376 31.3458 35.8899 38.7039 41.3633 42.3635C46.943 46.0942 54.5175 44.5898 58.2482 39.0101C58.9534 37.9554 60.3803 37.6724 61.4345 38.3773L65.821 41.3102C66.8757 42.0153 67.159 43.4418 66.4538 44.4965C62.7232 50.0762 64.228 57.651 69.8077 61.3817C75.2861 65.0446 82.6873 63.6613 86.4854 58.3286C86.6166 58.1399 86.689 58.0337 86.6973 58.0214C87.4048 56.9718 88.8272 56.6923 89.8789 57.3955L89.8824 57.3978C90.9343 58.104 91.2159 59.5286 90.5118 60.5818C90.4512 60.6723 90.39 60.7617 90.3284 60.8507C88.7691 63.1133 78.0605 78.2237 67.2563 82.5767C66.552 82.8603 65.7526 82.7775 65.1214 82.3555Z" fill="#FFF780" />
                  <path d="M89.8824 57.3978C89.8814 57.3971 89.8804 57.3965 89.8789 57.3955C88.8277 56.6926 87.4048 56.9718 86.6976 58.0208C86.689 58.0337 86.6171 58.1402 86.4854 58.3285C82.6876 63.6608 75.2861 65.0445 69.8077 61.3817C64.228 57.651 62.7237 50.0765 66.4543 44.4967C67.1595 43.442 66.8757 42.0153 65.8215 41.3104L63.6285 39.8442L44.4476 68.532L65.1217 82.3549C65.7534 82.7773 66.5523 82.8598 67.2566 82.5762C78.0613 78.2235 88.7699 63.1131 90.3287 60.8502C90.3905 60.762 90.452 60.6721 90.5122 60.5821C91.2159 59.5285 90.9343 58.1039 89.8824 57.3978Z" fill="#FFC02E" />
                  <path d="M67.9845 33.3282C64.5824 31.0535 59.964 31.9707 57.6893 35.3728C55.4146 38.7749 56.3322 43.3929 59.7343 45.6675C63.1364 47.9422 67.7545 47.0254 70.0292 43.6234C72.3038 40.2213 71.3866 35.6028 67.9845 33.3282Z" fill="#FFC02E" />
                  <path d="M67.985 33.3285L59.7344 45.6684C63.1369 47.9425 67.7545 47.0254 70.0292 43.6234C72.3038 40.2213 71.3862 35.6033 67.985 33.3285Z" fill="#FFA73B" />
                  <path d="M38.55 20.5381C35.1479 18.2634 30.5294 19.1806 28.2548 22.5827C25.9801 25.9848 26.8974 30.6033 30.2994 32.8779C33.7015 35.1526 38.3195 34.235 40.5942 30.8329C42.8688 27.4309 41.9521 22.8127 38.55 20.5381Z" fill="#FFC02E" />
                  <path d="M91.0518 55.6412C87.6498 53.3666 83.0318 54.2842 80.7571 57.6862C78.4828 61.0878 79.3995 65.706 82.8016 67.9806C86.2037 70.2553 90.8222 69.338 93.0965 65.9365C95.3711 62.5344 94.4539 57.9159 91.0518 55.6412Z" fill="#FFA73B" />
                  <path d="M60.9329 88.6199L19.5837 60.9734C18.529 60.2682 18.2457 58.8418 18.9509 57.7871L22.7583 52.0925L67.9266 82.2925L64.1192 87.987C63.414 89.0418 61.9876 89.325 60.9329 88.6199Z" fill="#FFC02E" />
                  <path d="M40.2588 74.797L60.9329 88.6199C61.9876 89.3251 63.414 89.0418 64.1192 87.9871L67.9266 82.2925L45.3429 67.1929L40.2588 74.797Z" fill="#FFA73B" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="78" height="78" fill="white" transform="translate(43.3538) rotate(33.7671)" />
                  </clipPath>
                </defs>
              </svg>
              <div className="tile--pic3"></div>
              <div className="tile--info">
                <h4 className="info--name">Lexus</h4>
                <p className="info--price">$70</p>
                <p className="info--time">00:00:00</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default BidContainer;