import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import {getProductsByNameAction} from "../Actions/AddProduct";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [dbproducts, setDbproducts] = useState([]);
  const { productName } = useParams();
  const Navigate = useNavigate();
  const productRef = useRef();
  var searchString = "";

  const searchProductsByName = async () => {
    console.log("searchProductsByName called");
    if (productRef.current.value !== "") {
      console.log("From db");
      await getProductsByNameAction(productRef.current.value).then((data) => {
        console.log(data);
        setDbproducts(data)
        console.log(dbproducts);
      })

    }

    console.log(productRef.current.value);

  }
  const searchProducts = () => {
    searchProductsByName();
    if (productRef.current.value !== null) {
      searchString = productRef.current.value;
    }
    else if (productName !== undefined) {
        searchString = productName;
      }
    if (searchString !== "") {
      const options = {
        method: "GET",
        url: "https://amazon24.p.rapidapi.com/api/product",
        params: {
          categoryID: "aps",
          keyword: { searchString },
          country: "US",
          page: "1",
        },
        headers: {
          "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
          "X-RapidAPI-Key":
            "b3efac4ebcmsh09dea2bbba700d6p1b5d89jsnbf7267d877bc",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setProducts(response.data.docs);
          console.log("From Api");
          console.log(response.data.docs);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    Navigate(`/search/${searchString}`);
  };

  useEffect(() => {
    searchProducts();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="row wd-bg-image">
      <div className="mt-3 mb-3">
        <div className="mt-1 mb-3 input-icons">
          <i className="fas fa-search ms-3 mt-2"></i>

          <input
            ref={productRef}
            className="form-control ms-3 ps-4 rounded-pill w-75 d-inline"
            id="text-fields-search"
            placeholder="Search Product"
          />

          <button
            className=" btn btn-primary rounded float-end"
            onClick={() => searchProducts()}
          >
            Search
          </button>
        </div>
        Hello
        <ul className="list-group">
          <li className="list-group-item"> From DB</li>
        </ul>
    
        {dbproducts[0]}
        {/*{JSON.Stringify(dbproducts)}*/}
        <ul className="list-group">
  
          {dbproducts.map((prod) => (
              <li
                  className="list-group-item"
                  style={{ backgroundColor: "rgba(137, 215, 245, 0.83)" }}
              >
                <Link to={`/details/${prod._id}`}>
                  <div className="row">
                    <div className="col-2">
                      <img
                          src={prod.imageUrl}
                          className="me-3"
                          height={60}
                          alt="Product"
                      />
                    </div>
                    <div className="col-9">{prod.name}</div>
                  </div>
                </Link>
              </li>
          ))}
          {products.map((product) => (
            <li
              className="list-group-item"
              style={{ backgroundColor: "rgba(137, 215, 245, 0.83)" }}
            >
              <Link to={`/details/${product.product_id}`}>
                <div className="row">
                  <div className="col-2">
                    <img
                      src={product.product_main_image_url}
                      className="me-3"
                      height={60}
                      alt="Product"
                    />
                  </div>
                  <div className="col-9">{product.product_title}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
