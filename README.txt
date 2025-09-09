
Facebook Lite-style Web App (HTML/CSS/JS + Firebase)
-----------------------------------------------------
Features:
- Email/password Auth
- Profile (name, username, avatar upload)
- Home feed: create posts (text + image), like counter, comments (realtime)
- Friends: search by username, send/accept requests
- Messages: list conversations, open 1:1 chat (realtime), send text + camera image (capture=environment)
- Bottom navigation across Home / Friends / Messages

How to run:
1) Put all files on a static server or open index.html in your browser.
2) Sign up with an email/password (creates /users/{uid}).
3) Go to Profile to set your name/username and upload an avatar.
4) Use Friends to send/accept requests (based on username) and Messages to chat.

Notes:
- Uses your provided Firebase project config in app.js.
- For production, configure Firebase Realtime Database & Storage Security Rules properly.
