import PropTypes from "prop-types";

const TagLine = ({ teg, desc, className = "text-center" }) => {
  return (
    <div className={`mb-10 ${className}`}>
      <small className="text-yellow  text-start  md:text-xl font-semibold uppercase">
        {teg}
      </small>
      <h2 className="text-2xl font-bold md:text-4xl lg:text-5xl capitalize text-center">
        {desc}
      </h2>
    </div>
  );
};

TagLine.propTypes = {
  teg: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TagLine;
