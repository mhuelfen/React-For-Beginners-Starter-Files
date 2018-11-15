import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === "available";

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} no longer available.
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);

    console.log(orderIds);

    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";

      console.log(fish.name, prevTotal);

      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          {orderIds.map(key => this.renderOrder(key))}
          {/*<li>*/}
          {/*{this.props.order[key]} {this.props.fishes[key].name}{" "}*/}
          {/*{this.props.order[key] * this.props.fishes[key].price}*/}
          {/*</li>*/}
        </ul>
        <div className="total">
          Total:<strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
