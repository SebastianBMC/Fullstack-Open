const Course = ({course})=>{
    return(
      <div>
        {/* {course.map(course =>{
          return(<Header key={course.id} course={course.name}/>,
            <Content info={course.parts}/>,
            <Total parts={course.parts}/>)  
        })} */}
        <Header course={course.name}/>
        <Content info={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  }
  
  const Part = ({partName, exercise})=>{
    return(
        <p>
          {partName} {exercise}
        </p>
    )
  }
  
  const Header = (props)=>{
    return(
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  const Content = ({info})=>{
    return(
      <div>
        {info.map(part =>
          <Part partName={part.name} exercise={part.exercise} key={part.id}/>
        )}
      </div>
    )
  }
  
  const Total = ({parts})=>{
    //I use array.map to return an array that only has the exercise number
    // The I reduce using that returned array to display the total
    const addArray = (sum, num)=>{
      return sum + num
    }
  
    return(
      <>
        <p>Total of {parts.map(part=>part.exercise).reduce(addArray)}</p>
      </>
    )
  }

  export default Course