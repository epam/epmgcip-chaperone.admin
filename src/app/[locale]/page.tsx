import HomePage from "../../components/pages/Home/Home";
import { getTopLatestExhibits } from "@/lib/exhibit";
import { ITopLatestExhibit } from "@/interfaces/ITopLatestExhibit";

const topLatestExhibitsLimit = 10;

export default async function Home() {
  const topLatestExhibits = (await getTopLatestExhibits(
    topLatestExhibitsLimit,
  )) as ITopLatestExhibit[];

  return <HomePage exhibits={topLatestExhibits} />;
}
