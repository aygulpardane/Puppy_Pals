import {puppyList} from './data.js' // we pass the puppyList array from the data.js file as the default value
import { useState } from 'react'
import './App.css'
import './path-to-css.css'

function App() {

  // first element is the value that you are storing, the second is a function, which you can use to reset the value:
  // use state returns an array
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // null so you can conditionally render an element in your JSX code

  console.log(puppies);

  // can define a function here and pass it onto onClick
  // function handleClick() {
  //   //code here
  // }

  // the callback function passed to find searches for a puppy with an id property that matches the featPupId state value:
  // the .find method returns the first element in the array that satisfies the provided testing function:
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <div>
      {featPupId && (
        // both the <h2> and <ul> tags need to be rendered in one parent element
        <div>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
        </div>
      )}

      {
        puppies.map((puppy) => {

          // we can pass a function into the onClick handler just like we did in addEventListener. We also coud've defined a function outside the return and passed it into onClick:

          return <p onClick={() => {setFeatPupId(puppy.id)}} key ={puppy.id}>{puppy.name}</p>

        })
      }
    </div>
  );
}

export default App
