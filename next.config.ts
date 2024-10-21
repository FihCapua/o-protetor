import withPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';

export default withPWA({
  dest: 'public',
  disable: !isProduction
});