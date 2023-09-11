import {puppyList} from './data.js' // we pass the puppyList array from the data.js file as the default value
import { useState } from 'react'
import './App.css'

function App() {

  // first element is the value that you are storing, the second is a function, which you can use to reset the value:
  // use state returns an array
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppies);

  return (
    <div>
      {
        puppies.map((puppy) => {
          return <p key ={puppy.id}>{puppy.name}</p>
        })
      }
    </div>
  );
}

export default App
