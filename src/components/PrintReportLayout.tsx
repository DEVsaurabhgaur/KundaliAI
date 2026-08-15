import React from 'react';

export interface PrintReportProps {
  name: string;
  birthDate: string;
  birthPlace: string;
  summaryText: string;
}

export const PrintReportLayout: React.FC<PrintReportProps> = ({
  name,
  birthDate,
  birthPlace,
  summaryText
}) => {
  return (
    <div className="print:p-8 print:bg-white print:text-black hidden print:block">
      <div className="border-b-2 border-amber-600 pb-4 mb-6">
        <h1 className="text-2xl font-bold font-serif">KundaliAI Vedic Life Horoscope</h1>
        <p className="text-sm text-gray-600">Generated on {new Date().toLocaleDateString('en-IN')}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Date of Birth:</strong> {birthDate}</div>
        <div><strong>Place of Birth:</strong> {birthPlace}</div>
      </div>
      <div className="prose prose-sm max-w-none text-justify">
        <h3>Comprehensive Astrological Reading</h3>
        <p>{summaryText}</p>
      </div>
    </div>
  );
};
