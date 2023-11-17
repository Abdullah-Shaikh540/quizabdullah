import "./Offerings.css";

import ProductComponent from "./Product"

const Offerings = () => {
  return (
    <div className="row p-5">
      <h3 className="our-offerings">Our offerings</h3>
      <div className="row">

        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        
      </div>

      <div className="row">

        <ProductComponent />
        <ProductComponent />
        <ProductComponent />

      </div>
    </div>
  );
};

export default Offerings;
