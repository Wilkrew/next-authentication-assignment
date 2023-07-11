## Technical Specification: Authentication using Next.js

### 1. Architecture Overview:

The site is built using the Next.js framework, which combines server-side rendering and client-side rendering for optimal performance. It consists of the following components:

- **Frontend**: The client-side of the application is responsible for rendering the user interface and handling user interactions. It has been developed using Next.js 13 with the latest App router, a React framework that provides server-side rendering capabilities
- **Backend**: The server-side of the application is in unison with the NextAuth.js library responsible for authentication, retrieving profile data, and handling logout requests. The backend will be implemented using the Next.js integrated Node.js backend, allowing for seamless server-side logic execution.
- **Authentication**: NextAuth.js authentication library that provides support for various authentication providers, such as Google, Facebook, GitHub, etc. In this case mainly Google is used as a provider in this case.
- **Design/Styling**: Material UI, a modern UI framework, sing the styling library emotion has been used to create a visually appealing and responsive design

### 2. Design:

- The site utilizes Material UI:s base components for styling, easy implementation of dark mode and global theme settings.
- Unique instances of component variants are created by overriding their default theme styles by using their built in "sx" attribute to further promote ease of maintenance.
- The layout of the website is resolved via the new "layout" solution in Next.js that allows us to set a page layout template used for all page instances, thereby reducing duplicated code, maintenance and possible issues with inconcistency.
- Basic global styles affecting overall structure above lesser component level, i.e at the `<main></main>` tag are set via a CSS Module for all pages. Native base elements like `<body></body>` and "all" selector `*` are set via normal native `global.css`

### 3. Functionality:

- **Authentication**: Users are able to authenticate using the Google provider of the supported authentication providers from NextAuth.js. This was achieved by implementing the Google authentication provider and configuring the necessary credentials (API keys, client IDs, etc.). The NextAuth.js solution is connected to the backends route handler and thereby able to seamlessly interact with the frontend. The user is, if unauthenticated, able to trigger the authentication process by interacting with a CTA button on the home and login page as well as via the header.
- **Profile Data**: Once authenticated, the site retrieves the necessary profile data from the authentication provider and makes it available for the user to view at their profile page. This includes the user's name, email and, if applicable, profile picture as standard for the Google authentication provider. Since the data is retrieved from a third party and no further API integrations are made against that third party, no possibility of editing that data is available.
- **Dark/Light Mode**: Users are via the first button the right side of the header able to switch between dark and light mode for the styling theme of the frontend.

### 4. Security Considerations:

- **Secure Communication**: All enviroment variables are saved server side directly at the host, Vercel. Also all traffic goes via HTTPS encryption.
- **Secure Storage**: In the case of the Google provider, the tokens are primarily stored by Google and are securely managed by NextAuth.js using its session storage mechanism. NextAuth.js ensures that the tokens are securely exchanged and stored, allowing the application to access Google services on behalf of the authenticated user. This is achieved by the NextAuth Secret, one of the securely stored enviroment variables on Vercel, which hashes JWT Tokens, signs and encrypts sessions cookies and can also generate public/private keys.
- **Cross-Site Scripting (XSS) Prevention**: NextAuth.js includes automatic XSS protection by default but there has been reported XSS exploits in the past. A way to further prevent this would be to clean and vet user input via a custom NextAuth.js signin solution.
- **Rate Limiting**: At the moment we have no rate limits, this exposes us to brute force attacks and excessive API requests.
- **Proportionality**: In regard to the technical assignment this site was made there is an extremely low probablity of any types of attacks. This is due to there neither exisiting any possible gain or, based of current information, other motives to do so. Thereby, unless further developed, any more resources spent increasing security would be deemed wasteful.

_Note: This technical specification details the software in its current state as of 2023-07-11. Further development may cause this specifictations, or parts of it, to become incorrect or in need of adjustments_
