import React from "react";
import reactDom from "react-dom";

class Comp1 extends React.Component {
  render() {
    return (
      <div>
        <input type="text" ref="first" />
        <br />
        <input type="text" ref="second" />
        <br />
        <input type="text" ref="third" />
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
        <button
          onClick={() =>
            reactDom.findDOMNode(this.refs["second"]).scrollIntoView()
          }
        >
          Перейти на второе поле ввода
        </button>
      </div>
    );
  }
}

export default Comp1;
