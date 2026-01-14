# User Authentication API V1

Starter project untuk membangun API menggunakan **Express.js** dengan fitur autentikasi lengkap, siap digunakan untuk project baru tanpa perlu membangun auth dari nol dengan menggunakan JWT-based Authentication with HttpOnly Cookies.

## Fitur Utama

-   **Autentikasi JWT** (JSON Web Token)
-   **Sequelize ORM** (MySQL)
-   **Modular folder structure** (controller, route, middleware, utils)
-   **Winston logger** untuk logging terstruktur
-   **dotenv** untuk konfigurasi environment
-   **Password hashing** dengan bcrypt

## **Clone repository**

```bash
git clone https://github.com/mfauzi-dev/User-Authentication-API-v1
```

## **Setup Project Baru**

1. **Rename folder sesuai project baru**

    ```bash
    mv user-authentication-api-v1 my-new-project
    cd my-new-project
    ```

2. **Hapus riwayat Git lama**

    ```bash
    rm -rf .git
    ```

3. **Install dependencies**

    ```bash
    npm install
    ```

4. **Buat file .env berdasarkan .env.example**

    ```bash
    cp .env.example .env
    ```

5. **Jalankan project**

    ```bash
    npm run dev
    ```

## Teknologi

-   Express.js

-   Sequelize

-   MySQL

-   JWT

-   bcrypt

## Lisensi

Proyek ini menggunakan lisensi MIT.  
Lihat file [LICENSE](LICENSE) untuk detailnya.
