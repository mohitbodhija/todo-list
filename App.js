import './App.css';
import MyFirstComponent from "./components/ReactClass";
import DateCompoent from "./components/ItemDate";
// Check the filename and capitalization for the following import
import GetFormDetails from "./components/getFormDetails"; 
import { useState } from "react";

function App() {
  // const [title, setTitle] = useState('Hello World');
  // const [newVarible, setNewVarible] = useState('true');
  const data1 = [
    {
      name: 'Do leet code question',
      date: '01',
      month: 'Jan',
      year: '2020'
    },
    {
      name: 'do gfg question',
      date: '02',
      month: 'Feb',
      year: '2021' 
    },
    {
      name: 'do college work',
      date: '03',
      month: 'Mar',
      year: '2022'
    },
    {
      name: 'my third props wala component',
      date: '03',
      month: 'Mar',
      year: '2023'
    }
  ]
  const [data, setData] = useState(data1);

 

  const buttonClicked = (index) =>{
  // Create a new array by filtering out the element at the specified index
  const newData = data.filter((item, i) => i !== index);
  console.log(newData)
  // Update the state with the new array
  setData(newData);
  }

  const submitButtonClick = (event) =>{
    setData(prevData => [...prevData, event]);
  }


  return (
    <div>
      <h1 style={{color:'red', textAlign:"center"}}>Todo List</h1>
      <div className="outer">
        {data.map((item, index) => (
          <div className="mynewclass" key={index}>
            <MyFirstComponent name={item.name} />
            <div className="date-container">
              <DateCompoent date={item.date} month={item.month} year={item.year} hello={item.name}/>
              <button style={{marginLeft:'100px'}} onClick={() => buttonClicked(index)}>Remove Me</button>
            </div>
          </div>
        ))}
      </div>
      <GetFormDetails task={submitButtonClick} />
    </div>
  );
}

export default App;
