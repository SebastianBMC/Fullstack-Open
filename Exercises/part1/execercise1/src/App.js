import { useState } from 'react'

const Statistics = (props)=> {

    if(props.good === 0 && props.bad === 0 && props.neutral === 0){
        return(
            <p>
                No feedback given
            </p>
        )
    }
    
    return(
    <div>
        <table>
            <tbody>
                <StatisticsLine text="good" value={props.good}/>
                <StatisticsLine text="neutral" value={props.neutral}/>
                <StatisticsLine text="bad" value={props.bad}/>
                <StatisticsLine text="all" value={props.all}/>
                <StatisticsLine text="average" value={props.average}/>
                <StatisticsLine text="positive" value={props.positive}/>
            </tbody>
        </table>
    </div>

    )
}

const StatisticsLine = ({text, value}) => {
    return(
        <tr><td>{text} {value}</td></tr>
    )
}

const Button = ({name, handleClick}) => {
    return(
            <button onClick={handleClick}>
                {name}
            </button>
    )
}

const Header = ({title}) =>{
    return(
        <h1>
            {title}
        </h1>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good + 0 + (-bad))/ 3
  const positive = good / all

 
   const increaseGood = () => {
        console.log("In good")
        setGood(good + 1)    
    }

    const increaseNeutral = () => {
        setNeutral(neutral + 1)
    }
    
    const increaseBad = ()=> {
        setBad(bad + 1)
    }

  return (
    <div>
        <Header title="give feedback"/>
        <Button name="good" handleClick={increaseGood}/>
        <Button name="neutral" handleClick={increaseNeutral}/>
        <Button name="bad" handleClick={increaseBad}/>
        <Header title="statistics"/>
        <Statistics name="good" good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive}/>

    </div>

  )
}

export default App