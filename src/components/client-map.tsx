"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function MapSkeleton() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="w-full h-full">
        <Skeleton className="w-full h-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground text-lg">
          Loading Legendary Map...
        </div>
      </div>
    </div>
  );
}

const ClientMap = () => {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        loading: () => <MapSkeleton />,
        ssr: false,
      }),
    []
  );

  return <Map />;
};

export default ClientMap;
