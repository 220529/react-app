import faker from "faker";

const length = 10000 * 10;
const items = [];
for (let id = 0; id < length; id++) {
  items.push({
    id,
    value: id,
    value: faker.lorem.sentences(), // 长文本
  });
}

export { items };
