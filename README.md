# Laparis ProjectX

> T-Shirt collection for men, women, children and custom printed signature

## Overview

With its modern design and intuitive layout, the Home Page welcomes users to an exciting world of personalized T-Shirts.

![Overview](https://github.com/devhasibulislam/laparis-projectx/blob/master/client/public/overview.png?raw=true)

## Features

- Total Pages `x`
  - Home Page `x1`
  - Shop Page `x4`
    - All Products `x1`
    - Men Items `x1`
    - Women Items `x1`
    - Printed T-Shirt `x1`
  - Auth Page `x3`
    - Login `x1`
    - Register `x1`
    - Recover `x1`
  - Dashboard `x6`
    - Add Category `x1`
    - List Category `x1`
    - Add Product `x1`
    - List Product `x1`
    - Update Product `x1`
    - Order Page `x1`
- CRUD on Categories
- CRUD on Products
- Real-Time Interaction
  - Search Filter `advance`
  - Cart and Checkout
  - Payment Integration `razorpay`
  - Favorites List
- Add & Read Reviews
- Photo Preview Before Upload
- Intuitive and user-friendly design
- Custom Front & Back Side Sticker Integration
- Fully Responsive for `mobile`, `tablet`, `laptop` & `pc`

## Tech Stack

- Framework: `Next.Js 14 App Directory`
- State Container: `Redux Toolkit`
- Styling: `Tailwind CSS`
- Icons: `React Icons`
- Database: `MongoDB`
- ORM: `Mongoose`
- Linting: `ESLint`
- Formatter: `Prettier`
- Backend Directory: `Node.Js Express Server`

## Technologies

| Client                     | Server                    |
| -------------------------- | ------------------------- |
| @reduxjs/toolkit           | bcryptjs                  |
| autoprefixer               | cloudinary                |
| eslint                     | colors                    |
| eslint-config-next         | cors                      |
| next                       | dotenv                    |
| postcss                    | express                   |
| react                      | jsonwebtoken              |
| react-dom                  | mongoose                  |
| react-icons                | multer                    |
| react-redux                | multer-storage-cloudinary |
| tailwind-scrollbar-hide    | validator                 |
| tailwindcss                | nodemon                   |
| @tailwindcss/forms         | nodemailer                |
| react-hot-toast            | razorpay                  |
| react-img-zoom             |                           |
| react-select               |                           |
| swiper                     |                           |
| yet-another-react-lightbox |                           |

# Development

## Clone Repository

```bash
git clone https://github.com/devhasibulislam/laparis-projectx.git
cd laparis-projectx

cd client
yarn install

cd ..

cd server
yarn install
```

## Environment Setup `client`

```bash
NEXT_PUBLIC_BASE_URL="http://localhost:8080"
NEXT_PUBLIC_RAZORPAY_KEY_ID="RAZOR_PAY_KEY_ID"
```

## Environment Setup `server`

```bash
# Port number
PORT=8080

# Origin URL from Client
ORIGIN_URL="http://localhost:3000"

# MongoDB Atlas URI
DB_Name="laparis-projectx"
ATLAS_URI="YOUR_MONGODB_ATLAS_URI/laparis-projectx"

# JWT secret
TOKEN_SECRET="e6a1e3629cd59dbf87149be9c0d526be"

# Cloudinary credentials
CLOUD_NAME="YOUR_CLOUDINARY_CLOUD_NAME"
API_KEY="YOUR_CLOUDINARY_API_KEY"
API_SECRET="YOUR_CLOUDINARY_API_SECRET"

# Nodemailer credentials
APP_SERVICE="YOUR_GMAIL_APP_SERVICE"
APP_EMAIL="YOUR_GMAIL_APP_EMAIL"
APP_PASSWORD="YOUR_GMAIL_APP_PASSWORD"

# Razorpay credentials
RAZORPAY_KEY_ID="RAZORPAY_RAZORPAY_KEY_ID"
RAZORPAY_KEY_SECRET="RAZORPAY_RAZORPAY_KEY_SECRET"
```

# Important `Links`

- [x] Client Side [Click Here](https://laparis-projectx-csr.vercel.app)
- [x] Server Side [Click Here](https://laparis-projectx-ssr.vercel.app)
- [x] Inspiration [Click Here](https://cs-laparis.myshopify.com)

# Author

- [x] [Hasibul Islam](https://bento.me/devhasibulislam) `MERN Stack Developer`
