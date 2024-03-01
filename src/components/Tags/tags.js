import { drinksList } from "../../utils/drinksList";

const tags = [];
const buildTagCloud = () => {
  drinksList.forEach((drink) => {
    drink.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
};
buildTagCloud();

const Tags = (props) => {
  return this.props.tags.map((tag, index) => {
    return (
      <div key={index} className="tag">
        <input
          className="tag"
          type="checkbox"
          id={index}
          name={tag[index].value}
          value={tag[index].value}
          value={tag}
        />
      </div>
    );
  });
};

export default Tags;
