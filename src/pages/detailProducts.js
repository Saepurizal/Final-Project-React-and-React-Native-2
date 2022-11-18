import { useState ,useEffect } from "react";
 import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../features/detailSlice";
// import { addToSaved, removeFromSaved } from "../../features/savedSlice";
import Spinners from "../components/Spinner";
import DetailProduct from "../components/DetailProduct";
import { addToCart } from '../features/cartSlice';

function DetailsProduct () {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.detail.details);
  const loading = useSelector((state) => state.detail.loading);
  
  const handleAddToCart = (item) => {
    if(localStorage.getItem("token")){
      dispatch(addToCart(item));
    }else{
      alert("Token unknow, Login dulu Y");
      window.location.replace("/login")
    }
  };
  // const dispatch = useDispatch();
  //   const detailProducts = useSelector((state) => state.detail.details);
  //   const loading = useSelector((state) => state.detail.loading);

  //   useEffect(() => {
  //     dispatch(fetchData());
  //   }, [dispatch]);
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
            <div className="" key={product?.id}>
              <DetailProduct
                idp={product?.id}
                price={product?.price}
                category={product?.category}
                urlToImage={product?.image}
                key={product?.id}
                title={product?.title}
                description={product?.description}
                onClick={() => {
                  handleAddToCart(product);
              }}
              buttonName={"Add to Cart"
              }
              />
            </div>
        </div>
        <div>{loading && <Spinners />}</div>
      </div>
    </>
  );
}

export default DetailsProduct;
