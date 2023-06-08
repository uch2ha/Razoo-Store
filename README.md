# Razoo Store

I embarked on this project with the goal of expanding my skills in Java Spring Boot, Redux Toolkit, RTK Query, PostgreSQL, and Tailwind CSS.
By working on this application, I aimed to strengthen my proficiency in React and TypeScript while gaining hands-on experience with Docker for efficient containerization. Additionally, I wanted to implement comprehensive testing for both the frontend and backend components.
Throughout this project, I have gained valuable experience and knowledge that I am eager to apply in my future full-stack applications. It has been a rewarding journey, and I am excited to utilize the expertise I have acquired to deliver exceptional solutions.

https://razoo-store.netlify.app

## Sections

- [Built with](#built-with)
- [Functionalities and Usage](#functionalities-and-usage)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Docker-compose Setup and Starting](#docker-compose-setup-and-starting)

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

## Functionalities and Usage

### Backend

- Database:

  ![Database](screenshots/database.jpg)

- REST API, you can find all available routes on [https://razoo.onrender.com](https://razoo.onrender.com):

  ![Swagger](screenshots/swagger.jpg)

### Frontend

- Main page

  ![Main Page](screenshots/mainPage.jpg)

- Shop page with all available products

  ![Shop Page](screenshots/shopPage.jpg)

- Here you can set filters and sort options

  ![Filters ](screenshots/filters.jpg)

- By clicking on product's card, you can open product's details dialog

  ![ProductDetails ](screenshots/productDetails.jpg)

- You can add products to the cart, and proceed checkout for creating new order

  ![Cart ](screenshots/cartPage.jpg)

- To create a new order you need to be authenticated

  ![Login ](screenshots/loginPage.jpg)

- You can create account with form or use google authorization

  ![SingIn ](screenshots/singInPage.jpg)

- After login you can create new order by pressing `Complete payment` button

  ![Checkout ](screenshots/checkoutPage.jpg)

- On the account page, you can find your info and orders

  ![Account ](screenshots/accountPage.jpg)

  ![Orders ](screenshots/orderPage.jpg)

- By login as admin you are able to change/add/delete products, users and orders

  ![Admin Products ](screenshots/adminProducts.jpg)

  ![Admin Users ](screenshots/adminUsers.jpg)

- Also you can change product image with the form

  ![Admin Form ](screenshots/adminForm.jpg)

## Docker-compose Setup and Starting

To run the application using Docker Compose, please follow these steps:

1. Make sure you have Docker and Docker Compose installed on your machine. If not, please refer to the Docker documentation for installation instructions specific to your operating system.

```sh
  docker-compose -v
```

2. Clone the repository to your local machine:

```sh
  git clone git@github.com:uch2ha/Razoo-Store.git
```

3. Navigate to the project directory:

```sh
  cd Razoo-Store
```

4. Create a .env file in the root directory of the project and provide the necessary environment variable values. You can use the provided .env.example file as a template.

- Backend

![Backend env ](screenshots/backend_env.png)

- Frontend

![Frontend env ](screenshots/frontend_env.png)

5. Build and start the application containers using Docker Compose. This command will build the necessary Docker images and start the application containers in the background.

```sh
  docker-compose up -d
```

6. Once the containers are up and running, you can access the application in your web browser by visiting the specified URL and port.

- Frontend url: http://localhost:5173
