import {VisitPage} from '@repo/ui/pages/visit';

export const revalidate = 300; // 5 minutes

export default function Visit() {
  return <VisitPage site={'london'} />;
}
