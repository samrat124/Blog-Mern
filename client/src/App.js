import logo from './logo.svg';
import './App.css';
import { createContext, useState,useEffect } from 'react';
import axios from 'axios'
import BlogPost from './Components/BlogPost';
export const data=createContext([]);
function App() {
  const[state,setState]=useState([])
  
  useEffect(() => {
    axios.get('https://judicious-scarce-napkin.glitch.me/users').then((response) => {
      setState(response.data);
      console.log(response)
    });
    
  }, []);
//   let state=[{
//     'name':'Samrat',
//     'age':'26'
// },
// {
//     'name':'Samrat',
//     'age':'26'
// },{
//     'name':'Samrat',
//     'age':'26'
// },{
//     'name':'Samrat',
//     'age':'26'
// },{
//     'name':'Samrat',
//     'age':'26'
// }
// ]

  return (
    <div className="App">
       <data.Provider value={{state}}>
        <BlogPost/>
       </data.Provider>
    </div>
  );
}

export default App;
