#!/usr/bin/env sh

postcss\
  --config ./tasks/configs/postcss.config.js\
  --output ./src/compiled/app.css\
  ./src/assets/app.css

cleancss\
  src/compiled/app.css\
  --output src/compiled/app.css
