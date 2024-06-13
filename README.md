
# Node.js API Server

This is a simple Node.js API server that connects to a MongoDB database using Mongoose. The server provides RESTful endpoints for managing products, including creating, reading, updating, and deleting products.

## 📂 Project Structure


![App Screenshot](https://www.felipegonzalez.ca/structure.png)


 - controllers/productController.js: Contains the logic for handling API requests related to products.

- routes/productRoutes.js: Defines the routes for the product API endpoints.
- models/product.model.js: Defines the Mongoose schema and model for products.
- server.js: Sets up the Express server, connects to the MongoDB database, and listens for incoming requests.


## 🔚 Endpoints

- GET /api/products: Retrieve all products.
- GET /api/products/:id: Retrieve a product by its ID.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update an existing product by its ID.
- DELETE /api/products/:id: Delete a product by its ID.
## ⚙️ Installation

Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB
##
- Clone the repository and run npm install to install the dependencies.

```bash
  git clone https://github.com/your-username/node-api-server.git
  cd node-api-server
```

- Install dependencies:

```bash
  npm intall
```

- Set up your environment variables:
- Create a .env file in the root of your project and add your MongoDB URI:

```bash
   MONGODB_URI=your-mongodb-uri  
```

- Start the server

```bash
   nodemon index.js  
```
To start the application, and it will be available at http://localhost:3000.
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`

