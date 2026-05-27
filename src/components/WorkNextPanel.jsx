import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { mockCustomersGCFS, mockCustomersGGB } from '../data/mockData';
import { X, Send, Sparkles, User, Lightbulb, Mail, ArrowRight } from 'lucide-react';

export default function WorkNextPanel() {
  const { workNextOpen, setWorkNextOpen, appMode, selectedCustomerId } = useTheme();
  const [chatHistory, setChatHistory] = useState([
    { role: 'assistant', text: "Hello! I am WORKNEXT AI, your intelligent relationship copilot. How can I assist you with your portfolio today?" }
  ]);
  const [userInput, setUserInput] = useState('');

  if (!workNextOpen) return null;

  // Find active customer
  const customers = appMode === 'gcfs' ? mockCustomersGCFS : mockCustomersGGB;
  const currentCustomer = customers.find(c => c.id === selectedCustomerId) || customers[0];

  const handleQuickAction = (actionType) => {
    let responseText = '';
    if (actionType === 'summarise') {
      if (appMode === 'gcfs') {
        responseText = `**Client Summary for ${currentCustomer.name} (${currentCustomer.segment})**\n\n` +
          `* **Holdings**: Total AUM is **MYR ${(currentCustomer.aum / 1000000).toFixed(2)}M**. Accounts are split across conventional deposits, Islamic Mudarabah, and wealth funds.\n` +
          `* **Churn Risk**: **${currentCustomer.churnRisk}% Churn Risk** (High Alert). Triggered by an Avaloq system outflow and competitor deposit checks registered in CTOS.\n` +
          `* **Key Recommendation**: Set up an immediate review meeting to present the new **Shariah Private Wealth Fund (i-Offer)** or high-yield i-deposits to retain this high-value relationship.`;
      } else {
        responseText = `**Corporate Account Summary for ${currentCustomer.name}**\n\n` +
          `* **Financial Structure**: AUM is **MYR ${(currentCustomer.aum / 1000000).toFixed(2)}M**. Parent entity is **${currentCustomer.groupProfile.parent}**.\n` +
          `* **Exposure Limits**: Total facility limits are **MYR ${(currentCustomer.relationshipExposure.totalLimits / 1000000).toFixed(2)}M** with **${((currentCustomer.relationshipExposure.utilized / currentCustomer.relationshipExposure.totalLimits) * 100).toFixed(0)}% utilization**.\n` +
          `* **Deal Pipeline**: Currently structuring a **MYR 850M Green Hydrogen Plant Financing Syndicated Takaful** (high ESG priority).`;
      }
    } else if (actionType === 'nba') {
      if (appMode === 'gcfs') {
        responseText = `**Next Best Actions for ${currentCustomer.name}:**\n\n` +
          `1. **Propose Maybank Private Shariah Wealth Fund (i-Offer)**: Fits client's interest in high-yield Shariah assets, offering an estimated 4.85% p.a.\n` +
          `2. **Schedule Urgent F2F Meeting**: Client has not logged into Maybank2u (M2U) for 45 days. Coordinate a face-to-face portfolio rebalancing session.\n` +
          `3. **Etiqa Takaful Top-up**: Leverage the spouse's joint wealth account details to structure a comprehensive family inheritance plan.`;
      } else {
        responseText = `**Next Best Actions for ${currentCustomer.name}:**\n\n` +
          `1. **Finalize Green Hydrogen ESG Term Sheet**: Arrange a call between Petronas Sustainability Unit and Maybank Syndications Desk to finalize the ESG KPIs.\n` +
          `2. **Optimize Treasury Placements**: Propose a 30-day Islamic Treasury Placement maturity reinvestment scheme.`;
      }
    } else if (actionType === 'outreach') {
      responseText = `**Draft Outreach Email Template:**\n\n` +
        `*Subject: Bespoke Portfolio Advisory Update - Maybank Wealth*\n\n` +
        `Dear ${appMode === 'gcfs' ? currentCustomer.name.split(' bin')[0] : 'Corporate Treasury Team'},\n\n` +
        `I hope this email finds you well. \n\n` +
        `As part of our commitment to supporting your financial goals at Maybank, I have been reviewing your portfolio allocations alongside some newly launched Shariah-compliant high-yield opportunities that match your specific risk profile.\n\n` +
        `I would appreciate a brief 15-minute call this Thursday or Friday to present our personalized recommendations and ensure your AUM strategy remains perfectly optimized.\n\n` +
        `Warm regards,\n\n` +
        `James May\n` +
        `Relationship Director, Maybank`;
    }

    setChatHistory(prev => [
      ...prev,
      { role: 'user', text: `Execute Action: ${actionType.toUpperCase()}` },
      { role: 'assistant', text: responseText }
    ]);
  };

  const handleSend = () => {
    if (!userInput.trim()) return;
    const userQuery = userInput;
    setUserInput('');
    setChatHistory(prev => [...prev, { role: 'user', text: userQuery }]);

    // Generate mock responses based on standard banking queries
    setTimeout(() => {
      let mockReply = '';
      const query = userQuery.toLowerCase();
      if (query.includes('hello') || query.includes('hi')) {
        mockReply = `Hi there! I am here to assist you with ${currentCustomer.name}'s relationship details, holdings summaries, credit exposure, and next best actions. What would you like to examine?`;
      } else if (query.includes('churn') || query.includes('risk')) {
        mockReply = `${currentCustomer.name} has a churn risk metric of **${currentCustomer.churnRisk}%**. The primary driver is a recent asset outflow. I suggest initiating the **Retention Steps** immediately.`;
      } else if (query.includes('shariah') || query.includes('islamic')) {
        mockReply = `This customer has Shariah-compliant assets. We recommend pitching the **Maybank i-Mudarabah Account** or checking their **Zakat/Wasee** planning options.`;
      } else {
        mockReply = `I have logged your query regarding "${userQuery}". Based on Maybank's internal records, ${currentCustomer.name} represents a key relationship in the ${currentCustomer.segment} segment. Please let me know if you would like me to draft an email outreach or check their CTOS/CCRIS credit rating.`;
      }

      setChatHistory(prev => [...prev, { role: 'assistant', text: mockReply }]);
    }, 600);
  };

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-[#0E0E10] text-white shadow-2xl z-50 flex flex-col border-l border-zinc-800 transition-all-300">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-gradient-to-r from-[#E6308A]/10 to-[#9E005D]/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#E6308A]" />
          <span className="font-semibold text-sm tracking-wider uppercase text-[#E6308A]">WORKNEXT AI</span>
        </div>
        <button 
          onClick={() => setWorkNextOpen(false)}
          className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick context summary */}
      <div className="p-3 bg-zinc-900/50 border-b border-zinc-800 text-xs text-zinc-300">
        <div className="font-semibold text-[#C6E84F] truncate">{currentCustomer.name}</div>
        <div className="flex justify-between text-zinc-500 mt-1">
          <span>ID: {currentCustomer.id}</span>
          <span>AUM: MYR {(currentCustomer.aum).toLocaleString()}</span>
        </div>
      </div>

      {/* Pre-set AI Actions */}
      <div className="p-3 bg-zinc-900 border-b border-zinc-800 grid grid-cols-3 gap-2">
        <button
          onClick={() => handleQuickAction('summarise')}
          className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-850 hover:bg-[#E6308A]/20 border border-zinc-800 hover:border-[#E6308A] text-center text-[10px] text-zinc-300 hover:text-white transition-all duration-200"
        >
          <User className="w-4 h-4 mb-1 text-[#3DBFD4]" />
          Summarise
        </button>
        <button
          onClick={() => handleQuickAction('nba')}
          className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-850 hover:bg-[#E6308A]/20 border border-zinc-800 hover:border-[#E6308A] text-center text-[10px] text-zinc-300 hover:text-white transition-all duration-200"
        >
          <Lightbulb className="w-4 h-4 mb-1 text-[#F5A623]" />
          Next Action
        </button>
        <button
          onClick={() => handleQuickAction('outreach')}
          className="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-850 hover:bg-[#E6308A]/20 border border-zinc-800 hover:border-[#E6308A] text-center text-[10px] text-zinc-300 hover:text-white transition-all duration-200"
        >
          <Mail className="w-4 h-4 mb-1 text-[#E6308A]" />
          Outreach
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {chatHistory.map((chat, idx) => (
          <div 
            key={idx} 
            className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed ${
                chat.role === 'user' 
                  ? 'bg-[#E6308A] text-white rounded-tr-none' 
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-tl-none'
              }`}
            >
              {/* Render simple markdown blocks */}
              {chat.text.split('\n\n').map((para, pIdx) => {
                if (para.startsWith('* ')) {
                  return (
                    <ul key={pIdx} className="list-disc pl-4 space-y-1 mb-2">
                      {para.split('\n').map((li, liIdx) => (
                        <li key={liIdx}>{li.replace('* ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={pIdx} className="mb-2 last:mb-0">
                    {para.split('**').map((part, ptIdx) => 
                      ptIdx % 2 === 1 ? <strong key={ptIdx} className="text-[#C6E84F]">{part}</strong> : part
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-zinc-800 bg-zinc-900/80 flex items-center gap-2">
        <input 
          type="text" 
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask WORKNEXT AI..."
          className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E6308A]"
        />
        <button 
          onClick={handleSend}
          className="p-2 bg-[#E6308A] hover:bg-[#C92276] text-white rounded-lg transition-colors flex items-center justify-center"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
