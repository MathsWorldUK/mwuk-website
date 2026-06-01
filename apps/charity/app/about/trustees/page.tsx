import {getTrustees} from '@repo/data/datocms';
import StaffGrid from './staff-grid';

export const revalidate = 300; // 5 minutes

export default async function Trustees() {
  const trustees = await getTrustees();
  return <StaffGrid people={trustees} />;
}
