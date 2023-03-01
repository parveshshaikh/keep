import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Note  from './Note';
import Card from './Card'
import { useState } from 'react';

function App() {
  const [list,setlist]=useState([])
  const addnote=(note)=>{
// alert("clicked")
setlist((pre)=>{
  return [...pre,note]
})
console.log(note)
  }
  const del =(id)=>{
    setlist((pre)=>{
      return pre.filter((l,index)=>{
        return index!==id
      }
      )
    })
    
      }
  return (
    <div>
    <Header/>
   
    <Note add={addnote}/>
    
    {
      list.map((item,index)=>{
        return <Card 
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        select={del}/>
      })
    }
    <Footer/>
    </div>
  );
}

export default App;
