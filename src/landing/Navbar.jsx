


import { useState } from "react";

// NavbarTravel.jsx
// Responsive navbar built with Tailwind CSS. Drop this into your React project
// (e.g. src/components/NavbarTravel.jsx). Tailwind must be configured.

export function NavbarTravel({ onSwitch = () => {} }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-100 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2">
            
              <span className="text-lg font-semibold text-slate-800">✈️SkyEarth</span>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-6">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
              Destinations
            </a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
              Offers
            </a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
              Blog
            </a>
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
              Help
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
           
            <button
                onClick={() => onSwitch('login')}
              className="px-3 py-1.5 text-sm rounded-md bg-indigo-400 text-black font-medium shadow-sm hover:bg-indigo-700"
            >
LogOut            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${open ? 'block' : 'hidden'} md:hidden border-t border-slate-100 bg-white/95`}>
        <div className="px-4 pt-4 pb-3 space-y-2">
          <a href="#" className="block text-slate-700 px-2 py-2 rounded hover:bg-slate-50">
            Destinations
          </a>
          <a href="#" className="block text-slate-700 px-2 py-2 rounded hover:bg-slate-50">
            Offers
          </a>
          <a href="#" className="block text-slate-700 px-2 py-2 rounded hover:bg-slate-50">
            Blog
          </a>
          <a href="#" className="block text-slate-700 px-2 py-2 rounded hover:bg-slate-50">
            Help
          </a>

          <div className="pt-2 border-t border-slate-100">
            <a href="#" className="block w-full text-center px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-50">
LogOut            </a>
          
          </div>
        </div>
      </div>
    </nav>
  );
}
