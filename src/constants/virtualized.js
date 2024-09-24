import Mock from "mockjs";

const length = 10000 * 10;
const items = [];
for (let id = 0; id < length; id++) {
  items.push({
    id,
    value: id,
    value: Mock.mock("@ctitle(8, 13)"), // 长文本
  });
}

export { items };
