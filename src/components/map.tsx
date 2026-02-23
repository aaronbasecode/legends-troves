
"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { treasures, type Treasure } from '@/lib/treasures';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ReactDOMServer from 'react-dom/server';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut } from 'lucide-react';

// Fix for default icon paths being wrong in Next.js
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const TreasurePopup = ({ treasure }: { treasure: Treasure }) => (
  <Card className="w-64 border-none shadow-none bg-transparent">
    <CardHeader className="p-2">
      <CardTitle className="text-lg font-headline text-primary">{treasure.name}</CardTitle>
    </CardHeader>
    <CardContent className="p-2 pt-0">
      <p className="text-sm text-foreground">{treasure.description}</p>
      <p className="text-xs text-muted-foreground italic mt-2">{treasure.location}</p>
    </CardContent>
  </Card>
);

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current && !mapRef.current) {
      mapRef.current = L.map(mapContainer.current, {
        center: [20, 0],
        zoom: 3,
        minZoom: 2,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(mapRef.current);

      const treasureIconHtml = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="transition-transform group-hover:scale-110" width="36" height="36">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g style="fill: #D4AF37; filter: url(#glow);">
            <path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9h4zm14-2H5v2h14V7zm-9 6H8v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
          </g>
        </svg>`;

      const customIcon = L.divIcon({
          html: treasureIconHtml,
          className: 'bg-transparent border-0 group',
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -36],
      });

      treasures.forEach(treasure => {
        const marker = L.marker(treasure.coords as L.LatLngExpression, { icon: customIcon }).addTo(mapRef.current!);
        
        const popupContent = ReactDOMServer.renderToString(<TreasurePopup treasure={treasure} />);
        marker.bindPopup(popupContent, { minWidth: 256 });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleZoomIn = () => {
    mapRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapRef.current?.zoomOut();
  };

  return (
    <div className="h-full w-full relative">
      <div ref={mapContainer} className="h-full w-full" />
      <div className="absolute top-24 left-4 z-[1000] flex flex-col gap-2">
          <Button size="icon" onClick={handleZoomIn} className="bg-header text-header-foreground hover:bg-header/90">
              <ZoomIn />
          </Button>
          <Button size="icon" onClick={handleZoomOut} className="bg-header text-header-foreground hover:bg-header/90">
              <ZoomOut />
          </Button>
      </div>
    </div>
  );
};

export default Map;
