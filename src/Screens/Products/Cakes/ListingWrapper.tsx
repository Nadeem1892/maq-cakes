import React from 'react';
import Listing from './Listing';
import { useGetProductByCategoryOrSubCategoryQuery } from '../../../Service/ProductsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../../Components/Loader';

function ListingWrapper() {
    const { id } = useParams();
    const { data: products, isLoading, isError } = useGetProductByCategoryOrSubCategoryQuery(id); // Fetch products by category
    if (isLoading) return <div><Loader /></div>; // Show loader while fetching data
    if (isError) return <div>Products not found.</div>; // Handle error case

    // If products exist, pass them to Listing; otherwise, show a message
    return (
        <div className='mt-32 mb-20'>
            {products?.data && products.data.length > 0 ? (
                <Listing products={products} />
            ) : (
                <div>No products available.</div> // Handle case when no products are returned
            )}
        </div>
    );
}

export default ListingWrapper;
