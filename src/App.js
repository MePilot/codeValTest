//Should have used REDUX, a lot of props drilling )
import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const productList = [
    {id:0, name:'product1', description: 'some text description', price: 350, creationDate: new Date('22.07.2022')}, 
    {id:1, name:'product2', description: 'some text description', price: 150, creationDate: new Date('21.07.2022')}, 
    {id:2, name:'product3', description: 'some text description', price: 250, creationDate: new Date('20.07.2022')}, 
    {id:3, name:'product4', description: 'some text description', price: 300, creationDate: new Date('19.07.2022')}, 
    {id:4, name:'product5', description: 'some text description', price: 450, creationDate: new Date('18.07.2022')} 
  ]
  const [products, setProducts] = useState([...productList])
  
  const [entry, setEntry] = useState('')
  
  const changeProduct = (data)=> {
    setProducts(products.map(e=> e.id!==data.id ? e :data ))
  }
  const sortProducts = (param)=> {
    const sorted = [...products]
    switch (param) {
      case 'name':
        sorted.sort((a,b)=>a.name.localeCompare(b.name))
        break
      case 'price':
        sorted.sort((a,b)=>a.price>b.price ? 1 : -1)
        break
      case 'creationDate':
        sorted.sort((a,b)=>a.creationDate>b.creationDate ? 1 : -1)
        break
    }
    setProducts(sorted)
  }

  const removeProduct = (data)=> {
    setProducts(products.filter(e=>e.id!==data.id))
  }
    const addProduct = (data)=> {
      if(data.name && data.price) {
        data.id=Math.random()
        data.creationDate=new Date() 
        setProducts(prev=>[...prev, data])
      }
    }

  const [toggle, setToggle] = useState(false)

  return (
    <div className="App">
      <header className='top-bar'>
        <h3>My store</h3>
      </header>
      <div className="wrapper">
        <ProductList 
          products ={products} 
          setToggle={setToggle}
          removeProduct={removeProduct}
          setEntry={setEntry}
          entry={entry}
          sortProducts={sortProducts}
          />
          {toggle && <ProductForm 
          setToggle={setToggle}
          entry={entry}
          products={products}
          addProduct={addProduct}
          changeProduct={changeProduct}
          />}
      </div>
      
    </div>
  );
}

export default App;
