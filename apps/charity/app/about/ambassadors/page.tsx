import {getAmbassador} from '@repo/data/datocms';

export const revalidate = 300; // 5 mins

export default async function Ambassadors() {
  const ambassador = await getAmbassador();

  return (
    <div>
      {ambassador?.bodyHtml && <div dangerouslySetInnerHTML={{__html: ambassador.bodyHtml}} />}
    </div>
  );
}
