import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AgentsPage } from './pages/AgentsPage';
import { WorkflowsPage } from './pages/WorkflowsPage';
import { TradingPage } from './pages/TradingPage';
import { CustomSolutionsPage } from './pages/CustomSolutionsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { SecurityPage } from './pages/SecurityPage';
import { PricingPage } from './pages/PricingPage';
import { DashboardPage } from './pages/DashboardPage';
import { BookDemoModal } from './components/demo/BookDemoModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-brand-100 selection:text-brand-900">
        <Navbar onOpenDemo={() => setDemoModalOpen(true)} />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/agents" element={<AgentsPage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/workflows" element={<WorkflowsPage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/trading" element={<TradingPage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/custom-solutions" element={<CustomSolutionsPage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/case-studies" element={<CaseStudiesPage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/security" element={<SecurityPage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/pricing" element={<PricingPage onOpenDemo={() => setDemoModalOpen(true)} />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>

        <Footer />

        <BookDemoModal 
          isOpen={demoModalOpen} 
          onClose={() => setDemoModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
