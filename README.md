# Tailwind CSS Custom Color Not Applied: Content Configuration Issue

This repository demonstrates a common issue in Tailwind CSS where custom colors are not applied due to an incorrectly configured `content` property in `tailwind.config.js`.

## Problem

The `tailwind.config.js` file correctly defines a custom color, but it's not being applied in the HTML or component files.

## Solution

The solution involves ensuring the `content` property accurately includes all files where the custom color is used. This allows Tailwind to process the color definition and apply it correctly.

## How to reproduce the bug
1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the development server.
4. Observe that the custom color is not applied in the browser.

## How to fix the bug
1. Correct the `content` array in the `tailwind.config.js` file to include the relevant files.
2. Run `npm run dev` again and verify that the custom color is now correctly applied.