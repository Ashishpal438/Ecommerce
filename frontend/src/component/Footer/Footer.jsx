import React from "react";
import "./footer.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AppsIcon from "@mui/icons-material/Apps";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
// import { Footer2 } from "./Footer2";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h3>ONLINE SHOPPING</h3>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home &amp; Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>Myntra Insider New</p>
        </div>
        <div className="footer-row">
          <h3>USEFUL LINKS</h3>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&amp;C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Whitehat</p>
          <p>Site Map</p>
        </div>
        <div className="footer-row">
          <h3>EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="app">
            <img
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt="app"
              width="135px"
              className="appStore googleApp"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt="app"
              className="appStore"
              width="120px"
            />
          </div>
          <h3 className="social">KEEP IN TOUCH</h3>
          <div>
            <a href="https://www.facebook.com/" target="_blank">
              <FacebookIcon className="social1"></FacebookIcon>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <TwitterIcon className="social1"></TwitterIcon>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <YouTubeIcon className="social1"></YouTubeIcon>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramIcon className="social1"></InstagramIcon>
            </a>
          </div>
        </div>
        <div className="footer-row">
          <div className="que">
            <img
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              alt="return"
              width={30}
            />
            <p className="quality">
              <b>100% ORIGINAL</b> guarantee for all products at myntra.com
            </p>
          </div>
          <div className="que">
            <img
              src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
              alt="return"
              width={30}
            />
            <p className="quality">
              <b> Return within 30days</b> of receiving your order
            </p>
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Footer;
