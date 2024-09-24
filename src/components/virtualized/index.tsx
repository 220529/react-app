import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Virtualized from "./custom";
import VirtualizedReact from "./react-virtualized";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "virtualized-custom",
    children: <Virtualized />,
  },
  {
    key: "2",
    label: "virtualized-react",
    children: <VirtualizedReact />,
  },
];

function App() {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="virtualized">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default App;
