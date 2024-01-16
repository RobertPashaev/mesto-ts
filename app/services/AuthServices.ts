import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const HEADERS = {
  'Content-Type': 'application/json',
};

type User = {
  email: string;
  password: string;
  avatar: string;
  name: string;
  about: string;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://auth.nomoreparties.co',
  }),
  tagTypes: ['Auth'],
  endpoints: build => ({
    getUser: build.query<User, void>({
      query: () => ({
        url: `/users/me`,
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${JWT}`,
        },
      }),
      providesTags: ['Auth'],
    }),
    signinUser: build.mutation({
      query: ({ password, email }) => ({
        url: `/signin`,
        headers: HEADERS,
        method: 'POST',
        body: { password, email },
      }),
      invalidatesTags: ['Auth'],
    }),
    signupUser: build.mutation({
      query: ({ password, email }) => ({
        url: `/signup`,
        headers: HEADERS,
        method: 'POST',
        body: { password, email },
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
