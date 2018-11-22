import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  static createFish = event => {
    // stop submitting
    event.preventDefault();

    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    // call methode to update state from parent (App)
    this.props.addFish(fish);

    // reset form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="Fish Name"
        />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Fish Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Gone</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Fish Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Fish Image"
        />
        <button type="submit">+ ADD ITEM</button>
      </form>
    );
  }
}

export default AddFishForm;
