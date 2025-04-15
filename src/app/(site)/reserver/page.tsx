import PageTitle from "@/components/Common/PageTitle";
import Reservations from "@/components/reservations";

export default function ReservationsPage() {
  return (
    <>
      <PageTitle
        pageTitle="Reserver votre séjour"
        pageDescription="Sélectioner le bien de vos rêves"
        showMenu={false}
      />

      <Reservations />
    </>
  );
}
