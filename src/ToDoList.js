import { Component } from 'react';
import todo from './todo.png';
import checked from './checked.png';

export class ToDoList extends Component{

   state = {
      userInput: '',
      whatToDo: [],
      image: todo
   }
   
   onFormSubmit(e){
      e.preventDefault();
   }

   onChangeEvent(e){
      this.setState({userInput: e})
   }

   addItem(input){
      if(input === ''){
         alert("Please enter something!")
      }
      else{
         let listArray = this.state.whatToDo;
         listArray.push(input);
         this.setState({whatToDo: listArray, userInput: ""})
      }
   }

   crossedWord(event){
      const li = event.target;
      li.classList.toggle('crossed');
      this.setState({image: checked});
   }

   deleteItem(){
      let listArray = this.state.whatToDo;
      listArray = [];
      this.setState({whatToDo: listArray});
   }

   render(){
      return(
         <form onSubmit = {this.onFormSubmit}>
            <div className="container">
               <input type="text"
               placeholder='Hey! Dont forget to do this...'
               onChange={(e) => {this.onChangeEvent(e.target.value)}}
               value = {this.state.userInput}/>
            </div>

            <div className='container' >
               <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>Add</button>
            </div>

            <ul>
               {this.state.whatToDo.map((item, index) => (
                  <li onClick={this.crossedWord} key = {index}>
                  <img onClick={this.crossedWord} src = {this.state.image} width="30px" alt = "add"/>
                  {item}
                  </li>
               ))}
            </ul>

            <div className='container'>
               <button onClick = {() => {this.deleteItem()}} className='btn delete'>Delete</button>

            </div>
         </form>
      )
   }
}