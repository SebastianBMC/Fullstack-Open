import {useState} from 'react'

const History = ({allClicks}) => {
  if(allClicks.length === 0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({handleClick, text})=> {
  return(
  <button onClick={handleClick}>
    {text}
  </button>
  )

}
const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  console.log("Value of left", left);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>  
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}



// Second React application using State(Counter)
// const Display = ({counter})=> <div>{counter}</div>



  



// function App() {
//   const [counter, setCounter] = useState(0)
//   console.log("rendering with counter value", counter)

//   const increaseByOne = () => {
//     setCounter(counter + 1)
//     console.log("increasing in value before", counter)
//   }
//   const setToZero = () => {
//     setCounter(0)
//     console.log("resetting to zero, value before", counter)
//   }
//   const decreaseByOne = () => {
//     setCounter(counter - 1)
//     console.log("decreasing, value before", counter)
//   }


//   return (
//     <div>
//       <Display counter={counter}/>
//       <Button onClick={setToZero} text="zero"/>
//       <Button onClick={increaseByOne} text="plus"/>
//       <Button onClick={decreaseByOne} text="minus"/>
//     </div>

//   );
// }

export default App;

// First React application using destructuring
// const Hello = ({name,age})=>{

//   const bornYear = ()=> new Date().getFullYear() - age
//   return(
//     <div>
//       <p>
//         So you were probably born in {bornYear()}
//       </p>
//     </div>
//   )
// }
// function App() {
//   const now = new Date();
//   return (
//     <div className="App">
//       <p>Hello World, it is {now.toString()}</p>
//         <Hello name="Bill" age="23"/>
//     </div>
//   );
// }