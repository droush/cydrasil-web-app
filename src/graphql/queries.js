/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlacement = /* GraphQL */ `
  query GetPlacement($id: ID!) {
    getPlacement(id: $id) {
      id
      name
      description
      owner
    }
  }
`;
export const listPlacements = /* GraphQL */ `
  query ListPlacements(
    $filter: ModelPlacementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlacements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        owner
      }
      nextToken
    }
  }
`;
