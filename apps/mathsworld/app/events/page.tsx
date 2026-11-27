import {EventsPage} from '@repo/ui/pages/events';

export const revalidate = 300; // 5 minutes

export default function Events() {
  return <EventsPage site={'london'} />;
}
