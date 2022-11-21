import {useState} from 'react'
import Model from'./Model';
import Backdrop from'./Backdrop';

function Todo(props){
    const [modelIsOpen,setModelIsOpen] = useState(false)

    function deleteHandel(){
        setModelIsOpen(true)
    }

    function closeHandel(){
        setModelIsOpen(false);
    }

    return(
        <div className="card"> 
            <h2>{props.title}</h2><br/>
            <div  >
                 <button className="btn btn-danger float-end" onClick={deleteHandel}>Delete</button>
            </div>

            {modelIsOpen ? <><Model onCancel={closeHandel} onConfirm={closeHandel}/> <Backdrop onCancel={closeHandel} /></>: null}
          </div> 
    )
}

export default Todo;