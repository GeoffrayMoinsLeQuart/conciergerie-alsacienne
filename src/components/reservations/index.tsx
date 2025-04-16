"use client";

import { useEffect, useRef } from "react";

const InjectedScript = () => {
  const scriptContent = `
    var webKey = "[insérer_la_webkey_ici]";
    var url = new URL(window.location.href);
    var appart = url.searchParams.get("appart");
    var checkin = url.searchParams.get("checkin");
    var checkout = url.searchParams.get("checkout");
    var adults = url.searchParams.get("adults");
    var children = url.searchParams.get("children");
    var lang = url.searchParams.get("lang");
    if(lang == null)
        lang = "fr";
    if(appart == null) {
      var iframeUrl = "https://app.superhote.com/#/get-available-rentals/"+webKey+"?startDate=" + checkin + "&endDate=" + checkout + "&adultsNumber=" + adults + "&childrenNumber=" + children + "&lang=" + lang;
      if(checkin == null) iframeUrl = "https://app.superhote.com/#/get-available-rentals/" + webKey + "?lang=" + lang;
      document.getElementById('bookingengine').src = iframeUrl;
    } else {
      var iframeUrl = "https://app.superhote.com/#/rental/" + appart + "?lang=" + lang;
      document.getElementById('bookingengine').src = iframeUrl;
    }
  `;

  return <script dangerouslySetInnerHTML={{ __html: scriptContent }} />;
};

export default function Reservations() {

  // useEffect pour s'assurer que le script s'exécute après le rendu de l'iframe
  // useEffect(() => {
  //   // Créer et ajouter le script au document
  //   const script = document.createElement('script');
  //   script.innerHTML = `
  //     var webKey = "[TziRKaU5fDux8BLLfljl4wB7V]";
  //     var url = new URL(window.location.href);
  //     var appart = url.searchParams.get("appart");
  //     var checkin = url.searchParams.get("checkin");
  //     var checkout = url.searchParams.get("checkout");
  //     var adults = url.searchParams.get("adults");
  //     var children = url.searchParams.get("children");
  //     var lang = url.searchParams.get("lang");
  //     if(lang == null)
  //         lang = "fr";
  //     if(appart == null) {
  //       var iframeUrl = "https://app.superhote.com/#/get-available-rentals/"+webKey+"?startDate=" + checkin + "&endDate=" + checkout + "&adultsNumber=" + adults + "&childrenNumber=" + children + "&lang=" + lang;
  //       if(checkin == null) iframeUrl = "https://app.superhote.com/#/get-available-rentals/" + webKey + "?lang=" + lang;
  //       document.getElementById('bookingengine').src = iframeUrl;
  //     } else {
  //       var iframeUrl = "https://app.superhote.com/#/rental/" + appart + "?lang=" + lang;
  //       document.getElementById('bookingengine').src = iframeUrl;
  //     }
  //   `;
  //   document.body.appendChild(script);

  //   // Nettoyage lors du démontage du composant
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);




  const iframeRef = useRef(null);

  useEffect(() => {
    const webKey = "TziRKaU5fDux8BLLfljl4wB7V";
    const url = new URL(window.location.href);
    const appart = url.searchParams.get("appart");
    const checkin = url.searchParams.get("checkin");
    const checkout = url.searchParams.get("checkout");
    const adults = url.searchParams.get("adults");
    const children = url.searchParams.get("children");
    const lang = url.searchParams.get("lang") || "fr";

    let iframeUrl;

    if (appart == null) {
      iframeUrl = `https://app.superhote.com/#/get-available-rentals/${webKey}?startDate=${checkin}&endDate=${checkout}&adultsNumber=${adults}&childrenNumber=${children}&lang=${lang}`;

https://app.superhote.com/api/v2/web-site-groups/[TziRKaU5fDux8BLLfljl4wB7V]/falsehttps://app.superhote.com/api/v2/get-available-rentals/[TziRKaU5fDux8BLLfljl4wB7V]?&start_date=2025-05-19&end_date=2025-05-23%20%20&adult_count=1&child_count=0%20%20&group_names=
      if (checkin == null) {
        iframeUrl = `https://app.superhote.com/#/get-available-rentals/${webKey}?lang=${lang}`;
      }
    } else {
      iframeUrl = `https://app.superhote.com/#/rental/${appart}?lang=${lang}`;
    }

    // Mettre à jour l'attribut src de l'iframe
    if (iframeRef.current) {
      (iframeRef.current as HTMLIFrameElement).src = iframeUrl;
    }
  }, []);

  return (
    <>
      <iframe
        id="bookingengine"
        ref={iframeRef}
        style={{ display: "block" }}
        width="100%"
        height="5500"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    </>
  );
}
