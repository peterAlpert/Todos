function Todo(props){

    return(
        <div className="card"> 
            <h2>{props.title}</h2><br/>
            <div  >
            <button className="btn btn-danger float-end">Delete</button>
            </div>
      </div> 
    )
}

export default Todo;