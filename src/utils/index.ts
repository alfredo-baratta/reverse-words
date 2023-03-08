import { reverse, split, replace } from "lodash";

const splittedText = (text: string): string[] => split(text, " ");

const toArray = (text: string): string[] => split(text, "");

const reverseItem = (text: string[]): string => reverse(text).toString();

const clearItem = (text: string): string => replace(text, /\,/g, "");

export { splittedText, toArray, reverseItem, clearItem };
