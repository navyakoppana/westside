import { createContext,useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import images from "../assets/images";


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
    const [products, setProducts] = useState([]);
        
    useEffect(() => {
    // Store cartItems in localStorage whenever they change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        // Fetch products from the API
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Map image names to actual imports
                const mappedProducts = data.map(product => ({
                    ...product,
                    image: product.image.map(imgName => images[imgName])
                }));
                setProducts(mappedProducts);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

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
                    console.log('Error accessing cartItems:', error);
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
            let itemInfo = products.find((product) => product._id === items);
            if (!itemInfo) continue; // Check if itemInfo is defined
            for (const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount+=itemInfo.price*cartItems[items][item];
                    }

                }catch(error){
                    console.log('Error accessing cartItems:', error);
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