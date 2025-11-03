import type { ListValues } from "./values";

export type Cond<T extends { then: ListValues; else: ListValues }> = {
  type: "cond";
  cond: {
    then: T["then"];
    else: T["else"];
  };
};

export type Loop<T extends ListValues> = {
  type: "loop";
  loop: {
    do: T;
  };
};

export type Switch<T extends { branches: ListValues[]; default: ListValues }> =
  {
    type: "switch";
    switch: {
      branches: T["branches"];
      default: T["default"];
    };
  };

export type Form<T extends object> = {
  type: "form";
  form: T;
};

export type Yield<T extends { next: unknown[]; back: unknown[] }> = {
  type: "yield";
  yield: {
    next: T["next"];
    back: T["back"];
  };
};

export type Return<T> = {
  type: "return";
  return: T;
};

export type Variables<T extends object> = {
  type: "variables";
  variables: T;
};
