import {
  BirTransmissionRecord,
  BridgeConfig,
  BridgeAnalytics,
  ErpRawInvoice,
} from './types';
import { transformErpToBirEis } from './transformer';

// In-memory persistent singleton during server lifetime
let configState: BridgeConfig = {
  taxpayerTin: '123-456-789-00000',
  branchCode: '00000',
  registeredName: 'ACME TRADING CORP (PHILIPPINES)',
  rdoCode: 'RDO 044 - Taguig City',
  environment: 'sandbox',
  autoTransmit: true,
  transmissionFrequency: 'realtime',
  webhookSecret: 'eis_sec_live_99a8b7c6d5e4f3a2',
  eisApiUrl: 'https://eis-sandbox.bir.gov.ph/api/v1/invoices',
};

// Seed realistic initial transactions
let invoiceRecords: BirTransmissionRecord[] = [
  {
    id: 'tx-101',
    invoiceNumber: 'INV-2026-00812',
    documentType: 'SI',
    sourceSystem: 'SAP S/4HANA ERP',
    buyerName: 'Ayala Land Corporation',
    buyerTin: '000-123-456-00000',
    grossAmount: 185000.0,
    vatAmount: 19821.43,
    status: 'transmitted',
    birAckNumber: 'BIR-EIS-ACK-2026-891024',
    birTimestamp: '2026-10-12T08:14:22Z',
    latencyMs: 312,
    createdAt: '2026-10-12T08:14:21Z',
    rawPayload: {
      invoiceNumber: 'INV-2026-00812',
      sourceSystem: 'SAP S/4HANA ERP',
      issueDateTime: '2026-10-12T08:14:21Z',
      documentType: 'SI',
      buyer: {
        tin: '000-123-456-00000',
        registeredName: 'Ayala Land Corporation',
        address: 'Makati City, Metro Manila',
      },
      items: [
        {
          itemCode: 'IT-CONSULT-01',
          description: 'Enterprise IT Infrastructure Service Q4',
          quantity: 1,
          unitPrice: 185000,
          taxType: 'VAT',
        },
      ],
    },
    eisPayload: {
      eisVersion: '1.0',
      docType: 'SI',
      invoiceNumber: 'INV-2026-00812',
      issueDateTime: '2026-10-12T08:14:21Z',
      seller: {
        tin: '123456789000',
        branchCode: '00000',
        registeredName: 'ACME TRADING CORP (PHILIPPINES)',
        rdo: 'RDO 044 - Taguig City',
      },
      buyer: {
        tin: '000123456000',
        branchCode: '00000',
        registeredName: 'Ayala Land Corporation',
        address: 'Makati City, Metro Manila',
      },
      taxSummary: {
        vatableSales: 165178.57,
        vatAmount: 19821.43,
        zeroRatedSales: 0,
        vatExemptSales: 0,
        discountsTotal: 0,
        netSales: 165178.57,
        grossAmount: 185000.0,
      },
      lineItems: [
        {
          seqNo: 1,
          itemCode: 'IT-CONSULT-01',
          description: 'Enterprise IT Infrastructure Service Q4',
          unitPrice: 185000,
          qty: 1,
          taxType: 'VAT',
          netAmount: 165178.57,
          vatAmount: 19821.43,
          totalAmount: 185000,
        },
      ],
      digitalSignature: 'BIR-PKI-SIG-98A1B02C-774A9B1C',
    },
  },
  {
    id: 'tx-102',
    invoiceNumber: 'INV-2026-00813',
    documentType: 'SI',
    sourceSystem: 'Odoo v18 Accounting',
    buyerName: 'SM Prime Holdings Inc.',
    buyerTin: '001-987-654-00000',
    grossAmount: 94200.0,
    vatAmount: 10092.86,
    status: 'transmitted',
    birAckNumber: 'BIR-EIS-ACK-2026-891025',
    birTimestamp: '2026-10-12T08:42:05Z',
    latencyMs: 245,
    createdAt: '2026-10-12T08:42:04Z',
    rawPayload: {
      invoiceNumber: 'INV-2026-00813',
      sourceSystem: 'Odoo v18 Accounting',
      issueDateTime: '2026-10-12T08:42:04Z',
      documentType: 'SI',
      buyer: {
        tin: '001-987-654-00000',
        registeredName: 'SM Prime Holdings Inc.',
        address: 'Pasay City, Metro Manila',
      },
      items: [
        {
          itemCode: 'HW-ROUTER-99',
          description: 'Commercial Networking Gateway Modules',
          quantity: 4,
          unitPrice: 23550,
          taxType: 'VAT',
        },
      ],
    },
    eisPayload: {
      eisVersion: '1.0',
      docType: 'SI',
      invoiceNumber: 'INV-2026-00813',
      issueDateTime: '2026-10-12T08:42:04Z',
      seller: {
        tin: '123456789000',
        branchCode: '00000',
        registeredName: 'ACME TRADING CORP (PHILIPPINES)',
        rdo: 'RDO 044 - Taguig City',
      },
      buyer: {
        tin: '001987654000',
        branchCode: '00000',
        registeredName: 'SM Prime Holdings Inc.',
        address: 'Pasay City, Metro Manila',
      },
      taxSummary: {
        vatableSales: 84107.14,
        vatAmount: 10092.86,
        zeroRatedSales: 0,
        vatExemptSales: 0,
        discountsTotal: 0,
        netSales: 84107.14,
        grossAmount: 94200.0,
      },
      lineItems: [
        {
          seqNo: 1,
          itemCode: 'HW-ROUTER-99',
          description: 'Commercial Networking Gateway Modules',
          unitPrice: 23550,
          qty: 4,
          taxType: 'VAT',
          netAmount: 84107.14,
          vatAmount: 10092.86,
          totalAmount: 94200,
        },
      ],
      digitalSignature: 'BIR-PKI-SIG-48C17F1A-66C819FF',
    },
  },
  {
    id: 'tx-103',
    invoiceNumber: 'INV-2026-00814',
    documentType: 'OR',
    sourceSystem: 'Shopify POS Retail',
    buyerName: 'BDO Unibank Tech Services',
    buyerTin: '002-345-678-00000',
    grossAmount: 45000.0,
    vatAmount: 4821.43,
    status: 'validated',
    birAckNumber: 'BIR-EIS-ACK-2026-891026',
    birTimestamp: '2026-10-12T09:05:11Z',
    latencyMs: 198,
    createdAt: '2026-10-12T09:05:10Z',
    rawPayload: {
      invoiceNumber: 'INV-2026-00814',
      sourceSystem: 'Shopify POS Retail',
      issueDateTime: '2026-10-12T09:05:10Z',
      documentType: 'OR',
      buyer: {
        tin: '002-345-678-00000',
        registeredName: 'BDO Unibank Tech Services',
        address: 'Mandaluyong City',
      },
      items: [
        {
          itemCode: 'SOFT-LIC-ANNUAL',
          description: 'Cloud Analytics Seat License Tier A',
          quantity: 1,
          unitPrice: 45000,
          taxType: 'VAT',
        },
      ],
    },
    eisPayload: {
      eisVersion: '1.0',
      docType: 'OR',
      invoiceNumber: 'INV-2026-00814',
      issueDateTime: '2026-10-12T09:05:10Z',
      seller: {
        tin: '123456789000',
        branchCode: '00000',
        registeredName: 'ACME TRADING CORP (PHILIPPINES)',
        rdo: 'RDO 044 - Taguig City',
      },
      buyer: {
        tin: '002345678000',
        branchCode: '00000',
        registeredName: 'BDO Unibank Tech Services',
        address: 'Mandaluyong City',
      },
      taxSummary: {
        vatableSales: 40178.57,
        vatAmount: 4821.43,
        zeroRatedSales: 0,
        vatExemptSales: 0,
        discountsTotal: 0,
        netSales: 40178.57,
        grossAmount: 45000.0,
      },
      lineItems: [
        {
          seqNo: 1,
          itemCode: 'SOFT-LIC-ANNUAL',
          description: 'Cloud Analytics Seat License Tier A',
          unitPrice: 45000,
          qty: 1,
          taxType: 'VAT',
          netAmount: 40178.57,
          vatAmount: 4821.43,
          totalAmount: 45000,
        },
      ],
      digitalSignature: 'BIR-PKI-SIG-719AA42D-09F144AC',
    },
  },
  {
    id: 'tx-104',
    invoiceNumber: 'INV-2026-00815',
    documentType: 'SI',
    sourceSystem: 'NetSuite ERP',
    buyerName: 'Philippine Global Exporters Ltd.',
    buyerTin: '003-888-999-00000',
    grossAmount: 320000.0,
    vatAmount: 0.0,
    status: 'transmitted',
    birAckNumber: 'BIR-EIS-ACK-2026-891027',
    birTimestamp: '2026-10-12T09:20:18Z',
    latencyMs: 275,
    createdAt: '2026-10-12T09:20:17Z',
    rawPayload: {
      invoiceNumber: 'INV-2026-00815',
      sourceSystem: 'NetSuite ERP',
      issueDateTime: '2026-10-12T09:20:17Z',
      documentType: 'SI',
      buyer: {
        tin: '003-888-999-00000',
        registeredName: 'Philippine Global Exporters Ltd.',
        address: 'Subic Bay Freeport Zone',
      },
      items: [
        {
          itemCode: 'EXP-GOODS-A',
          description: 'Custom Semiconductor Components (PEZA Export)',
          quantity: 1,
          unitPrice: 320000,
          taxType: 'ZERO_RATED',
        },
      ],
    },
    eisPayload: {
      eisVersion: '1.0',
      docType: 'SI',
      invoiceNumber: 'INV-2026-00815',
      issueDateTime: '2026-10-12T09:20:17Z',
      seller: {
        tin: '123456789000',
        branchCode: '00000',
        registeredName: 'ACME TRADING CORP (PHILIPPINES)',
        rdo: 'RDO 044 - Taguig City',
      },
      buyer: {
        tin: '003888999000',
        branchCode: '00000',
        registeredName: 'Philippine Global Exporters Ltd.',
        address: 'Subic Bay Freeport Zone',
      },
      taxSummary: {
        vatableSales: 0,
        vatAmount: 0,
        zeroRatedSales: 320000,
        vatExemptSales: 0,
        discountsTotal: 0,
        netSales: 320000,
        grossAmount: 320000,
      },
      lineItems: [
        {
          seqNo: 1,
          itemCode: 'EXP-GOODS-A',
          description: 'Custom Semiconductor Components (PEZA Export)',
          unitPrice: 320000,
          qty: 1,
          taxType: 'ZERO_RATED',
          netAmount: 320000,
          vatAmount: 0,
          totalAmount: 320000,
        },
      ],
      digitalSignature: 'BIR-PKI-SIG-11BBCC33-AA991100',
    },
  },
];

export const BirEisService = {
  getConfig(): BridgeConfig {
    return { ...configState };
  },

  updateConfig(updates: Partial<BridgeConfig>): BridgeConfig {
    configState = { ...configState, ...updates };
    return { ...configState };
  },

  getAllRecords(): BirTransmissionRecord[] {
    return [...invoiceRecords];
  },

  /**
   * Automated Ingestion Pipeline
   * Takes raw invoice from ERP/POS, transforms into BIR EIS format, and transmits to BIR.
   */
  async ingestInvoice(raw: ErpRawInvoice): Promise<BirTransmissionRecord> {
    const startTime = Date.now();
    const { payload, errors } = transformErpToBirEis(raw, configState);

    const recordId = `tx-${Date.now().toString().slice(-6)}`;

    if (errors && errors.length > 0) {
      const failedRecord: BirTransmissionRecord = {
        id: recordId,
        invoiceNumber: raw.invoiceNumber || `ERR-${Date.now()}`,
        documentType: raw.documentType || 'SI',
        sourceSystem: raw.sourceSystem || 'Unknown ERP',
        buyerName: raw.buyer?.registeredName || 'Unknown Buyer',
        buyerTin: raw.buyer?.tin || '000-000-000-00000',
        grossAmount: 0,
        vatAmount: 0,
        status: 'rejected',
        rejectionReason: errors.join('; '),
        latencyMs: Date.now() - startTime,
        createdAt: new Date().toISOString(),
        rawPayload: raw,
        eisPayload: payload,
      };
      invoiceRecords.unshift(failedRecord);
      return failedRecord;
    }

    // Simulate BIR Transmission
    const latency = Math.floor(Math.random() * 150) + 180; // realistic 180ms - 330ms
    const isSuccess = Math.random() > 0.03; // 97% success rate simulation

    const record: BirTransmissionRecord = {
      id: recordId,
      invoiceNumber: payload.invoiceNumber,
      documentType: payload.docType,
      sourceSystem: raw.sourceSystem,
      buyerName: payload.buyer.registeredName,
      buyerTin: payload.buyer.tin,
      grossAmount: payload.taxSummary.grossAmount,
      vatAmount: payload.taxSummary.vatAmount,
      status: isSuccess ? 'transmitted' : 'rejected',
      birAckNumber: isSuccess
        ? `BIR-EIS-ACK-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`
        : undefined,
      birTimestamp: isSuccess ? new Date().toISOString() : undefined,
      rejectionReason: isSuccess ? undefined : 'BIR Server validation error: Rate limit or temporary RDO validation delay',
      latencyMs: latency,
      createdAt: new Date().toISOString(),
      rawPayload: raw,
      eisPayload: payload,
    };

    invoiceRecords.unshift(record);

    // Keep memory clean (limit to 150 records)
    if (invoiceRecords.length > 150) {
      invoiceRecords = invoiceRecords.slice(0, 150);
    }

    return record;
  },

  /**
   * Re-transmit a previously failed or rejected invoice
   */
  async retryTransmission(recordId: string): Promise<BirTransmissionRecord | null> {
    const existing = invoiceRecords.find((r) => r.id === recordId);
    if (!existing) return null;

    existing.status = 'transmitted';
    existing.birAckNumber = `BIR-EIS-ACK-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
    existing.birTimestamp = new Date().toISOString();
    existing.rejectionReason = undefined;
    existing.latencyMs = Math.floor(Math.random() * 120) + 160;

    return { ...existing };
  },

  /**
   * Generate automated ERP sample sales to simulate live system data with zero manual input
   */
  generateAutomatedErpSample(): ErpRawInvoice {
    const clients = [
      { name: 'Jollibee Foods Corporation', tin: '000-432-109-00000', addr: 'Pasig City' },
      { name: 'San Miguel Brewery Inc.', tin: '001-112-334-00000', addr: 'Mandaluyong City' },
      { name: 'Globe Telecom Inc.', tin: '000-888-221-00000', addr: 'Bonifacio Global City, Taguig' },
      { name: 'PLDT Enterprise Services', tin: '000-999-443-00000', addr: 'Makati City' },
      { name: 'Puregold Price Club Inc.', tin: '002-331-554-00000', addr: 'Manila City' },
      { name: 'Universal Robina Corp.', tin: '000-667-889-00000', addr: 'Quezon City' },
      { name: 'Robinsons Retail Holdings', tin: '001-778-990-00000', addr: 'Ortigas Center' },
      { name: 'Megaworld Corporation', tin: '000-554-321-00000', addr: 'Taguig City' },
    ];

    const sources = [
      'SAP S/4HANA ERP',
      'Odoo v18 Accounting',
      'NetSuite ERP',
      'Shopify POS Retail',
      'Direct ERP Ingest API',
    ];

    const itemCatalog = [
      { code: 'SV-CLOUD-ENT', desc: 'Secure Cloud Invoicing Gateway Subs', price: 65000, tax: 'VAT' as const },
      { code: 'HW-TERM-POS', desc: 'Hardware POS Smart Terminal Dual-Display', price: 34500, tax: 'VAT' as const },
      { code: 'CNS-AUDIT-TAX', desc: 'Quarterly Electronic Tax Audit Services', price: 120000, tax: 'VAT' as const },
      { code: 'LIC-API-CONN', desc: 'Enterprise Bridge Webhook Connector Tier 2', price: 48000, tax: 'VAT' as const },
      { code: 'PEZA-EXP-IT', desc: 'Export Oriented Software Development Deliverables', price: 210000, tax: 'ZERO_RATED' as const },
      { code: 'AGRI-RAW-SUP', desc: 'Primary Agricultural Produce Supplies', price: 82000, tax: 'EXEMPT' as const },
    ];

    const randomClient = clients[Math.floor(Math.random() * clients.length)];
    const randomSource = sources[Math.floor(Math.random() * sources.length)];
    const randomItem = itemCatalog[Math.floor(Math.random() * itemCatalog.length)];
    const qty = Math.floor(Math.random() * 3) + 1;
    const invNum = `INV-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    return {
      invoiceNumber: invNum,
      sourceSystem: randomSource,
      issueDateTime: new Date().toISOString(),
      documentType: Math.random() > 0.8 ? 'OR' : 'SI',
      buyer: {
        tin: randomClient.tin,
        registeredName: randomClient.name,
        address: randomClient.addr,
      },
      items: [
        {
          itemCode: randomItem.code,
          description: randomItem.desc,
          quantity: qty,
          unitPrice: randomItem.price,
          taxType: randomItem.tax,
        },
      ],
    };
  },

  getAnalytics(): BridgeAnalytics {
    const totalInvoices = invoiceRecords.length;
    const transmittedList = invoiceRecords.filter(
      (r) => r.status === 'transmitted' || r.status === 'validated'
    );
    const totalTransmitted = transmittedList.length;
    const totalGrossAmount = invoiceRecords.reduce((acc, r) => acc + r.grossAmount, 0);
    const totalVatAmount = invoiceRecords.reduce((acc, r) => acc + r.vatAmount, 0);
    const successRate =
      totalInvoices > 0 ? Math.round((totalTransmitted / totalInvoices) * 1000) / 10 : 100;

    const latencies = invoiceRecords.map((r) => r.latencyMs);
    const avgLatencyMs =
      latencies.length > 0
        ? Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length)
        : 220;

    // Hourly aggregation for today
    const hourMap: { [hour: string]: { count: number; amount: number } } = {
      '08:00': { count: 12, amount: 480000 },
      '10:00': { count: 28, amount: 890000 },
      '12:00': { count: 35, amount: 1140000 },
      '14:00': { count: 42, amount: 1420000 },
      '16:00': { count: 38, amount: 1210000 },
      '18:00': { count: totalTransmitted, amount: totalGrossAmount },
    };

    const hourlyTrends = Object.entries(hourMap).map(([hour, val]) => ({
      hour,
      count: val.count,
      amount: val.amount,
    }));

    let vatable = 0;
    let zeroRated = 0;
    let exempt = 0;

    invoiceRecords.forEach((r) => {
      vatable += r.eisPayload.taxSummary.vatableSales;
      zeroRated += r.eisPayload.taxSummary.zeroRatedSales;
      exempt += r.eisPayload.taxSummary.vatExemptSales;
    });

    return {
      totalInvoices,
      totalTransmitted,
      totalGrossAmount,
      totalVatAmount,
      successRate,
      avgLatencyMs,
      hourlyTrends,
      taxBreakdown: {
        vatable,
        zeroRated,
        exempt,
        vat: totalVatAmount,
      },
    };
  },
};
