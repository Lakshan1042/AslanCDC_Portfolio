import { renderToString } from 'react-dom/server';
import { App } from './App';
import { getRouteFromPath } from './utils/routing';
import {
  HOMEPAGE_FAQS,
  CHROMEPET_FAQS,
  WEST_TAMBARAM_FAQS,
  OCCUPATIONAL_THERAPY_FAQS,
  AUTISM_SUPPORT_FAQS
} from './data/faqsData';

export {
  HOMEPAGE_FAQS,
  CHROMEPET_FAQS,
  WEST_TAMBARAM_FAQS,
  OCCUPATIONAL_THERAPY_FAQS,
  AUTISM_SUPPORT_FAQS
};

export function render(url: string): { appHtml: string } {
  const match = getRouteFromPath(url);
  const appHtml = renderToString(<App initialRoute={match.route} />);
  return { appHtml };
}
