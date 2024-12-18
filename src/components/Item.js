/**
 * Component to display the item in the Packaging List
 *
 * the prop below take the id, description, quantity, packed as input to show
 * the details of the item
 *
 * @param onDeleteItem - function to delete the item from the list
 *
 * @param onToggleItem - function to toggle the item as packed or not
 */
const Item = ({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) => {
  return (
    <li>
      {/** component to create a checkbox to select or deselect the item
        
        passing packed as input to the value property to get the value if
        the checkbox is checked or not

        using the onChange prop and passing the anonymous callback as input
        to call the onToggleItem function when the checkbox is checked or not

        the anonymous callback takes event as input that contains the current
        event object and then returning the onToggleItem callback method having
        event.target.value as input to get the value of the checkbox and update
        the item as packed or not
        */}
      <input
        type="checkbox"
        value={packed}
        onChange={(_) => onToggleItem(id)}
      />
      {/** The code below is to use the style prop to style the span component
        below using css */}
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      {/**
        using the onClick prop and an anonymous callback that returns the 
        onDeleteItem callback method having the id of the item to be deleted
         as input */}
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
