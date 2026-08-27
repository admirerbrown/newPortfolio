#!/usr/bin/env bash

set -euo pipefail

# --------------------------------------------------
# Portfolio deployment script
# master worktree:
#   /home/admirer/new_portfolio
#
# gh-pages worktree:
#   /home/admirer/new_portfolio-pages
# --------------------------------------------------

PROJECT_DIR="/home/admirer/new_portfolio"
PAGES_DIR="/home/admirer/new_portfolio-pages"

echo "========================================"
echo " Portfolio Deployment"
echo "========================================"

# 1. Make sure we're in the correct project
CURRENT_DIR="$(pwd)"

if [[ "$CURRENT_DIR" != "$PROJECT_DIR" ]]; then
    echo "ERROR: Run this script from:"
    echo "  $PROJECT_DIR"
    exit 1
fi

# 2. Make sure we're on master
BRANCH="$(git branch --show-current)"

if [[ "$BRANCH" != "master" ]]; then
    echo "ERROR: Expected branch 'master'."
    echo "Currently on: $BRANCH"
    exit 1
fi

echo ""
echo "[1/6] Checking master..."

# 3. Make sure master is clean
if [[ -n "$(git status --porcelain)" ]]; then
    echo "ERROR: master has uncommitted changes."
    echo ""
    git status
    echo ""
    echo "Commit or stash your changes before deploying."
    exit 1
fi

echo "✓ master is clean"

# 4. Build the portfolio
echo ""
echo "[2/6] Building production site..."
npm run build

# 5. Verify build output
if [[ ! -d "$PROJECT_DIR/out" ]]; then
    echo "ERROR: Build succeeded but 'out/' was not found."
    exit 1
fi

echo "✓ Production build created"

# 6. Verify gh-pages worktree
echo ""
echo "[3/6] Checking gh-pages worktree..."

if [[ ! -d "$PAGES_DIR/.git" && ! -f "$PAGES_DIR/.git" ]]; then
    echo "ERROR: gh-pages worktree was not found:"
    echo "  $PAGES_DIR"
    exit 1
fi

cd "$PAGES_DIR"

PAGES_BRANCH="$(git branch --show-current)"

if [[ "$PAGES_BRANCH" != "gh-pages" ]]; then
    echo "ERROR: Expected gh-pages worktree to be on 'gh-pages'."
    echo "Currently on: $PAGES_BRANCH"
    exit 1
fi

if [[ -n "$(git status --porcelain)" ]]; then
    echo "ERROR: gh-pages has uncommitted changes."
    echo ""
    git status
    exit 1
fi

echo "✓ gh-pages is clean"

# 7. Copy production build
echo ""
echo "[4/6] Updating gh-pages..."

rsync -a --delete \
    --exclude=".git" \
    "$PROJECT_DIR/out/" \
    "$PAGES_DIR/"

echo "✓ gh-pages updated"

# 8. Check whether anything actually changed
if [[ -z "$(git status --porcelain)" ]]; then
    echo ""
    echo "[5/6] No deployment changes detected."
    echo "The live site is already up to date."
    exit 0
fi

echo ""
echo "[5/6] Changes to be deployed:"
git status --short

# 9. Commit and push
git add -A

git commit -m "Deploy latest portfolio build"

echo ""
echo "[6/6] Pushing gh-pages..."

git push origin gh-pages

echo ""
echo "========================================"
echo " Deployment successful!"
echo "========================================"
echo ""
echo "Live site:"
echo "https://admirerbrown.github.io/newPortfolio/"