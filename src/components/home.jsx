import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 
import CustomerSupport from '../images/customersupport.jpg';
import LowInterest from '../images/low_interest.jpg';
import OnlineBanking from '../images/onlinebanking.jpg';
import ATMs from '../images/atm.jpg';
import Rewards from '../images/rewards.jpg';

function Home() {
  return (
    <>
    <div class="welcome-text">
  Welcome to Abi Bank!
</div>
     
           <div className="carousel-container">
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <img
             id="slide"
              className="carousel-image"
              src={CustomerSupport}
              alt="24/7 Customer Support"
            />
            <Carousel.Caption>
              <h5>24/7 Customer Support</h5>
              <p>We are here to help you anytime, anywhere.</p>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
            <img
             id="slide"
              className="carousel-image"
              src={OnlineBanking}
              alt="Secure Online Banking"
            />
            <Carousel.Caption>
              <h5>Secure Online Banking</h5>
              <p>Experience the most secure online banking.</p>
            </Carousel.Caption>
          </Carousel.Item>          
          
          <Carousel.Item>
            <img
             id="slide"
              className="carousel-image"
              src={LowInterest}
              alt="Low Interest Rates"
            />
            <Carousel.Caption>
              <h5>Low Interest Rates</h5>
              <p>Enjoy the lowest interest rates on loans.</p>
            </Carousel.Caption>
          </Carousel.Item>
         
          <Carousel.Item>
            <img
             id="slide"
              className="carousel-image"
              src={ATMs}
              alt="Wide Network of ATMs"
            />
            <Carousel.Caption>
              <h5>Wide Network of ATMs</h5>
              <p>Access your money from anywhere with our wide network of ATMs.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
             id="slide"
              className="carousel-image"
              src={Rewards}
              alt="Exclusive Rewards Program"
            />
            <Carousel.Caption>
              <h5>Exclusive Rewards Program</h5>
              <p>Join our rewards program and enjoy exclusive benefits.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Home;