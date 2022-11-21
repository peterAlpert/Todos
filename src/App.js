import Todo from'./components/Todo';
import Model from'./components/Model';
import Backdrop from'./components/Backdrop';


function App() {
  return (
    <div >
      <h1>My Todos </h1>
      <Todo title='Learn React'/> 
      <Todo title='Learn Angular'/> 
      <Todo title='Learn Vue.js'/> 


      <Model />
      <Backdrop />
     
     
    </div>
  );
}

export default App;
