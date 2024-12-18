import { useState } from "react";
import Item from "./Item";

/**
 * Component to create the packaging list UI
 *
 * @param items - prop containing the list of items that we want to display in the
 * packaging list
 *
 * @param onDeleteItem - callback function to be called when an item is selected
 * to be deleted from the items list the onDeleteItem will take the id of the item
 * as input
 *
 * @param onToggleItem - callback function to toggle the item as packed or not
 *
 * @param onClearItemsList - callback function to clear the items list
 */
const PackagingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItemsList,
}) => {
  // property to get the sorting options
  const sortingOptions = {
    input: "Sort by input order",
    description: "Sort by the description",
    packed: "Sort by packed status",
  };

  // state variable to get the sorting option from the sorting dropdown to sort the packing list
  //
  // the default value for sortBy is the value for input key from the sortingOptions
  const [sortBy, setSortBy] = useState("input");

  // using the derived state to get the sorted array from the items array based
  // on the sortBy state
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  // NOTE:
  // using the slice() method to get the copy of items and does not change the
  // original array since the sort() method is a mutating method and in react
  // we consider immutability
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  // using the className property and passing the css class to style the component
  return (
    <div className="list">
      <ul>
        {
          // using the map() method from the initialItems to iterate over the initialItems
          // list and return the Item Component with the data
          //
          // passing the onDeleteItem callback as input to the onDeleteItem callback
          // prop to get the id of the item to deleted from the items list
          sortedItems.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              description={item.description}
              quantity={item.quantity}
              packed={item.packed}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))
        }
      </ul>
      {/** creating the UI to show button to sort the packing list and also button
        to clear the packing list */}
      <div className="actions">
        {/** dropdown UI to sort the packing list
          
          passing sortBy as input to the value prop to get the sorting value
          selected by the user

          using the onChange prop and passing an anonymous callback as input 
          having the current event as input and then calling the setSortBy()
          method and passing the event.target.value as input to get the key 
          for the option selected by the user
           */}
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          {Object.entries(sortingOptions).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        {/** button to clear the packing list */}
        <button onClick={onClearItemsList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackagingList;
