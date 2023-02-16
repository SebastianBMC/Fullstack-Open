import Course from "./components/Course"

function App() {
  
  
  const course = [
    {
      id:1,
      name: "Half Stack application development",
      parts:[
      {
        name:"Fundamentals of React",
        exercise: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercise: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercise: 14,
        id: 3
      }
    ]
   },
   {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercise: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercise: 7,
        id: 2
      }
    ]
  }
  ]

  return (
    <div id="app">
      {course.map(course => <Course key={course.id} course={course}/>)}
    </div>
  );
}

export default App;
