const ListItem = ({ item }) => {
  return (
    <p>
      <span style={{ color: "red" }}>{item.id}</span> {item.value}
    </p>
  );
};

export default ListItem;
