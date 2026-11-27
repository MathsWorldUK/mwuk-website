import {ExhibitPage, exhibitStaticParams} from '@repo/ui/pages/exhibit';

export const revalidate = 300; // 5 minutes

export const generateStaticParams = () => exhibitStaticParams('leeds');

export default function ExhibitDetail({params}: {params: Promise<{id: string}>}) {
  return <ExhibitPage site={'leeds'} params={params} />;
}
