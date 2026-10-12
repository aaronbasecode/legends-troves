import { NextRequest, NextResponse } from 'next/server';
import { BirEisService } from '@/lib/bir-eis/service';

export async function GET() {
  const config = BirEisService.getConfig();
  return NextResponse.json({ success: true, config });
}

export async function POST(req: NextRequest) {
  try {
    const updates = await req.json();
    const updated = BirEisService.updateConfig(updates);
    return NextResponse.json({ success: true, config: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
