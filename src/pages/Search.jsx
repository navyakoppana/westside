import search_icon from '../assets/search_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Search = () => {
  const{setShowSearch}=useContext(ShopContext);
  return (
    <div className="nav-search">
        <img onClick={()=>setShowSearch(true)} src={search_icon} alt="" />
    </div>
  )
}

export default Search