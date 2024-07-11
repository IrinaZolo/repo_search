// @generated THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import * as Types from "../../../../shared/model/models.gen";

export type RepoFieldsFragment = {
  name: string;
  stargazerCount: number;
  commitComments: { nodes?: Array<{ createdAt: any } | null> | null };
};

export type SearchRepoListQueryVariables = Types.Exact<{
  after?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  before?: Types.InputMaybe<Types.Scalars["String"]["input"]>;
  first?: Types.InputMaybe<Types.Scalars["Int"]["input"]>;
  query: Types.Scalars["String"]["input"];
}>;

export type SearchRepoListQuery = {
  search: {
    repositoryCount: number;
    nodes?: Array<{
      name: string;
      stargazerCount: number;
      commitComments: { nodes?: Array<{ createdAt: any } | null> | null };
    } | null> | null;
    // | {}
    pageInfo: { startCursor?: string | null; endCursor?: string | null };
  };
};
