// eslint-disable
// this is an auto generated file. This will be overwritten

export const getProfile = `query GetProfile($id: ID!) {
  getProfile(id: $id) {
    id
    picture
    firstName
    lastName
    course {
      items {
        id
        title
        content
      }
      nextToken
    }
  }
}
`;
export const listProfiles = `query ListProfiles(
  $filter: ModelProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      picture
      firstName
      lastName
      course {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getCourse = `query GetCourse($id: ID!) {
  getCourse(id: $id) {
    id
    title
    content
    profile {
      id
      picture
      firstName
      lastName
      course {
        nextToken
      }
    }
  }
}
`;
export const listCourses = `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      profile {
        id
        picture
        firstName
        lastName
      }
    }
    nextToken
  }
}
`;
export const searchCourses = `query SearchCourses(
  $filter: SearchableCourseFilterInput
  $sort: SearchableCourseSortInput
  $limit: Int
  $nextToken: Int
) {
  searchCourses(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      content
      profile {
        id
        picture
        firstName
        lastName
      }
    }
    nextToken
  }
}
`;
