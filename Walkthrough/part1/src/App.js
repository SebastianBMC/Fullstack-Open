import {useState} from 'react'

const Display = ({value}) => <div>{value}</div>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const App = () => {
    const [value, setValue] = useState(10)
  
    const setToValue = (newValue) => () => {
        console.log('hello world', newValue)
        setValue(newValue)
    }
    
    //Or
    const setToValue2 = (newValue) => {
        console.log('hello world', newValue)
        setValue(newValue)
    }
    return (
      <div>
        <Display value={value}/>
        <Button handleClick={setToValue(1000)} text="thousand"/>
        Or
        
      </div>
    )
  }

//<button onClick={()=> setToValue2(value + 1)}>Button2</button>
  export default App;