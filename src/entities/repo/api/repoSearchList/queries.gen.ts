// @generated THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Types from '../../../../shared/model/models.gen';

export type RepoFieldsFragment = { readonly __typename?: 'Repository', readonly id: string, readonly name: string, readonly stargazerCount: number, readonly pushedAt?: any | null, readonly url: any };

export type SearchRepoListQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  query: Types.Scalars['String']['input'];
  type: Types.SearchType;
}>;


export type SearchRepoListQuery = { readonly __typename?: 'Query', readonly search: { readonly __typename?: 'SearchResultItemConnection', readonly repositoryCount: number, readonly nodes?: ReadonlyArray<{ readonly __typename?: 'App' } | { readonly __typename?: 'Discussion' } | { readonly __typename?: 'Issue' } | { readonly __typename?: 'MarketplaceListing' } | { readonly __typename?: 'Organization' } | { readonly __typename?: 'PullRequest' } | { readonly __typename?: 'Repository', readonly id: string, readonly name: string, readonly stargazerCount: number, readonly pushedAt?: any | null, readonly url: any } | { readonly __typename?: 'User' } | null> | null, readonly pageInfo: { readonly __typename?: 'PageInfo', readonly startCursor?: string | null, readonly endCursor?: string | null } } };
