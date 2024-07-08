FROM node:22-alpine AS base

WORKDIR /app

COPY ./ ./

# Install all dependencies and build project
RUN npm ci
RUN npm run build

# This stage will go to production, make sure node images are same
FROM node:22-alpine AS builder

WORKDIR /app

# copy standalone code
COPY --from=base ./app/.next/standalone ./
# copy static pages because Next doesn't do it on its own
COPY --from=base ./app/.next/static ./.next/static
# copy public with logos, media, etc
COPY --from=base ./app/public ./public

EXPOSE 3000

# run server file because `standalone` does not work with `npm start`
CMD ["node", "server.js"]
