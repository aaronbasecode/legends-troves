'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  BirTransmissionRecord,
  BridgeAnalytics,
  BridgeConfig,
} from '@/lib/bir-eis/types';
import { PALETTE } from '@/lib/bir-eis/tokens';
import { MinimalCharts } from '@/components/bir-eis/MinimalCharts';
import { InvoiceDetailModal } from '@/components/bir-eis/InvoiceDetailModal';
import { SettingsModal } from '@/components/bir-eis/SettingsModal';
import { WebhookDocsModal } from '@/components/bir-eis/WebhookDocsModal';
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Clock,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

export default function BirEisDashboardPage() {
  const [records, setRecords] = useState<BirTransmissionRecord[]>([]);
  const [analytics, setAnalytics] = useState<BridgeAnalytics | null>(null);
  const [config, setConfig] = useState<BridgeConfig | null>(null);
  const [loading, setLoading] = useState(true);

  // Filter & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'transmitted' | 'validated' | 'rejected'>('ALL');

  // Modals
  const [selectedRecord, setSelectedRecord] = useState<BirTransmissionRecord | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWebhookDocsOpen, setIsWebhookDocsOpen] = useState(false);

  // Automated Simulation Loop
  const [isAutoStreaming, setIsAutoStreaming] = useState(false);
  const [isSimulatingBatch, setIsSimulatingBatch] = useState(false);
  const autoStreamIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch initial data
  const fetchData = async () => {
    try {
      const res = await fetch('/api/bir-eis/invoices');
      const data = await res.json();
      setRecords(data.records || []);
      setAnalytics(data.analytics || null);
      setConfig(data.config || null);
    } catch (err) {
      console.error('Failed to load BIR EIS records', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle auto-stream simulation toggle
  useEffect(() => {
    if (isAutoStreaming) {
      autoStreamIntervalRef.current = setInterval(async () => {
        try {
          const res = await fetch('/api/bir-eis/simulate-stream', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count: 1 }),
          });
          if (res.ok) {
            fetchData();
          }
        } catch (e) {
          console.error('Stream simulation error', e);
        }
      }, 5000);
    } else {
      if (autoStreamIntervalRef.current) {
        clearInterval(autoStreamIntervalRef.current);
      }
    }

    return () => {
      if (autoStreamIntervalRef.current) {
        clearInterval(autoStreamIntervalRef.current);
      }
    };
  }, [isAutoStreaming]);

  // Trigger one-click automated burst
  const handleSimulateBurst = async () => {
    setIsSimulatingBatch(true);
    try {
      await fetch('/api/bir-eis/simulate-stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ count: 2 }),
      });
      await fetchData();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSimulatingBatch(false);
    }
  };

  // Retry failed transmission
  const handleRetry = async (recordId: string) => {
    try {
      const res = await fetch('/api/bir-eis/retry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recordId }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.record) {
          setSelectedRecord(data.record);
        }
        await fetchData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Update Config
  const handleSaveConfig = async (updated: Partial<BridgeConfig>) => {
    try {
      const res = await fetch('/api/bir-eis/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      if (res.ok) {
        const data = await res.json();
        setConfig(data.config);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Filter records
  const filteredRecords = records.filter((r) => {
    const matchesStatus =
      statusFilter === 'ALL'
        ? true
        : statusFilter === 'transmitted'
        ? r.status === 'transmitted' || r.status === 'validated'
        : r.status === statusFilter;

    const matchesSearch =
      searchQuery.trim() === '' ||
      r.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.buyerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.buyerTin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.sourceSystem.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#161616] font-inter antialiased">
      {/* Top Navigation Bar - Minimal & Clean */}
      <header className="bg-white px-6 lg:px-12 py-4 border-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#000000] flex items-center justify-center text-white font-[600] text-[18px]">
              EIS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[18px] font-[600] text-[#161616] tracking-tight">
                  BIR EIS Bridge System
                </h1>
                <span className="text-[12px] font-[500] px-2.5 py-0.5 rounded-full bg-[#F4F4F4] text-[#525252]">
                  {config?.environment === 'production' ? 'Live Production' : 'Sandbox Accreditation'}
                </span>
              </div>
              <p className="text-[12px] font-[400] text-[#6F6F6F] mt-0.5">
                Automated Electronic Invoicing Middleware • Republic Act No. 10963 (TRAIN Law)
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center flex-wrap gap-2.5">
            {/* Auto-Stream Toggle */}
            <button
              onClick={() => setIsAutoStreaming(!isAutoStreaming)}
              className={`px-3.5 py-2 rounded-xl text-[12px] font-[500] flex items-center gap-2 transition-all ${
                isAutoStreaming
                  ? 'bg-[#EAF6ED] text-[#2D7A42]'
                  : 'bg-[#F4F4F4] text-[#525252] hover:bg-[#E0E0E0]'
              }`}
            >
              {isAutoStreaming ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#2D7A42] animate-pulse" />
                  <span>Auto-Stream: Active</span>
                  <Pause className="w-3.5 h-3.5 ml-1" />
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#8D8D8D]" />
                  <span>Auto-Stream: Off</span>
                  <Play className="w-3.5 h-3.5 ml-1" />
                </>
              )}
            </button>

            {/* Webhook Specs Button */}
            <button
              onClick={() => setIsWebhookDocsOpen(true)}
              className="px-3.5 py-2 rounded-xl text-[12px] font-[500] bg-[#F4F4F4] text-[#262626] hover:bg-[#E0E0E0] flex items-center gap-1.5 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-[#161616]" />
              <span>Webhook API</span>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-xl bg-[#F4F4F4] text-[#525252] hover:text-[#161616] hover:bg-[#E0E0E0] transition-colors"
              title="Bridge Configuration"
            >
              <Sliders className="w-4 h-4" />
            </button>

            {/* Primary Action Button - Black */}
            <button
              onClick={handleSimulateBurst}
              disabled={isSimulatingBatch}
              className="px-4 py-2 rounded-xl text-[14px] font-[500] bg-[#000000] text-white hover:bg-[#161616] flex items-center gap-2 transition-colors disabled:opacity-60 shadow-sm"
            >
              {isSimulatingBatch ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Ingesting...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Simulate ERP Stream</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-8 space-y-8">
        {/* KPI Metrics Cards - Zero Borders, Flat Minimal Surfaces */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Total Transmitted */}
          <div className="bg-white rounded-2xl p-5 border-0 shadow-none">
            <span className="text-[12px] font-[500] text-[#6F6F6F] block">
              Total Invoices Transmitted
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-[24px] font-[600] text-[#161616]">
                {analytics?.totalTransmitted || 0}
              </span>
              <span className="text-[12px] font-[500] text-[#2D7A42] bg-[#EAF6ED] px-2 py-0.5 rounded-full">
                {analytics?.successRate || 100}% Success
              </span>
            </div>
            <div className="mt-2 text-[12px] font-[400] text-[#8D8D8D]">
              Gross: ₱{(analytics?.totalGrossAmount || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          {/* Card 2: 12% Output VAT */}
          <div className="bg-white rounded-2xl p-5 border-0 shadow-none">
            <span className="text-[12px] font-[500] text-[#6F6F6F] block">
              Total Output VAT (12%)
            </span>
            <div className="mt-2">
              <span className="text-[24px] font-[600] text-[#161616]">
                ₱{(analytics?.totalVatAmount || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="mt-2 text-[12px] font-[400] text-[#8D8D8D]">
              Vatable Base: ₱{(analytics?.taxBreakdown.vatable || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>

          {/* Card 3: Ingestion Pipeline SLA */}
          <div className="bg-white rounded-2xl p-5 border-0 shadow-none">
            <span className="text-[12px] font-[500] text-[#6F6F6F] block">
              Average Transmission Latency
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-[24px] font-[600] text-[#161616]">
                {analytics?.avgLatencyMs || 240} ms
              </span>
              <span className="text-[12px] font-[500] text-[#1769BD] bg-[#EBF3FB] px-2 py-0.5 rounded-full">
                Sub-second SLA
              </span>
            </div>
            <div className="mt-2 text-[12px] font-[400] text-[#8D8D8D]">
              Real-time synchronous BIR handshakes
            </div>
          </div>

          {/* Card 4: Webhook Active Status */}
          <div className="bg-white rounded-2xl p-5 border-0 shadow-none">
            <span className="text-[12px] font-[500] text-[#6F6F6F] block">
              Automated Ingestion Source
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#48C488]" />
              <span className="text-[18px] font-[600] text-[#161616]">
                ERP Webhooks Live
              </span>
            </div>
            <div className="mt-2 text-[12px] font-[400] text-[#8D8D8D] truncate">
              Endpoint: <code className="font-mono text-[#525252]">/api/bir-eis/webhook</code>
            </div>
          </div>
        </section>

        {/* Minimal Charts Section */}
        {analytics && (
          <section>
            <MinimalCharts analytics={analytics} />
          </section>
        )}

        {/* Electronic Invoices Transmission Table - Zero Border Lines */}
        <section className="bg-white rounded-2xl p-6 border-0 shadow-none">
          {/* Table Header Controls */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-[18px] font-[600] text-[#161616] tracking-tight">
                Automated Invoices Stream
              </h2>
              <p className="text-[12px] font-[400] text-[#6F6F6F] mt-0.5">
                Real-time electronic receipts & sales invoices processed with zero manual inputting
              </p>
            </div>

            <div className="flex items-center flex-wrap gap-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#8D8D8D] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search invoice, buyer, TIN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#F4F4F4] text-[#161616] text-[12px] pl-9 pr-3.5 py-2 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#161616] w-60"
                />
              </div>

              {/* Status Tabs */}
              <div className="bg-[#F4F4F4] p-1 rounded-xl flex items-center gap-1 text-[12px] font-[500]">
                <button
                  onClick={() => setStatusFilter('ALL')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    statusFilter === 'ALL'
                      ? 'bg-white text-[#161616] shadow-sm'
                      : 'text-[#6F6F6F] hover:text-[#161616]'
                  }`}
                >
                  All ({records.length})
                </button>
                <button
                  onClick={() => setStatusFilter('transmitted')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    statusFilter === 'transmitted'
                      ? 'bg-white text-[#161616] shadow-sm'
                      : 'text-[#6F6F6F] hover:text-[#161616]'
                  }`}
                >
                  Transmitted
                </button>
                <button
                  onClick={() => setStatusFilter('rejected')}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    statusFilter === 'rejected'
                      ? 'bg-white text-[#161616] shadow-sm'
                      : 'text-[#6F6F6F] hover:text-[#161616]'
                  }`}
                >
                  Rejected
                </button>
              </div>
            </div>
          </div>

          {/* Table Container - Strictly NO BORDER LINES */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border-0">
              <thead>
                <tr className="text-[12px] font-[600] text-[#8D8D8D] bg-[#F4F4F4]/60 rounded-xl">
                  <th className="py-3 px-4 rounded-l-xl font-[600]">INVOICE / DOC</th>
                  <th className="py-3 px-4 font-[600]">BUYER & TIN</th>
                  <th className="py-3 px-4 font-[600]">SOURCE SYSTEM</th>
                  <th className="py-3 px-4 text-right font-[600]">GROSS AMOUNT</th>
                  <th className="py-3 px-4 text-right font-[600]">12% VAT</th>
                  <th className="py-3 px-4 font-[600]">STATUS</th>
                  <th className="py-3 px-4 font-[600]">BIR ACKNOWLEDGEMENT</th>
                  <th className="py-3 px-4 text-right rounded-r-xl font-[600]">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y-0">
                {filteredRecords.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-[14px] text-[#8D8D8D] font-[400]">
                      No matching automated records found.
                    </td>
                  </tr>
                ) : (
                  filteredRecords.map((record) => {
                    const isOk = record.status === 'transmitted' || record.status === 'validated';

                    return (
                      <tr
                        key={record.id}
                        onClick={() => setSelectedRecord(record)}
                        className="hover:bg-[#F4F4F4] transition-colors cursor-pointer group rounded-xl"
                      >
                        {/* Invoice & Type */}
                        <td className="py-3.5 px-4 rounded-l-xl">
                          <div className="font-[600] text-[14px] text-[#161616] flex items-center gap-1.5">
                            <span>{record.invoiceNumber}</span>
                            <span className="text-[12px] font-[500] px-1.5 py-0.5 rounded bg-[#F4F4F4] text-[#525252]">
                              {record.documentType}
                            </span>
                          </div>
                          <div className="text-[12px] font-[400] text-[#8D8D8D] mt-0.5">
                            {new Date(record.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                          </div>
                        </td>

                        {/* Buyer & TIN */}
                        <td className="py-3.5 px-4">
                          <div className="text-[14px] font-[500] text-[#262626] truncate max-w-[180px]">
                            {record.buyerName}
                          </div>
                          <div className="text-[12px] font-[400] text-[#8D8D8D]">
                            {record.buyerTin}
                          </div>
                        </td>

                        {/* Source System */}
                        <td className="py-3.5 px-4">
                          <span className="text-[12px] font-[500] text-[#525252] bg-[#F4F4F4] px-2.5 py-1 rounded-md">
                            {record.sourceSystem}
                          </span>
                        </td>

                        {/* Gross Amount */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="text-[14px] font-[600] text-[#161616]">
                            ₱{record.grossAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </td>

                        {/* 12% VAT */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="text-[14px] font-[500] text-[#525252]">
                            ₱{record.vatAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </td>

                        {/* Status Badge */}
                        <td className="py-3.5 px-4">
                          <span
                            className={`text-[12px] font-[500] px-2.5 py-1 rounded-full inline-flex items-center gap-1 ${
                              isOk
                                ? 'bg-[#EAF6ED] text-[#2D7A42]'
                                : 'bg-[#FDEDEC] text-[#C0392B]'
                            }`}
                          >
                            {isOk ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Transmitted</span>
                              </>
                            ) : (
                              <>
                                <AlertCircle className="w-3.5 h-3.5" />
                                <span>Rejected</span>
                              </>
                            )}
                          </span>
                        </td>

                        {/* BIR Ack ID */}
                        <td className="py-3.5 px-4 font-mono text-[12px] text-[#525252]">
                          {record.birAckNumber ? (
                            <span className="truncate block max-w-[170px]" title={record.birAckNumber}>
                              {record.birAckNumber}
                            </span>
                          ) : (
                            <span className="text-[#C0392B]">Validation Failed</span>
                          )}
                        </td>

                        {/* Action Column */}
                        <td className="py-3.5 px-4 text-right rounded-r-xl">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRecord(record);
                            }}
                            className="text-[12px] font-[500] text-[#525252] group-hover:text-[#161616] p-1 rounded-lg hover:bg-[#E0E0E0] transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Modals & Drawers */}
      <InvoiceDetailModal
        record={selectedRecord}
        onClose={() => setSelectedRecord(null)}
        onRetry={handleRetry}
      />

      {config && (
        <SettingsModal
          config={config}
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
          onSave={handleSaveConfig}
        />
      )}

      <WebhookDocsModal
        isOpen={isWebhookDocsOpen}
        onClose={() => setIsWebhookDocsOpen(false)}
        onSendTestPing={handleSimulateBurst}
      />
    </div>
  );
}
