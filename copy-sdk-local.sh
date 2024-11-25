#!/bin/bash

# local sdk path
LOCAL_SDK_PATH="/Volumes/FD/Projects/metamask/metamask-sdk/packages/sdk/"

# build file path
TARGET_BASE_DIR="./node_modules/@metamask/sdk/"
TARGET_DIR="$TARGET_BASE_DIR/dist/browser/es/"

echo "📦 Starting SDK copy process..."

# Get initial size if target exists
if [ -d "$TARGET_DIR" ]; then
    INITIAL_SIZE=$(du -sh "$TARGET_DIR" | cut -f1)
    echo "📊 Initial target folder size: $INITIAL_SIZE"
fi

# First remove the target file if it exists
echo "🗑️  Removing existing target directory..."
rm -rf $TARGET_DIR

# copy package.json and build file from local sdk to node_modules
echo "📝 Copying package.json..."
cp -r $LOCAL_SDK_PATH/package.json $TARGET_BASE_DIR

echo "📂 Copying SDK files..."
cp -r $LOCAL_SDK_PATH/dist/browser/es/ $TARGET_DIR

# Get final size
FINAL_SIZE=$(du -sh "$TARGET_DIR" | cut -f1)
echo "📊 Final target folder size: $FINAL_SIZE"

echo "✅ SDK copy completed successfully!"
