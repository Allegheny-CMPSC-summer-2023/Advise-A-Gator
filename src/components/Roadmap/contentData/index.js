import infMajor from "./infMajor";
import * as csMajor from "./csMajor";
import * as dsMajor from "./dsMajor";
import userInterface from "./userInterface";
import communication from "./communication";

export default {
  ...csMajor,
  ...infMajor,
  ...dsMajor,
  ...userInterface,
  ...communication,
};
