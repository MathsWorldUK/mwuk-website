import {DatoEvent, DatoExhibit, DatoVisit} from '@/lib/interfaces';
import {GET_ALL_EVENTS, GET_ALL_EXHIBITS, GET_EVENT_BY_ID, GET_EXHIBIT_BY_ID, GET_VISIT} from '@/lib/queries';
import { GraphQLClient } from 'graphql-request';

const token = process.env.DATOCMS_API_TOKEN;
if (!token) {
  console.warn('DATOCMS_API_TOKEN is not set. Please add it to your .env.local file.');
}

const datoClient = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export async function getEvents(): Promise<DatoEvent[]> {
  try {
    const data = await datoClient.request<{allEvents: DatoEvent[]}>(GET_ALL_EVENTS);
    return data.allEvents;
  } catch (error) {
    console.error('Error fetching events from DatoCMS:', error);
    return [];
  }
}

export async function getEvent(slug: string): Promise<DatoEvent | undefined> {
  try {
    const data = await datoClient.request<{event: DatoEvent}>(GET_EVENT_BY_ID, {slug});
    return data.event;
  } catch (error) {
    console.error(`Error fetching event ${slug} from DatoCMS:`, error);
  }
}

export async function getExhibits(): Promise<DatoExhibit[]> {
  try {
    const data = await datoClient.request<{allExhibits: DatoExhibit[]}>(GET_ALL_EXHIBITS);
    return data.allExhibits
  } catch (error) {
    console.error('Error fetching exhibits from DatoCMS:', error);
    return [];
  }
}


export async function getExhibit(slug: string): Promise<DatoExhibit | undefined> {
  try {
    const data = await datoClient.request<{exhibit: DatoExhibit}>(GET_EXHIBIT_BY_ID, {slug});
    return data.exhibit;
  } catch (error) {
    console.error(`Error fetching exhibit ${slug} from DatoCMS:`, error);
  }
}

export async function getVisit(): Promise<DatoVisit | undefined> {
  try {
    const data = await datoClient.request<{visit: DatoVisit}>(GET_VISIT);
    return data.visit;
  } catch (error) {
    console.error(`Error fetching visit from DatoCMS:`, error);
  }
}
