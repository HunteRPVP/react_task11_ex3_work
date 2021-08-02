import React, { Component } from "react";

export default function Hocomp(WrappedComponent) {
  return class Test extends Component {
    render() {
      const newProps = {
        text: "Привет, мир!",
        number: 5,
        wrapperName: "HOComp"
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
}
