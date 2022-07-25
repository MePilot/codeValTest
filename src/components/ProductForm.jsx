import style from './ProductForm.module.css'
import { useState , useEffect} from 'react';
import item from './item.svg'

function ProductForm({setToggle, addProduct, products, entry, changeProduct}) {
    const [state, setState] = useState({name:'', description:'', price: 0})

    useEffect(() => {
        setState(products.find(p => p.id === entry))
      },[entry]);

    const handleData= (event)=> {
        setState((prev)=>({...prev,[event.target.name]:event.target.value}))
    }

  return (
    <div className={style.wrapper}>
       
        <div className={style.container}>
        <h4>{`${state?.name || 'New product'} Details`}</h4>
            <img 
              src={item}
              alt='itemicon'
        />   
            <input 
            className={style.input}
            name='name'
            placeholder='Product name'
            value={state?.name || ''}
            onChange={handleData}
            type='text'
            maxlength="30"
            >  
        </input>
        <input 
            className={style.input}
            name='description'
            placeholder='Product desc'
            value={state?.description || ''}
            onChange={handleData}
            type='text'
            maxlength="200"
            >  
        </input>
        <input 
            className={style.input_price}
            name='price'
            placeholder='price'
            value={state?.price || '0'}
            onChange={handleData}
            type='tel'
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
                }
            }}
     ></input>
        <button className={style.btn_save} disabled={!state?.name || state?.price<=0 }
        onClick={(e)=>{
            setToggle(false)
            entry!=='' ? changeProduct(state) : addProduct(state)
        }
        }
        >
       Save
           
      </button>

    </div>
    </div>
  );
}

export default ProductForm;
