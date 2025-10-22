import { gql } from 'graphql-request';

export const GET_ALL_EVENTS = gql`
  query GetAllEvents {
    allEvents(orderBy: date_ASC) {
      title
      slug
      date
      image {
        url
        alt
        width
        height
      }
    }
  }
`;

export const GET_EVENT_BY_ID = gql`
  query GetEventById($slug: String) {
    event(filter: { slug: { eq: $slug } }) {
      title
      slug
      description
      audience
      tickets
      date
      image {
        url
        alt
        width
        height
      }
    }
  }
`;

export const GET_ALL_EXHIBITS = gql`
  query GetAllExhibits {
    allExhibits {
      slug
      title
      london
      leeds
      images {
        url
        alt
        width
        height
      }
    }
  }
`;

export const GET_EXHIBIT_BY_ID = gql`
  query GetExhibitsById($slug: String) {
    exhibit(filter: { slug: { eq: $slug } }) {
      slug
      title
      description
      taskEasy
      taskIntermediate
      taskAdvanced
      history
      people
      applications
      mathsAtHome
      images {
        url
        alt
        width
        height
      }
    }
  }
`;
