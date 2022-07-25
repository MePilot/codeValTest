import style from './ProductDesc.module.css'
import itemicon from './item.svg'

function ProductDesc({product, removeProduct, entry, setEntry, setToggle}) {
 
  return (
    <div 
    className={entry===product.id ? style.product_selected : style.product} 
    onClick={
        ()=>{
            setEntry(product.id)
            setToggle(true)
        }
    }
    >
        <img 
              src={itemicon}
              alt='itemicon'
        ></img>
        <div className={style.desc}>
            <h5 className={style.name}>{product.name}</h5>
            <p>{product.description}</p>
        </div>
        <button className={style.btn_del}
        onClick={()=>removeProduct(product)}
        >
            Delete
           
      </button>

    </div>

  );
}

export default ProductDesc;
