import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("auth");
            if (token) {
              headers.set("x-access-token", token);
            }
            return headers;
          },
    }),
    tagTypes: ["category", "subCategory", "flavour", "product"],
    endpoints: () => ({})
})

