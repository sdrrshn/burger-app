import {BurgerData} from '../data/BurgerData'
import {BurgerItem} from "./BurgerItem.jsx";
import '../styles/Menu.css'

export function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Burgerlerimiz</h1>
            <div className="menuList">
                {
                    BurgerData.map((menuItem, key) => {
                        return (
                            <BurgerItem
                                key={key}
                                image={menuItem.image}
                                content={menuItem.content}
                                price={menuItem.price}
                                name={menuItem.name}
                            ></BurgerItem>
                        )
                    })
                }
            </div>
        </div>
    )
}