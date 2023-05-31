# Razoo Store

https://razoo-store.netlify.app/

## Built with

<!-- ICONS found at: ht<rtps://github.com/devicons/devicon/tree/master/icons -->
<div> 
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original-wordmark.svg" title="SB" alt="SB" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" title="TS" alt="TS" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" title="Docker" alt="Docker" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" title="PSQL" alt="PSQL" width="50" height="50"/>&nbsp;
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg" title="Tailwind" alt="Tailwind" width="50" height="50"/>&nbsp;
</div>
<br>

The application combines React and Spring Boot, utilizing TypeScript for enhanced development. The user interface is built with React and TypeScript, featuring page routing through react-router-dom. Styling is achieved using Tailwind CSS, providing a modern and responsive design. Redux is employed for state management, ensuring efficient data handling. Docker is utilized for containerization, facilitating easy deployment and scalability. PostgreSQL serves as the database for seamless data storage. AWS s3 bucket, used to store product images.

## Installation

### Docker

1. Download and install `Docker` app from official website

```sh
https://docs.docker.com/get-docker/
```

2. Clone project or download the zip from git (unzip if needed)

3. Run this command in a terminal, in the root folder where the file `docker-compose.yml` is located

```sh
docker-compose up -d
```

4. When all packages are downloaded and installed, the application will run on the ports:

   - `Backend` http://localhost:8080
   - `Frontend` http://localhost:5713
   - `DB` http://localhost:2345

## Functionalities and Usage

- Main page

  ![Main Page](frontend/screenshots/mainPage.jpg)

- Shop page with all available products

  ![Shop Page](frontend/screenshots/shopPage.jpg)

- Here you can set filters and sort options

  ![Filters ](frontend/screenshots/filters.jpg)

- By clicking on product's card, you can open product's details dialog

  ![ProductDetails ](frontend/screenshots/productDetails.jpg)

- You can add products to the cart, and proceed checkout for creating new order

  ![Cart ](frontend/screenshots/cartPage.jpg)

- To create a new order you need to be authenticated

  ![Login ](frontend/screenshots/loginPage.jpg)

- You can create account with form or use google authorization

  ![SingIn ](frontend/screenshots/singinPage.jpg)

- After login you can create new order by pressing `Complete payment` button

  ![Checkout ](frontend/screenshots/checkoutPage.jpg)

- On the account page, you can find your info and orders

  ![Account ](frontend/screenshots/accountPage.jpg)

  ![Orders ](frontend/screenshots/orderPage.jpg)

- By login as admin you are able to change/add/delete products, users and orders

  ![Admin Products ](frontend/screenshots/adminProducts.jpg)

  ![Admin Users ](frontend/screenshots/adminUsers.jpg)

- Also you can change product image with the form

  ![Admin Form ](frontend/screenshots/adminForm.jpg)
