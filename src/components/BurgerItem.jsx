export function BurgerItem({image, content, name, price}) {
    console.log(image, content, name, price)
    return (
        <div className="menuItem">
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <h7>{content}</h7>
            <i>
                <p>{price} TL</p>
            </i>

        </div>
    )
}