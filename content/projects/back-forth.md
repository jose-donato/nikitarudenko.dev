---
tags:
- vscode
- typescript
title: Back & Forth
excerpt: VSCode extension with 10k+ installs
emoji: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform:
  rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid
  meet" viewBox="0 0 128 128"><linearGradient id="IconifyId-1744afcd322-e8e348-870"
  x1="64" x2="64" y1="4.25" y2="124.41" gradientUnits="userSpaceOnUse"><stop stop-color="#40C4FF"
  offset="0"/><stop stop-color="#2DB5F9" offset=".352"/><stop stop-color="#0091EA"
  offset="1"/></linearGradient><path d="M116 124H12c-4.42 0-8-3.58-8-8V12c0-4.42 3.58-8
  8-8h104c4.42 0 8 3.58 8 8v104c0 4.42-3.58 8-8 8z" fill="url(#IconifyId-1744afcd322-e8e348-870)"/><path
  d="M116 7c2.76 0 5 2.24 5 5v104c0 2.76-2.24 5-5 5H12c-2.76 0-5-2.24-5-5V12c0-2.76
  2.24-5 5-5h104m0-3H12c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58
  8-8V12c0-4.42-3.58-8-8-8z" fill="#424242" opacity=".2"/><path d="M43.98 36c2.06
  0 4.02 1.62 4.02 4.01V54c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V40.01c0-2.39 1.96-4.01
  4.02-4.01c.9 0 1.82.31 2.61 1l24 23.99a4.001 4.001 0 0 1 0 6.02L86.63 91c-.79.69-1.71
  1-2.61 1c-2.06 0-4.02-1.62-4.02-4.01V74c0-1.1-.9-2-2-2H50c-1.1 0-2 .9-2 2v13.99c0
  2.39-1.96 4.01-4.02 4.01c-.9 0-1.82-.31-2.61-1l-24-23.99a4.001 4.001 0 0 1 0-6.02l24-23.99c.78-.69
  1.7-1 2.61-1m0-3c-1.68 0-3.3.62-4.59 1.74l-.08.07l-24 24C13.84 60.13 13 62.02 13
  64s.84 3.87 2.31 5.19l23.94 23.93l.07.07l.08.07A6.933 6.933 0 0 0 43.98 95c3.87
  0 7.02-3.14 7.02-7.01V75h26v12.99c0 3.86 3.15 7.01 7.02 7.01c1.68 0 3.3-.62 4.59-1.74l.14-.14l23.94-23.93c1.47-1.33
  2.31-3.21 2.31-5.19s-.84-3.87-2.31-5.19L88.62 34.74a7.023 7.023 0 0 0-4.6-1.74C80.15
  33 77 36.14 77 40.01V53H51V40.01c0-3.87-3.15-7.01-7.02-7.01z" fill="#424242" opacity=".2"/><path
  d="M110.63 60.99L86.63 37c-2.58-2.27-6.63-.43-6.63 3.01V54c0 1.1-.9 2-2 2H50c-1.1
  0-2-.9-2-2V40.01c0-3.44-4.05-5.27-6.63-3.01l-24 23.99a4.001 4.001 0 0 0 0 6.02l24
  23.99c2.59 2.26 6.63.43 6.63-3.01V74c0-1.1.9-2 2-2h28c1.1 0 2 .9 2 2v13.99c0 3.44
  4.05 5.27 6.63 3.01l24-23.99a3.987 3.987 0 0 0 0-6.02z" fill="#FAFAFA"/></svg>'
links:
- template: link
  href: https://github.com/nikita-rudenko/back-n-forth
  label: GitHub
- template: link
  href: https://marketplace.visualstudio.com/items?itemName=nick-rudenko.back-n-forth
  label: Marketplace
gradient: 'linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)'

---
## What is the idea?

I use VSCode as my main IDE. I always felt it lacks a UI element that allows users to navigate through recently opened files as they do in web browsers. I read through the VSCode docs and actually found keyboard shorcuts for doing this. However, I decided to create this extension anyway to reflect their existence in UI too.

## How is it implemented?

I learned VSCode [extension API](https://code.visualstudio.com/api) and found a few repos with popular extensions to see how they work with it. Once I got logic working, I took the icons from Microsoft's [official repository](https://github.com/microsoft/vscode-icons) and configured them to work well with light and dark themes. It allowed me to achieve native user experience. Later I completed it with "return the last edit location" feature which was requested by users.

![Extension in action.](https://github.com/nick-rudenko/back-n-forth/raw/master/img/screenshots/demo.gif "Extension in action")