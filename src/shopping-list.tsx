import { shoppingListData } from './data.tsx';



export default function ShoppingList() {
    return (
        <>
            <h1>Shopping List:</h1>
            <p>The point of this app is to make shopping lists easier, save you money, and make shopping a less painful experience</p>
            <br></br>
            <OpenShoppingList />
            <ClosedShoppingList />
        </>
    )
}

export function OpenShoppingList() {
    const open = shoppingListData.filter((el) => el.open === true);
    const openItems = open.map(item =>
        <li key={item.id}>
            <p>{item.description}</p>
        </li>    
    )
    return (
        <>
            <h2>"Open" Items:</h2>
            <ul>
                {openItems}
            </ul>
        </>
    )
}

export function ClosedShoppingList() {
    const closed = shoppingListData.filter((el) => el.open === false);
    const closedItems = closed.map(item =>
        <li key={item.id}>
            <p>{item.description}</p>
        </li>    
    )
    return (
        <>
            <h2>Closed Items:</h2>
            <ul>
                {closedItems}
            </ul>
        </> 
    )
}
