import {EventPage, eventStaticParams} from '@repo/ui/pages/event';

export const revalidate = 300; // 5 minutes

export const generateStaticParams = eventStaticParams;

export default function EventDetail({params}: {params: Promise<{id: string}>}) {
  return <EventPage site={'london'} params={params} />;
}
