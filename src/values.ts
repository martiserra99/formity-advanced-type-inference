export type ItemValues =
  | FlowValues
  | FormValues
  | YieldValues
  | ReturnValues
  | VariablesValues;

export type FlowValues = ListValues | CondValues | LoopValues | SwitchValues;

export type ListValues = ItemValues[];

export type CondValues = {
  type: "cond";
  cond: {
    then: ListValues;
    else: ListValues;
  };
};

export type LoopValues = {
  type: "loop";
  loop: {
    do: ListValues;
  };
};

export type SwitchValues = {
  type: "switch";
  switch: {
    branches: ListValues[];
    default: ListValues;
  };
};

export type FormValues = {
  type: "form";
  form: object;
};

export type YieldValues = {
  type: "yield";
  yield: {
    next: unknown[];
    back: unknown[];
  };
};

export type ReturnValues = {
  type: "return";
  return: unknown;
};

export type VariablesValues = {
  type: "variables";
  variables: object;
};
