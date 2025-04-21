import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

//TODO (FilteredList): create a produce list using the 'const' variable keyword
const produce = [
  {name: "Apple",type:"Fruit"},
  {name: "Pineapple",type:"Fruit"},
  {name: "Banana",type:"Fruit"},
  {name: "Pear",type:"Fruit"},
  {name: "Strawberry",type:"Fruit"},
  {name: "Orange",type:"Fruit"},
  {name: "Lettuce",type:"Vegetable"},
  {name: "Cucumber",type:"Vegetable"},
  {name: "Eggplant",type:"Vegetable"},
  {name: "Squash",type:"Vegetable"},
  {name: "Bell pepper",type:"Vegetable"},
  {name: "Onion",type:"Vegetable"}

];

class App extends Component {
    render() {
        return (

			      <div className="App">
                <HelloWorld name={'Henry Truong'} />
                <Counter />
                <FilteredList items={produce} />      
              </div>
        );
    }
}

export default App;