import Exhibit from "@/components/pages/Exhibit/Exhibit";
import { getExhibit } from "../../../../lib/exhibit";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ExhibitPage({ params: { slug } }: Props) {
  const exhibit = await getExhibit(slug);

  return <>{exhibit && <Exhibit exhibit={exhibit} slug={slug} />}</>;
}
