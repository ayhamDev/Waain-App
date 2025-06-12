import React, { useCallback } from "react";
import { TextInput } from "react-native";

// Method 1: Custom Hook (Simple approach)
export const useScrollToInput = (
  scrollViewRef: React.RefObject<any>,
  offset: number = 120
) => {
  const scrollToInput = useCallback(
    (inputRef: React.RefObject<TextInput>) => {
      setTimeout(() => {
        inputRef.current?.measureInWindow((x, y, width, height) => {
          const scrollY = Math.max(0, y - offset);
          scrollViewRef.current?.scrollTo({
            y: scrollY,
            animated: true,
          });
        });
      }, 100);
    },
    [scrollViewRef, offset]
  );

  return scrollToInput;
};
