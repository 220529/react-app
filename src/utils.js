export function color() {
  // 生成随机数，范围是 0x000000 到 0xFFFFFF
  const randomColor = Math.floor(Math.random() * 0xffffff);
  // 将随机数转换为 16 进制，并填充 6 位数
  const hexColor = `#${randomColor.toString(16).padStart(6, "0")}`;
  return hexColor;
}
