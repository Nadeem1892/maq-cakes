import React from 'react';
import BestSellersCard from '../../../Atoms/BestSellersCard';

type Product = {
    _id: string;
    name: string;
    price: number;
    offerPrice: number;
    discount: string;
    image: string; // This should be the URL or the filename
};

type Props = {
    products: {
        data: Product[];
    };
};

export default function Listing({ products }: Props) {
    const productList = products?.data || [];

    return (
        <div className="grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-6">
            {productList.length > 0 ? (
                productList.map(product => {
                    const imageUrl = product.image.startsWith('http')
                        ? product.image
                        : require(`../../../Assets/${product.image}`); // ensure paths are correct

                    return (
                        <BestSellersCard
                            key={product._id}
                            title={product.name}
                            price={product.price}
                            offerPrice={product.offerPrice}
                            discount={product.discount}
                            image={imageUrl}
                        />
                    );
                })
            ) : (
                <div>No products available.</div>
            )}
        </div>
    );
}
