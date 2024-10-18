import PropTypes from "prop-types"

const TagLine = ({ teg, desc }) => {
    return (
        <div className="flex flex-col items-center justify-center mb-10">
            <small className="text-yellow  md:text-xl font-semibold uppercase">{teg}</small>
            <h2 className="text-2xl md:font-bold md:text-4xl lg:text-5xl capitalize text-center">{desc}</h2>
        </div>
    )
}

TagLine.propTypes = {
    teg: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default TagLine
