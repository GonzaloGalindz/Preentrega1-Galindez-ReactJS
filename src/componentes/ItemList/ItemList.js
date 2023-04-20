import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ indumentary }) => {
  return (
    <div>
      {indumentary.map((indumentary) => {
        return <Item key={indumentary.id} {...indumentary} />;
      })}
    </div>
  );
};

export default ItemList;
