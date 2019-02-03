// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateProfile = `subscription OnCreateProfile {
  onCreateProfile {
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
export const onUpdateProfile = `subscription OnUpdateProfile {
  onUpdateProfile {
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
export const onDeleteProfile = `subscription OnDeleteProfile {
  onDeleteProfile {
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
export const onCreateCourse = `subscription OnCreateCourse {
  onCreateCourse {
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
export const onUpdateCourse = `subscription OnUpdateCourse {
  onUpdateCourse {
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
export const onDeleteCourse = `subscription OnDeleteCourse {
  onDeleteCourse {
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
