function Button() {
  const handleClick = (e) => {
    console.log(e, "this is React Event");
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={{ color: "white", backgroundColor: "black" }}
      >
        Click here
      </button>
    </>
  );
}
export default Button;
