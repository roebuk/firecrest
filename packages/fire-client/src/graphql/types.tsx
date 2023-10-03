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

export type Event = {
  __typename?: 'Event';
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  published: Scalars['Boolean']['output'];
  races: Array<Race>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  events: Array<Event>;
  getEventBySlug?: Maybe<Event>;
};


export type QueryGetEventBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type Race = {
  __typename?: 'Race';
  capacity: Scalars['Int']['output'];
  distance: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Int']['output'];
};

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, title: string, slug: string, races: Array<{ __typename?: 'Race', id: string, price: number }> }> };

export type GetEventBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetEventBySlugQuery = { __typename?: 'Query', getEventBySlug?: { __typename?: 'Event', id: string, title: string, published: boolean, date: string, type: string, races: Array<{ __typename?: 'Race', id: string, price: number, capacity: number, distance: string }> } | null };


export const GetEventsDocument = gql`
    query GetEvents {
  events {
    id
    title
    slug
    races {
      id
      price
    }
  }
}
    `;

/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
      }
export function useGetEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventsQuery, GetEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventsQuery, GetEventsQueryVariables>(GetEventsDocument, options);
        }
export type GetEventsQueryHookResult = ReturnType<typeof useGetEventsQuery>;
export type GetEventsLazyQueryHookResult = ReturnType<typeof useGetEventsLazyQuery>;
export type GetEventsQueryResult = Apollo.QueryResult<GetEventsQuery, GetEventsQueryVariables>;
export const GetEventBySlugDocument = gql`
    query GetEventBySlug($slug: String!) {
  getEventBySlug(slug: $slug) {
    id
    title
    published
    date
    type
    races {
      id
      price
      capacity
      distance
    }
  }
}
    `;

/**
 * __useGetEventBySlugQuery__
 *
 * To run a query within a React component, call `useGetEventBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetEventBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetEventBySlugQuery, GetEventBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventBySlugQuery, GetEventBySlugQueryVariables>(GetEventBySlugDocument, options);
      }
export function useGetEventBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventBySlugQuery, GetEventBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventBySlugQuery, GetEventBySlugQueryVariables>(GetEventBySlugDocument, options);
        }
export type GetEventBySlugQueryHookResult = ReturnType<typeof useGetEventBySlugQuery>;
export type GetEventBySlugLazyQueryHookResult = ReturnType<typeof useGetEventBySlugLazyQuery>;
export type GetEventBySlugQueryResult = Apollo.QueryResult<GetEventBySlugQuery, GetEventBySlugQueryVariables>;