"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Head from "next/head";

export default function Home() {
  const searchParams = useSearchParams();
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    setLat(searchParams.get("lat"));
    setLon(searchParams.get("lon"));
  }, [lat, lon, searchParams]);

  return (
    <div>
      <Head>
        <title>Static Map</title>
        <meta name="description" content="Google Static Map" />
      </Head>
      <h1>
        Static Map ${lat},${lon}
      </h1>
      {mapError ? (
        <p>Failed to load map</p>
      ) : (
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=13&size=1800x1200&maptype=roadmap&markers=color:red%7C${lat},${lon}&key=AIzaSyC2lO3GSk-qj4gJTcFsmXP23d7oJqopuNA`}
          alt="Static Map"
          onError={() => setMapError(true)}
        />
      )}
    </div>
  );
}
