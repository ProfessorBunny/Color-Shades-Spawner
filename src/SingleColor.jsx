const SingleColor = (props) => {
  const { hex, weight } = props.color;
  return (
    <article
      className={props.index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
