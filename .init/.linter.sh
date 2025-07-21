#!/bin/bash
cd /home/kavia/workspace/code-generation/image-gallery-manager-ee91c5fa/gallery_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

