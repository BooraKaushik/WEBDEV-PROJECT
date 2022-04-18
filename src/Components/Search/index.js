import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./index.css";
import temp_products from "./temp_products";

const Search = () => {
    const [products, setProducts] = useState([]);
    const productRef = useRef();
    // productRef.current.value ||
    const searchProducts = () => {

        const searchString = productRef.current.value || 'iphone';
        // setProducts(temp_products.docs);
        const options = {
            method: 'GET',
            url: 'https://amazon24.p.rapidapi.com/api/product',
            params: {categoryID: 'aps', keyword: {searchString}, country: 'US', page: '1'},
            headers: {
                'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
                'X-RapidAPI-Key': 'cce41dfademshe488954231b2a09p1b29e0jsne66353d8d037'
            }
        };


        axios.request(options).then(function (response) {
            console.log(response.data.docs);
            console.log(response.data.docs);
            console.log(typeof response.data.docs);
            setProducts(response.data.docs);
            console.log("Completed setting");
            console.log(products);

        }).catch(function (error) {
            console.log("Hello error");
            console.error(error);
        });

    }

    // useEffect(() => {
    //     searchProduct();
    // })

    return (
        <div className="row wd-bg-image">

            <div className="mt-3 mb-3">

                <div className="mt-1 mb-3 input-icons">
                    <i className="fas fa-search ms-3 mt-2"></i>

                    <input ref={productRef} className="form-control ms-3 ps-4 rounded-pill w-75 d-inline" id="text-fields-search" placeholder="Search Product"/>

                    <button className=" btn btn-primary rounded float-end" onClick={()=>
                        searchProducts()
                    }>Search</button>
                </div>
                <ul className="list-group">


                    {

                        products.map(product =>

                        <li className="list-group-item wd-bg-transparent">
                            <Link to={`/details/${product.product_id}`} >
                                <div className="row">


                                        <div className="col-2">

                                            <img src={product.product_main_image_url} className="me-3" height={60}/>

                                        </div>
                                    <div className="col-9">
                                        {product.product_title}
                                    </div>

                                </div>
                            </Link>
                        </li>


                    )
                    }

                </ul>
                {/*<pre>*/}
                {/*{JSON.stringify(products, null, 2)}*/}
                {/*    </pre>*/}

            </div>
        </div>
    );
}

export default Search;