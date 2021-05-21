import React, {useState, memo, useCallback, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';

export default function App(){
const [task,Task]=useState([])
const [name,Name]=useState(null)
function Add_task()
{
  Task([...task, name])
  Name("")
}
 return <div class="container">
 <button class="btn btn-info" onClick={()=>{axios.get("https://marinode.herokuapp.com/").then(res=>alert(res.data.name))}}>See api data</button>
 <br/>
 <div class="card text-center" style={{display : 'clear'}}>
 <br/>
<div style={{display : 'flex',position : "relative",left : '20%'}}> <br/>
<input type="text" value={name} onChange={(e)=>{Name(e.target.value)}} vlaue={name} class="form-control" style={{width : '50%'}}  placeholder="Enter Your Task" />
<input type="submit" class="btn btn-success" onClick={()=>{Add_task()}} value="+"/></div>
<hr/> <div class="container"><br/>
 {task.map((items)=>{
  return<span> <div class="btn alert-info"  style={{width : '50%'}}>
  <div class="container">
<div class="card bg-secondary">
<br/>
<strong class="text-light">{items}</strong>
<br/>
</div>
  </div>
  <hr/>
  <p class="btn btn-primary" style={{width : '40%'}}> <i class="fa fa-eye" aria-hidden="true"></i> COMPLETE</p><br/>
  <p class="btn btn-danger" onClick={()=>{alert(task.pop())}} style={{width : '40%'}}> <i class="fa fa-trash"></i> DELETE TASK</p>
   </div><br/><br/></span>
 })}
</div></div><br/>
 </div>
} 
