import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Coverage from './components/Coverage';
import AIChat from './components/AIChat';
import Footer from './components/Footer';
import SpeedTest from './components/SpeedTest';
import { Gamepad2, MonitorPlay, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Plans />
        
        {/* Lifestyle Section */}
        <section className="py-20 bg-white">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                   Built for every lifestyle.
                 </h2>
                 <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                   Whether you're battling in an arena, streaming 4K movies, or closing deals, we have the bandwidth you need.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {/* Card 1 */}
                 <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" 
                      alt="Gaming Setup" 
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                       <div className="bg-brand-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                          <Gamepad2 className="text-white h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-1">Hardcore Gaming</h3>
                       <p className="text-slate-200 text-sm">Low ping, no packet loss, pure speed.</p>
                    </div>
                 </div>

                 {/* Card 2 */}
                 <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800" 
                      alt="Family Streaming" 
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                       <div className="bg-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                          <MonitorPlay className="text-white h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-1">4K Streaming</h3>
                       <p className="text-slate-200 text-sm">Buffer-free movies for the whole family.</p>
                    </div>
                 </div>

                 {/* Card 3 */}
                 <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&q=80&w=800" 
                      alt="Work from Home" 
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                       <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                          <Briefcase className="text-white h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-1">Remote Work</h3>
                       <p className="text-slate-200 text-sm">Reliable video calls and fast file uploads.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Features Split Section */}
        <section id="features" className="py-20 bg-slate-50 border-t border-slate-200">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="mb-10 lg:mb-0 order-2 lg:order-1">
                   <div className="inline-block bg-brand-100 text-brand-700 font-semibold px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-wider">
                     Next-Gen Technology
                   </div>
                   <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
                     Why choose SpeedNet Khulna?
                   </h2>
                   <div className="space-y-6">
                      <div className="flex">
                         <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-xl">1</div>
                         <div className="ml-6">
                            <h3 className="text-lg font-bold text-slate-900">Fiber directly to your home</h3>
                            <p className="mt-2 text-slate-600">We use advanced fiber optic technology to deliver seamless internet to every corner of Khulna city.</p>
                         </div>
                      </div>
                      <div className="flex">
                         <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-xl">2</div>
                         <div className="ml-6">
                            <h3 className="text-lg font-bold text-slate-900">Symmetrical Speeds</h3>
                            <p className="mt-2 text-slate-600">Upload as fast as you download. Perfect for content creators, video conferencing, and cloud backups.</p>
                         </div>
                      </div>
                      <div className="flex">
                         <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-xl">3</div>
                         <div className="ml-6">
                            <h3 className="text-lg font-bold text-slate-900">24/7 Expert Support</h3>
                            <p className="mt-2 text-slate-600">Our local support team is always available. Plus, use our AI assistant 'Astra' for instant help anytime.</p>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
                   <div className="absolute inset-0 bg-brand-600 rounded-3xl transform -rotate-6 opacity-20 blur-lg"></div>
                   <img 
                     src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                     alt="Professional team using high speed internet" 
                     className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
                   />
                </div>
             </div>
           </div>
        </section>

        <Coverage />
        <SpeedTest />
      </main>

      <Footer />
      <AIChat />
    </div>
  );
};

export default App;