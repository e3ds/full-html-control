#!/bin/zsh

rm -rf dist
npm run build
mv ./dist/streaming-ui/browser/* ./dist
rm -rf ./dist/streaming-ui
