import { useState } from "react";

/**
 * Component to display the Form UI to add a new item to the packaging list
 *
 * @param onAddItems - callback function to add new items to the packaging list
 * this onAddItems callback takes the items as input that it will add to the list
 * of the packaging items
 */
const Form = ({ onAddItems }) => {
  // using the useState() hook to store the description details of the form
  // and the default value of the description property is empty string
  //
  // in the useState hook below the description property contains the description
  // of the item to be added to the packaging list and the setDescription is the
  // callback function to update the description property
  const [description, setDescription] = useState("");

  // using the useState() hook to store the quantity value in the form
  // and the default value of the quantity property is 1
  //
  // the quantity property contains the quantity of the item to be added to the
  // packaging list and the setQuantity is the callback function to update the
  // quantity property
  const [quantity, setQuantity] = useState(1);

  // Method to handle the event when the Add button is clicked
  //
  // the method below takes the event as input when the button is clicked
  //
  // the event object passed to the method as input contains the current event
  // instance
  const handleAddBtnPressed = (event) => {
    // using the preventDefault() method from the event instance to prevent the
    // app from reloading when the user pressed the add button to submit the form
    event.preventDefault();
    if (!description) return;
    // object to store the details of the new item
    const newItem = { id: Date.now(), quantity, description, packed: false };

    // using the onAddItems() callback and passing the new item as input to add
    // the new item to the packaging list
    onAddItems(newItem);
    // setting the description and quantity to its initial state after the user
    // has clicked the add button to submit the form
    setDescription("");
    setQuantity(1);
  };

  // using the className property to add css class to style the component
  return (
    // using the onSubmit prop from the form tag to handle the form submission
    // and passing the handleAddBtnPressed method to register an event handler
    // for handling the submittion of the form when the add button is pressed in
    // the form
    <form className="add-form" onSubmit={handleAddBtnPressed}>
      <h3>What do you need for your 😍 trip?</h3>
      {/** passing the quantity as input to the value prop to set the current
        value of the select Component below
        
        using the onChange prop and passing the anonymous function to handle the
        change event of the select Component

        the anonymous function takes event object as input and this event object
        contains the current event instance having the data selected by the user
        in the select component and then using the setQuantity method to update the
        quantity prop with the data selected by the user in the select component
        by passing the event.target.value as input to the setQuantity method

        using the Number() method and passing the event.target.value as input to convert
        the selected value to number and then passing the result to the setQuantity
        method to update the quantity prop with the selected value since the select 
        component will give the selected value as string and we need to convert it to
        number to perform the arithmetic operations
        */}
      <select
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value))}
      >
        {
          // Options tag to create a options list to add 20 items in the packaging list
          //
          // creating an array of length 20 and iterating over it to add options to
          // add 20 items in the packaging list
          Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))
        }
      </select>
      {/** Input component to add a new item in the packaging list 
        
        passing description property as input to the value to get the description
        provided by the user in the input field

        using the onChange prop and passing the anonymous function to handle the
        change event of the input field

        the anonymous function takes event object as input and this event object
        contains the current event instance having the data entered by the user
        in the input field and then using the setDescription method to update the
        description property with the data entered by the user in the input field
        by passing the event.target.value as input to the setDescription method
        */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => {
          // the code below is to print the current target component in the console
          // console.log(event.target);
          setDescription(event.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
