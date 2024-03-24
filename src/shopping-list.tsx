import { shoppingListData } from './data.tsx';



export default function ShoppingList() {
    const listItems = shoppingListData.map(item =>
        <li key={item.id}>
            <p>{item.description}</p>
        </li>
        )

    return (
        <>
            <ul>{listItems}</ul>
        </>
    )

}

export function GenerateShoppingListFromArray() {

}