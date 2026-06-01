import {gql} from 'graphql-request';

export const GET_ALL_EVENTS = gql`
  query GetAllEvents {
    allEvents(first: 200, orderBy: date_ASC) {
      title
      slug
      date
      endDate
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
    event(filter: {slug: {eq: $slug}}) {
      title
      slug
      description
      audience
      tickets
      date
      endDate
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
    allExhibits(first: 200) {
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
    exhibit(filter: {slug: {eq: $slug}}) {
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

export const GET_VISIT = gql`
  query GetAllVisits {
    visit {
      openingHours
      directions
      ticketPrices
      accessibility
      schoolVisits
      groupVisits
    }
  }
`;

export const GET_ALL_TRUSTEES = gql`
  query GetAllTrustees {
    allTrustees(first: 100) {
      name
      role
      bio
      picture {
        url
        alt
        width
        height
      }
    }
  }
`;

export const GET_ALL_BLOGS = gql`
  query GetAllBlogs {
    allBlogs(first: 100, orderBy: datePublished_DESC) {
      slug
      title
      author
      datePublished
    }
  }
`;

export const GET_BLOG_BY_SLUG = gql`
  query GetBlogBySlug($slug: String) {
    blog(filter: {slug: {eq: $slug}}) {
      slug
      title
      author
      datePublished
      body
    }
  }
`;
