const seoConfig = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    site_name: 'DevTools and Utilities',
  },
  twitter: {
    handle: '@_Muthukumar_P',
    site: '@_Muthukumar_P',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'msapplication-TileColor',
      content: '#da532c',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
      sizes: '16x16',
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}

export default seoConfig
