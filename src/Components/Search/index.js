import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import { getProductsByNameAction } from "../Actions/AddProduct";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [dbproducts, setDbproducts] = useState([]);
  const [searchText, setSearchText] = useState();
  const { productName } = useParams();
  const Navigate = useNavigate();
  const productRef = useRef();
  var searchString = "";

  const searchProductsByName = async () => {
    if (productRef.current.value !== "") {
      await getProductsByNameAction(productRef.current.value).then((data) => {
        setDbproducts(data);
      });
    } else if (productName !== undefined) {
      console.log("url data From  db ");
      await getProductsByNameAction(productName).then((data) => {
        console.log(data);
        setDbproducts(data);
      });
    }
  };

  const searchProducts = () => {
    searchProductsByName();

    if (productRef.current.value !== null && productRef.current.value !== "") {
      searchString = productRef.current.value;
    } else if (productName !== undefined) {
      searchString = productName;
      setSearchText(productName);
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
            "0b303aa7fbmshc91b46141d98326p14c149jsnf8b239dc4460",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setProducts(response.data.docs);
        })
        .catch(function (error) {});
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className=" btn btn-primary rounded float-end"
            onClick={() => searchProducts()}
          >
            Search
          </button>
        </div>
        <ul className="list-group">
          {dbproducts.map((prod) => (
            <li
              className="list-group-item"
              style={{ backgroundColor: "rgba(137, 215, 245, 0.83)" }}
            >
              <Link to={`/details_db/${prod._id}`}>
                <div className="row">
                  <div className="col-2">
                    <img
                      src={prod.imageUrl}
                      className="me-3"
                      height={60}
                      alt="Product"
                    />
                    {/*Heading*/}
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
