# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source
COPY . .

# Build application
RUN yarn build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built application
COPY --from=builder /app/.output ./
COPY --from=builder /app/package.json ./

# Optional: Install only production dependencies
# RUN yarn install --production

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server/index.mjs"]