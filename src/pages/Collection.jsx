import React,{useContext} from 'react'
import { useState } from 'react';
import {ShopContext} from '../context/ShopContext'
import {assets} from '../assets/assets'
import ProductItem from '../components/ProductItem';
import { useEffect } from 'react';
import {CombinedDiv,StyledDiv1,StyledDiv2,StyledHeading,DropdownIcon,Container, 
  HeaderContainer, 
  ItemDiv, 
  SortDiv} from '../components/Collection_styles'
import Footer from '../components/Footer';

const Collection = () => {

  const {products,search,showSearch} =useContext(ShopContext);
  const [showCategories,setShowCategories]=useState(false);
  const [filterProducts,setFilterProducts] =useState([]);
  const [category,setCategory]= useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSortType]=useState('relevant');

  const toggleCategory =(e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item!=e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory =(e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item!=e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(search && showSearch){
      productsCopy = productsCopy.filter((item =>item.name.toLowerCase().includes(search.toLowerCase())))
    }

    if(category.length>0){
      productsCopy = productsCopy.filter((item =>category.includes(item.category)))
    }

    if(subCategory.length>0){
      productsCopy = productsCopy.filter((item =>subCategory.includes(item.subCategory)))
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = () =>{
    let filterProductCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a,b)=>(b.price - a.price)));
        break;
      
      default:
        applyFilter();
        break;
      
    }
  }

  useEffect(() =>{
    applyFilter()
  },[category,subCategory,search,showSearch])

  useEffect(() =>{
    sortProduct()
  },[sortType])  

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const categoryParam = query.get('category');
    if (categoryParam) {
      setCategory([categoryParam]);
    }
  }, [location.search]);

  return (
    <div>
      <CombinedDiv >
        {/* Left side */}
        {/* Filter Options */}
        <div>
          <div>
            <StyledHeading>FILTERS
              <DropdownIcon src={assets.dropdown_icon} alt=""  onClick={() => setShowCategories(!showCategories)}/>
            </StyledHeading>
            {/* Category Filter    */}
            
            <StyledDiv1 show={showCategories}>
              <StyledHeading>CATEGORIES</StyledHeading>
              <div>
                <p>
                  <input type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
                </p>
                <p>
                  <input type='checkbox' value={'Women'} onChange={toggleCategory}/>Women
                </p>
                <p>
                  <input type='checkbox' value={'Girls'} onChange={toggleCategory}/>Girls
                </p>
                <p>
                  <input type='checkbox' value={'Boys'} onChange={toggleCategory}/>Boys
                </p>
              </div>
            </StyledDiv1>
          </div>
            {/* Sub Category Filter */}
            <StyledDiv2 show={showCategories}>
              <StyledHeading>SUB-CATEGORIES</StyledHeading>
              <div>
                <p>
                  <input type='checkbox' value={'Dresses'} onChange={toggleSubCategory}/>Dresses
                </p>
                <p>
                  <input type='checkbox' value={'Shirts'} onChange={toggleSubCategory}/>Shirts
                </p>
                <p>
                  <input type='checkbox' value={'TShirts'} onChange={toggleSubCategory}/>TShirts
                </p>
                <p>
                  <input type='checkbox' value={'Frocks'} onChange={toggleSubCategory}/>Frocks
                </p>
              </div>
            </StyledDiv2>
        </div>
          {/* Right side */}
        <Container>
          <HeaderContainer>
            <h2> ALL COLLECTIONS</h2>
            <SortDiv>
              <select onChange = {(e) =>setSortType(e.target.value)}>
                  <option value ='relevant'>Sort by: Relevant</option>
                  <option value ='low-high'>Sort by:Low to High </option>
                  <option value ='high-low'>Sort by: High to Low</option>
              </select>
            </SortDiv>
          </HeaderContainer>
          <ItemDiv>
          {
            filterProducts.map((item,index) =>(
              <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price}/>
            ))
          }
          </ItemDiv>
        </Container>  
      </CombinedDiv>
      <Footer/>
    </div>
  )
}

export default Collection