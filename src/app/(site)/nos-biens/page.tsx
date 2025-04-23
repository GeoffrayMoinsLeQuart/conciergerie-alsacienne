import Properties from "@/components/Property";
import { fetchProperties } from "@/sanity/sanity-utils";

export const revalidate = 3600;

export default async function Page() {
  const properties = await fetchProperties();

  return <>{properties && <Properties properties={properties} />}</>;
}
