import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseQuery = fetchBaseQuery({
    baseUrl: "https://authserver-p4ae.onrender.com/api/v1/",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().localStorage.token;
        if(token){
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers;
    }
})


export const apiSlice = createApi({
    reducerPath: "posts",
    baseQuery,
    endpoints: build => ({
        getLoggedUser: build.query({
            query: () => '/users/me'
        })
    })
})

export const { useGetLoggedUserQuery } = apiSlice
