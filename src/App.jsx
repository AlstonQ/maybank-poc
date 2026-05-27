import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Login from './pages/Login';
import AppLayout from './components/AppLayout';
import Summary from './pages/Summary';
import CustomerHomepage from './pages/CustomerHomepage';
import OpportunityHomepage from './pages/OpportunityHomepage';
import CaseHomepage from './pages/CaseHomepage';
import DashboardsHomepage from './pages/DashboardsHomepage';
import ReportsHomepage from './pages/ReportsHomepage';
import AuditLogViewer from './pages/AuditLogViewer';

function AppContent() {
  const { appMode, setAppMode, activeModule, setActiveModule } = useTheme();
  const navigate = useNavigate();

  const handleLoginSuccess = (mode) => {
    setAppMode(mode);
    setActiveModule('Summary');
    navigate(`/app/${mode}`);
  };

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'Summary':
        return <Summary />;
      case 'My Portfolio':
      case 'Accounts':
        return <CustomerHomepage />;
      case 'My Pipeline':
      case 'Deals':
        return <OpportunityHomepage />;
      case 'Service Requests':
        return <CaseHomepage />;
      case 'Dashboards':
        return <DashboardsHomepage />;
      case 'Reports':
        return <ReportsHomepage />;
      case 'Audit Logs':
        return <AuditLogViewer />;
      default:
        // Render Summary for other modules as fallback POC details
        return <Summary />;
    }
  };

  const getPageTitleAndBreadcrumb = () => {
    let title = activeModule;
    let breadcrumb = `Home > ${activeModule}`;

    if (activeModule === 'My Portfolio' || activeModule === 'Accounts') {
      title = appMode === 'gcfs' ? 'My Portfolio (Clients)' : 'Accounts (Corporate Profiles)';
      breadcrumb = `Home > Customers > List`;
    } else if (activeModule === 'My Pipeline' || activeModule === 'Deals') {
      title = appMode === 'gcfs' ? 'My Pipeline (Opportunities)' : 'Deals Pipeline (Structures)';
      breadcrumb = `Home > Opportunities > Pipeline`;
    } else if (activeModule === 'Service Requests') {
      title = 'Service Requests (CARE Tickets)';
      breadcrumb = `Home > Support > CARE Ticketing`;
    } else if (activeModule === 'Dashboards') {
      title = 'Dashboards';
      breadcrumb = `Home > Analytics > Dashboards`;
    } else if (activeModule === 'Reports') {
      title = 'Reports & Analytics';
      breadcrumb = `Home > Analytics > Reports`;
    } else if (activeModule === 'Audit Logs') {
      title = 'Security & Audit Logs';
      breadcrumb = `Home > Governance > Audit Logs`;
    }

    return { title, breadcrumb };
  };

  const { title, breadcrumb } = getPageTitleAndBreadcrumb();

  return (
    <Routes>
      <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
      
      <Route 
        path="/app/gcfs/*" 
        element={
          appMode === 'gcfs' ? (
            <AppLayout title={title} breadcrumb={breadcrumb}>
              {renderActiveModule()}
            </AppLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />

      <Route 
        path="/app/ggb/*" 
        element={
          appMode === 'ggb' ? (
            <AppLayout title={title} breadcrumb={breadcrumb}>
              {renderActiveModule()}
            </AppLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        } 
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
