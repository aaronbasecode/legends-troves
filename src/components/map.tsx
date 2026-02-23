"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { treasures, type Treasure } from '@/lib/treasures';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ReactDOMServer from 'react-dom/server';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';

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
  <Card className="w-64 border-none shadow-none bg-[#002F45]">
    <CardHeader className="p-8">
      <CardTitle className="text-lg font-headline text-primary">{treasure.name}</CardTitle>
    </CardHeader>
    <CardContent className="p-8 pt-0">
      <p className="text-sm text-white">{treasure.description}</p>
      <p className="text-xs text-white italic mt-2">{treasure.location}</p>
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
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265 248" class="transition-transform group-hover:scale-110" width="36" height="36">
            <path fill="#002F45" d="M245,106.6l19.5-29.5c0,0,2.5-73.3-44.1-77.1h-88.1h0H44.1C-2.4,3.8,0,77.1,0,77.1l19.6,29.2L0,159.8L22,248	l220.4,0l22-88.2L245,106.6z"/>
            <path fill="#11384B" d="M264.5,159.8L0,159.8l19.6-53.4l225.3,0.3L264.5,159.8z"/>
            <path fill="#11384B" d="M245,106.6l-225.3-0.3L0,77.1h264.5L245,106.6z"/>
            <path d="M137.8,203.9c0,3-2.5,5.5-5.5,5.5c-3,0-5.5-2.5-5.5-5.5c0-3,2.5-5.5,5.5-5.5C135.3,198.4,137.8,200.8,137.8,203.9z"/>
            <path fill="#EDCA59" d="M88,144.3c-6.3,0-12.4-1.4-16.8-3.8c-3.3-1.9-5.3-4.2-5.3-6.2c0-4.1,8.6-10,22-10c6.3,0,12.5,1.4,16.8,3.8	c3.3,1.8,5.3,4.1,5.3,6.1C110.1,138.4,101.5,144.3,88,144.3z"/>
            <path fill="#EDCA59" d="M132.1,144.3c-6.3,0-12.4-1.4-16.8-3.8c-3.3-1.9-5.3-4.2-5.3-6.2c0-4.1,8.6-10,22-10c6.3,0,12.4,1.4,16.8,3.8	c3.3,1.8,5.3,4.1,5.3,6.1C154.1,138.4,145.6,144.3,132.1,144.3z"/>
            <path fill="#EDCA59" d="M176.2,144.3c-6.3,0-12.5-1.4-16.8-3.8c-3.3-1.9-5.3-4.2-5.3-6.2c0-4.1,8.6-10,22-10c6.3,0,12.4,1.4,16.8,3.8	c3.3,1.8,5.3,4.1,5.3,6.1C198.2,138.4,189.6,144.3,176.2,144.3z"/>
            <path fill="#EDCA59" d="M110.1,128.8c-6.3,0-12.5-1.4-16.8-3.8c-3.3-1.9-5.3-4.1-5.3-6.2c0-4.1,8.6-10,22-10c6.3,0,12.4,1.4,16.8,3.8	c3.3,1.8,5.3,4.2,5.3,6.2C132.1,122.9,123.5,128.8,110.1,128.8z"/>
            <path fill="#EDCA59" d="M154.1,128.8c-6.3,0-12.4-1.4-16.8-3.8c-3.3-1.9-5.3-4.1-5.3-6.2c0-4.1,8.6-10,22-10c6.3,0,12.5,1.4,16.8,3.8	c3.3,1.8,5.3,4.2,5.3,6.2C176.2,122.9,167.6,128.8,154.1,128.8z"/>
            <path fill="#EDCA59" d="M132.1,113.3c-6.3,0-12.4-1.4-16.8-3.8c-3.3-1.8-5.3-4.1-5.3-6.2c0-4.1,8.6-10,22-10c6.3,0,12.4,1.4,16.8,3.8	c3.3,1.8,5.3,4.1,5.3,6.2C154.1,107.4,145.6,113.3,132.1,113.3z"/>
            <path fill="#EDCA59" d="M47.4,159.8h37.5c2.1-1.6,3.3-3.4,3.3-4.9c0-2-2-4.3-5.3-6.2c-4.3-2.4-10.4-3.8-16.8-3.8c-13.4,0-22,5.9-22,10	C44.1,156.5,45.3,158.2,47.4,159.8z"/>
            <path fill="#EDCA59" d="M91.5,159.8h37.5c2.1-1.6,3.3-3.4,3.3-4.9c0-2-2-4.3-5.3-6.2c-4.3-2.4-10.4-3.8-16.8-3.8c-13.5,0-22,5.9-22,10	C88.2,156.5,89.4,158.2,91.5,159.8z"/>
            <path fill="#2E4B59" d="M156.6,159.8h-49.8v51.1h49.8V159.8z"/>
            <path fill="#EDCA59" d="M135.5,159.8H173c2.1-1.6,3.3-3.4,3.3-4.9c0-2-2-4.3-5.3-6.2c-4.3-2.4-10.4-3.8-16.8-3.8c-13.5,0-22,5.9-22,10	C132.3,156.5,133.5,158.2,135.5,159.8z"/>
            <path fill="#EDCA59" d="M179.6,159.8h37.5c2.1-1.6,3.3-3.4,3.3-4.9c0-2-2-4.3-5.3-6.2c-4.3-2.4-10.4-3.8-16.8-3.8c-13.5,0-22,5.9-22,10	C176.3,156.5,177.5,158.2,179.6,159.8z"/>
            <path fill="#D4AF37" d="M224.5,159.8c0.9-1.5,1.4-3.2,1.4-4.9c0-7.8-10.4-14.3-23.9-15.4c1.1-1.6,1.7-3.4,1.7-5.3	c0-7.5-9.5-13.7-22.1-15.2c0-0.1,0-0.2,0-0.3c0-7.5-9.5-13.8-22.1-15.2c0-0.1,0,0.2,0,0.3c0-8.6-12.3-15.5-27.6-15.5	s-27.6,6.9-27.6,15.5c0,0.1,0,0.2,0,0.3c-12.6,1.4-22.1,7.7-22.1,15.2c0,0.1,0,0.2,0,0.3c-12.6,1.4-22.1,7.7-22.1,15.2	c0,1.9,0.6,3.7,1.7,5.3c-13.3,1.1-23.6,7.5-23.6,15.3c0,1.7,0.5,3.3,1.4,4.9H224.5z M122.5,157.2c-3.4,1.5-7.8,2.3-12.3,2.3	c-4.5,0-8.9-0.8-12.3-2.3c-1.9-0.8-3.1-1.6-3.7-2.2c0.7-0.6,1.8-1.4,3.7-2.2c3.4-1.5,7.8-2.3,12.3-2.3c4.5,0,8.9,0.8,12.3,2.3	c1.9,0.8,3.1,1.6,3.7,2.2C125.6,155.5,124.4,156.4,122.5,157.2z M119.8,136.5c-1.9-0.8-3.1-1.6-3.7-2.2c0.2-0.1,0.3-0.3,0.5-0.4	c4.8-0.7,9.1-2,12.6-3.9c1-0.1,1.9-0.1,2.9-0.1c1,0,1.9,0,2.9,0.1c3.5,1.9,7.8,3.3,12.6,3.9c0.2,0.2,0.4,0.3,0.5,0.4	c-0.7,0.6-1.8,1.4-3.7,2.2c-3.4,1.5-7.8,2.3-12.3,2.3C127.6,138.8,123.2,138,119.8,136.5z M166.6,157.2c-3.4,1.5-7.8,2.3-12.3,2.3	c-4.5,0-8.9-0.8-12.3-2.3c-1.9-0.8-3.1-1.6-3.7-2.2c0.7-0.6,1.8-1.4,3.7-2.2c3.4-1.5,7.8-2.3,12.3-2.3c4.5,0,8.9,0.8,12.3,2.3	c1.9,0.8,3.1,1.6,3.7,2.2C169.7,155.5,168.5,156.4,166.6,157.2z M210.7,152.7c1.9,0.8,3.1,1.6,3.7,2.2c-0.7,0.6-1.8,1.4-3.7,2.2	c-3.4,1.5-7.8,2.3-12.3,2.3c-4.5,0-8.9-0.8-12.3-2.3c-1.9-0.8-3.1-1.6-3.7-2.2c0.7-0.6,1.8-1.4,3.7-2.2c3.4-1.5,7.8-2.3,12.3-2.3	C202.9,150.5,207.3,151.3,210.7,152.7z M176.2,129.8c4.5,0,8.9,0.8,12.3,2.3c1.9,0.8,3.1,1.6,3.7,2.2c-0.7,0.6-1.8,1.4-3.7,2.2	c-3.4,1.5-7.8,2.3-12.3,2.3c-4.5,0-8.9-0.8-12.3-2.3c-1.9-0.8-3.1-1.6-3.7-2.2c0.2-0.1,0.3-0.3,0.5-0.4c4.8-0.7,9.1-2,12.6-3.9	C174.2,129.9,175.2,129.8,176.2,129.8z M154.1,114.3c4.5,0,8.9,0.8,12.3,2.3c1.9,0.8,3.1,1.6,3.7,2.2c-0.2,0.1-0.3,0.3,0.5,0.4	c-4.8,0.7-9.1,2-12.6-3.9c-1,0.1-1.9,0.1-2.9,0.1c-1,0-1.9,0-2.9-0.1c-3.5-1.9-7.8-3.3-12.6-3.9c-0.2-0.2-0.4-0.3-0.5-0.4	c0.2-0.1,0.3-0.3,0.5-0.5c4.8-0.7,9.1-2,12.6-3.9C152.2,114.4,153.2,114.3,154.1,114.3z M119.8,101.1c3.4-1.5,7.8-2.3,12.3-2.3	c4.5,0,8.9,0.8,12.3,2.3c1.9,0.8,3.1,1.6,3.7,2.2c-0.2,0.1-0.3,0.3-0.5,0.5c-4.8,0.7-9.1,2-12.6,3.9c-0.9,0.1-1.9,0.1-2.9,0.1	c-1,0-1.9,0-2.9-0.1c-3.4-1.9-7.8-3.2-12.6-3.9c-0.2-0.2-0.4-0.3-0.5-0.5C116.7,102.7,117.9,101.9,119.8,101.1z M97.8,116.6	c3.4-1.5,7.8-2.3,12.3-2.3c1,0,1.9,0,2.9,0.1c3.5,1.9,7.8,3.3,12.6,3.9c0.2,0.2,0.4,0.3,0.5,0.5c-0.2,0.1-0.3,0.3-0.5,0.4	c-4.8,0.7-9.1,2-12.6,3.9c-1,0.1-1.9,0.1-2.9,0.1c-1,0-1.9,0-2.9-0.1c-3.4-1.9-7.8-3.3-12.6-3.9c-0.2-0.2-0.4-0.3-0.5-0.4	C94.7,118.2,95.9,117.4,97.8,116.6z M75.7,132.1c3.4-1.5,7.8-2.3,12.3-2.3c1,0,1.9,0,2.9,0.1c3.4,1.9,7.8,3.3,12.6,3.9	c0.2,0.2,0.4,0.3,0.5,0.4c-0.7,0.6-1.8,1.4-3.7,2.2c-3.4,1.5-7.8,2.3-12.3,2.3c-4.5,0-8.9-0.8-12.3-2.3c-1.9-0.8-3.1-1.6-3.7-2.2	C72.7,133.7,73.8,132.9,75.7,132.1z M53.8,152.7c3.4-1.5,7.8-2.3,12.3-2.3c4.5,0,8.9,0.8,12.3,2.3c1.9,0.8,3.1,1.6,3.7,2.2	c-0.7,0.6-1.8,1.4-3.7,2.2c-3.4,1.5-7.8,2.3-12.3,2.3s-8.9-0.8-12.3-2.3c-1.9-0.8-3.1-1.6-3.7-2.2C50.8,154.4,51.9,153.5,53.8,152.7	z"/>
            <path fill="#5B6D76" d="M137.6,190.1h-11v13.8h11V190.1z"/>
            <path fill="#2E4B59" d="M140.1,183c0,4.4-3.5,7.9-7.9,7.9c-4.4,0-7.9-3.5-7.9-7.9c0-4.4,3.5-7.9,7.9-7.9	C136.5,175.1,140.1,178.6,140.1,183z"/>
            <path fill="#2E4B59" d="M165.2,77.1C165.2,77.1,165.2,77.1,165.2,77.1l0-22.1c0-3-2.5-5.5-5.5-5.5h-55.1c-3,0-5.5,2.5-5.5,5.5v22	c0,0,0,0,0,0H165.2z"/>
            <path fill="#5B6D76" d="M110.1,77.1V60.6h44.1v16.5h11c0-11.3,0-22.1,0-22.1c0-3-2.5-5.5-5.5-5.5h-55.1c-3,0-5.5,2.5-5.5,5.5	c0,0,0,10.8,0,22.1H110.1z"/>
            <path fill="#002F45" d="M28.5,159.8L48,248h11.3l-19.5-88.2H28.5z"/>
            <path fill="#002F45" d="M224.4,159.8L204.9,248h11.3l19.5-88.2H224.4z"/>
            <path fill="#5B6D76" d="M154.1,159.8v49.6h-44.1v-49.6H99v55.1c0,3,2.5,5.5,5.5,5.5h55.1c3,0,5.5-2.5,5.5-5.5v-55.1H154.1z"/>
            <path fill="#5B6D76" d="M132.3,165.3c-9.1,0-16.5,7.4-16.5,16.5c0,9.1,7.4,16.5,16.5,16.5c9.1,0,16.5-7.4,16.5-16.5	C148.8,172.7,141.4,165.3,132.3,165.3z M132.3,187.3c-3,0-5.5-2.5-5.5-5.5c0-3,2.5-5.5,5.5-5.5c3,0,5.5,2.5,5.5,5.5	C137.8,184.9,135.3,187.3,132.3,187.3z"/>
        </svg>
      `;

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
      <div className="absolute top-24 left-4 z-[1000] flex flex-col gap-[2px]">
          <Button size="icon" onClick={handleZoomIn} className="h-8 w-8 bg-primary text-accent hover:bg-primary/90">
              <Plus />
          </Button>
          <Button size="icon" onClick={handleZoomOut} className="h-8 w-8 bg-primary text-accent hover:bg-primary/90">
              <Minus />
          </Button>
      </div>
    </div>
  );
};

export default Map;
