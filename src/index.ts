import { each, trim } from "lodash";
import { splittedText, toArray, reverseItem, clearItem } from "./utils";

const reverseText = (text: string): string => {
  let newString = "";

  each(splittedText(text), (item: string) => {
    const trimmedItem: string = trim(item);

    const arrayItem: string[] = toArray(trimmedItem);

    const reversedItem: string = reverseItem(arrayItem);

    const cleanReversedItem: string = clearItem(reversedItem);

    newString += cleanReversedItem + " ";
  });

  return newString;
};

module.exports = { reverseText: reverseText };
