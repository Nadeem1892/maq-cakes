import { api } from "./ApiSlice"

const SubCategorySlice = api.injectEndpoints({
    endpoints: (bulder) => ({
        getSubCategory: bulder.query({
        query:(id) => ({
            url: `sub-category/get-sub-categories/${id}`,
            method:"GET",
        }) 
        })
    })
})

export const { useGetSubCategoryQuery } = SubCategorySlice