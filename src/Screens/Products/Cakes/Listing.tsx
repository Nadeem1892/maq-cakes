import React from 'react';
import BestSellersCard from '../../../Atoms/BestSellersCard';

type Product = {
    _id: string;
    name: string; // Ensure to match the key with your API response
    price: number;
    offerPrice: number;
    discount: string;
    image: string;
};

type Props = {
    products: {
        data: Product[]; // Define the type for the products prop
    };
};

export default function Listing({ products }: Props) {
    const productList = products?.data || []; // Safely access products.data

    return (
        <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-6">
            {productList.length > 0 ? (
                productList.map(product => (
                    <BestSellersCard
                        key={product._id}
                        title={product.name} // Adjust if your API response uses a different key
                        price={product.price}
                        offerPrice={product.offerPrice}
                        discount={product.discount}
                        image={"https://bkmedia.bakingo.com/choco-truffle-cake0005choc-a.jpg?tr=h-265,w-265?tr=w-266,dpr-1.5,q-70"} // Use dynamic image if available
                    />
                ))
            ) : (
                <div>No products available.</div> // Handle the case when no products are returned
            )}
        </div>
    );
}
