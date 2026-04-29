/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Terminal, 
  Download, 
  Cpu, 
  Menu,
  X,
  BookOpen,
  Shield,
  Layers,
  FileText,
  Activity,
  ArrowRight,
  MonitorPlay,
  Globe2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="bg-brand-red text-white p-2 rounded-sm transition-transform group-hover:scale-105">
              <Shield size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black tracking-tight text-slate-900 uppercase font-display">
                IDEA1
              </span>
              <span className="text-[10px] font-bold tracking-[0.1em] text-slate-500 uppercase">
                by A-1 Fence
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Products', 'Release Notes', 'API & SDKs', 'Downloads', 'Support'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold text-slate-600 hover:text-brand-red transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-4 py-2">
              Sign In
            </button>
            <button className="bg-slate-900 text-white px-5 py-2.5 rounded-sm text-sm font-bold hover:bg-brand-red transition-all shadow-md hover:shadow-lg">
              Partner Portal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-500 p-2 hover:bg-slate-100 rounded-md transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {['Products', 'Release Notes', 'API & SDKs', 'Downloads', 'Support'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-sm font-semibold text-slate-700 hover:text-brand-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button className="text-sm font-semibold text-slate-600 text-left">Sign In</button>
                <button className="bg-slate-900 text-white w-full px-4 py-3 rounded-sm text-sm font-bold text-center">
                  Partner Portal
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const CategoryCard = ({ title, icon: Icon, description, items }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white border border-slate-200 rounded-lg p-6 card-hover group"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-slate-50 text-slate-600 rounded-md group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
          <p className="text-sm text-slate-500 line-clamp-2">{description}</p>
        </div>
      </div>
      <ul className="space-y-2.5 mt-6 border-t border-slate-50 pt-4">
        {items.map((item: string, idx: number) => (
          <li key={idx}>
            <a href="#" className="text-sm font-medium text-brand-blue hover:text-brand-red transition-colors flex items-center gap-2 group/link">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/30 group-hover/link:bg-brand-red" />
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-4 border-t border-slate-50">
        <a href="#" className="text-sm font-bold text-slate-900 hover:text-brand-red flex items-center gap-1 group/btn">
          View all documentation 
          <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-red/10 selection:text-brand-red relative text-slate-900">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden dot-pattern border-b border-slate-200 bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight mb-6"
            >
              Welcome to the <br /> 
              <span className="text-brand-red">IDEA1 TechDocs</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto"
            >
              Find manuals, engineering blueprints, API documentation, and systems intelligence for all IDEA1 security solutions by A-1 Fence.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative max-w-2xl mx-auto group"
            >
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400 group-focus-within:text-brand-red transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search resources, manuals, products..." 
                className="block w-full pl-14 pr-4 py-5 bg-white border-2 border-slate-200 rounded-xl text-lg shadow-sm focus:outline-none focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 transition-all font-medium placeholder:text-slate-400"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                 <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-brand-red transition-colors">
                   Search
                 </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-wrap justify-center gap-3 text-sm"
            >
              <span className="text-slate-500 font-medium">Popular searches:</span>
              {['Liminal-F', 'Boom Barriers', 'API Integration'].map((term) => (
                <a key={term} href="#" className="font-semibold text-brand-blue hover:text-brand-red hover:underline transition-colors">
                  {term}
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <Layers className="text-brand-red size-6" />
            <h2 className="text-2xl font-bold text-slate-900 font-display">Product Documentation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard 
              title="Perimeter Systems"
              description="Hardware documents for intelligent perimeter security, crash barriers, and electric fences."
              icon={Activity}
              items={[
                'Anti-Vehicle Rope Barrier',
                'Delay Rated Fence Docs',
                'Electric Fence Commissioning'
              ]}
            />
            <CategoryCard 
              title="Software & Cloud Services"
              description="Integrate IDEA1 data streams into your Command Center or multi-site aggregation system."
              icon={Globe2}
              items={[
                'Command Center Dashboard',
                'Cloud Uplink Guide',
                'Third-Party VMS Integrations'
              ]}
            />
            <CategoryCard 
              title="Developer & API"
              description="RESTful endpoints and event streaming protocols for reading sensor telemetry."
              icon={Terminal}
              items={[
                'Sensor Telemetry API',
                'Authentication Specs',
                'Webhook Configuration'
              ]}
            />
            <CategoryCard 
              title="Hardware Nodes"
              description="CAD files, physical installation guides, and power requirements for perimeter nodes."
              icon={Cpu}
              items={[
                'Grade-5 Reinforcement Specs',
                'Wiring & Power Distributions',
                'Node Maintenance'
              ]}
            />
            <CategoryCard 
              title="Cloud Services"
              description="Manage cloud connectivity, multi-site aggregation, and remote system health."
              icon={Globe2}
              items={[
                'Cloud Uplink Guide',
                'Data Retention Policies',
                'System Backup & Restore'
              ]}
            />
            <CategoryCard 
              title="Release Notes"
              description="Stay up-to-date with the latest firmware, software updates, and security patches."
              icon={FileText}
              items={[
                'Command Center v3.1',
                'PIDS Firmware v4.2',
                'Legacy System End-of-Life'
              ]}
            />
          </div>
        </section>

        {/* Knowledge Base / Additional Resources */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-8">
                  <BookOpen className="text-brand-red size-6" />
                  <h2 className="text-2xl font-bold text-slate-900 font-display">Featured Articles</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: "Best Practices for Integrating Thermal Cameras with idea1 PIDS", tag: "Guide" },
                    { title: "Understanding encryption standards in the Telemetry API", tag: "Security" },
                    { title: "Resolving connectivity issues over long-distance RS-485", tag: "Troubleshooting" },
                    { title: "Upgrading from Legacy Node Controller v2.x to v4.0", tag: "Upgrade Path" }
                  ].map((article, i) => (
                    <a key={i} href="#" className="block p-5 bg-slate-50 border border-slate-100 hover:border-brand-red/30 rounded-lg group transition-colors">
                      <div className="flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-3">
                        <div>
                          <h4 className="text-base font-bold text-slate-800 group-hover:text-brand-red transition-colors mb-1">{article.title}</h4>
                          <span className="text-xs font-semibold text-slate-500 bg-slate-200/50 px-2.5 py-0.5 rounded">{article.tag}</span>
                        </div>
                        <ArrowRight className="size-4 text-slate-400 group-hover:text-brand-red group-hover:translate-x-1 transition-transform sm:self-center self-end" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-4">
                <div className="bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 size-40 bg-brand-red/20 rounded-full blur-3xl pointer-events-none" />
                  <h3 className="text-xl font-bold font-display mb-3 text-white">Need more help?</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    Can't find what you're looking for? Our specialized industrial engineers and support analysts are here to assist you.
                  </p>
                  
                  <div className="space-y-4">
                    <button className="w-full bg-brand-red text-white py-3 px-4 rounded-lg text-sm font-bold hover:bg-brand-red/90 transition-colors flex items-center justify-center gap-2">
                       Contact Support
                    </button>
                    <button className="w-full bg-white/10 text-white py-3 px-4 rounded-lg text-sm font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                       <Download size={18} />
                       Download SDKs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Shield size={20} className="text-brand-red" />
                <span className="text-lg font-black tracking-tight text-slate-900 uppercase font-display">
                  IDEA1 <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase not-italic">by A-1 Fence</span>
                </span>
              </div>
              <p className="text-sm text-slate-500 max-w-sm">
                Empowering industrial perimeters with intelligent, military-grade electronic surveillance and physical deterrence documentation.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-brand-red transition-colors">Documentation Home</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Release Notes</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Supported Hardware</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-brand-red transition-colors">Submit a Ticket</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Partner Training</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Status Page</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              © {new Date().getFullYear()} idea1 by a1fence. All Perimeters Secured.
            </p>
            <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-red transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
