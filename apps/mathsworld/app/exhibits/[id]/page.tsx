import {ExhibitPage, exhibitStaticParams} from '@repo/ui/pages/exhibit';

export const revalidate = 300; // 5 minutes

export const generateStaticParams = () => exhibitStaticParams('london');

export default function ExhibitDetail({params}: {params: Promise<{id: string}>}) {
  return <ExhibitPage site={'london'} params={params} />;
}
