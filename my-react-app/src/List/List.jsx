

function List(){

    const fruits = [ 'Apple', 'Banana', 'Coconut', 'Pineapple', 'Orange'];

    return(
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ) ) }
        </ul>
    )
}

export default List;