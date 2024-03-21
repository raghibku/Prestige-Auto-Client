import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:5000/"
    }),
    endpoints : 
        (builder) => ({
        // getUsers: builder.query({
        //     query : () => '/users'
        // }),
        // setUser: builder.mutation({
        //     query: (user) => ({
        //         url: '/users',
        //         method: 'POST',
        //         body: user
        //     })
        // })
    })
    
})
export const {  } = baseApi
export default baseApi;