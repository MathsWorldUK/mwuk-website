import 'server-only';

import {DatoEvent, DatoExhibit, DatoVisit, DatoTrustee, DatoNews, DatoAmbassador} from './interfaces';
import {
  GET_ALL_EVENTS,
  GET_ALL_EXHIBITS,
  GET_EVENT_BY_ID,
  GET_EXHIBIT_BY_ID,
  GET_VISIT,
  GET_ALL_TRUSTEES,
  GET_ALL_STAFF,
  GET_ALL_NEWS,
  GET_NEWS_BY_SLUG,
  GET_AMBASSADOR,
} from './queries';
import {GraphQLClient} from 'graphql-request';
import {structuredTextToHtml} from './utilities';

const DATOCMS_ENDPOINT = 'https://graphql.datocms.com/';

function getDatoClient() {
  const token = process.env.DATOCMS_API_TOKEN;

  if (!token) {
    throw new Error(
      'DATOCMS_API_TOKEN is not set. DatoCMS requests must run server-side with this env var configured.',
    );
  }

  return new GraphQLClient(DATOCMS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getEvents(): Promise<DatoEvent[]> {
  try {
    const data = await getDatoClient().request<{allEvents: DatoEvent[]}>(GET_ALL_EVENTS);
    return data.allEvents;
  } catch (error) {
    console.error('Error fetching events from DatoCMS:', error);
    return [];
  }
}

export async function getEvent(slug: string): Promise<DatoEvent | undefined> {
  try {
    const data = await getDatoClient().request<{event: DatoEvent}>(GET_EVENT_BY_ID, {slug});
    return data.event;
  } catch (error) {
    console.error(`Error fetching event ${slug} from DatoCMS:`, error);
  }
}

export async function getExhibits(): Promise<DatoExhibit[]> {
  try {
    const data = await getDatoClient().request<{allExhibits: DatoExhibit[]}>(GET_ALL_EXHIBITS);
    return data.allExhibits;
  } catch (error) {
    console.error('Error fetching exhibits from DatoCMS:', error);
    return [];
  }
}

export async function getExhibit(slug: string): Promise<DatoExhibit | undefined> {
  try {
    const data = await getDatoClient().request<{exhibit: DatoExhibit}>(GET_EXHIBIT_BY_ID, {slug});
    return data.exhibit;
  } catch (error) {
    console.error(`Error fetching exhibit ${slug} from DatoCMS:`, error);
  }
}

export async function getVisit(): Promise<DatoVisit | undefined> {
  try {
    const data = await getDatoClient().request<{visit: DatoVisit}>(GET_VISIT);
    return data.visit;
  } catch (error) {
    console.error(`Error fetching visit from DatoCMS:`, error);
  }
}

export async function getTrustees(): Promise<DatoTrustee[]> {
  try {
    const data = await getDatoClient().request<{allTrustees: DatoTrustee[]}>(GET_ALL_TRUSTEES);
    return data.allTrustees.sort((a, b) => a.name.split(' ')[1]!.localeCompare(b.name.split(' ')[1]!));
  } catch (error) {
    console.error('Error fetching trustees from DatoCMS:', error);
    return [];
  }
}

export async function getStaff(): Promise<DatoTrustee[]> {
  try {
    const data = await getDatoClient().request<{allStaffs: DatoTrustee[]}>(GET_ALL_STAFF);
    return data.allStaffs.sort((a, b) => a.name.split(' ')[1]!.localeCompare(b.name.split(' ')[1]!));
  } catch (error) {
    console.error('Error fetching staff from DatoCMS:', error);
    return [];
  }
}

export async function getAllNews(): Promise<DatoNews[]> {
  try {
    const data = await getDatoClient().request<{allNews: DatoNews[]}>(GET_ALL_NEWS);
    return data.allNews;
  } catch (error) {
    console.error('Error fetching news from DatoCMS:', error);
    return [];
  }
}

export async function getNews(slug: string): Promise<DatoNews | undefined> {
  try {
    const data = await getDatoClient().request<{news: DatoNews}>(GET_NEWS_BY_SLUG, {slug});
    return data.news;
  } catch (error) {
    console.error(`Error fetching news ${slug} from DatoCMS:`, error);
  }
}

export async function getAmbassador(): Promise<DatoAmbassador | undefined> {
  try {
    const data = await getDatoClient().request<{
      ambassador?: {
        body?: {
          value?: unknown;
        };
      };
    }>(GET_AMBASSADOR);

    if (!data.ambassador) {
      return;
    }

    return {
      bodyHtml: structuredTextToHtml(data.ambassador.body?.value),
    };
  } catch (error) {
    console.error('Error fetching ambassador from DatoCMS:', error);
  }
}
