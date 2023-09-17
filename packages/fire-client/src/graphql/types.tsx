import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  getRace: Race;
  races: Array<Race>;
};


export type QueryGetRaceArgs = {
  id: Scalars['ID']['input'];
};

export type Race = {
  __typename?: 'Race';
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
};

export type GetRacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRacesQuery = { __typename?: 'Query', races: Array<{ __typename?: 'Race', id: string, title: string }> };

export type GetRaceQueryVariables = Exact<{
  getRaceId: Scalars['ID']['input'];
}>;


export type GetRaceQuery = { __typename?: 'Query', getRace: { __typename?: 'Race', id: string, title: string, published: boolean } };


export const GetRacesDocument = gql`
    query GetRaces {
  races {
    id
    title
  }
}
    `;

/**
 * __useGetRacesQuery__
 *
 * To run a query within a React component, call `useGetRacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRacesQuery(baseOptions?: Apollo.QueryHookOptions<GetRacesQuery, GetRacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRacesQuery, GetRacesQueryVariables>(GetRacesDocument, options);
      }
export function useGetRacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRacesQuery, GetRacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRacesQuery, GetRacesQueryVariables>(GetRacesDocument, options);
        }
export type GetRacesQueryHookResult = ReturnType<typeof useGetRacesQuery>;
export type GetRacesLazyQueryHookResult = ReturnType<typeof useGetRacesLazyQuery>;
export type GetRacesQueryResult = Apollo.QueryResult<GetRacesQuery, GetRacesQueryVariables>;
export const GetRaceDocument = gql`
    query GetRace($getRaceId: ID!) {
  getRace(id: $getRaceId) {
    id
    title
    published
  }
}
    `;

/**
 * __useGetRaceQuery__
 *
 * To run a query within a React component, call `useGetRaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRaceQuery({
 *   variables: {
 *      getRaceId: // value for 'getRaceId'
 *   },
 * });
 */
export function useGetRaceQuery(baseOptions: Apollo.QueryHookOptions<GetRaceQuery, GetRaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRaceQuery, GetRaceQueryVariables>(GetRaceDocument, options);
      }
export function useGetRaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRaceQuery, GetRaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRaceQuery, GetRaceQueryVariables>(GetRaceDocument, options);
        }
export type GetRaceQueryHookResult = ReturnType<typeof useGetRaceQuery>;
export type GetRaceLazyQueryHookResult = ReturnType<typeof useGetRaceLazyQuery>;
export type GetRaceQueryResult = Apollo.QueryResult<GetRaceQuery, GetRaceQueryVariables>;