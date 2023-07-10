import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 BP Ecommerce All rights reserverd</p>
      <p>Disclaimer: Please do not provide your details to this app. </p>
      <p>This is a demo app and not for commercial purposes. Products displayed are not for sale.</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer