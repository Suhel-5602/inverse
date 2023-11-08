import React, {useState} from 'react';
import axios from 'axios';

function Studentform() {
  const [id, setid]=useState("");
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const [sem, setSem]=useState("");
  const [branch, setBranch]=useState("");

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const data ={
      id : id,
      name: name,
      email:email,
      phone:phone,
      sem:sem,
      branch:branch,

    }
    try{
      const response = await axios.post("http://localhost:5000/student",data);
      alert("Student created");
    }catch (error){
    console.log(error);
    }
  
  };
    return (
    <div>
      <h1>Student registration form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter your id" value={id} onChange={(e) =>setid(e.target.value)}/><br/><br/>

        <input type="text" placeholder="enter your name" value={name} onChange={(e) =>setName(e.target.value)}/><br/><br/>
        
        <input type="text" placeholder="enter your email" value={email} onChange={(e) =>setEmail(e.target.value)}/><br/><br/>
        
        <input type="text" placeholder="enter your phone" value={phone} onChange={(e) =>setPhone(e.target.value)}/><br/><br/>
        
        <input type="text" placeholder="enter your sem" value={sem} onChange={(e) =>setSem(e.target.value)}/><br/><br/>
        
        <input type="text" placeholder="enter your branch" value={branch} onChange={(e) =>setBranch(e.target.value)}/><br/><br/>
        
        <button>submit</button>

      </form>

    </div>
  )
}

export default Studentform