import PageTitle from "@/components/Common/PageTitle";
import Properties from "@/components/Property";

export default function PropertiesPage() {
  return (
    <>
      <PageTitle
        pageTitle="Portfolio Page"
        pageDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero. "
        showMenu={true}
      />

      <Properties />
    </>
  );
}
