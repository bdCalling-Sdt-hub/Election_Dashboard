import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getFromLocalStorage } from "../../Util/local-stroage"
const token = getFromLocalStorage("electionToken")

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.crayonpolitics.org/api/v1'   , headers: {
        Authorization: `Bearer ${token}`,
      }, }), 
    endpoints:()=>({})
}) 

export const imageUrl = "https://api.crayonpolitics.org"