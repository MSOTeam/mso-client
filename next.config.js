const intercept = require("intercept-stdout");

module.exports = {
  images: {
    domains: ['www.visir.is', 'm.media-amazon.com'],
  },
}

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);
