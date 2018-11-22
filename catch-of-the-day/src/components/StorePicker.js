import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };
  storeInput = React.createRef();

  goToStore = event => {
    // prevent submitting to stay on current page
    event.preventDefault();
    // get text
    const storeName = this.storeInput.value.value;
    // go to store
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter store</h2>
        <input
          type="text"
          ref={this.storeInput}
          required
          placeholder="Enter store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
