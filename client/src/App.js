import logo from './logo.svg';
import './App.css';
import { createContext, useState,useEffect } from 'react';
import axios from 'axios'
import BlogPost from './Components/BlogPost';
import Navbar from './Components/Navbar';
export const data=createContext([]);
function App() {
  const[state,setState]=useState([])
  useEffect(() => {
    axios.get('https://judicious-scarce-napkin.glitch.me/users').then((response) => {
      setState(response.data);
      console.log(response)
    });
    
  }, []);
 

  return (
    <div className="App">
      <Navbar/>
       <data.Provider value={{state}}>
        <BlogPost/>
       </data.Provider>
    </div>
  );
}

export default App;
