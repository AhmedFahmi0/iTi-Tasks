
let Students = function (props) { //{list:[{}]}
    // let Students = props.list;
    // console.log(props.list);
    let RenderStudents = (All)=>{
        if(All){
          
            return All.map((student)=>{
                return (
                    
                    
    <tr class="table-dark">
      <td>{student.name}</td>
      <td>{student.age}</td>
    </tr>


                )
            })
         
                
        
        }else{
            return(
                <div>
                    <p>No Students</p>
                </div>
            )
        }
    }

    return (
<div className="studentsComp">
    <h1>Students</h1>
    <div className="tableContainer">
        <table className="table table-striped">
            <thead  class="table-dark">
                <tr  class="table-dark">
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                { RenderStudents(props.list) }
            </tbody>
        </table>
    </div>
</div>
    )
 } 
 export default Students;