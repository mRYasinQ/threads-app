const SITE_NAME = import.meta.env.VITE_SITE_NAME;

export const createPageTitle = (page) => `${page} • ${SITE_NAME}`;
