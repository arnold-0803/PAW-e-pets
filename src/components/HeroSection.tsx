import "./HeroSectionStyles.css";
import image from "../photos/animals-2222007.jpg";
import { DescriptionList } from "../assets/types";

const HeroBannar: React.FC<DescriptionList> = ({list1, list2, list3, list4, bullets}) => {
  return (
    <div className="hero-wrapper">{}
       <div className="hero-content">
        <img src={image} alt="pets banner" />
        <div className="contents">
          <h2>Welcome to <span>P<i className="fa-solid fa-paw"></i>W</span> Pets Services.</h2>
          <ul>
            <li>
              <i className={bullets}></i> {list1}
            </li>
            <li>
              <i className={bullets}></i> {list2}
            </li>
            <li>
              <i className={bullets}></i> {list3}
            </li>
            <li>
              <i className={bullets}></i> {list4}
            </li>
          </ul>
        </div>
       </div>
    </div>
  );
}
 
export default HeroBannar;