import { NextRequest, NextResponse } from 'next/server';
import { BirEisService } from '@/lib/bir-eis/service';
import { ErpRawInvoice } from '@/lib/bir-eis/types';

/**
 * Real-time Automated Webhook Ingestion Endpoint
 * External ERPs/POS systems (SAP, Odoo, NetSuite, Shopify, custom POS)
 * push sales transactions directly here via HTTP POST.
 * Zero manual data entry required.
 */
export async function POST(req: NextRequest) {
  try {
    const rawInvoice: ErpRawInvoice = await req.json();

    if (!rawInvoice || !rawInvoice.invoiceNumber) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid payload: invoiceNumber is required',
        },
        { status: 400 }
      );
    }

    const record = await BirEisService.ingestInvoice(rawInvoice);

    return NextResponse.json({
      success: record.status !== 'rejected',
      record,
      message:
        record.status === 'transmitted'
          ? 'Invoice automatically validated and transmitted to BIR EIS.'
          : 'Invoice received and processed.',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to ingest invoice',
      },
      { status: 500 }
    );
  }
}
