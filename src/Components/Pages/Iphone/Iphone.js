import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json"
      // "http://localhost:3001/iphone"
    )
      .then((res) => res.json()) //json is parse method to change the data to object
      .then((data) => {
        console.log(data)
        setProducts(data); //setProducts is updater function, items represent the data we want
      })
      .catch(() => console.log("Error:unable to fetch!"));
  }, []);

  console.log(products);

  let flip = true;
  return (
    <div>
      <section className="internal-page-wrapper top-100 bottom-100">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="title-wrapper bold">Iphone Page</h1>
              <h3 className="brief-description mb-5">
                The best for the brightest.
              </h3>
            </div>
          </div>
          {products?.map((data) => {
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1; 

              flip = !flip;
            } else {
              flip = !flip;
            }

            let productDiv = (
              <div
                key={data.product_url}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${order1}`}
                >
                  <div className="product-title">{data.product_name}</div>
                  <div className="product-brief">
                    {data.product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${data.starting_price}`}
                  </div>
                  <div className="monthly-price">{data.price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${data.product_name}`}>
                          Learn More
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`col-sm-12 col-md-6 order-${order2}`}
                >
                  <div className="product-image">
                    <img src={data.product_img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;

