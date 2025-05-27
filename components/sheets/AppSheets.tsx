import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import languageSheet from "./Language";

registerSheet("Language-sheet", languageSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "Language-sheet": SheetDefinition;
  }
}

export {};
