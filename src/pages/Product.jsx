import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table'
import Loader from '../components/Loader';
import SideFilter from '../components/SideFilter';
import { getProducts } from '../services/product';

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        let source = axios.CancelToken.source();

        const getData = async () => {
            setLoading(true);
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
                // source.cancel();
            }
        }

        getData();

        return function () {
            source.cancel("Cancelling in cleanup");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="container-fluid">
                {loading ? <Loader /> : <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                        <SideFilter />
                    </div>
                    <div className="col-lg-9 col-md-8 col-12">
                        <Table body={products} />
                    </div>
                </div>}
            </div>
        </>
    );
}

export default Product;
