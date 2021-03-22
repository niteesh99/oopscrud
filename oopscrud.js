var edit1=false;
currentIndex=null;
let arr=[];
class Student
{   
    
          constructor(name)  
          {  
          this.name=name;  
          } 
          add()
          {

          if(this.name==="")
          { 
                alert("data required");
          }
          else
          {
             if(edit1)
             {
              let name=document.getElementById("name");
              arr[currentIndex]=name.value;
              edit1=false;
              currentIndex=null;
              document.getElementById("name").value="";
             }
             else{
              arr.push(this.name);
              document.getElementById("name").value="";
           }
          }
        }   
addDetails()
{
        let result=``;
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
del(i)
{
  arr.splice(i,1);
}
edit(i)
{
  edit1=true;
  currentIndex=i;
  let editname=document.getElementById("name");
  let currentname=arr[i];
  editname.value=currentname;
}
}
function show2()
{
var user=document.getElementById("name").value;
var student1 = new Student(user);
student1.add();
student1.addDetails();
console.log(arr);
}
function edit(i)
{
  var studentEdit = new Student();
  studentEdit.edit(i);
  studentEdit.addDetails();
}
function del(i)
{
  
  var studentDelete = new Student();
  studentDelete.del(i);
  studentDelete.addDetails();
}


