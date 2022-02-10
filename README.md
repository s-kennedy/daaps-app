# Directions to Nowhere in Particular

Prompts for sensing, making, and navigating public space.

A progressive web app built on Next.js and Airtable, available at [www.directionstonowhere.com](https://www.directionstonowhere.com/).


## Tech Stack

- The website is created with Next.js using the plugin [`next-pwa`](https://github.com/shadowwalker/next-pwa) to generate a progressive web app.
- The data store is an [Airtable](https://airtable.com/) base

## Local development

Fork or clone the repo, then install the dependencies:
```bash
yarn
```

Create a `.env` file at the project root and add the Airtable credentials:
```
AIRTABLE_API_KEY=key*************
AIRTABLE_BASE_ID=app*************
```

Run the local server:
```bash
yarn dev
```


## Hosting and deployment

The app is currently hosted on Heroku can can be deployed via the Heroku CLI.
