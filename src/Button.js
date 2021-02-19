import { PropTypes } from "prop-types";
function Button({ clickFunction }) {
  return (
    <>
      <button
        onClick={() => {
          clickFunction(1);
        }}
        style={{ color: "white", backgroundColor: "black" }}
      >
        Click here
      </button>
    </>
  );
}
Button.propTypes = {
  clickFunction: PropTypes.func,
};

export default Button;
