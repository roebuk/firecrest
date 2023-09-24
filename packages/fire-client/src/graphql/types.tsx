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

export type Mutation = {
  __typename?: 'Mutation';
  createRace: Race;
};


export type MutationCreateRaceArgs = {
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getRaceBySlug?: Maybe<Race>;
  races: Array<Race>;
};


export type QueryGetRaceBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type Race = {
  __typename?: 'Race';
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type GetRacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRacesQuery = { __typename?: 'Query', races: Array<{ __typename?: 'Race', id: string, title: string, slug: string }> };

export type GetRaceBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetRaceBySlugQuery = { __typename?: 'Query', getRaceBySlug?: { __typename?: 'Race', id: string, title: string, published: boolean } | null };

export type CreateRaceMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateRaceMutation = { __typename?: 'Mutation', createRace: { __typename?: 'Race', id: string, title: string } };


export const GetRacesDocument = gql`
    query GetRaces {
  races {
    id
    title
    slug
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
export const GetRaceBySlugDocument = gql`
    query GetRaceBySlug($slug: String!) {
  getRaceBySlug(slug: $slug) {
    id
    title
    published
  }
}
    `;

/**
 * __useGetRaceBySlugQuery__
 *
 * To run a query within a React component, call `useGetRaceBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRaceBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRaceBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetRaceBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetRaceBySlugQuery, GetRaceBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRaceBySlugQuery, GetRaceBySlugQueryVariables>(GetRaceBySlugDocument, options);
      }
export function useGetRaceBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRaceBySlugQuery, GetRaceBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRaceBySlugQuery, GetRaceBySlugQueryVariables>(GetRaceBySlugDocument, options);
        }
export type GetRaceBySlugQueryHookResult = ReturnType<typeof useGetRaceBySlugQuery>;
export type GetRaceBySlugLazyQueryHookResult = ReturnType<typeof useGetRaceBySlugLazyQuery>;
export type GetRaceBySlugQueryResult = Apollo.QueryResult<GetRaceBySlugQuery, GetRaceBySlugQueryVariables>;
export const CreateRaceDocument = gql`
    mutation CreateRace($title: String!) {
  createRace(title: $title) {
    id
    title
  }
}
    `;
export type CreateRaceMutationFn = Apollo.MutationFunction<CreateRaceMutation, CreateRaceMutationVariables>;

/**
 * __useCreateRaceMutation__
 *
 * To run a mutation, you first call `useCreateRaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRaceMutation, { data, loading, error }] = useCreateRaceMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateRaceMutation(baseOptions?: Apollo.MutationHookOptions<CreateRaceMutation, CreateRaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRaceMutation, CreateRaceMutationVariables>(CreateRaceDocument, options);
      }
export type CreateRaceMutationHookResult = ReturnType<typeof useCreateRaceMutation>;
export type CreateRaceMutationResult = Apollo.MutationResult<CreateRaceMutation>;
export type CreateRaceMutationOptions = Apollo.BaseMutationOptions<CreateRaceMutation, CreateRaceMutationVariables>;