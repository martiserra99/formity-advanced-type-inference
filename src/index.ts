import type { ReturnOutput } from "./return";
import type { Form, Cond, Return } from "./utils";

type Values = [
  Form<{ working: boolean }>,
  Cond<{
    then: [
      Form<{ company: string }>,
      Return<{
        working: true;
        company: string;
      }>
    ];
    else: [
      Form<{ searching: boolean }>,
      Return<{
        working: false;
        searching: boolean;
      }>
    ];
  }>
];

export type Type = ReturnOutput<Values>;

// type Type = {
//     working: true;
//     company: string;
// } | {
//     working: false;
//     searching: boolean;
// };
