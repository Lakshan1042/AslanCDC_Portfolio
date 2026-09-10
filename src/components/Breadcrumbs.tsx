import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import type { PageRoute } from '../types';

interface BreadcrumbItem {
  name: string;
  route?: PageRoute;
  serviceId?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (route: PageRoute, sectionId?: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-6 bg-aslan-sage-soft/40 border-b border-aslan-sage/15 text-xs">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 text-aslan-charcoal-muted flex-wrap">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-aslan-teal font-medium flex items-center gap-1 transition-colors"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-aslan-sage" />
              {isLast ? (
                <span className="font-semibold text-aslan-teal" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.route || 'home', item.serviceId)}
                  className="hover:text-aslan-teal font-medium transition-colors"
                >
                  {item.name}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
