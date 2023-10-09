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

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Event>;
  logout?: Maybe<Event>;
  updateEventByID?: Maybe<Event>;
};


export type MutationLoginArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLogoutArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateEventByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  events: Array<Event>;
  getEventByID?: Maybe<Event>;
  getEventBySlug?: Maybe<Event>;
};


export type QueryGetEventByIdArgs = {
  id: Scalars['ID']['input'];
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

export type LoginMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'Event', id: string, title: string } | null };

export type LogoutMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'Event', id: string, title: string } | null };

export type GetEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string, title: string, slug: string, races: Array<{ __typename?: 'Race', id: string, price: number }> }> };

export type GetEventBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetEventBySlugQuery = { __typename?: 'Query', getEventBySlug?: { __typename?: 'Event', id: string, title: string, published: boolean, date: string, type: string, races: Array<{ __typename?: 'Race', id: string, price: number, capacity: number, distance: string }> } | null };

export type GetEventByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetEventByIdQuery = { __typename?: 'Query', getEventByID?: { __typename?: 'Event', id: string, title: string } | null };

export type UpdateEventByIdMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UpdateEventByIdMutation = { __typename?: 'Mutation', updateEventByID?: { __typename?: 'Event', id: string, title: string } | null };


export const LoginDocument = gql`
    mutation Login($id: ID!) {
  login(id: $id) {
    id
    title
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout($id: ID!) {
  logout(id: $id) {
    id
    title
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
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
export const GetEventByIdDocument = gql`
    query GetEventByID($id: ID!) {
  getEventByID(id: $id) {
    id
    title
  }
}
    `;

/**
 * __useGetEventByIdQuery__
 *
 * To run a query within a React component, call `useGetEventByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEventByIdQuery(baseOptions: Apollo.QueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
      }
export function useGetEventByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventByIdQuery, GetEventByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventByIdQuery, GetEventByIdQueryVariables>(GetEventByIdDocument, options);
        }
export type GetEventByIdQueryHookResult = ReturnType<typeof useGetEventByIdQuery>;
export type GetEventByIdLazyQueryHookResult = ReturnType<typeof useGetEventByIdLazyQuery>;
export type GetEventByIdQueryResult = Apollo.QueryResult<GetEventByIdQuery, GetEventByIdQueryVariables>;
export const UpdateEventByIdDocument = gql`
    mutation UpdateEventByID($id: ID!) {
  updateEventByID(id: $id) {
    id
    title
  }
}
    `;
export type UpdateEventByIdMutationFn = Apollo.MutationFunction<UpdateEventByIdMutation, UpdateEventByIdMutationVariables>;

/**
 * __useUpdateEventByIdMutation__
 *
 * To run a mutation, you first call `useUpdateEventByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventByIdMutation, { data, loading, error }] = useUpdateEventByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateEventByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventByIdMutation, UpdateEventByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventByIdMutation, UpdateEventByIdMutationVariables>(UpdateEventByIdDocument, options);
      }
export type UpdateEventByIdMutationHookResult = ReturnType<typeof useUpdateEventByIdMutation>;
export type UpdateEventByIdMutationResult = Apollo.MutationResult<UpdateEventByIdMutation>;
export type UpdateEventByIdMutationOptions = Apollo.BaseMutationOptions<UpdateEventByIdMutation, UpdateEventByIdMutationVariables>;