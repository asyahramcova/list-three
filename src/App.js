
import './App.css';
import image from "./man.webp"
import  clock from './clock.png'
import { ToDoList } from './ToDoList';

function App(){
  return (
    <div className='app'>
      <div className='container'>
          <img src={ image } className= 'imgMan'  alt="busyman" width="250px"/>
      </div>
      <div className='container'>
          <h1>To Do List</h1> 
      </div>
      <ToDoList/>
      <div className='container'>
          <img src={ clock } className = "imgClock" alt= "clock" width="50px"/>
      </div>

    </div>
  );
}

export default App;
