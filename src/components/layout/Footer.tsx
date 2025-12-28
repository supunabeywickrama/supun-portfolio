import React from 'react';
export function Footer() {
  return <footer className="bg-navy-900 py-8 text-center border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-500 font-mono text-sm">
          Designed & Built by Supun Tharaka
        </p>
        <p className="text-slate-600 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>;
}