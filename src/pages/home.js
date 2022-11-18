import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../features/productSlice";

import ProductItem from "../components/ProductItem";
// import { addToSaved, removeFromSaved } from "../../features/savedSlice";
import Spinners from "../components/Spinner";
import { addToCart } from '../features/cartSlice';

function Home () {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    if(localStorage.getItem("token")){
      dispatch(addToCart(item));
    }else{
      alert("Token unknow, Login dulu Y");
      window.location.replace("/login")
    }
  };
  
//   const savedItems = useSelector((state) => state.saved.savedItems);

//   const handleAddToSaved = (item) => {
//     dispatch(addToSaved(item));
//   };
//   const handleRemoveFromSaved = (item) => {
//     dispatch(removeFromSaved(item));
//   };

  return (
    <>
      <div className="container">
        <div className="row">
          {allProducts.map((product, index) => (
            <div className="col-md-3 py-2" key={index}>
              <ProductItem
                idp={product?.id}
                price={product?.price}
                category={product?.category}
                urlToImage={product?.image}
                key={index}
                title={product?.title}
                description={product?.description}
                onClick={() => {
                    handleAddToCart(product);
                }}
                buttonName={"Add to Cart"
                }
              />
            </div>
          ))}
        </div>
        <div>{loading && <Spinners />}</div>
      </div>
    </>
  );
}

export default Home;
