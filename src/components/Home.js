import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg"
          alt=""
        ></img>

        <div className="home_row">
          <Product
            title="The lean Startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg"
            rating={5}
          />

          <Product
            title="Best Sellers in Grocery & Gourmet Foods"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61e5wNIyogS._AC_SY175_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            title="Samsung Galaxy M52 5G"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41CwGO2fY0L._SX300_SY300_QL70_FMwebp_.jpg"
            rating={3}
          />

          <Product
            title="Samsung Galaxy M52 5G"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41CwGO2fY0L._SX300_SY300_QL70_FMwebp_.jpg"
            rating={3}
          />

          <Product
            title="Samsung Galaxy M52 5G"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/41CwGO2fY0L._SX300_SY300_QL70_FMwebp_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            title="The lean Startup"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
