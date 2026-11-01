#!/bin/sh
set -eu
# Authoring helper; CI deploys the already optimized, checked-in video.
mkdir -p src/Assets/optimized
ffmpeg -hide_banner -loglevel error -i src/Assets/intro.mp4 \
  -vf scale=-2:720 -c:v libx264 -preset medium -crf 24 \
  -c:a aac -b:a 96k -movflags +faststart -y src/Assets/optimized/intro.mp4
