import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { JSX, useEffect } from "react";
import { BackHandler } from "react-native";

const AppSheetWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const { dismiss } = useBottomSheetModal();

  useEffect(() => {
    const onBackPress = () => {
      dismiss();
      // onClose?.();
      return true;
    };

    const sub = BackHandler.addEventListener("hardwareBackPress", onBackPress);
    console.log(true);

    return () => {
      console.log(false);

      sub.remove();
    };
  }, [dismiss]);
  return children;
};

export default AppSheetWrapper;
