export type DocumentType = 'SI' | 'BS' | 'OR'; // Sales Invoice, Billing Statement, Official Receipt

export type TaxType = 'VAT' | 'ZERO_RATED' | 'EXEMPT';

export type TransmissionStatus = 'transmitted' | 'validated' | 'rejected' | 'queued';

export interface ErpLineItem {
  itemCode: string;
  description: string;
  quantity: number;
  unitPrice: number;
  taxType: TaxType;
  discount?: number;
}

export interface ErpRawInvoice {
  invoiceNumber: string;
  sourceSystem: string;
  issueDateTime: string;
  documentType: DocumentType;
  seller?: {
    tin: string;
    branchCode: string;
    registeredName: string;
    address?: string;
  };
  buyer: {
    tin: string;
    branchCode?: string;
    registeredName: string;
    email?: string;
    address?: string;
  };
  items: ErpLineItem[];
  paymentMethod?: string;
}

export interface BirEisLineItem {
  seqNo: number;
  itemCode: string;
  description: string;
  unitPrice: number;
  qty: number;
  taxType: TaxType;
  netAmount: number;
  vatAmount: number;
  totalAmount: number;
}

export interface BirEisTaxSummary {
  vatableSales: number;
  vatAmount: number; // 12%
  zeroRatedSales: number;
  vatExemptSales: number;
  discountsTotal: number;
  netSales: number;
  grossAmount: number;
}

export interface BirEisPayload {
  eisVersion: string;
  docType: DocumentType;
  invoiceNumber: string;
  issueDateTime: string;
  seller: {
    tin: string;
    branchCode: string;
    registeredName: string;
    rdo: string;
  };
  buyer: {
    tin: string;
    branchCode: string;
    registeredName: string;
    address?: string;
  };
  taxSummary: BirEisTaxSummary;
  lineItems: BirEisLineItem[];
  digitalSignature: string;
}

export interface BirTransmissionRecord {
  id: string;
  invoiceNumber: string;
  documentType: DocumentType;
  sourceSystem: string;
  buyerName: string;
  buyerTin: string;
  grossAmount: number;
  vatAmount: number;
  status: TransmissionStatus;
  birAckNumber?: string;
  birTimestamp?: string;
  rejectionReason?: string;
  latencyMs: number;
  createdAt: string;
  rawPayload: ErpRawInvoice;
  eisPayload: BirEisPayload;
}

export interface BridgeConfig {
  taxpayerTin: string;
  branchCode: string;
  registeredName: string;
  rdoCode: string;
  environment: 'sandbox' | 'production';
  autoTransmit: boolean;
  transmissionFrequency: 'realtime' | 'batch_5m' | 'batch_1h';
  webhookSecret: string;
  eisApiUrl: string;
}

export interface BridgeAnalytics {
  totalInvoices: number;
  totalTransmitted: number;
  totalGrossAmount: number;
  totalVatAmount: number;
  successRate: number;
  avgLatencyMs: number;
  hourlyTrends: Array<{
    hour: string;
    count: number;
    amount: number;
  }>;
  taxBreakdown: {
    vatable: number;
    zeroRated: number;
    exempt: number;
    vat: number;
  };
}
