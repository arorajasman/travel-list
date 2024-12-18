import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackagingList from "./components/PackagingList";
import Stats from "./components/Stats";

// Main component for the project
function App() {
  // NOTE:
  // move the items state variable in the App from the Form component to lift the
  // state of items variable up to provide the items list having the items added
  // from the form component to the PackagingList component

  // using the useState() hook to store the list of items added by the user
  // and the default value of the items property is an empty array
  //
  // the items property contains the list of items added by the user and the
  // setItems is the callback function to update the items property
  const [items, setItems] = useState([]);

  // NOTE:
  // In react we are not allowed to mutate states
  /**
   * Method to add a new item to the items list for displaying the item in the
   * packaging list
   *
   * @param item - item that we need to add to the items array for displaying
   *                   the item in the packaging list
   */
  const handleAddItems = (item) => {
    // using the setItems() callback and passing the anonymous callback as input
    // and the anonymous callback contains the current list of items as input
    // and the new item to be added along with the current list of items to return
    // the new list of items
    setItems((items) => [...items, item]);
  };

  /**
   * Method to delete an item based on the id of the item provided as input to
   * the method
   *
   * @param id - id of the item that we need to delete from the items array
   */
  const handleDeleteItem = (id) => {
    // using the setItems() callback and passing the anonymous callback as input
    // and the anonymous callback contains the current list of items as input
    // and calling the filter() method on the items array and passing the callback
    // function as input to the filter() method and the callback function contains
    // the item to be deleted as input and returning true if the item to be deleted
    // is not equal to the item in the items array and returning false if the item
    // to be deleted is equal to the item in the items array
    setItems((items) => items.filter((item) => item.id !== id));
  };

  /**
   * Method to handle the toggle of the checkbox for a particular item in the
   * packaging list
   *
   * @param id - id of the item that we need to toggle the checkbox for
   */
  const handleToggleItem = (id) => {
    // the code below is to update the value of packed for the item with the
    // provided id to true if the value of packed is false and vice versa
    setItems((items) =>
      items.map((item, _) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  /**
   * Method to clear the list of items
   */
  const handleClearItemsList = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    // using setItems and passing empty array to set the list of items
    if (isConfirmed) setItems([]);
  };

  // using the className property and add the css class to style the component
  return (
    <div className="app">
      <Logo />
      {/**
        Passing handleAddItems method as input to the onAddItems callback to 
        get the item provided by the onAddItems callback and add the item to the
        items list
        */}
      <Form onAddItems={handleAddItems} />
      {/** passing items to the items prop to provide the items list to the 
        packaging list component 
        
        passing handleDeleteItem method as input to the onDeleteItem callback to
        get the id of the item to be deleted and delete the item from the items
        list

        passing the handleToggleItem method as input to the onToggleItem callback
        to get the id of the item and toggle the isPacked status of the item in 
        the items list
        */}
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItemsList={handleClearItemsList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
