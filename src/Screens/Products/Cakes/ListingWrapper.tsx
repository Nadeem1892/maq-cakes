import React from 'react';
import Listing from './Listing';
import { useGetProductByCategoryQuery } from '../../../Service/ProductsSlice';
import { useParams } from 'react-router-dom';
import Loader from '../../../Components/Loader';






function ListingWrapper() {
   
    const {id} = useParams()
    
    const { data: products, isLoading, isError } = useGetProductByCategoryQuery(id); // Fetch products by category
  
   
    if (isLoading) return <div><Loader/></div>;
    if (isError) return <div>Error fetching products.</div>;

    // Log the categoryId

    return (
        <div className='mt-32 mb-20'>
            <Listing products={products} /> {/* Pass the fetched products to Listing */}
        </div>
    );
}

export default ListingWrapper;
