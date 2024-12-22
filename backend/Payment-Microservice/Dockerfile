# Base image olarak resmi Node.js imajını kullanıyoruz
FROM node:18

# Uygulama dizinini oluştur ve belirle
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulama kodunu kopyala
COPY . .

# Uygulamanın çalışacağı portu belirle
EXPOSE 4000

# Uygulamayı başlat
CMD ["npm", "start"]
