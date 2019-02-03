// eslint-disable
// this is an auto generated file. This will be overwritten

export const createProfile = `mutation CreateProfile($input: CreateProfileInput!) {
  createProfile(input: $input) {
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
export const updateProfile = `mutation UpdateProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
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
export const deleteProfile = `mutation DeleteProfile($input: DeleteProfileInput!) {
  deleteProfile(input: $input) {
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
export const createCourse = `mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
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
export const updateCourse = `mutation UpdateCourse($input: UpdateCourseInput!) {
  updateCourse(input: $input) {
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
export const deleteCourse = `mutation DeleteCourse($input: DeleteCourseInput!) {
  deleteCourse(input: $input) {
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
