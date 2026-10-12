'use client';

import React, { useState } from 'react';
import { BirTransmissionRecord } from '@/lib/bir-eis/types';
import { X, CheckCircle2, AlertCircle, Copy, Check, Clock, ShieldCheck } from 'lucide-react';

interface InvoiceDetailModalProps {
  record: BirTransmissionRecord | null;
  onClose: () => void;
  onRetry: (id: string) => void;
}

export const InvoiceDetailModal: React.FC<InvoiceDetailModalProps> = ({
  record,
  onClose,
  onRetry,
}) => {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'eis' | 'erp'>('eis');

  if (!record) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(label);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const isTransmitted = record.status === 'transmitted' || record.status === 'validated';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 font-inter animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border-0 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-5 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[20px] font-[600] text-[#161616] tracking-tight">
                  {record.invoiceNumber}
                </span>
                <span
                  className={`text-[12px] font-[500] px-2.5 py-0.5 rounded-full ${
                    isTransmitted
                      ? 'bg-[#EAF6ED] text-[#2D7A42]'
                      : 'bg-[#FDEDEC] text-[#C0392B]'
                  }`}
                >
                  {isTransmitted ? 'BIR Transmitted' : 'Transmission Rejected'}
                </span>
                <span className="text-[12px] font-[500] bg-[#F4F4F4] text-[#525252] px-2 py-0.5 rounded-md">
                  {record.documentType === 'SI' ? 'Sales Invoice' : record.documentType === 'OR' ? 'Official Receipt' : 'Billing Statement'}
                </span>
              </div>
              <p className="text-[12px] font-[400] text-[#6F6F6F] mt-0.5">
                Ingested automatically from {record.sourceSystem} • {new Date(record.createdAt).toLocaleString()}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#8D8D8D] hover:text-[#161616] hover:bg-[#F4F4F4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-2 overflow-y-auto space-y-6 flex-1">
          {/* Key Facts Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-[#F4F4F4] rounded-2xl p-4 border-0">
              <span className="text-[12px] font-[400] text-[#6F6F6F] block">Buyer / Customer</span>
              <span className="text-[14px] font-[600] text-[#161616] mt-1 block truncate">
                {record.buyerName}
              </span>
              <span className="text-[12px] font-[400] text-[#8D8D8D] mt-0.5 block">
                TIN: {record.buyerTin}
              </span>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-4 border-0">
              <span className="text-[12px] font-[400] text-[#6F6F6F] block">Gross & 12% VAT</span>
              <span className="text-[14px] font-[600] text-[#161616] mt-1 block">
                ₱{record.grossAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
              <span className="text-[12px] font-[500] text-[#525252] mt-0.5 block">
                VAT: ₱{record.vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </span>
            </div>

            <div className="bg-[#F4F4F4] rounded-2xl p-4 border-0">
              <span className="text-[12px] font-[400] text-[#6F6F6F] block">BIR Acknowledgment</span>
              {record.birAckNumber ? (
                <>
                  <span className="text-[14px] font-[600] text-[#161616] mt-1 block font-mono text-[12px] truncate">
                    {record.birAckNumber}
                  </span>
                  <span className="text-[12px] font-[400] text-[#2D7A42] mt-0.5 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Certified ({record.latencyMs}ms)
                  </span>
                </>
              ) : (
                <>
                  <span className="text-[14px] font-[600] text-[#C0392B] mt-1 block">
                    Failed Transmission
                  </span>
                  <span className="text-[12px] font-[400] text-[#8D8D8D] mt-0.5 block truncate">
                    {record.rejectionReason}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Electronic Invoicing Line Items */}
          <div>
            <h3 className="text-[14px] font-[600] text-[#161616] mb-3">
              Line Items & Tax Breakdown
            </h3>
            <div className="bg-[#F4F4F4] rounded-2xl overflow-hidden p-2">
              <div className="space-y-1">
                {record.eisPayload.lineItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl px-4 py-3 flex items-center justify-between text-[12px]"
                  >
                    <div>
                      <div className="font-[600] text-[#161616] text-[14px]">{item.description}</div>
                      <div className="text-[#6F6F6F] font-[400] mt-0.5">
                        Code: {item.itemCode} • Qty: {item.qty} × ₱{item.unitPrice.toLocaleString()} • Tax: {item.taxType}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-[600] text-[#161616] text-[14px]">
                        ₱{item.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                      <div className="text-[#6F6F6F] font-[400] mt-0.5">
                        VAT: ₱{item.vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* JSON Inspection Tabs */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('eis')}
                  className={`px-3 py-1.5 rounded-lg text-[12px] font-[500] transition-colors ${
                    activeTab === 'eis'
                      ? 'bg-[#161616] text-white'
                      : 'bg-[#F4F4F4] text-[#525252] hover:bg-[#E0E0E0]'
                  }`}
                >
                  Official BIR EIS Payload (JSON)
                </button>
                <button
                  onClick={() => setActiveTab('erp')}
                  className={`px-3 py-1.5 rounded-lg text-[12px] font-[500] transition-colors ${
                    activeTab === 'erp'
                      ? 'bg-[#161616] text-white'
                      : 'bg-[#F4F4F4] text-[#525252] hover:bg-[#E0E0E0]'
                  }`}
                >
                  Raw Ingested ERP Data
                </button>
              </div>

              <button
                onClick={() =>
                  handleCopy(
                    JSON.stringify(
                      activeTab === 'eis' ? record.eisPayload : record.rawPayload,
                      null,
                      2
                    ),
                    activeTab
                  )
                }
                className="flex items-center gap-1.5 text-[12px] font-[500] text-[#525252] hover:text-[#161616] px-2.5 py-1 rounded-md bg-[#F4F4F4] hover:bg-[#E0E0E0] transition-colors"
              >
                {copiedTab === activeTab ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>

            <pre className="bg-[#161616] text-[#E0E0E0] rounded-2xl p-4 text-[12px] font-mono overflow-x-auto max-h-60 leading-relaxed">
              {JSON.stringify(
                activeTab === 'eis' ? record.eisPayload : record.rawPayload,
                null,
                2
              )}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-0">
          <div className="text-[12px] text-[#6F6F6F]">
            Digital Signature: <span className="font-mono text-[#161616] font-[500]">{record.eisPayload.digitalSignature}</span>
          </div>

          <div className="flex items-center gap-3">
            {record.status === 'rejected' && (
              <button
                onClick={() => onRetry(record.id)}
                className="px-4 py-2 rounded-xl text-[14px] font-[500] bg-[#FF3B6B] text-white hover:bg-[#E62788] transition-colors"
              >
                Retry BIR Transmission
              </button>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-[14px] font-[500] bg-[#000000] text-white hover:bg-[#161616] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
