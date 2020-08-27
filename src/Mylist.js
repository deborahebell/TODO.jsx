import React, { Component } from 'react'
import './App.css'

const todos = ['Buy more ice cream', 'Go to the gym']

class MyList extends Component {
  constructor(props) {
    super();
    this.state = {
      todoItemArray: props.MyList
    };
  }
  //NEW METHOD BELOW
  clearList(e) {
    console.log("Clearing the list")
    this.setState({
      todoItemArray: []
    });
  }

  newItemChange(e) {
    this.setState({
      newItem:e.target.value
    });
  }

  addItem(e) {
    e.preventDefault();
    const newArray = this.state.todoItemArray;
    newArray.push(this.staye.newItem);
    this.setState({
      todoItemArray: newArray,
      newItem: ''
    });
  }

  render() {
    const todoItems  this.shouldComponentUpdate.todoItemArray.map((t,idx)=> {
      return <ListItem doThis={t} key={idx} />;
    })
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <ListItem doThis={t} key={idx} />;
          <li></li>
        </ul>
        <form>
          <input type="text"
            placeholder="Add a new item"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
            />
            <button onClick=
              </input>
        </form>
        <button onclick={(e) => this.clearList(e)}>Finish List!!</button>
      </div>
    )
  }
}

export default MyList
