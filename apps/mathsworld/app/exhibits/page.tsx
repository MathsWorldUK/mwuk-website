import {ExhibitsPage} from '@repo/ui/pages/exhibits';

export const revalidate = 300; // 5 minutes

export default function Exhibits() {
  return <ExhibitsPage site={'london'} />;
}
