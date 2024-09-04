import React from 'react'
import { ElementorData } from '../data/ElementorData';
import CountUp, { CountUpProps } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import "./ElementorStyles.css";

interface CustomCounterProps extends CountUpProps {
  icon: string;
  symbol: string;
  description: string;
}

const Counter:React.FC<CustomCounterProps> = ({start, end, duration = 4, icon, symbol, description}) => {

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <i className={icon}></i>
      {inView && <CountUp start={start} end={end} duration={duration} className='number'/>}
      <span>{symbol}</span>
      <p>{description}</p>
    </div>
  )
}

const Elementor: React.FC = () => {
  return (
    <div className="elementor-wrapper">
      <div className="heading">
        <h3>Why Choose Us</h3>
      </div>
      <div className="elementor-content">
        {ElementorData.map((item, index) => (
          <Counter 
            start={item.start} 
            end={item.end} 
            key={index}
            icon={item.icon}
            symbol={item.symbol}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Elementor;