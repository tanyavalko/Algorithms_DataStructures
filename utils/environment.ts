const environment = process.env.REACT_APP_NODE_ENV;

if (environment === 'development') {
  console.log('This is the development environment');
} else if (environment === 'production') {
  console.log('This is the production environment');
}
