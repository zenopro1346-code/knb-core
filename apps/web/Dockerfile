FROM node:20-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install --no-audit --no-fund
RUN node -e "console.log(require('next/package.json').version)"

COPY app ./app

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./

EXPOSE 3000

CMD ["npm", "start"]
