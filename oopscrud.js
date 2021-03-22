var edit1=false;
currentIndex=null;
let arr=[];
function add()
{
var name=document.getElementById("name").value;
class Student
{   
    constructor(name)  
    {  
      this.name=name;  
    }  
    detail()  
    {  if(name==="")
       { 
            alert("data required");
       }
          else{
             if(edit1)
             {
              let name=document.getElementById("name");
              arr[currentIndex]=name.value;
              addDetails();
              edit1=false;
              currentIndex=null;
              document.getElementById("name").value="";
             }
             else{
              arr.push(name);
              addDetails();
              document.getElementById("name").value="";
              
             }
           } 
   
          }
  }
var e1=new Student(name);    
e1.detail(); 
}

function addDetails()
{
  result=``;
  for(let i=0;i<arr.length;i++)
  {
      result = result+`<div  id="main" style="display:flex;flex-direction:row;justify-content:space-between;align-item:center background-color:#f5f5f5; border: 1px solid gainsboro;
      width:500px;
      border-radius: 5px;
      padding: 30px 25px 25px 25px;
      margin-bottom: 15px;
     ">
      <div>
     <p>${arr[i]}</p>
    </div>
    <div>
    <button  class="button" onclick="edit(${i})">Edit</button>
    <button  class="button" onclick="del(${i})">Delete</button>
    </div>
  </div>`;
  }
  document.getElementById("main").innerHTML=result;
}
function del(i)
{
  arr.splice(i,1);
  addDetails();

}
function edit(i)
{
  edit1=true;
  currentIndex=i;
  let editname=document.getElementById("name");
  let currentname=arr[i];
  editname.value=currentname;
  addDetails();
}