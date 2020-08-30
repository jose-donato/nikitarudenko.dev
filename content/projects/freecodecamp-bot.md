---
tech_used:
- nodejs
- cheerio
name: freeCodeCamp Bot
short_overview: Sends fresh news to a Telegram channel
description: Sends fresh news to a Telegram channel
screenshot: "/uploads/sad_robot.jpg"
links:
- template: link
  link: google.com
  label: GitHub
  href: https://github.com/nikita-rudenko/freecodecamp-news-bot
- template: link
  label: Live
  link: github.com
  href: https://freecodecamp-news-bot.herokuapp.com/
gradient: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)'
title: freeCodeCamp Bot
excerpt: Delivers fresh news to Telegram
technologies:
- nodejs
- cheerio
- mongodb
cover: "/uploads/sad_robot.jpg"
emoji: <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg"><symbol id="d"
  viewBox="-64.5 -64.5 129 129"><g fill="none" stroke="#4285f4" stroke-miterlimit="10"><path
  d="M-64-64H64V64H-64z"/><path d="M36.95 37.82C27.32 46.32 14.2 51 0 51c-14.27 0-27.39-4.62-36.96-13.01C-47.45
  28.79-53 15.65-53 0c0-15.58 5.55-28.69 16.04-37.92C-27.36-46.35-14.24-51 0-51c14.17
  0 27.29 4.71 36.95 13.25C47.45-28.45 53-15.4 53 0c0 15.47-5.55 28.55-16.05 37.82z"/><path
  d="M0 55h0c-29.59 0-57-19.01-57-55 0-35.8 27.41-55 57-55h0c29.59 0 57 19.69 57 55
  0 35.51-27.41 55-57 55z"/><path d="M0-43c-12.29 0-23.54 3.94-31.68 11.09C-40.39-24.25-45-13.21-45
  0c0 29.7 22.6 43 45 43 21.67 0 45-13.46 45-43S21.67-43 0-43h0zM-.01 51V-51M-16 48.95v-97.88M15.99
  48.91v-97.84M53 .08H-53"/></g></symbol><path d="M12.53 106.01c-3.46 0-6.28-2.82-6.28-6.29V61.34a6.29
  6.29 0 016.28-6.28h3.55v50.96h-3.55z" fill="#f15a24"/><path d="M14.08 57.05v46.96h-1.55c-2.36
  0-4.28-1.93-4.28-4.29V61.34c0-2.36 1.92-4.28 4.28-4.28h1.55m4-4.01h-5.55c-4.57 0-8.28
  3.72-8.28 8.28v38.38c0 4.57 3.72 8.29 8.28 8.29h5.55V53.05z" fill="#c1272d"/><path
  d="M112.17 106.01V55.05h3.55a6.29 6.29 0 016.28 6.28v38.38c0 3.47-2.82 6.29-6.28
  6.29h-3.55z" fill="#f15a24"/><path d="M115.72 57.05c2.36 0 4.28 1.92 4.28 4.28v38.38c0
  2.37-1.92 4.29-4.28 4.29h-1.55V57.05h1.55m0-4h-5.55v54.96h5.55c4.56 0 8.28-3.72
  8.28-8.29V61.34c0-4.57-3.71-8.29-8.28-8.29z" fill="#c1272d"/><linearGradient id="a"
  gradientUnits="userSpaceOnUse" x1="64.059" x2="64.059" y1="15.275" y2="119.015"><stop
  offset=".001" stop-color="#b0bec5"/><stop offset=".177" stop-color="#b2c2cb"/><stop
  offset=".316" stop-color="#b4c9d4"/><stop offset=".661" stop-color="#8aa6b3"/><stop
  offset=".865" stop-color="#7795a3"/></linearGradient><path d="M22.78 122c-3.21 0-5.82-2.58-5.82-5.76V44.46c0-3.17
  2.61-5.75 5.82-5.75h40.16V21.8l-1.38-.45c-3.18-1.05-5.31-3.96-5.31-7.26 0-4.22 3.47-7.65
  7.75-7.65 4.27 0 7.74 3.43 7.74 7.65 0 3.3-2.14 6.21-5.31 7.26l-1.38.45v16.9l40.17-.01c3.21
  0 5.83 2.58 5.83 5.75l.12 9.98v52.43h-.12v9.37c0 3.18-2.61 5.76-5.83 5.76H22.78z"
  fill="url(#a)"/><path d="M64 8.44c3.17 0 5.74 2.54 5.74 5.65 0 2.43-1.58 4.59-3.94
  5.36l-1.81.59-1.81-.59c-2.36-.78-3.94-2.93-3.94-5.36.01-3.12 2.59-5.65 5.76-5.65m41.22
  32.26c2.11 0 3.82 1.68 3.83 3.8l.12 9.91v50.46h-.12V116.24c0 2.07-1.72 3.76-3.82
  3.76H22.78c-2.11 0-3.82-1.69-3.82-3.76V44.46c0-2.07 1.72-3.75 3.82-3.75H67.05l38.17-.01M64
  4.44c-5.37 0-9.75 4.33-9.75 9.65 0 4.26 2.81 7.88 6.69 9.16v13.46H22.78c-4.32 0-7.82
  3.48-7.82 7.75v71.78c0 4.28 3.51 7.76 7.82 7.76h82.45c4.32 0 7.82-3.48 7.82-7.76v-7.37h.12V54.41l-.12-9.96c0-4.28-3.52-7.75-7.82-7.75l-38.17.01V23.25c3.88-1.28
  6.69-4.9 6.69-9.16-.01-5.32-4.39-9.65-9.75-9.65z" fill="#658ca1"/><path d="M42.64
  78.31c6.34 0 11.5-5.16 11.5-11.5s-5.16-11.5-11.5-11.5-11.5 5.16-11.5 11.5 5.16 11.5
  11.5 11.5zM84.95 55.28c-6.34 0-11.5 5.16-11.5 11.5s5.16 11.5 11.5 11.5 11.5-5.16
  11.5-11.5c0-6.35-5.15-11.5-11.5-11.5zM83.85 107.55h-39.7c-3.46 0-6.27-2.81-6.27-6.27v-.56c0-3.46
  2.81-6.27 6.27-6.27h39.71c3.46 0 6.27 2.81 6.27 6.27v.56a6.276 6.276 0 01-6.28 6.27z"
  fill="#fff" stroke="#666" stroke-width="4" stroke-miterlimit="10"/><g fill="#666"
  stroke="#666" stroke-width=".728" stroke-miterlimit="10"><path d="M53.67 95.21h1.36v11.98h-1.36zM63.32
  95.21h1.36v11.98h-1.36zM72.97 95.21h1.36v11.98h-1.36zM82.62 95.21h1.36v11.98h-1.36zM44.02
  95.19h1.36v11.99h-1.36z"/></g><circle cx="64" cy="13.97" r="4.03" fill="#ff5252"/><g><path
  d="M58.67 86.83c-.88 0-1.67-.45-2.13-1.19-.46-.75-.5-1.66-.1-2.44l2.74-5.41 2.6-4.82a2.506
  2.506 0 014.42.03l5.32 10.17c.41.78.38 1.7-.08 2.45s-1.26 1.21-2.14 1.21H58.67z"
  fill="#ff5252"/><path d="M63.99 73.16c.35 0 .7.18.89.54l2.61 4.98 2.71 5.19a.995.995
  0 01-.89 1.46H58.67a.996.996 0 01-.89-1.45l2.74-5.41 2.59-4.79a1 1 0 01.88-.52m0-3c-1.47
  0-2.82.8-3.52 2.1l-2.59 4.79-.02.03-.02.03-2.74 5.41c-.63 1.25-.57 2.71.16 3.9a3.985
  3.985 0 003.41 1.91h10.64c1.41 0 2.69-.72 3.42-1.93s.78-2.68.12-3.93l-2.71-5.19-2.61-4.98a3.985
  3.985 0 00-3.54-2.14z" fill="#c1272d"/></g></svg>
tags:
- nodejs
- express
- mongodb
- cheerio
- telegraf

---
## Why?

I love to read freeCodeCamp news and once had an article posted there. It is a great source of guides, tutorials, and news from the development world. I always wanted to know if there any new article posted. FreeCodeCamp's Twitter doesn't work well for me because it also re-reposts older articles. As a Telegram user, I found it as a great use case for the Telegram Bot API. Now, I receive every new post in a channel and anyone can too.

## How?

I created a simple **Node.js** app with Express and MongoDB. It gets triggered by a cron job, checks if there are new articles added, and posts them to a Telegram channel. Simple and effective.