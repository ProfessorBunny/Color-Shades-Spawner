const SingleColor = (props) => {
  const { hex, weight } = props.color;
  return (
    <article className="color" style={{ background: `#${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
