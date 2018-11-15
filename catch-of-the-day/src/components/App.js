import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    // 1. copy existing state, never modify directly
    const fishes = {...this.state.fishes}
    // 2. add new fish
    fishes[`fish${Date.now()}`] = fish
    // 3. set new state
    this.setState({
      fishes
    });

    console.log("NEW FISH added")
  };

  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }

  render() {

    return (
        <div className={"catch-of-the-day"}>
          <div className="menu">
            <Header tagline='Otters Rock'> </Header>
          </div>
          <Order/>
          <Inventory addFish={this.addFish}
                     loadSampleFishes={this.loadSampleFishes}/>
        </div>
    )
  }
}

export default App;