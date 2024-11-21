import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import useWindhowWidth from "../windowWidth";

export default function Menu() {
  const { isMobile, isTablet } = useWindhowWidth();

  const menuItemClasssName =
    isMobile || isTablet ? "menuItemContainerMobile" : "menuItemContainer";
  return (
    <div>
      <h1>Menu</h1>
      <ul
        className="menuContainer"
        style={{ flexDirection: isMobile || isTablet ? "column" : null }}
      >
        <li className={menuItemClasssName}>
          <img src="https://i.imgur.com/atPruMn.jpeg" alt="" />
          <section>
            <h3>Mediterranean Salad</h3>
            <p>
              Our Mediterranean salad is a mix of fresh greens, cherry tomatoes,
              cucumbers, and feta cheese.
            </p>
            <FaCircleArrowRight className="menuGoIcon" />
          </section>
        </li>
        <li className={menuItemClasssName}>
          <img src="https://i.imgur.com/JHDqyYG.jpeg" alt="" />
          <section>
            <h3>Meatball Sphagetti</h3>
            <p>
              Close your eyes and imagine the best meatball sphagetti you've
              ever had in your life
            </p>
            <FaCircleArrowRight className="menuGoIcon" />
          </section>
        </li>
        <li className={menuItemClasssName}>
          <img src="https://i.imgur.com/GazI6zs.jpeg" alt="" />
          <section>
            <h3>Sushi Heaven</h3>
            <p>
              Got Sushi? We do! Come and let our sushi chefs treat you to the
              best sushi you can find outside Japan
            </p>
            <FaCircleArrowRight className="menuGoIcon" />
          </section>
        </li>
        <li className={menuItemClasssName}>
          <img src="https://i.imgur.com/gU1NURi.jpeg" alt="" />
          <section>
            <h3>Brownie Decadance</h3>
            <p>
              Mix our decadent brownie with a scoop of delightful vanillca ice
              cream and you'll be in heaven..
            </p>
            <FaCircleArrowRight className="menuGoIcon" />
          </section>
        </li>
      </ul>
    </div>
  );
}
