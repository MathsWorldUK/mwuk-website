import {getStaff} from '@repo/data/datocms';
import StaffGrid from '../trustees/staff-grid';

export const revalidate = 300; // 5 minutes

export default async function Team() {
  const staff = await getStaff();
  return <StaffGrid people={staff} />;
}
