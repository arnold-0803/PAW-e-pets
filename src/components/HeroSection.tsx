import "./HeroSectionStyles.css";
import image from "../photos/animals-2222007.jpg"

const HeroBannar = () => {
  return (
    <div className="hero-wrapper">
       <div className="hero-content">
        <img src={image} alt="pets banner" />
        <div className="contents">
          <h2>Welcome to <span>P<i className="fa-solid fa-paw"></i>W</span> Pets Services.
          </h2>
          <ul>
            <li><i className="fa-solid fa-paw"></i> list1</li>
            <li><i className="fa-solid fa-paw"></i> list2</li>
            <li><i className="fa-solid fa-paw"></i> list3</li>
            <li><i className="fa-solid fa-paw"></i> list4</li>
          </ul>
        </div>
       </div>
    </div>
  );
}
 
export default HeroBannar;