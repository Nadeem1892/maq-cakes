import { api } from "./ApiSlice"

const productsCategorySlice = api.injectEndpoints({
    endpoints: (bulder) => ({
        getProductByCategoryOrSubCategory: bulder.query({
        query:(id) => ({
            url: `product/get-products-categoty-or-subcategory/${id}`,
            method:"GET",
        }),
        providesTags: ["product"],
        }),
        
    })
})

export const { useGetProductByCategoryOrSubCategoryQuery } = productsCategorySlice