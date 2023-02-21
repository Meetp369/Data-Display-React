import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Appcontext from './components/context';
function App() {
  const [data,setdata]=useState([]);
    const [flag,setflag]= useState(0);
    const staData=async()=>{
      console.log("in sta data")
      await axios.get("http://localhost:4000/display/stadata").then(async (res)=>{
       
      setTimeout(()=>{
        getData()
      },2500)
      }).catch((err)=>{
          alert(err);
      })
  };
    const getData=async()=>{
        console.log("before sta data")
        console.log("after sta data function")
        await axios.get("http://localhost:4000/display/getdata").then((res)=>{
          console.log("in get data link")
          setdata(res.data.data)
          console.log(res);
        }).catch((err)=>{
            alert(err);
        })
    };
    useEffect(()=>{
      setTimeout(() => {
        staData()
      }, (2500));
    },[])
  return (
    <div className="App">
      <Appcontext.Provider value={{data}}>

        
      <Navbar/>
      <Routes>
        <Route path="/" element={<Table/>}></Route>
      </Routes>
      </Appcontext.Provider>
    </div>
  );
}

export default App;
