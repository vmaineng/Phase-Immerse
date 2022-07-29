import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000'
    }),
    tagTypes: ['User'],
    endpoints(builder){
        return {
            fetchUsers: builder.query({
                query(){
                    return `/users`
                },
                providesTags: ['User']
            })
        }
    }
})

export const {useFetchUsesQuery} = userApi