import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </>
  );
};

export default Header;
