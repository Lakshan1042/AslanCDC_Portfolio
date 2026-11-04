import type { PageRoute } from '../types';

export interface RouteMatch {
  route: PageRoute;
  sectionId?: string;
  path: string;
}

export const getRouteFromPath = (pathname: string): RouteMatch => {
  // Normalize path by stripping trailing slashes
  const clean = pathname.replace(/\/+$/, '') || '/';

  if (clean === '/' || clean === '') {
    return { route: 'home', path: '/' };
  }
  if (clean === '/locations/chromepet') {
    return { route: 'location-chromepet', path: '/locations/chromepet/' };
  }
  if (clean === '/locations/west-tambaram') {
    return { route: 'location-west-tambaram', path: '/locations/west-tambaram/' };
  }
  if (clean === '/services/occupational-therapy') {
    return { route: 'service-occupational-therapy', path: '/services/occupational-therapy/' };
  }
  if (clean === '/services/autism-support') {
    return { route: 'service-autism-support', path: '/services/autism-support/' };
  }
  if (clean === '/ams') {
    return { route: 'ams', path: '/ams' };
  }
  if (clean === '/404') {
    return { route: '404', path: '/404' };
  }

  return { route: '404', path: clean };
};

export const getPathForRoute = (route: PageRoute, sectionId?: string): string => {
  switch (route) {
    case 'location-chromepet':
      return '/locations/chromepet/';
    case 'location-west-tambaram':
      return '/locations/west-tambaram/';
    case 'service-occupational-therapy':
      return '/services/occupational-therapy/';
    case 'service-autism-support':
      return '/services/autism-support/';
    case 'ams':
      return 'https://ams-app.aslancdc.com';
    case '404':
      return '/404';
    case 'home':
    default:
      return sectionId && sectionId !== 'hero' ? `/#${sectionId}` : '/';
  }
};

