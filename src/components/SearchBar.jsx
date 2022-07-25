import style from './SearchBar.module.css'
import { useState} from 'react';

function SearchBar({setToggle, setEntry, sortProducts}) {
    const [search, setSearch] = useState('')
    const changeParams= (event)=> {
      sortProducts(event.target.value)
    }

  return (
    <div className={style.searchBar}>
        <button className={style.btn_add}
            onClick={()=>{
                setToggle(true)
                setEntry('')
            }
            }
        >
            <span>Add</span>
      </button>
      <input 
        className={style.reg_input}
        name='productSearch'
        placeholder='Search products'
        value={search}
        onChange={
            event => setSearch(event.target.value)
        }
        type='text'
        
     ></input>
    <label htmlFor="params">Sort by:</label>
        <select name="params" id="params" onChange={changeParams}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="creationDate">Date</option>
           
        </select>
    </div>

  );
}

export default SearchBar;
