/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlacement = /* GraphQL */ `
  mutation CreatePlacement(
    $input: CreatePlacementInput!
    $condition: ModelPlacementConditionInput
  ) {
    createPlacement(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const updatePlacement = /* GraphQL */ `
  mutation UpdatePlacement(
    $input: UpdatePlacementInput!
    $condition: ModelPlacementConditionInput
  ) {
    updatePlacement(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
export const deletePlacement = /* GraphQL */ `
  mutation DeletePlacement(
    $input: DeletePlacementInput!
    $condition: ModelPlacementConditionInput
  ) {
    deletePlacement(input: $input, condition: $condition) {
      id
      name
      description
      owner
    }
  }
`;
