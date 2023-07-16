import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Raw data
const pizzaData = [
  {
    name: "Pizza Chilliy",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Paneer",
    ingredients: "Tomato, mozarella,Panner, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// components of website we gonna build

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// pizaa component
function Pizza(props) {
  console.log(props);
  const sold = props.pizzaData.soldOut;

  return (
    <li className={sold ? "pizza sold-out" : "pizza "}>
      <img src={props.pizzaData.photoName} alt={props.pizzaData.name} />
      <article>
        <h3>{props.pizzaData.name}</h3>
        <p>{props.pizzaData.ingredients}</p>
        <span>{props.pizzaData.price}</span>
        {sold ? <span>Sold Out</span> : null}
      </article>
    </li>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzaCount = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>
      {pizzaCount > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaData={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : null}

      {/* <Pizza
        pizzaName="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        pizzaPhoto="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        pizzaName="Pizza Margherita"
        ingredients="Tomato and mozarella"
        pizzaPhoto="pizzas/margherita.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        we are currently open until {props.closeHour}:00, come visit us or order
        online.
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We happy to take your order between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

// main app component
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

//react v18 here below we render our code
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
