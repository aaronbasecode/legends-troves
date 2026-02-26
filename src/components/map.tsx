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
  <Card className="w-64 border-none shadow-none bg-[#2C2504]">
    <CardHeader className="p-4 pb-0.5">
      <CardTitle className="text-lg font-headline text-primary leading-tight">{treasure.name}</CardTitle>
    </CardHeader>
    <CardContent className="p-4 pt-0.5">
      <p className="text-sm text-white mb-1 leading-snug">{treasure.description}</p>
      <p className="text-xs text-white/80 italic">{treasure.location}</p>
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

      const landIconHtml = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 276 331" style="enable-background:new 0 0 276 331;" xml:space="preserve" class="transition-transform group-hover:scale-110" width="17" height="20">
<style type="text/css">
	.st_land_0{fill:#D4AF37;}
	.st_land_1{fill:#2C2504;}
</style>
<path class="st_land_0" d="M45.7,138.4L28.9,53.5C34.6,38.4,50.8,8.3,69.8,8.3h136.8c20,0,35.7,29.2,41.1,43.8L231.4,137l34.9,70.9v113.9
	H9.3V206.8L45.7,138.4z"/>
<path class="st_land_1" d="M248.2,53.5H29.8l16.7,87h183.3L248.2,53.5z"/>
<path class="st_land_1" d="M133.9,239.7l-2.2,13.4h12.1l-2.2-13.4c2.1-1.3,3.5-3.6,3.5-6.2c0-4.1-3.3-7.3-7.3-7.3c-4.1,0-7.3,3.3-7.3,7.3
	C130.5,236.1,131.9,238.4,133.9,239.7z"/>
<path class="st_land_1" d="M125,165l17.8,14.7l8.2-2.7l-25.1-21.8L125,165z"/>
<path class="st_land_1" d="M171.1,168.7l8.1,9.7l3.8-5.4l-5.9-6.5L171.1,168.7z"/>
<path class="st_land_1" d="M163.6,185.4l-1.6,8.1l20.5-7l-7-5.4L163.6,185.4z"/>
<path class="st_land_1" d="M88.7,186l11.3-9.2L88.7,173V186z"/>
<path class="st_land_1" d="M113.7,184.4l-2.8,6.1h17l-2-6.1H113.7z"/>
<path class="st_land_0" d="M109.2,122.7c1.3-6.1,3.9-12.8,7.7-16.6c3.8-3.8,10.5-6.4,16.6-7.7c-6.1-1.3-12.7-3.9-16.6-7.7
	c-3.8-3.8-6.4-10.5-7.7-16.6c-1.3,6.1-3.9,12.7-7.7,16.6c-3.8,3.8-10.5,6.4-16.6,7.7c6.1,1.3,12.7,3.9,16.6,7.7
	C105.3,109.9,107.9,116.6,109.2,122.7z"/>
<path class="st_land_0" d="M188.4,133.3c0.8-3.6,2.4-7.7,4.6-10c2.3-2.3,6.3-3.9,10-4.6c-3.7-0.8-7.7-2.4-10-4.6c-2.3-2.3-3.9-6.3-4.6-10
	c-0.8,3.6-2.4,7.7-4.6,10c-2.3,2.3-6.3,3.9-10,4.6c3.7,0.8,7.7,2.4,10,4.6C186,125.6,187.6,129.6,188.4,133.3z"/>
<path class="st_land_1" d="M238.9,138.1l17.7-85.5l-14.5-28.9C235,9.2,220.1,0,203.9,0H71.8C55.5,0,40.7,9.2,33.4,23.7L19,52.6l17.7,85.5
	L0,205.2v125.4h275.6V205.2L238.9,138.1z M239,171.1c-2.7,0.6-5.8,1.8-7.5,3.5c-1.7,1.7-2.9,4.7-3.5,7.5c-0.6-2.7-1.8-5.8-3.5-7.5
	c-1.7-1.7-4.7-2.9-7.5-3.5c2.7-0.6,5.7-1.8,7.5-3.5c1.7-1.7,2.9-4.7,3.5-7.5c0.6,2.7,1.8,5.7,3.5,7.5
	C233.2,169.4,236.3,170.6,239,171.1z M51.2,195.2l9.7-8.3l6.1-9.3h14.5l2.4-8.3L98.4,159l19.4,2.1l2.4-10.4l25.5-5.2l18.2,15.5
	l12.1-4.1l15.8,14.5l13.3,6.2l18.9,17.6h-16.5l-8.5-8.9l-1.5,8.9H51.2z M167.2,215.2v47.9h-58.8v-47.9H167.2z M46.5,159.1
	c3.3-0.7,7-2.2,9.1-4.3c2.1-2.1,3.5-5.8,4.3-9.1c0.7,3.3,2.2,7,4.3,9.1c2.1,2.1,5.8,3.5,9.1,4.3c-3.3,0.7-7,2.2-9.1,4.3
	c-2.1,2.1-3.5,5.8-4.3,9.1c-0.7-3.3-2.2-7-4.3-9.1C53.5,161.2,49.8,159.8,46.5,159.1z M48.6,31.3C53,22.5,62,17,71.8,17h132.1
	c9.8,0,18.8,5.5,23.1,14.3l8.2,16.4h-63.5V24.1h-67.9v23.6H40.4L48.6,31.3z M162.1,33.8v13.9h-48.5V33.8H162.1z M237.8,59.8
	L222.2,135H53.4L37.8,59.8H237.8z M17,213.4h81.8v26.3H17V213.4z M258.7,313.6H17v-22.2h241.7L258.7,313.6L258.7,313.6z
	 M258.7,281.7H17v-32.3h81.8v23.4h78.2v-4.8v-18.5h81.8L258.7,281.7L258.7,281.7z M258.7,239.7h-81.8v-26.3h81.8V239.7z"/>
</svg>
      `;

      const nauticalIconHtml = `
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 355 355" style="enable-background:new 0 0 355 355;" xml:space="preserve" class="transition-transform group-hover:scale-110" width="20" height="20">
<style type="text/css">
	.st_naut_0{fill:#D4AF37;}
	.st_naut_1{fill:#2C2504;}
</style>
<circle class="st_naut_0" cx="177.2" cy="177.2" r="125.2"/>
<path class="st_naut_1" d="M177.1,0c-6.5,0-11.8,10.6-11.8,23.6c0,6.3,1.3,12.2,3.5,16.7c-3.5,0.2-6.6,0.9-10.1,1.8v11.7
	c12.6-1.8,25.2-1.7,36.9,0V42.1c-3.3-1-6.9-1.6-10.1-1.8c2.2-4.4,3.5-10.4,3.5-16.7C188.9,10.6,183.6,0,177.1,0z M51.8,51.9
	c-4.6,4.6-0.9,15.8,8.3,25c4.5,4.4,9.6,7.8,14.3,9.4c-2.4,2.6-4.1,5.3-5.9,8.4l8.3,8.3c7.3-9.9,16.2-18.7,26.1-26.1l-8.3-8.3
	c-3.1,1.6-5.9,3.8-8.4,5.9c-1.6-4.7-4.9-9.8-9.4-14.2C71,55.7,58.8,45.2,51.8,51.9z M277.4,60.2c-4.4,4.4-7.8,9.5-9.4,14.3
	c-2.6-2.4-5.3-4.1-8.4-5.9l-8.3,8.3c9.9,7.3,18.7,16.2,26.1,26.1l8.3-8.3c-1.6-3.1-3.8-5.9-5.9-8.4c4.7-1.6,9.7-4.9,14.2-9.4
	c9.2-9.2,13-20.4,8.3-25C295,46.1,281.7,56,277.4,60.2z M172.3,65.8c-27.2,1.2-51.8,12-70.6,29.2c-2.4,2.3-4.9,4.7-6.8,6.8
	c-17.2,18.7-28,43.4-29.2,70.6c0,3.3-0.1,6.7,0.1,9.6c1.1,27.2,12,51.8,29.2,70.6c2.3,2.4,4.7,4.8,6.8,6.8
	c18.7,17.1,43.4,28,70.6,29.2h0.1c3,0.1,6.4,0,9.4,0c27.2-1.2,51.8-12,70.6-29.2c2.4-2.3,4.9-4.7,6.8-6.8
	c17.2-18.7,28.1-43.4,29.2-70.6v-0.1c0.1-3.1,0-6.4,0-9.4c-1.2-27.2-12-51.8-29.2-70.6c-2.3-2.4-4.7-4.9-6.8-6.8
	c-18.7-17.2-43.4-28-70.6-29.2C178.6,65.6,175.2,65.8,172.3,65.8z M177.1,73.7c3.2,0,5.9,2.7,5.9,5.9s-2.7,5.9-5.9,5.9
	c-3.2,0-5.9-2.7-5.9-5.9S173.9,73.7,177.1,73.7z M182.2,94.6c19,1.2,36.2,8.7,49.7,20.6c2.5,2.3,4.9,4.7,7.2,7.2
	c11.9,13.4,19.4,30.7,20.6,49.8c0.3,3.4,0,6.8,0,10.1c-1.2,19-8.7,36.2-20.6,49.7c-2.3,2.5-4.7,4.9-7.2,7.2
	c-13.4,11.9-30.7,19.4-49.8,20.6c-3.4,0.1-6.8,0.3-10.1,0c-19-1.2-36.2-8.7-49.6-20.6h-0.1c-2.5-2.2-4.9-4.6-7.1-7.2
	c-11.9-13.4-19.5-30.6-20.7-49.7c-0.1-3.4-0.3-6.7,0-10c0.4-19,9.8-37.3,20.6-49.8c2.3-2.5,4.7-4.9,7.2-7.2
	c13.4-11.9,30.7-19.4,49.8-20.6C175.5,94.3,178.9,94.6,182.2,94.6z M112.3,103.9c2.3,2.3,2.3,6.1,0,8.3c-2.3,2.3-6.1,2.3-8.3,0
	c-2.3-2.3-2.3-6.1,0-8.3C106.5,101.8,110,101.8,112.3,103.9z M250.4,103.9c2.3,2.3,2.3,6.1,0,8.3c-2.3,2.3-6.1,2.3-8.3,0
	c-2.3-2.3-2.3-6.1,0-8.3C244.6,101.8,248.1,101.8,250.4,103.9z M165.3,108.7v6.4c1.8,2.4,3.2,4.1,5.8,5c-0.5,9.2-1.2,18.5-2.1,27.8
	c5.5-1.4,11.2-1.5,16.3,0.1c-0.9-9.4-1.6-18.7-2.1-28c5.8-1.6,5.8-6.3,5.8-11.4C180.8,107.5,172.9,107.6,165.3,108.7z M137.1,120.4
	c-6.4,4.6-12.1,10.3-16.7,16.7l4.6,4.6c3,0.4,5.2,0.6,7.6-0.5c6.1,6.9,12.3,14,18.2,21.2c2.7-4.8,6.7-8.8,11.6-11.5
	c-7.3-6-14.4-12.1-21.3-18.2c1.3-2.3,1-4.9,0.5-7.6L137.1,120.4z M217.2,120.4l-4.6,4.6c-0.5,3-0.6,5.1,0.4,7.6
	c-6.8,6.1-14,12.3-21.2,18.2c4.8,2.7,8.8,6.7,11.5,11.6c6-7.3,12.2-14.4,18.2-21.3c2.4,1.3,4.9,1,7.6,0.5l4.6-4.6
	C229.2,130.7,223.6,125,217.2,120.4z M300.5,158.7c1.8,12.6,1.7,25.2,0,36.9h11.7c1.1-3.3,1.5-6.9,1.7-10.1
	c4.4,2.2,10.5,3.5,16.8,3.5c13.1,0,23.6-5.3,23.6-11.8s-10.6-11.8-23.6-11.8c-6.3,0-12.3,1.3-16.8,3.5c-0.1-3.5-0.7-6.6-1.7-10.1
	H300.5z M42.1,158.8c-1,3.3-1.6,6.8-1.8,10c-4.4-2.2-10.4-3.4-16.7-3.4c-13,0-23.6,5.3-23.6,11.8c0,6.5,10.6,11.8,23.6,11.8
	c6.3,0,12.3-1.3,16.7-3.5c0.1,3.5,0.8,6.6,1.8,10.1h11.7c-1.8-12.6-1.8-25.2,0-36.9H42.1z M177.1,160.2c-9.5,0-17,7.5-17,17
	s7.5,17,17,17c9.4,0,17-7.5,17-17S186.6,160.2,177.1,160.2z M239.1,165.4c-2.4,1.8-4.1,3.2-5,5.8c-9.2-0.5-18.5-1.2-27.8-2.1
	c1.4,5.5,1.4,11.2,0,16.3c9.3-0.9,18.6-1.6,27.8-2.1c0.7,2.6,2.8,4.2,5,5.8h6.4c1.3-8.1,1.2-16.1,0-23.6H239.1z M108.7,165.4
	c-1.3,8-1.1,16.1,0,23.6h6.4c2.3-1.8,4.1-3.2,4.9-5.8c9.2,0.4,18.5,1.2,27.9,2.1c-1.5-5.5-1.5-11.2-0.1-16.3
	c-9.3,0.9-18.7,1.5-27.8,2.1c-0.7-2.6-2.8-4.2-4.9-5.7H108.7z M274.7,171.3c3.2,0,5.9,2.7,5.9,5.9s-2.7,5.9-5.9,5.9
	c-3.2,0-5.9-2.7-5.9-5.9S271.5,171.3,274.7,171.3z M79.6,171.3c3.2,0,5.9,2.7,5.9,5.9c0,3.2-2.7,5.9-5.9,5.9c-3.2,0-5.9-2.7-5.9-5.9
	C73.6,174,76.3,171.3,79.6,171.3z M203.5,192c-2.7,4.8-6.7,8.8-11.6,11.5c7.3,6,14.4,12.1,21.3,18.2c-1.3,2.3-1,4.9-0.5,7.6l4.6,4.6
	c6.4-4.6,12.1-10.3,16.7-16.7l-4.6-4.6c-3-0.4-5.2-0.6-7.6,0.5C215.6,206.3,209.5,199.2,203.5,192z M150.8,192
	c-6,7.2-12.1,14.3-18.2,21.2c-2.3-1.3-4.9-1-7.5-0.5l-4.7,4.6c4.6,6.5,10.3,12.2,16.8,16.7l4.6-4.6c0.4-3,0.6-5.2-0.5-7.6
	c6.9-6.1,14-12.3,21.2-18.2C157.6,200.8,153.5,196.8,150.8,192z M168.9,206.2c0.9,9.4,1.6,18.7,2.1,28c-2.6,0.6-4.3,2.8-5.8,4.9v6.4
	c8.1,1.3,16.1,1.2,23.6,0v-6.4c-1.8-2.4-3.2-4.1-5.8-5c0.5-9.2,1.2-18.5,2.1-27.8C179.6,207.3,173.6,207.6,168.9,206.2z M112.3,242
	c2.3,2.3,2.3,6.1,0,8.3c-2.3,2.3-6.1,2.3-8.3,0c-2.3-2.3-2.3-6.1,0-8.3C106.6,239.8,110,239.8,112.3,242z M250.4,242
	c2.3,2.3,2.3,6.1,0,8.3c-2.3,2.3-6.1,2.3-8.3,0c-2.3-2.3-2.3-6.1,0-8.3C244.6,239.8,248.1,239.8,250.4,242z M277.4,251.3
	c-7.3,9.9-16.2,18.7-26.1,26.1l8.3,8.3c3.1-1.6,5.9-3.8,8.4-5.9c1.5,4.7,4.9,9.8,9.4,14.2c9.2,9.2,20.4,12.9,25,8.3
	c4.6-4.6,0.9-15.8-8.3-25c-4.4-4.4-9.5-7.8-14.2-9.4c2.4-2.6,4.1-5.3,5.9-8.4L277.4,251.3z M76.9,251.3l-8.3,8.3
	c1.7,3,3.8,6.1,5.9,8.4c-4.7,1.5-9.8,4.9-14.3,9.4c-9.2,9.2-12.9,20.4-8.3,25c4.6,4.7,15.8,0.9,25.1-8.3c4.4-4.4,7.8-9.5,9.4-14.2
	c2.6,2.4,5.3,4.1,8.4,5.9l8.3-8.3C93.1,270.1,84.3,261.3,76.9,251.3z M177.1,268.8c3.2,0,5.9,2.7,5.9,5.9c0,3.2-2.7,5.9-5.9,5.9
	c-3.2,0-5.9-2.7-5.9-5.9C171.2,271.5,173.9,268.8,177.1,268.8z M158.7,300.6v11.7c3.3,1,6.9,1.5,10.1,1.8
	c-2.2,4.4-3.5,10.4-3.5,16.7c0,13.1,5.3,23.6,11.8,23.6c6.5,0,11.8-10.6,11.8-23.6c0-6.3-1.3-12.3-3.5-16.7
	c3.5-0.1,6.6-0.8,10.1-1.8v-11.7C183,302.4,170.4,302.3,158.7,300.6z"/>
</svg>
      `;

      const landIcon = L.divIcon({
          html: landIconHtml,
          className: 'bg-transparent border-0 group',
          iconSize: [17, 20],
          iconAnchor: [8.5, 20],
          popupAnchor: [0, -20],
      });

      const nauticalIcon = L.divIcon({
          html: nauticalIconHtml,
          className: 'bg-transparent border-0 group',
          iconSize: [20, 20],
          iconAnchor: [10, 20],
          popupAnchor: [0, -20],
      });

      treasures.forEach(treasure => {
        const markerIcon = treasure.category === 'water' ? nauticalIcon : landIcon;
        const marker = L.marker(treasure.coords as L.LatLngExpression, { icon: markerIcon }).addTo(mapRef.current!);
        
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
              <Plus className="w-5 h-5" />
          </Button>
          <Button size="icon" onClick={handleZoomOut} className="h-8 w-8 bg-primary text-accent hover:bg-primary/90">
              <Minus className="w-5 h-5" />
          </Button>
      </div>
    </div>
  );
};

export default Map;
