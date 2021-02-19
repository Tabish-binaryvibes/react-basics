import { PropTypes } from "prop-types";
import Button from "./Button";
function Header(props) {
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>This is {props.title}</h1>
      <h1 className="sec">This is Second Line</h1>
      <Button />
    </>
  );
}
Header.defaultProps = {
  title: "Header 1",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
