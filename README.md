# Ecommerce Admin Dashboard

Welcome to the Ecommerce Admin Dashboard repository – the command center for managing different stores, billboards, categories, sizes, products, colors with Content Management System and gaining insights into store performance of [E-commerce Store](https://github.com/RushikeshShelar/ecommerce-store).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features

- **Store Management**: Create and manage different stores.
- **Content Management**: Add and manage billboards, categories, sizes, products, colors.
- **Analytics**: Get an overview of each store, including monthly sales, total sales, and product inventory.
- **Live Updates**: Thee Content managed also automatically gets Updated in the store without the need of changing it manaullly in the code. 

## Tech Stack

- **Frontend:** React.js, Next.js, TypeScript.
- **Backend:** Next.js
- **Database & ORM**: MySQL, Prisma, PlanetScale.
- **Styling:** Tailwind CSS.
- **Version Control:** Git and GitHub.
- **Checkout & Payment Gateway**: Stripe
- **Hosting:** Vercel.

## Installation

### Prerequisites

1. **Node version 14.x**

2. **Setup the Ecommerce Store after Admin:**
   - Make sure to set up the [Ecommerce Store](https://github.com/RushikeshShelar/ecommerce-store) after setting up the admin dashboard. 

### Cloning the repository

```shell
git clone https://github.com/RushikeshShelar/ecommerce-admin.git
```

### Move into the store folder

```shell
cd ecommerce-store
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<"Your Cleck Publishable Key">
CLERK_SECRET_KEY=<"your Clerk Secret Key">
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL='<"Your MySql Database URL">'
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<"Your Cloudinary Cloud name">
STRIPE_API_KEY=<"Your Stripe API KEY">
FRONTEND_STORE_URL=<"Your FORNTEND URL"> or http://localhost:3001
STRIPE_WEBHOOK_SECRET=<"Your Stripe Webhook Secret">
```
Replace the <> with your Actual Values

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Acknowledgements

 - [codewithantonio](https://www.codewithantonio.com/)
 - [Harkirat Singh](https://100xdevs.com/)

## License:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- [@Rushikesh Shelar](https://www.github.com/RushikeshShelar)


## Contact
For any inquiries, reach out to [Rushikesh Shelar](mailto:rushikeshshelar.cs@gmail.com).
