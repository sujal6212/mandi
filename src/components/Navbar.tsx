import React, { useState } from 'react';
import { 
  Sprout, 
  Store, 
  Gavel, 
  TrendingUp, 
  ScanSearch, 
  Bot, 
  Bell, 
  User, 
  Download, 
  MapPin, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { User as UserType, Notification } from '../types';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  currentUser: UserType | null;
  setCurrentUser: (user: UserType | null) => void;
  availableUsers: UserType[];
  notifications: Notification[];
  onOpenChat: () => void;
  onMarkNotificationsRead: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  currentUser,
  setCurrentUser,
  availableUsers,
  notifications,
  onOpenChat,
  onMarkNotificationsRead,
}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifMenu, setShowNotifMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className="sticky top-0 z-40 bg-[#143D28] text-white border-b border-[#1E5638] shadow-sm">
      {/* Top Banner Ticker */}
      <div className="bg-[#0D281A] px-4 py-1.5 text-xs flex flex-wrap items-center justify-between border-b border-[#1E5638]/50">
        <div className="flex items-center gap-2 text-emerald-200">
          <span className="font-semibold uppercase tracking-wider text-[11px] bg-emerald-900/60 px-2 py-0.5 rounded text-emerald-300 border border-emerald-700/50">
            Govt. APMC Direct Link
          </span>
          <span className="hidden sm:inline text-emerald-100/80">
            Azadpur Modal: Tomato ₹1,450/Qtl | Onion ₹2,150/Qtl | Wheat ₹2,275/Qtl
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-amber-300 font-medium text-[11px] flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            Demo Data – Indicative Market Rates
          </span>
          <a
            href="/api/export/zip"
            download
            className="text-white hover:text-amber-300 text-[11px] flex items-center gap-1 border border-emerald-700 hover:border-amber-400/50 px-2 py-0.5 rounded transition-colors"
            title="Download complete PHP/MySQL/Python project archive for college viva submission"
          >
            <Download className="w-3 h-3" />
            <span>Export Code (ZIP)</span>
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div 
            onClick={() => setCurrentView('marketplace')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[#0D281A] shadow-md group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-serif">
                MandiMart
                <span className="text-xs bg-amber-400 text-amber-950 font-sans font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Direct
                </span>
              </div>
              <p className="text-[10px] text-emerald-300/80 tracking-wide uppercase font-medium">
                National Agri-Exchange & Mandi Hub
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setCurrentView('marketplace')}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1.5 ${
                currentView === 'marketplace'
                  ? 'bg-emerald-800 text-white font-semibold'
                  : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
              }`}
            >
              <Store className="w-4 h-4" />
              Marketplace
            </button>

            <button
              onClick={() => setCurrentView('auctions')}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1.5 ${
                currentView === 'auctions'
                  ? 'bg-emerald-800 text-white font-semibold'
                  : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
              }`}
            >
              <Gavel className="w-4 h-4 text-amber-400" />
              Live Auctions
            </button>

            <button
              onClick={() => setCurrentView('mandi-prices')}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1.5 ${
                currentView === 'mandi-prices'
                  ? 'bg-emerald-800 text-white font-semibold'
                  : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-emerald-300" />
              Mandi Rates & GPS
            </button>

            <button
              onClick={() => setCurrentView('ai-vision')}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1.5 ${
                currentView === 'ai-vision'
                  ? 'bg-emerald-800 text-white font-semibold'
                  : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
              }`}
            >
              <ScanSearch className="w-4 h-4 text-emerald-300" />
              AI Quality Lab
            </button>

            {currentUser?.role === 'farmer' && (
              <button
                onClick={() => setCurrentView('farmer-portal')}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1.5 ${
                  currentView === 'farmer-portal'
                    ? 'bg-emerald-800 text-white font-semibold'
                    : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
                }`}
              >
                <Sprout className="w-4 h-4 text-amber-300" />
                Farmer Portal
              </button>
            )}

            {currentUser?.role === 'admin' && (
              <button
                onClick={() => setCurrentView('admin-panel')}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors flex items-center gap-1.5 ${
                  currentView === 'admin-panel'
                    ? 'bg-emerald-800 text-white font-semibold'
                    : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-red-400" />
                Admin Panel
              </button>
            )}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* AI Assistant Button */}
            <button
              onClick={onOpenChat}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-amber-950 font-bold text-xs sm:text-sm px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm transition-all"
              title="Open AI Agriculture Assistant"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">AI Assistant</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifMenu(!showNotifMenu);
                  if (unreadCount > 0) onMarkNotificationsRead();
                }}
                className="p-2 text-emerald-200 hover:text-white hover:bg-emerald-900/50 rounded relative transition-colors"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-amber-400 rounded-full"></span>
                )}
              </button>

              {showNotifMenu && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-slate-900 rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Notifications & Bids
                    </span>
                    <span className="text-[11px] text-emerald-700 font-medium">
                      {notifications.length} total
                    </span>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 text-xs">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-slate-400">No alerts yet</div>
                    ) : (
                      notifications.map(n => (
                        <div key={n.id} className={`p-3 hover:bg-slate-50 ${!n.isRead ? 'bg-emerald-50/50' : ''}`}>
                          <div className="font-semibold text-slate-900">{n.title}</div>
                          <div className="text-slate-600 mt-0.5">{n.message}</div>
                          <div className="text-[10px] text-slate-400 mt-1">
                            {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Role / User Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 bg-emerald-900/70 hover:bg-emerald-900 text-white text-xs px-2.5 py-1.5 rounded border border-emerald-700/60 transition-colors"
              >
                <User className="w-3.5 h-3.5 text-emerald-300" />
                <div className="text-left hidden lg:block">
                  <div className="font-medium leading-none">{currentUser?.name || 'Guest User'}</div>
                  <div className="text-[10px] text-emerald-300/80 uppercase font-semibold mt-0.5">
                    Role: {currentUser?.role || 'Visitor'}
                  </div>
                </div>
                <ChevronDown className="w-3 h-3 text-emerald-300" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-slate-900 rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                  <div className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Switch Active Persona (Demo)
                  </div>
                  {availableUsers.map(u => (
                    <button
                      key={u.id}
                      onClick={() => {
                        setCurrentUser(u);
                        setShowUserMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs flex items-center justify-between hover:bg-emerald-50 ${
                        currentUser?.id === u.id ? 'bg-emerald-50 font-bold text-emerald-900' : 'text-slate-700'
                      }`}
                    >
                      <div>
                        <div>{u.name}</div>
                        <div className="text-[10px] text-slate-400">
                          {u.district}, {u.state}
                        </div>
                      </div>
                      <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                        u.role === 'farmer' ? 'bg-emerald-100 text-emerald-800' :
                        u.role === 'buyer' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {u.role}
                      </span>
                    </button>
                  ))}
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={() => {
                        setCurrentUser(null);
                        setShowUserMenu(false);
                      }}
                      className="w-full text-left px-4 py-1.5 text-xs text-slate-500 hover:bg-slate-100"
                    >
                      Use as Guest Visitor
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
