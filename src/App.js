import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friends=['Khaled','Abdullah','Ahmad','Shofi',"Afnan",'Abrar','Sadid']
  const products=[
    {name:'photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'Figma',price:'$190.99'}

  ]
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a React person</p>
       <Counter></Counter>
       <Users></Users>
       <ul>
         {friends.map(friend=> <li>{friend}</li>)}
         {products.map(product=><li>{product.name}</li>)}
       </ul>
       {
         products.map(pd=><Product product={pd}></Product>)
       }
       <Product product={products[0]}></Product>
       <Product product={products[1]}></Product>
       <Person name="Mamun" job='Web Developer'></Person>
       <Person name="khaled" job="App Developer"></Person>
      </header>
    </div>
  );
}

function Counter(){
  const[count,setCount]=useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> setCount(count+1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    color:'#090E36',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const{name,price}=props.product;
  return(
    <div style={productStyle}>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  return(
    <div style={{border:'2px solid gold',width:'400px',margin:'10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
