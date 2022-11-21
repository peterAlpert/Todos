function Todo(props){

    function deleteHandel(){
        
    } 

    return(
        <div className="card"> 
            <h2>{props.title}</h2><br/>
            <div  >
            <button className="btn btn-danger float-end" onClick={deleteHandel}>Delete</button>
            </div>
      </div> 
    )
}

export default Todo;