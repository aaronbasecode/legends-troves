import { NextResponse } from 'next/server';
import { BirEisService } from '@/lib/bir-eis/service';

export async function GET() {
  const records = BirEisService.getAllRecords();
  const analytics = BirEisService.getAnalytics();
  const config = BirEisService.getConfig();

  return NextResponse.json({
    records,
    analytics,
    config,
  });
}
