/**
 * Component to create the Stats UI
 *
 * @param items - prop to get the list of items
 */
const Stats = ({ items }) => {
  // property to get the number of items in the items array using the concept of
  // derived states
  //
  // the below prop will be updated as soon as the items state will be updated
  const numItems = items.length;

  // property to get the number of items packed
  const itemsPacked = items.filter((item) => item.packed).length;

  // property to get the percentage of items packed
  const percentage = isNaN((itemsPacked / numItems) * 100)
    ? 0
    : Math.round((itemsPacked / numItems) * 100);

  // code below is to render the UI if the items array is empty
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  return (
    // using the className property and adding a css class to style
    // component below
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${" " + itemsPacked + " "} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
