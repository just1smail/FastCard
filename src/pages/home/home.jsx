import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Products from "../../components/products/products";
import Category from "../../components/category/category";
import Products2 from "../../components/products2/products2";
import Sale from "../../components/sale/sale";

const Home = () => {
  return (
    <div>
      <main>
        <div>
          <Sidebar />
        </div>

        <div>
          <Products />
        </div>

        <div>
          <Category />
        </div>

        <div>
          <Products2 />
        </div>

        <div>
          <Sale />
        </div>
      </main>
    </div>
  );
};

export default Home;
