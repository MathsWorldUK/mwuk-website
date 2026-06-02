import {getAmbassador} from '@repo/data/datocms';

export const revalidate = 3600; // 1 hour

export default async function Ambassadors() {
  const ambassador = await getAmbassador();

  return (
    <div>
      {ambassador?.bodyHtml && (
        <div dangerouslySetInnerHTML={{__html: ambassador.bodyHtml}} />
      )}
    </div>
  );
}
