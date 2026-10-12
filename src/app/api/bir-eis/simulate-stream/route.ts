import { NextRequest, NextResponse } from 'next/server';
import { BirEisService } from '@/lib/bir-eis/service';

/**
 * Endpoint to simulate automated real-time stream from ERPs/POS
 * Automatically generates batch transactions and pushes them through the ingestion engine.
 */
export async function POST(req: NextRequest) {
  try {
    const { count = 1 } = await req.json().catch(() => ({ count: 1 }));
    const created = [];

    const numToGenerate = Math.min(Math.max(count, 1), 10);
    for (let i = 0; i < numToGenerate; i++) {
      const sample = BirEisService.generateAutomatedErpSample();
      const record = await BirEisService.ingestInvoice(sample);
      created.push(record);
    }

    return NextResponse.json({
      success: true,
      count: created.length,
      records: created,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
