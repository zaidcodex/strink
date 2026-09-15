import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { InteractiveShowcase } from '../components/home/InteractiveShowcase';
import { AIAgentsSection } from '../components/products/AIAgentsSection';
import { AutomationPipelinesSection } from '../components/products/AutomationPipelinesSection';
import { TradingBotsSection } from '../components/products/TradingBotsSection';
import { CustomSolutionsSection } from '../components/products/CustomSolutionsSection';
import { RoiCalculator } from '../components/tools/RoiCalculator';
import { LiveCodeSandbox } from '../components/tools/LiveCodeSandbox';
import { AgentLiveTester } from '../components/tools/AgentLiveTester';
import { SecurityCompliance } from '../components/home/SecurityCompliance';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { PricingSection } from '../components/pricing/PricingSection';

interface HomePageProps {
  onOpenDemo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDemo }) => {
  return (
    <main>
      <HeroSection onOpenDemo={onOpenDemo} />
      <InteractiveShowcase />
      <AIAgentsSection onOpenDemo={onOpenDemo} />
      <AutomationPipelinesSection onOpenDemo={onOpenDemo} />
      <TradingBotsSection onOpenDemo={onOpenDemo} />
      <CustomSolutionsSection onOpenDemo={onOpenDemo} />
      <RoiCalculator onOpenDemo={onOpenDemo} />
      <AgentLiveTester />
      <LiveCodeSandbox />
      <SecurityCompliance onOpenDemo={onOpenDemo} />
      <CaseStudiesSection onOpenDemo={onOpenDemo} />
      <PricingSection onOpenDemo={onOpenDemo} />
    </main>
  );
};
