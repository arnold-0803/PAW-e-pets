import React from 'react'
import { ElementorData } from '../data/ElementorData';

const Elementor = () => {
  return (
    <div className="elementor">
      <div className="heading">
        <h3>Why Choose Us</h3>
      </div>
      <div className="elementor-content">
        {ElementorData.map((item, index) => (
          <div className="content" key={index}>
            <h2>
              <i className={item.icon}></i> {item.figure}
              <span>{item.symbol}</span>
            </h2>
            <p><b>{item.description}</b></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Elementor;