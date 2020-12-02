// import React, { Component } from 'react';


// // CLASSEEEES

// class App extends Component {

//   state = {
//     counter: 0,
//     text: 'Hello from the state in a class',
//     data: {}
//   }

//   increase = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }

//   decrease = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     })
//   }

//   componentDidMount() {
//     fetch('https://swapi.dev/api/people/1/')
//       .then(response => response.json())
//       .then(dataFromApi => this.setState({
//         data: dataFromApi
//       }))
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.text}</h1>
//         <h3>Counter: {this.state.counter}</h3>
//         <button onClick={this.increase}>+</button>
//         <button onClick={this.decrease}>-</button>
//         <h1>Name from API: {this.state.data.name}</h1>
//       </div>
//     );
//   }
// }

// export default App;


// // HOOOOOKS

import React, { useState, useEffect } from 'react';
import Header from './Header'

// You can declare your state object as an initial state outside of your component
// const initialState = {
//   counter: 0,
//   text: 'I am coming from hooks!'
// }


const App = () => {

  // use hooks to include the initial state as an object and have access to all properties directly there
  // let [state, setState] = useState(initialState)

  // we need to create a variable for our state property and the method we use to change it. useState give us an array with 2 options so we destructure it. In the useState parenthesis we write the initial value of our state property
  let [counter, changeCounterValue] = useState(0)
  let [text] = useState('I am coming from hooks!')
  let [apiData, setApiData ] = useState({})

  // You can have a method that will perfom any logic operations before updating your state property
  // const handleCounter = operationOption => {
  //   let newCounterValue = operationOption === 'increase' ? counter + 1 : counter - 1
  //   changeCounterValue(newCounterValue)
  // }

  // We will use the useEffect hook to mimic the componentDidMount method, that's why we need the empty array as a 2nd parameter. The 1st parameter is a callback function that will contain our API call code
  useEffect(() => {
    fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(dataFromApi => setApiData(dataFromApi))
  }, [])

  return (
    <div>
      <Header title={text} />
      <h2>Counter: {counter}</h2>
      <button onClick={() => changeCounterValue(counter + 1)}>+</button>
      <button onClick={() => changeCounterValue(counter - 1)}>-</button>
      <h3>Name from API: {apiData.name}</h3>
    </div>
  )
}

export default App;
