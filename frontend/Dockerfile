FROM node:lts-alpine AS promo-builder
WORKDIR /build
COPY frontend/promo/package*.json .
RUN npm install
COPY frontend/promo .
RUN npm run build

FROM node:lts-alpine AS shop-builder
WORKDIR /build
COPY frontend/shop/package*.json .
RUN npm install
COPY frontend/shop .
RUN npm run build

FROM caddy:2.8.4-alpine AS proxy-runtime
COPY frontend/Caddyfile /etc/caddy/Caddyfile
COPY --from=promo-builder /build/dist /web/promo
COPY --from=shop-builder /build/dist /web/shop

