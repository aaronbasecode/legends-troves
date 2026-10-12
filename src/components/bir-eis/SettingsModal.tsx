'use client';

import React, { useState } from 'react';
import { BridgeConfig } from '@/lib/bir-eis/types';
import { X, Check, Key, Shield, Building2, Sliders } from 'lucide-react';

interface SettingsModalProps {
  config: BridgeConfig;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: Partial<BridgeConfig>) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  config,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<BridgeConfig>({ ...config });
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 font-inter animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border-0 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between bg-white border-0">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-[#161616]" />
            <h2 className="text-[18px] font-[600] text-[#161616]">
              Bridge & BIR Credentials
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#8D8D8D] hover:text-[#161616] hover:bg-[#F4F4F4]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="px-6 py-4 overflow-y-auto space-y-5 flex-1">
          {/* Taxpayer Information */}
          <div className="space-y-3">
            <span className="text-[12px] font-[600] uppercase tracking-wider text-[#6F6F6F] block">
              Registered Taxpayer Information
            </span>

            <div>
              <label className="text-[12px] font-[500] text-[#262626] block mb-1">
                Company Registered Name
              </label>
              <input
                type="text"
                value={formData.registeredName}
                onChange={(e) =>
                  setFormData({ ...formData, registeredName: e.target.value })
                }
                className="w-full bg-[#F4F4F4] rounded-xl px-3.5 py-2.5 text-[14px] text-[#161616] border-0 focus:outline-none focus:ring-2 focus:ring-[#161616]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[12px] font-[500] text-[#262626] block mb-1">
                  Taxpayer TIN (9 or 12 digits)
                </label>
                <input
                  type="text"
                  value={formData.taxpayerTin}
                  onChange={(e) =>
                    setFormData({ ...formData, taxpayerTin: e.target.value })
                  }
                  className="w-full bg-[#F4F4F4] rounded-xl px-3.5 py-2.5 text-[14px] text-[#161616] border-0 focus:outline-none focus:ring-2 focus:ring-[#161616]"
                />
              </div>

              <div>
                <label className="text-[12px] font-[500] text-[#262626] block mb-1">
                  Branch Code
                </label>
                <input
                  type="text"
                  value={formData.branchCode}
                  onChange={(e) =>
                    setFormData({ ...formData, branchCode: e.target.value })
                  }
                  className="w-full bg-[#F4F4F4] rounded-xl px-3.5 py-2.5 text-[14px] text-[#161616] border-0 focus:outline-none focus:ring-2 focus:ring-[#161616]"
                />
              </div>
            </div>

            <div>
              <label className="text-[12px] font-[500] text-[#262626] block mb-1">
                Revenue District Office (RDO)
              </label>
              <input
                type="text"
                value={formData.rdoCode}
                onChange={(e) =>
                  setFormData({ ...formData, rdoCode: e.target.value })
                }
                className="w-full bg-[#F4F4F4] rounded-xl px-3.5 py-2.5 text-[14px] text-[#161616] border-0 focus:outline-none focus:ring-2 focus:ring-[#161616]"
              />
            </div>
          </div>

          {/* BIR EIS Environment */}
          <div className="space-y-3 pt-2">
            <span className="text-[12px] font-[600] uppercase tracking-wider text-[#6F6F6F] block">
              BIR EIS API Target
            </span>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    environment: 'sandbox',
                    eisApiUrl: 'https://eis-sandbox.bir.gov.ph/api/v1/invoices',
                  })
                }
                className={`py-3 px-4 rounded-2xl text-[14px] font-[500] text-left transition-all border-0 ${
                  formData.environment === 'sandbox'
                    ? 'bg-[#161616] text-white shadow-sm'
                    : 'bg-[#F4F4F4] text-[#525252] hover:bg-[#E0E0E0]'
                }`}
              >
                <div className="font-[600]">Sandbox / Pilot</div>
                <div className="text-[12px] opacity-75 mt-0.5">Accreditation test server</div>
              </button>

              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    environment: 'production',
                    eisApiUrl: 'https://eis.bir.gov.ph/api/v1/invoices',
                  })
                }
                className={`py-3 px-4 rounded-2xl text-[14px] font-[500] text-left transition-all border-0 ${
                  formData.environment === 'production'
                    ? 'bg-[#161616] text-white shadow-sm'
                    : 'bg-[#F4F4F4] text-[#525252] hover:bg-[#E0E0E0]'
                }`}
              >
                <div className="font-[600]">Live Production</div>
                <div className="text-[12px] opacity-75 mt-0.5">Official BIR EIS Gateway</div>
              </button>
            </div>

            <div>
              <label className="text-[12px] font-[500] text-[#262626] block mb-1">
                EIS Endpoint URL
              </label>
              <input
                type="text"
                value={formData.eisApiUrl}
                onChange={(e) =>
                  setFormData({ ...formData, eisApiUrl: e.target.value })
                }
                className="w-full bg-[#F4F4F4] rounded-xl px-3.5 py-2.5 text-[14px] text-[#161616] border-0 focus:outline-none focus:ring-2 focus:ring-[#161616]"
              />
            </div>
          </div>

          {/* Webhook Security */}
          <div className="space-y-3 pt-2">
            <span className="text-[12px] font-[600] uppercase tracking-wider text-[#6F6F6F] block">
              ERP Webhook Authentication
            </span>

            <div>
              <label className="text-[12px] font-[500] text-[#262626] block mb-1">
                Webhook Secret (X-Bridge-Signature)
              </label>
              <input
                type="text"
                value={formData.webhookSecret}
                readOnly
                className="w-full bg-[#F4F4F4] rounded-xl px-3.5 py-2.5 text-[12px] font-mono text-[#525252] border-0 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 flex items-center justify-end gap-3 border-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-[14px] font-[500] text-[#525252] hover:bg-[#F4F4F4]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-[14px] font-[500] bg-[#000000] text-white hover:bg-[#161616] flex items-center gap-1.5 transition-colors"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Configuration</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
