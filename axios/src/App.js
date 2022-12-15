import React,{useState} from 'react';
import axios from "axios"
import './App.css';

function App() {
  const [student,setStudent]=useState({
    name:null,
    email:null
  })

  function upload(props){
    props.preventDefault();
      axios.post("http://localhost:5001/upload",{
        student
      },{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res=>{console.log(res);}).catch(err=>{console.log(err
        );})
  }
  return (
    <div className="App">
      <form method="post" onSubmit={upload}>
        <label>Name : </label>
      <input type="text" className="name" onChange={(event)=>{
        setStudent((prev)=>{return {...prev,name:event.target.value}})
      }}/>
      <label>Email: </label>
      <input type="text" className="email" onChange={(event)=>{
        setStudent((prev)=>{return {...prev,email:event.target.value}})
      }} />
      <button type="submit">Submit </button>
      </form>
    </div>
  );
}

export default App;
