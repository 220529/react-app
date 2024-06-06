import React, { useEffect } from "react";
import { Good, useModal } from "ns-dumi";

export default React.memo(() => {
  const { open } = useModal();
  return (
    <div>
      <Good title="Hello dumi!" />
      <div onClick={() => open("This is a modal message")}>dumi</div>
    </div>
  );
});
