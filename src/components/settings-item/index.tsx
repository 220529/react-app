import React from "react";
import { updateComponent } from "@/store/workSlice";
import { useNodeProperty } from "@/hooks/component";
import Settings from "@/components/settings";

export default React.memo((props: any) => {
  const { fields } = useNodeProperty({
    property: props.property,
    updateProperty: updateComponent,
  });
  return <Settings fields={fields} />;
});
