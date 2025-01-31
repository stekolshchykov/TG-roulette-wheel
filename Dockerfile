# Stage 1: Build application
FROM node:18-alpine AS builder

WORKDIR /app

# Копируем файлы зависимостей для кэширования
COPY package*.json ./
COPY yarn.lock ./

# Установка зависимостей
RUN npm install --include=dev

# Копируем исходный код
COPY . .

# Сборка приложения
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Устанавливаем только production зависимости
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
RUN npm ci --only=production

# Копируем собранное приложение и конфиги
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/next-env.d.ts ./
COPY --from=builder /app/tsconfig.json ./

EXPOSE 3000

CMD ["npm", "start"]
