import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [appMode, setAppMode] = useState(() => {
    const saved = localStorage.getItem('maybank_crm_app_mode');
    return saved || 'gcfs'; // 'gcfs' or 'ggb'
  });

  const [shariahCompliant, setShariahCompliant] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cardLayout, setCardLayout] = useState(true); // true = Card, false = List
  const [workNextOpen, setWorkNextOpen] = useState(false);
  const [activeModule, setActiveModule] = useState('Summary');

  // Security Context
  const [currentUserRole, setCurrentUserRole] = useState('Executive'); // 'Executive', 'Branch Manager', 'Agent / RM'
  const [isDataMaskingEnabled, setIsDataMaskingEnabled] = useState(false);

  // Track currently active details
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [selectedOpportunityId, setSelectedOpportunityId] = useState(null);
  const [selectedCaseId, setSelectedCaseId] = useState(null);

  useEffect(() => {
    localStorage.setItem('maybank_crm_app_mode', appMode);
  }, [appMode]);

  return (
    <ThemeContext.Provider value={{
      appMode,
      setAppMode,
      shariahCompliant,
      setShariahCompliant,
      searchQuery,
      setSearchQuery,
      cardLayout,
      setCardLayout,
      workNextOpen,
      setWorkNextOpen,
      activeModule,
      setActiveModule,
      selectedCustomerId,
      setSelectedCustomerId,
      selectedOpportunityId,
      setSelectedOpportunityId,
      selectedCaseId,
      setSelectedCaseId,
      currentUserRole,
      setCurrentUserRole,
      isDataMaskingEnabled,
      setIsDataMaskingEnabled
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
