### 📝 Threads App

### 📌 Project Overview

This is a simple Threads like application built as a front-end sample project. It simulates a minimal version of the Threads social media experience, using a fake API powered by `json-server`. The project showcases modern React practices and libraries for efficient data handling, form management, validation, and styling.

### 🛠️ Tech Stack

- **React** – Core UI framework
- **React Router** – Client-side routing
- **Redux Toolkit (RTK)** – State management
- **RTK Query** – Data fetching and caching (part of RTK)
- **React Hook Form** – Form handling and validation
- **Zod** – Schema validation
- **TailwindCSS** – Utility-first CSS styling
- **json-server** – Mock REST API

---

### 🧩 Mock API Setup (json-server)

To simulate a backend for this application, we use [`json-server`](https://github.com/typicode/json-server) with a predefined `db.json` file.

#### ✅ Step 1 – Install `json-server`

Make sure to install version `^0.17.4` locally:

```bash
npm install json-server@^0.17.4
```

#### 🗂️ Step 2 – Create `db.json`

In your project root, create a file named `db.json` with the following content:

```json
{
    "status": {
        "ok": true
    },
    "users": [],
    "posts": [],
    "reports": []
}
```

#### ⚙️ Step 3 – Create `app.js`

Also in the project root, create a file named `app.js` with the following code:

```js
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

const port = 3000;

server.use(middlewares);
server.use(router);

server.listen(port);

console.log('[START]: JSON-Server Started.');
```

#### 🚀 Step 4 – Start the Mock API

To run the API server, use:

```bash
node app.js
```

The mock API will be available at:  
👉 `http://localhost:3000`
