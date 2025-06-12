import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";
import React, {
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { IconButton } from "../ui/IconButton";
import TextInputField, { TextInputFieldProps } from "../ui/Input";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

interface SearchHeaderProps extends TextInputFieldProps {
  title?: string;
  stack?: boolean;
  scrollY: SharedValue<number>;
  /**
   * If true, TextInputField becomes non-editable and tapping navigates to '/search',
   * passing the current input value as a query param.
   */
  navigateOnPress?: boolean;
}

const SearchHeader = forwardRef<TextInput, SearchHeaderProps>(
  (props, ref: Ref<TextInput>) => {
    const {
      title,
      stack = false,
      scrollY,
      navigateOnPress = false,
      style,
      value: propValue,
      onChangeText: propOnChangeText,
      defaultValue,
      ...restTextInputProps
    } = props;

    const router = useRouter();
    const { theme } = useColorScheme();

    // Determine if fully controlled:
    const isFullyControlled =
      propValue !== undefined && typeof propOnChangeText === "function";

    // Internal state for uncontrolled or “value-only” cases:
    // Initialize from propValue if present, else from defaultValue, else empty.
    const [internalValue, setInternalValue] = useState<string>(() => {
      if (propValue !== undefined) {
        // initialize from passed value
        return String(propValue);
      }
      if (defaultValue !== undefined) {
        return String(defaultValue);
      }
      return "";
    });

    // If propValue changes in value-only mode (i.e., propValue exists but no onChangeText),
    // we sync internal state so displayedValue updates when parent propValue changes.
    useEffect(() => {
      if (propValue !== undefined && !isFullyControlled) {
        setInternalValue(String(propValue));
      }
    }, [propValue, isFullyControlled]);

    // displayedValue is from prop if fully controlled, else from internal state
    const displayedValue = isFullyControlled
      ? (propValue as string)
      : internalValue;

    // Handler for text change
    const handleChangeText = useCallback(
      (text: string) => {
        if (isFullyControlled && propOnChangeText) {
          propOnChangeText(text);
        } else {
          setInternalValue(text);
        }
      },
      [isFullyControlled, propOnChangeText]
    );

    // Animated style for header background/border
    const animatedStyle = useAnimatedStyle(() => {
      const rawBg = interpolate(scrollY.value, [0, 30], [0, 1]);
      const borderWidth = interpolate(scrollY.value, [0, 30], [0, 0.5]);
      return {
        backgroundColor: `rgba(255, 255, 255, ${Math.max(rawBg, 0)})`,
        borderBottomWidth: borderWidth,
      };
    }, [scrollY]);

    // Handler when tapping in navigateOnPress mode
    const handlePress = () => {
      // Navigate to /search, passing query if non-empty
      if (displayedValue && displayedValue.trim().length > 0) {
        router.push({
          pathname: "/search",
          params: { query: displayedValue.trim(), stack: "result" },
        });
      } else {
        // If empty, you could still navigate without params, or disable press:
        router.push("/search");
      }
    };

    // Build the base TextInputField
    const BaseInput = (
      <TextInputField
        startComponent={({ color }) => (
          <MingCuteIcon size={22} name="search_line" color={color} />
        )}
        ref={ref}
        placeholder="Search..."
        // Supply value and onChangeText for both controlled and uncontrolled:
        value={displayedValue}
        onChangeText={handleChangeText}
        // Non-editable if navigateOnPress
        editable={!navigateOnPress}
        // Disable pointer events so Pressable catches touches
        pointerEvents={navigateOnPress ? "none" : "auto"}
        // Merge external style but ensure flex:1 for layout
        style={[styles.inputInner, style]}
        {...restTextInputProps}
      />
    );

    return (
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.container,
          { borderColor: Colors[theme].secondary.default, gap: 16 },
          animatedStyle,
        ]}
      >
        {stack && (
          <IconButton
            rounded={false}
            icon={(color) => (
              <MingCuteIcon name="left_line" size={24} color={color} />
            )}
            onPress={() => router.back()}
          />
        )}
        {navigateOnPress ? (
          // Wrap in Pressable with identical layout
          <Pressable
            onPress={handlePress}
            style={styles.inputWrapper}
            android_ripple={{ color: Colors[theme].secondary.default + "33" }}
          >
            {/* Render BaseInput inside a non-touchable View so layout identical */}
            <View pointerEvents="none" style={styles.inputWrapper}>
              {BaseInput}
            </View>
          </Pressable>
        ) : (
          // Editable input
          BaseInput
        )}
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    paddingTop: 5,
    boxSizing: "content-box",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 1000,
  },
  // Wrapper style for Pressable: same layout as TextInputField (flex:1, row, center)
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  // Inner style for TextInputField: flex:1 so it fills wrapper
  inputInner: {
    flex: 1,
  },
});

export default SearchHeader;
