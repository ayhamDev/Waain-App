import createIconSet from "@expo/vector-icons/createIconSet";
// import GlyphMap from "./unicode";
const GlyphMap = {
  // tab bar
  mgc_home_4_line: 0xeedf,
  mgc_home_4_fill: 0xeede,
  mgc_search_line: 0xf267,
  mgc_search_fill: 0xf266,
  mgc_shopping_cart_1_line: 0xf2a9,
  mgc_shopping_cart_1_fill: 0xf2a8,
  mgc_user_2_line: 0xf455,
  mgc_user_2_fill: 0xf454,

  // header
  mgc_location_fill: 0xefd2,
  mgc_notification_fill: 0xf0a2,
};
export default createIconSet(
  GlyphMap,
  "MingCute",
  require("@/assets/fonts/MingCute.ttf")
);
