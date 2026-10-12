'use client';

import React from 'react';
import { PALETTE } from '@/lib/bir-eis/tokens';
import { BridgeAnalytics } from '@/lib/bir-eis/types';

interface MinimalChartsProps {
  analytics: BridgeAnalytics;
}

export const MinimalCharts: React.FC<MinimalChartsProps> = ({ analytics }) => {
  const trends = analytics.hourlyTrends || [];
  const maxAmount = Math.max(...trends.map((t) => t.amount), 1);
  const maxCount = Math.max(...trends.map((t) => t.count), 1);

  const tax = analytics.taxBreakdown;
  const totalTaxBasis = (tax.vatable + tax.zeroRated + tax.exempt) || 1;
  const vatablePct = Math.round((tax.vatable / totalTaxBasis) * 100);
  const zeroRatedPct = Math.round((tax.zeroRated / totalTaxBasis) * 100);
  const exemptPct = Math.round((tax.exempt / totalTaxBasis) * 100);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-inter">
      {/* Chart 1: Automated Hourly Ingestion Volume (2 Columns) */}
      <div className="lg:col-span-2 bg-white rounded-2xl p-6 border-0 shadow-none">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[16px] font-[600] text-[#161616] tracking-tight">
              Automated Transmission Activity
            </h2>
            <p className="text-[12px] font-[400] text-[#6F6F6F] mt-0.5">
              Hourly real-time ERP invoice transmission & tax volume
            </p>
          </div>
          <div className="flex items-center gap-4 text-[12px] font-[500]">
            <div className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: PALETTE.charts.row2[0] }} /* #1769BD */
              />
              <span className="text-[#525252]">Invoice Amount</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: PALETTE.charts.row2[5] }} /* #48C488 */
              />
              <span className="text-[#525252]">Batch Count</span>
            </div>
          </div>
        </div>

        {/* Minimal Bar & Area Chart */}
        <div className="h-52 flex items-end justify-between gap-3 pt-6 pb-2 px-2">
          {trends.map((point, idx) => {
            const barHeightPct = Math.max(12, Math.round((point.amount / maxAmount) * 100));
            const countHeightPct = Math.max(10, Math.round((point.count / maxCount) * 100));

            return (
              <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                {/* Hover Tooltip */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-12 z-20 bg-[#161616] text-white px-2.5 py-1.5 rounded-lg text-[12px] font-[500] whitespace-nowrap pointer-events-none shadow-lg">
                  <div>₱{point.amount.toLocaleString()}</div>
                  <div className="text-[12px] text-[#A8A8A8]">{point.count} invoices</div>
                </div>

                {/* Bars */}
                <div className="w-full flex items-end justify-center gap-1 h-full pb-2">
                  <div
                    className="w-full max-w-[22px] rounded-t-md transition-all duration-300"
                    style={{
                      height: `${barHeightPct}%`,
                      backgroundColor: PALETTE.charts.row2[0], // #1769BD
                    }}
                  />
                  <div
                    className="w-full max-w-[22px] rounded-t-md transition-all duration-300"
                    style={{
                      height: `${countHeightPct}%`,
                      backgroundColor: PALETTE.charts.row2[5], // #48C488
                    }}
                  />
                </div>
                <span className="text-[12px] font-[400] text-[#8D8D8D] mt-2">
                  {point.hour}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chart 2: Tax Classification Breakdown (1 Column) */}
      <div className="bg-white rounded-2xl p-6 border-0 shadow-none flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[16px] font-[600] text-[#161616] tracking-tight">
              Tax Classification
            </h2>
            <span className="text-[12px] font-[500] text-[#6F6F6F] bg-[#F4F4F4] px-2.5 py-1 rounded-full">
              TRAIN Law Compliant
            </span>
          </div>
          <p className="text-[12px] font-[400] text-[#6F6F6F] mb-6">
            Automatic segmentation of gross sales by BIR category
          </p>

          {/* Segmented Stack Bar */}
          <div className="w-full h-3.5 rounded-full overflow-hidden flex bg-[#F4F4F4] mb-6">
            <div
              style={{
                width: `${vatablePct}%`,
                backgroundColor: PALETTE.charts.row1[0], // #3344B4 Deep Blue
              }}
              title={`Vatable: ${vatablePct}%`}
            />
            <div
              style={{
                width: `${zeroRatedPct}%`,
                backgroundColor: PALETTE.charts.row2[3], // #2EB9DC Sky Cyan
              }}
              title={`Zero-Rated: ${zeroRatedPct}%`}
            />
            <div
              style={{
                width: `${exemptPct}%`,
                backgroundColor: PALETTE.charts.row1[7], // #FFA504 Amber
              }}
              title={`Exempt: ${exemptPct}%`}
            />
          </div>

          {/* Breakdown Items */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between text-[14px]">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: PALETTE.charts.row1[0] }}
                />
                <span className="font-[500] text-[#262626]">Vatable Sales (12%)</span>
              </div>
              <div className="text-right">
                <div className="font-[600] text-[#161616]">₱{tax.vatable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div className="text-[12px] text-[#8D8D8D] font-[400]">{vatablePct}%</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[14px]">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: PALETTE.charts.row2[3] }}
                />
                <span className="font-[500] text-[#262626]">Zero-Rated (PEZA / Exports)</span>
              </div>
              <div className="text-right">
                <div className="font-[600] text-[#161616]">₱{tax.zeroRated.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div className="text-[12px] text-[#8D8D8D] font-[400]">{zeroRatedPct}%</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[14px]">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: PALETTE.charts.row1[7] }}
                />
                <span className="font-[500] text-[#262626]">VAT Exempt Sales</span>
              </div>
              <div className="text-right">
                <div className="font-[600] text-[#161616]">₱{tax.exempt.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div className="text-[12px] text-[#8D8D8D] font-[400]">{exemptPct}%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 bg-[#F4F4F4] rounded-xl p-3 text-[12px] text-[#525252]">
          <div className="flex items-center justify-between font-[500]">
            <span>Total 12% Output VAT:</span>
            <span className="font-[600] text-[#161616] text-[14px]">
              ₱{tax.vat.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
