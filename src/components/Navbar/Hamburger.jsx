import PropTypes from "prop-types";

const Hamburger = ({ func, value }) => {
  return (
    <label className="hamburger md:hidden relative bottom-0">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => func(e.target.checked)}
      />
      <svg viewBox="0 0 32 32">
        <path
          className="line stroke-yellow line-top-bottom"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path className="line stroke-yellow" d="M7 16 27 16"></path>
      </svg>
    </label>
  );
};

Hamburger.propTypes = {
  func: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
};

export default Hamburger;
