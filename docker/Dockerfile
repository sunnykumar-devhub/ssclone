ARG TARGETOS=linux
ARG TARGETARCH=amd64

# Stage 1: Build the React app
FROM node:24-alpine AS builder

# Install Git
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Set internal NPM registry
RUN npm set registry https://npm.internal.codebuckets.in

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the application
ARG NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL
ENV NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL=$NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL
ARG NEXT_PUBLIC_CDN_URL
ENV NEXT_PUBLIC_CDN_URL=$NEXT_PUBLIC_CDN_URL
RUN npm run build

# Serve the runtime env asset from /tmp so runtime injection still works when the image filesystem is read-only.
RUN mkdir -p out && ln -sf /tmp/sujan-singh-runtime-env/__import_meta_env__.js out/__import_meta_env__.js

# Stage 2: Build the shell-less runtime env injector
FROM --platform=$BUILDPLATFORM golang:1.24-bullseye AS runtime-env-builder

ARG TARGETOS
ARG TARGETARCH

WORKDIR /src

COPY docker/runtime-env-entrypoint/main.go ./main.go

RUN CGO_ENABLED=0 GOOS=${TARGETOS} GOARCH=${TARGETARCH} go build -trimpath -ldflags='-s -w' -o /out/runtime-env-entrypoint ./main.go

# Stage 3: Serve using Nginx
FROM --platform=${TARGETOS}/${TARGETARCH} registry.gitlab.internal.codebuckets.in/codebucket-solutions/docker-image-library/nginx:stable

# Copy the build folder from the previous stage to Nginx's default public directory
COPY --chown=nginx:nginx --from=builder /app/out /usr/share/nginx/html
COPY --chmod=755 --from=runtime-env-builder /out/runtime-env-entrypoint /usr/local/bin/runtime-env-entrypoint

# Expose the nginx port used by the downloaded config
EXPOSE 8080

ENTRYPOINT ["/usr/local/bin/runtime-env-entrypoint"]
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
