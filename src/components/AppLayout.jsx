import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import PageHeader from './PageHeader';
import Footer from './Footer';
import WorkNextPanel from './WorkNextPanel';
import { useTheme } from '../context/ThemeContext';

export default function AppLayout({ children, title, breadcrumb }) {
  const { workNextOpen } = useTheme();

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F2F3F5] text-zinc-900 font-sans">
      {/* Col 1: Collapsible Stacked Left Rail Sidebar */}
      <Sidebar />

      {/* Col 2: Main Layout Stream */}
      <div className="flex-1 flex flex-col min-w-0 h-full relative overflow-hidden">
        {/* Fixed Header Row 1: Black Topbar */}
        <Topbar />

        {/* Fixed Header Row 2: White PageHeader Actions */}
        <PageHeader title={title} breadcrumb={breadcrumb} />

        {/* Dynamic Page Scrollable Canvas */}
        <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#F2F3F5]">
          <div className="p-6 max-w-7xl mx-auto w-full min-h-[calc(100vh-12rem)] pb-24">
            {children}
          </div>
          
          {/* Global Footer */}
          <Footer />
        </div>
      </div>

      {/* Overlay Slide-over WORKNEXT AI Assistant Panel */}
      <WorkNextPanel />
    </div>
  );
}
