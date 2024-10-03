import { api } from "./ApiSlice"

const productsCategorySlice = api.injectEndpoints({
    endpoints: (bulder) => ({
        getProductByCategory: bulder.query({
        query:(id) => ({
            url: `product/get-products-category/${id}`,
            method:"GET",
        }) 
        })
    })
})

export const { useGetProductByCategoryQuery } = productsCategorySlice