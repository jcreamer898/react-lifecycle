import React from "react";

const styles = {
  list: {
    listStyleType: "none",
  },
  item: {
    display: "inline-block",
  }
};

export default function withSteps(Component) {
  return class Steps extends React.Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };

      this.next = this.next.bind(this); 
      this.prev = this.prev.bind(this); 
      this.onClickDocument = this.onClickDocument.bind(this);
      document.addEventListener("keydown", this.onClickDocument);
    }
    
    componentDidUpdate() {
      window.location.hash = this.state.count;
    }

    onClickDocument(e) {
      switch(e.keyCode) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
      }
    }
    
    next() {
      if (this.state.count < 10) {
        this.setState({
          count: this.state.count + 1
        });
      }
    }
    
    prev() {
      if (this.state.count !== 0) {
        this.setState({
          count: this.state.count - 1
        });
      }
    }
    
    render() {
      return <Component />;
    }
  }
}