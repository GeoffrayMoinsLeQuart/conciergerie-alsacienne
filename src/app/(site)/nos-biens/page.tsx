// src/app/(site)/nos-biens/page.tsx

import Properties from "@/components/Property";

export const revalidate = 3600;

export default async function Page() {
  return <Properties />;
}
