import {useContext} from 'react'
import {  useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext'
import { MainDiv,SearchDiv,SearchInput,SearchIcon,CrossIcon } from './SearchBar_styles';




const SearchBar = () => {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const navigate= useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (search.trim() !== '') {
            navigate(`/collection`);
        }
    }



 
  return  showSearch ?(
    <MainDiv>
        <SearchDiv onSubmit={handleSubmit}>
              <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search' autocomplete="on" spellcheck ='true'autocorrect='on' required />
            <SearchIcon  onClick ={handleSubmit} src={assets.search_icon} alt=" " type='submit' />
        </SearchDiv>
        <CrossIcon onClick ={() =>setShowSearch(false)} src={assets.cross_icon} alt=" " />
        
    </MainDiv>
  ) : null
}

export default SearchBar