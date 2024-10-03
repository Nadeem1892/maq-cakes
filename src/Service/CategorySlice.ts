import { api } from "./ApiSlice"

const categorySlice = api.injectEndpoints({
    endpoints: (bulder) => ({
        getCategory: bulder.query({
        query:() => ({
            url: "category/get-categorys",
            method:"GET",
        }) 
        })
    })
})

export const { useGetCategoryQuery } = categorySlice