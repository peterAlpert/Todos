function Model(props){
    function cancelHandel(){
        props.onCancel();

    }

    function confirmHandel(){
        props.onConfirm();
    }

    return(
        <div className="model">
            <p>Are You Sure?</p>
            <div className="actions">
                <button className="btn btn-danger m-4" onClick={cancelHandel}>Cancel</button>
                <button className="btn btn-success" onClick={confirmHandel}>Confirm</button>
            </div>
        </div>
    )
}

export default Model;