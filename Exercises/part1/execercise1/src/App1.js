const Part = (info)=>{
  return(
    <>
      <p>
        {info.part} {info.exercise}
      </p>
    </>
  )
}

const Header = (props)=>{
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props)=>{
  
  return(
    <>
        <Part part={props.parts[0].name} exercise={props.parts[0].exercise}/>
        <Part part={props.parts[1].name} exercise = {props.parts[1].exercise}/>
        <Part part={props.parts[2].name} exercise = {props.parts[2].exercise}/>
    </>
  )
}

const Total = (props)=>{
  
  const part = props.exercises
  
  return(
    <>
      <p>Number of exercises {part[0].exercise + part[1].exercise + part[2].exercise}</p>
    </>
  )
}

function App() {
  
  
  const course = {
    name: "Half Stack application development",
    parts:[
    {
      name:"Fundamentals of React",
      exercise: 10
    },
    {
      name: "Using props to pass data",
      exercise: 7
    },
    {
      name: "State of a component",
      exercise: 14
    }
    ]
  } 



  return (
    <div id="app">
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total exercises={course.parts}/>
    </div>
  );
}

export default App;
