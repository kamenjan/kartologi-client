# Kartologi client

React front end for my friends Tragic The Gathering club web application.

## Getting Started

### Prerequisites

Node, npm, patience

### Installing
```
$ npm install
```

### Running

Check package.json for scripts, but mainly
``` 
$ npm start 
```
for development environment with code watch + hot reloading and
```
$ npm run build && npm run serve-prod 
```
for static production build

### Issues, findings, notes & todos

#### Code splitting

Sources:

code splitting: https://blog.pusher.com/code-splitting-webpack-dynamic-import-react/

nested routes: https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4
 
#### [ISSUE] Public PWA & Admin GUI

create-react-app has it's code covered by PWA service worker, so browser routes work like a charm on subsequent visits, but first visit outside domain root are problematic because they get handled by express - research this. 

this functionality is incompatible with my idea of express server side authorization routes. my notion of router based code splitting (admin route) and having express authorize those routes is rendered moot :( 

##### possibilities:

1. **pwa client (public+admin gui), express server (public/private api endpoint)**
    * this does not sit well with me, why make admin gui accessible to all public users? though it cannot send or receive any private data without authentication that does not make it right.
2. **pwa client (public), express server (api+admin gui)**
    * this might be the way but not by combining different front end methodologies. if im using react for pwa client, i sure do not want to write Pug/Jade templates for the admin panel GUI which will undoubtedly share at least styles with public pwa client. i should implement react server side rendering but that still does not solve shared resources issue.
3. **something that makes perfect sense be here**
    * okey, humor me for a second... if I manage to exclude /admin from PWA i can force users client to ask express server for /admin route, express in return authorizes the request and (TODO: and what? back to static route? get this cleared)
 


#### [NOTE] File structure

Think about the actual structure. For example; if sidebar is included on all 
scenes it makes sense to exclude it from router so it does not get re-rendered
every time.

Scenes:
* Home
* Calendar
* Post
* Upload
* Admin
    
Components:
* Header
* Menu
* Sidebar
* Carousel (posts, images, graphs, ...)
* PostSummary
* Calendar
* Table (for generating custom tables using event.wer data)