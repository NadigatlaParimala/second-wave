# Stage 1: Build the React application
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* ./
RUN npm install --frozen-lockfile # Or yarn install --frozen-lockfile

COPY . .

RUN npm run build # This command builds your Vite React app for production, typically creating a 'dist' folder

# Stage 2: Serve the built application with Nginx (or another web server)
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]