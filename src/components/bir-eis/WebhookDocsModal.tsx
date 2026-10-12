'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Zap, ArrowRight } from 'lucide-react';

interface WebhookDocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendTestPing: () => void;
}

export const WebhookDocsModal: React.FC<WebhookDocsModalProps> = ({
  isOpen,
  onClose,
  onSendTestPing,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const sampleJson = `{
  "invoiceNumber": "INV-2026-9901",
  "sourceSystem": "Odoo ERP / SAP / Custom POS",
  "documentType": "SI",
  "issueDateTime": "${new Date().toISOString()}",
  "buyer": {
    "tin": "000-123-456-00000",
    "registeredName": "Sample Buyer Enterprise Corp.",
    "address": "Makati City, Philippines"
  },
  "items": [
    {
      "itemCode": "PROD-01",
      "description": "Enterprise Subscription License",
      "quantity": 1,
      "unitPrice": 50000.00,
      "taxType": "VAT"
    }
  ]
}`;

  const curlCommand = `curl -X POST https://your-domain/api/bir-eis/webhook \\
  -H "Content-Type: application/json" \\
  -d '${sampleJson.replace(/\n\s*/g, '')}'`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 font-inter animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border-0 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between bg-white border-0">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#161616]" />
            <h2 className="text-[18px] font-[600] text-[#161616]">
              Automated ERP Webhook Integration
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#8D8D8D] hover:text-[#161616] hover:bg-[#F4F4F4]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 overflow-y-auto space-y-5 flex-1">
          <div className="bg-[#F4F4F4] rounded-2xl p-4">
            <span className="text-[12px] font-[600] uppercase tracking-wider text-[#6F6F6F] block mb-1">
              Active Ingestion Endpoint
            </span>
            <div className="flex items-center justify-between">
              <code className="text-[14px] font-[600] text-[#161616] font-mono">
                POST /api/bir-eis/webhook
              </code>
              <button
                onClick={() => handleCopy('https://your-domain/api/bir-eis/webhook')}
                className="text-[12px] font-[500] text-[#525252] hover:text-[#161616] px-2.5 py-1 rounded-md bg-white hover:bg-[#E0E0E0]"
              >
                Copy URL
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] font-[600] text-[#262626]">
                Automated Ingestion Payload Specification
              </span>
              <button
                onClick={() => handleCopy(sampleJson)}
                className="flex items-center gap-1.5 text-[12px] font-[500] text-[#525252] hover:text-[#161616] px-2 py-0.5 rounded-md hover:bg-[#F4F4F4]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Schema'}</span>
              </button>
            </div>
            <pre className="bg-[#161616] text-[#E0E0E0] rounded-2xl p-4 text-[12px] font-mono overflow-x-auto max-h-56 leading-relaxed">
              {sampleJson}
            </pre>
          </div>

          <div className="text-[12px] text-[#6F6F6F] space-y-1.5">
            <div className="font-[600] text-[#161616]">How it operates with zero manual inputting:</div>
            <p>
              1. Whenever an invoice or receipt is confirmed in your ERP (SAP, Odoo, POS, or NetSuite), an automated webhook sends the raw JSON to this bridge.
            </p>
            <p>
              2. The bridge computes 12% VAT, validates TIN & sequence numbers, signs the payload, and transmits to BIR EIS in &lt;300ms.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-0">
          <button
            onClick={() => {
              onSendTestPing();
              onClose();
            }}
            className="px-4 py-2 rounded-xl text-[14px] font-[500] bg-[#161616] text-white hover:bg-[#262626] transition-colors flex items-center gap-1.5"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Send Instant Test Transaction</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-[14px] font-[500] bg-[#000000] text-white hover:bg-[#161616]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
