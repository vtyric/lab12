import React, {useState} from "react";
import "./Pizzacard.css";

const pizzaData = {
    badge: "Хит сезона",
    imageSrc: "pizza.jpg",
    altText: "Пицца",
    title: "Пепперони",
    description: "Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла",
    sizes: ["25 см", "30 см", "35 см"],
    price: "от 550₽",
    addToCartIcon: "🛒"
};

const Pizzacard = () => {
    const [count, setCount] = useState(1);
    const [pizzaSize, setPizzaSize] = useState("30 см");

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count > 1 ? count - 1 : 1);
    const clear = () => setCount(1);
    const makePurchase = () => {
        clear();
        alert(`Вы заказали ${count} пицц размером ${pizzaSize}.`);
    }
    const updatePizzaSize = (event) => {
        setPizzaSize(event.target.value);
        clear();
    }

    return (
        <div className="pizzacard">
            <div className="badge">{pizzaData.badge}</div>
            <img
                src={pizzaData.imageSrc}
                alt={pizzaData.altText}
                className="pizza-image"
            />
            <div className="content">
                <h2 className="pizza-title">{pizzaData.title}</h2>
                <p className="description">{pizzaData.description}</p>
                <select className="size-select" defaultValue={pizzaData.sizes[1]} onChange={updatePizzaSize}>
                    {pizzaData.sizes.map((size, index) => (
                        <option key={index} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
                <h2 className="price">{pizzaData.price}</h2>
                <div className="controls">
                    <button onClick={decrease}>-</button>
                    <span>{count}</span>
                    <button onClick={increase}>+</button>
                    <button onClick={makePurchase} className="add-to-cart">{pizzaData.addToCartIcon}</button>
                </div>
            </div>
        </div>
    );
};

export default Pizzacard;
