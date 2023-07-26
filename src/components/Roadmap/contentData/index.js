/* eslint-disable import/no-anonymous-default-export */
import infMajor from "./infMajor";
import csMajor from "./csMajor";
import dsMajor from "./dsMajor";
import userInterface from "./userInterface";
import communication from "./communication";

export default {
  ...csMajor,
  ...infMajor,
  ...dsMajor,
  ...userInterface,
  ...communication,
};
