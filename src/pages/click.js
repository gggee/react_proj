import React from "react";
import { useState } from "react";
import "../pages/css/click_stl.css";
import Menu_footer from "./Menu_footer";

const Click = () => {
    const [count, setCount] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
      }

    function clickMe(amount, sign) {
        switch (sign) {
            case '+':
                setCount(count + amount);
                break;
            case '-':
                setCount(count - amount);
                break;
        }
    }

    function Button(props) {
        return (
            <button className='btn' onClick={() => clickMe(props.amount, props.sign)}>
                {props.text}
            </button>
        );
    }

    return (
        <div className="container">
            <p>{count}</p>
            <Button
                amount={5}
                sign='+'
                text='CLICK'
            ></Button>
            <button onClick={toggleMenu} className="btn_open">Open</button>
            {isMenuOpen && <Menu_footer onClose={toggleMenu} />}
            <footer></footer>
        </div>
    )
}

export default Click;