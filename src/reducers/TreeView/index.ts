import type { Reducer } from "react";
import { dragStart } from "./dragStart";
import { dragEnd } from "./dragEnd";
import { dropToNode } from "./dropToNode";
import { dropToSpacer } from "./dropToSpacer";

export const treeViewReducer: Reducer<TreeView.State, TreeView.Actions> = (
  prevState,
  action
): TreeView.State => {
  console.debug("action", action);

  switch (action.type) {
    case "DRAG_START":
      return dragStart(prevState, action.payload);
    case "DRAG_END":
      return dragEnd(prevState);
    case "DROP_TO_NODE":
      return dropToNode(prevState, action.payload);
    case "DROP_TO_SPACER":
      return dropToSpacer(prevState, action.payload);
  }
};
