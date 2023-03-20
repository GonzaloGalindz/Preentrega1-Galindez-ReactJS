import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ clothing }) => {
  return (
    <div>
      {clothing.map((indumentary) => {
        return <Item key={indumentary.id} {...indumentary} />;
      })}
    </div>
  );
};

export default ItemList;
