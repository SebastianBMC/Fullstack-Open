import { useState } from "react";
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('New Name')
  const [newNumber, setNewNumber] = useState('')
  //const [filteredArray, setFilteredArray] = useState(persons)
  const [filter, setFilter] = useState(false)

  
  console.log(persons)
  
  const addPerson = (event)=> {
    event.preventDefault()
    let isUnique = true
  
    persons.forEach(person =>{
      if(person.name === newName){
        isUnique = false
        alert(`${newName} is already added to the phonebook`)
        return
      }
    })

    if(isUnique){
      const personObject = {
        name:newName,
        number:newNumber
      }
      
      setPersons(persons.concat(personObject))
    }
  }

  const handleNameChange = (event)=> {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event)=> {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event)=> {
    setFilter(!filter)
    //filteredArray = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
  }
  /* Checks if there is a filter or not. If yes grabs value from html element and creates new Array
     Otherwise, always sets to the current value of the person array
  */
  let filteredArray = filter ? persons.filter(person => person.name.toLowerCase().includes(document.getElementById("filterInput").value.toLowerCase())) :persons 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleFilterChange}/>
      <h2>Add a new Person</h2>
      <PersonForm addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
  
        {filteredArray.map(person =>
          <Person key={person.name} name={person.name} number={person.number}/>
        )}
      
    </div>
  )
}

export default App;
