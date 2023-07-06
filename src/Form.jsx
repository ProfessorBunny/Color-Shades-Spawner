import { useState } from "react";

const Form = () => {
  const [color, setColor] = useState("");
  const colorChangeHandler = (e) => {
    setColor(e.target.value);
  };
  const onSubmitHandler = (e) => {};

  return (
    <section className="container">
      <h4>Color Shades Spawner</h4>
      <form className="color-form" onSubmit={onSubmitHandler}>
        <input type="color" value={color} onChange={colorChangeHandler} />
        <input
          type="text"
          value={color}
          onChange={colorChangeHandler}
          placeholder="#FF0000"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
