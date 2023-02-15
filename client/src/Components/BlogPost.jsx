import React from 'react'
import { useContext } from 'react'
import { data } from '../App';

const BlogPost = () => {
    let {state}=useContext(data)||null;
//     let state=[{
//         'name':'Samrat',
//         'age':'26'
//     },
//     {
//         'name':'Samrat',
//         'age':'26'
//     },{
//         'name':'Samrat',
//         'age':'26'
//     },{
//         'name':'Samrat',
//         'age':'26'
//     },{
//         'name':'Samrat',
//         'age':'26'
//     }
// ]

  return (
    <div>
      {
        state.map((ele,index)=>{
            return <div>
                <h1>{ele.name}</h1>
                <h1>{ele.age}</h1>
                <h1>{ele.name}</h1>
                <h1>{ele.name}</h1>
                <h1>{ele.name}</h1>
            </div>
        })
      }
    </div>
  )
}

export default BlogPost