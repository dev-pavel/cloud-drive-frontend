import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {setLoading} from "../slices/auth";
import {ApiResponse, ITokens} from "../../interfaces/interfaces";

interface ILoginData {
    email: string
    password: string
}

interface IRegData {
    email: string
    password: string
    firstName: string
    lastName: string
}

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/auth/'}),
    endpoints: (builder) => ({
        login: builder.mutation<ApiResponse<ITokens>, ILoginData>({
            query: (data) => ({
                url: "login",
                method: "POST",
                body: data
            }),
            onQueryStarted(data, {dispatch}) {
                dispatch(setLoading(true))
            },
            // transformErrorResponse({error}) {
            //     debugger
            //     return {success: false, error: res.status}
            // },
            // transformResponse(baseQueryReturnValue: any, a, b) {
            //     debugger
            //     return baseQueryReturnValue.status
            // }
        }),
        registration: builder.mutation<ApiResponse<ITokens>, IRegData>({
            query: (data) => ({
                url: "registration",
                method: "POST",
                body: data
            }),
        })
    })
});

export const {useLoginMutation, useRegistrationMutation} = authApi;
export default authApi;