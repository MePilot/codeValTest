import style from './ProductList.module.css'
import SearchBar from './SearchBar';
import ProductDesc from './ProductDesc';

function ProductList({products,sortProducts ,setToggle, removeProduct, entry, setEntry}) {

  return (
    <div className={style.container}>
        <SearchBar sortProducts={sortProducts} setToggle={setToggle} setEntry={setEntry}></SearchBar>
        {
          products.map((product,i)=> 
          <ProductDesc
            key={i}
            product={product}
            removeProduct={removeProduct}
            setEntry={setEntry}
            entry={entry}
            setToggle={setToggle}
            >
          </ProductDesc>
          )
          }
         </div>      
  )
}

export default ProductList;
