// Grab NODE_ENV environment variable and prepare it to be
// injected into the application via DefinePlugin in Webpack configuration.

function getClientEnvironment(publicUrl) {
  var processEnv = {
    // Useful for determining whether we’re running in production mode.
    // Most importantly, it switches React into the correct mode.
    'NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
    // Useful for resolving the correct path to static assets in `public`.
    // For example, <img src={process.env.PUBLIC_URL + '/img/logo.png'} />.
    // This should only be used as an escape hatch. Normally you would put
    // images into the `src` and `import` them in code to get their paths.
    'PUBLIC_URL': JSON.stringify(publicUrl)
  };
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;
