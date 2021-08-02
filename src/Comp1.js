import React, { useRef } from "react";

export const Comp1 = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  return (
    <div>
      <input type="text" ref={firstRef} />
      <br />
      <input type="text" ref={secondRef} />
      <br />
      <input type="text" ref={thirdRef} />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button onClick={() => secondRef.current.scrollIntoView()}>
        Перейти на второе поле ввода
      </button>
    </div>
  );
};

export default Comp1;
