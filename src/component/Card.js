import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="main">
        <div className="card">
          <div className="image">
            <img src="./images/card_1.jpeg" alt="" />
            <h1>Malto House</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/card_2.jpg" alt="" />
            <h1>Royal mansion</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/card_3.jpg" alt="" />
            <h1>Royal palace</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/card_4.jpg" alt="" />
            <h1>Taj Vivanta</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/card_5.jpg" alt="" />
            <h1>Chandini</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/card_6.jpg" alt="" />
            <h1>Raj cottege</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/card_7.jpg" alt="" />
            <h1>The willows</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
        <div className="card">
          <div className="image">
            <img src="./images/card_8.jpg" alt="" />
            <h1>Sam Villa</h1>
            <hr />
            <p>This is description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
