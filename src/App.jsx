import {Routes,Route} from 'react-router-dom'
import styled from 'styled-components'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import ShopContextProvider from './context/ShopContext'




const StyledDiv = styled.div`
  color:black;
  padding:20px;
  font-size:16px;
  cursor:pointer;
  &:hover{
    color:red
  }
`


const App = () => {
  return (
    <ShopContextProvider>
    <StyledDiv className='App'>
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path ='/' element ={<Home/>}/>
        <Route path ='/collection' element={<Collection/>} />
        <Route path ='/about' element={<About/>} />
        <Route path ='/contact' element={<Contact/>} />
        <Route path ='/product/:productId' element={< Product/>} />
        <Route path ='/login' element={<Login/>} />
        <Route path ='/cart' element={<Cart/>} />
        <Route path ='/orders' element={<Orders/>} />
        <Route path ='/place-order' element={<PlaceOrder/>} />
      </Routes>
    </StyledDiv>
    </ShopContextProvider>
  )
}

export default App
