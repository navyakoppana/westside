import { createContext,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState(() => {
        // Initialize cartItems from localStorage
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : {};
    });
        
    useEffect(() => {
    // Store cartItems in localStorage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const navigate=useNavigate();

    // console.log('Products:', products); // Verify products here
    const addToCart = (itemId,size) =>{

        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartData = structuredClone(cartItems);
       
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }

        setCartItems(cartData);

    }

    const getCartCount =() =>{
        let totalCount = 0;
        for(const items in cartItems){
            for (const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCount+=cartItems[items][item];
                    }
                }catch(error){

                }

            }
        }
        return totalCount;
    }

    const updateQuantity = (itemId,size,quantity) =>{

        let cartData = structuredClone(cartItems);
         // Initialize item object if it doesn't exist
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }
        cartData[itemId][size]=quantity;

        setCartItems(cartData);

    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id===items);
            for (const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount+=itemInfo.price*cartItems[items][item];
                    }

                }catch(error){

                }
            }    
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    };

    // console.log('Context value:', value); // Verify context value

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;