export default function TagLine({ teg, desc, className = "text-center" }) {
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