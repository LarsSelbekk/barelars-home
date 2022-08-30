FROM node:alpine AS install

WORKDIR app
COPY package.json tsconfig.json tsconfig.node.json vite.config.ts yarn.lock ./
RUN yarn

EXPOSE 8000
CMD ["yarn", "dev", "--port", "8000", "--host"]

FROM node:alpine AS build

WORKDIR app
COPY --from=install app/ ./
COPY public/ public/
COPY src/ src/
COPY index.html ./
RUN yarn build

EXPOSE 8000
CMD ["yarn", "preview", "--port", "8000", "--host"]

FROM nginx:alpine AS release

COPY --from=build app/dist/ /usr/share/nginx/html/

EXPOSE 80
