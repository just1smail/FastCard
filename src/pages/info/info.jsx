import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosRequest, ImageApi } from "../../utils/axiosRequest/axiosRequest";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../reducers/dataList/dataListSlice";

const Info = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const dispatch = useDispatch()



  async function getProductById(id) {
    try {
      const { data } = await axiosRequest.get(
        "Product/get-product-by-id?id=" + id
      );
      setData(data?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductById(id);
  }, [id]);


  return (
    <div className="pt-[150px] flex flex-col items-center">
      {/* Product Image */}
      <div className="flex justify-center mb-4">
        {data.images?.length > 0 && (
          <img
            src={ImageApi + data.images[0].images}
            alt={data.productName}
            className="w-96 h-96 object-cover"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="w-full max-w-2xl px-4">
        {/* Product Name and Rating */}
        <h2 className="text-3xl font-bold">{data.productName}</h2>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="ml-2 text-gray-500">(150 Reviews)</span>
          <span className="ml-4 text-green-600">In Stock</span>
        </div>


        <p className="text-2xl font-semibold mb-4">{data.price} USD</p>


        <p className="text-gray-700 mb-4">
         {data.description}
        </p>

        <div className="mb-4">
          <label className="block font-medium mb-2">Colours:</label>
          <div className="flex justify-center items-center gap-2 w-[50px] h-[50px] rounded-full border-2 border-black">
            <div style={{backgroundColor:data.color,width:"40px",height:"40px", borderRadius:"50%"}}  ></div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2">Size:</label>
          <div className="flex gap-2">
            {["XS", "S", "M", "L", "XL"].map((size, index) => (
              <button
                key={index}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

    

 
        <Button onClick={() => {
                if (localStorage.getItem('access_token')) {
                  dispatch(addToCart(el.id))
                }
                else {
                  alert('You need to login to add items to cart')
                  navigate('/login')
                }
              }} variant="contained" color="error" className="w-full">
                Add To Cart
              </Button>

       

      </div>
    </div>
  );
};

export default Info;
