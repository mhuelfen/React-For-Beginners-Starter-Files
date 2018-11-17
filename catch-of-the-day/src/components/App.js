import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  getStoreName = () => {
    return this.props.match.params.storeId;
  };

  componentDidMount() {
    const { params } = this.props.match;

    // load local store
    const localStorageRef = localStorage.getItem(this.getStoreName());
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${this.getStoreName()}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    // save order as string local property
    localStorage.setItem(this.getStoreName(), JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    // 1. copy existing state, never modify directly
    const fishes = { ...this.state.fishes };
    // 2. add new fish
    fishes[`fish${Date.now()}`] = fish;
    // 3. set new state
    this.setState({
      fishes
    });

    console.log("NEW FISH added");
  };

  updateFish = (key, updatedFish) => {
    console.log("SDD");
    console.log(`app update: {updatedFish.name}`);
    const fishes = { ...this.state.fishes, [key]: updatedFish };

    this.setState({ fishes });
  };

  addToOrder = key => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({
      order
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className={"catch-of-the-day"}>
        <div className="menu">
          <Header tagline="Otters Rock"> </Header>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          fishes={this.state.fishes}
          addFish={this.addFish}
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
