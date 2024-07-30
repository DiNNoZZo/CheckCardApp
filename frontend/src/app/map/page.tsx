'use client';

// import LeafletMap from '@/components/leafletMap/LeafletMap';
import { IPIDPlace } from '@/types/index.types';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const LeafletMap = dynamic(() => import('../../components/leafe/LeafletMap'), { ssr: false });

const MapPage = () => {
  const [places, setPlaces] = useState<Array<IPIDPlace>>([]);

  useEffect(() => {
    const getMapProps = async () => {
      try {
        // [CR] base url by měla být v konfiguraci
        const res = await fetch('http://localhost:3001/api/pidLocations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        });

        if (res.ok) {
          const data = await res.json();
          setPlaces(data);
        }
      } catch (e) {}
    };

    getMapProps();
  }, []);

  return <LeafletMap places={places} />;
};

export default MapPage;
