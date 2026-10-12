import { NextRequest, NextResponse } from 'next/server';
import { BirEisService } from '@/lib/bir-eis/service';

export async function POST(req: NextRequest) {
  try {
    const { recordId } = await req.json();
    if (!recordId) {
      return NextResponse.json({ success: false, error: 'Missing recordId' }, { status: 400 });
    }

    const updated = await BirEisService.retryTransmission(recordId);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Record not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, record: updated });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
