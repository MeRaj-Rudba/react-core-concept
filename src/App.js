import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heroes=['Leonardo DeCaprio','Brad Pitt','Robert Pattinson','Tom Hanks'];


  const products=[
    {name:'PhotoShop', price:'$90.99'},
    {name:'Illustrator', price:'$95.99'},
    {name:'PDF Reader', price:'$60.99'},
    
  ]
  const productNames=products.map(product=> product.name)
  console.log(productNames);

  const heroNames=heroes.map(hero=>hero);
  console.log(heroNames);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to react</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Actors<code> You know whom</code> 
        </p>

        <Counter></Counter>
        <Users></Users>




      <h2>Actors</h2>
      <ul>
        {
          heroes.map(hero => <li> {hero}</li> )
        }
      </ul>
      <div>
        {
          products.map(product=><Product product={product}></Product>)
        }
      </div>
      </header>
    </div>



    
  );
}


function Users(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));

  },[])
  
  return(
    <div>
      <h3>Dynamic Users:{users.length }</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
      <h3>Emails</h3> 
      <ul>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ul>

    </div>
  )
}


function Counter(){
  const [count,setCount ] = useState(0);
  
  return(
    <div>
      <button onClick={()=> setCount(count-1)} >Decrease</button>
      <h1>Count:{count} </h1>
      <button onClick={()=> setCount(count+1)} >Increase</button>
    </div>

  )
}


function Product(props){
  const productStyle={
    backgroundColor:'lightGrey',
    borderRadius:'10px',
    height:'400px',
    width:'500px',
    margin:'50px',
    float:'left'
    

  }
  return(
    <div style={productStyle}>
      <h2>Name: {props.product.name}</h2>
      <h3>Price: {props.product.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}



function Person(props){
  const personStyle={
    border:'2px solid gold',
    margin: '50px',
    padding:'10px',
   // boxShadow:'5px 5px 10px gray'

  }
  
  return (
    <div style={personStyle} >
        <h1>Name: {props.name}</h1>
        <p>{props.bio}</p>
    </div>
  
  )
      
}

export default App;
