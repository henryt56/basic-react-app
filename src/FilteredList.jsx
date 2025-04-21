import React, { Component } from 'react';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    // The state is just a list of key/value pairs (like a hashmap)
    // Added "type" state variable with default value "all"
    this.state = {
      search: "",
      type: "all"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  // Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    this.setState({type: event.target.value});
  }

  // Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    // First check if the item matches the selected type
    // Convert type to lowercase for case-insensitive comparison
    const typeMatch = this.state.type === "all" || item.type.toLowerCase() === this.state.type.toLowerCase();
    
    // Then check if the item matches the search text
    const searchMatch = item.name.toLowerCase().search(this.state.search) !== -1;
    
    // Item passes filter if both type and search criteria match
    return typeMatch && searchMatch;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        {/* Create a dropdown with three different options: Fruit, Vegetables, and All */}
        <div className="filter-options">
          <label htmlFor="typeFilter">Filter Type: </label>
          <select 
            id="typeFilter" 
            value={this.state.type} 
            onChange={this.onFilter}
            className="filter-dropdown"
          >
            <option value="all">All</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
          </select>
        </div>
        
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;