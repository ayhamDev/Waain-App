import { useColorScheme } from "@/hooks/useColorScheme";
import React, { forwardRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type RenderComponent = (props: { color: string }) => React.ReactNode;

type Props = {
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
  rtl?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
  startComponent?: React.ReactNode | RenderComponent;
  endComponent?: React.ReactNode | RenderComponent;
} & TextInputProps;

const TextInputField = forwardRef<TextInput, Props>(
  (
    {
      label,
      errorMessage,
      disabled = false,
      rtl = false,
      containerStyle,
      labelStyle,
      inputStyle,
      errorStyle,
      style,
      startComponent,
      endComponent,
      ...rest
    },
    ref
  ) => {
    const { theme } = useColorScheme() ?? "light";
    const isDark = theme === "dark";
    const isErrored = !!errorMessage;

    const resolvedColor = isErrored
      ? "#ff4d4f"
      : disabled
      ? "#aaa"
      : isDark
      ? "#fff"
      : "#000";

    const renderComponent = (
      component: React.ReactNode | RenderComponent
    ): React.ReactNode => {
      if (typeof component === "function") {
        return component({ color: resolvedColor });
      }
      return component;
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {!!label && (
          <Text
            style={[
              styles.label,
              isDark && styles.labelDark,
              rtl && styles.rtlText,
              labelStyle,
              disabled && styles.labelDisabled,
            ]}
          >
            {label}
          </Text>
        )}
        <View
          style={[
            styles.inputWrapper,
            isDark && styles.inputDark,
            isErrored && styles.inputError,
            disabled && styles.inputDisabled,
          ]}
        >
          {!!startComponent && (
            <View style={styles.sideComponent}>
              {renderComponent(startComponent)}
            </View>
          )}
          <TextInput
            ref={ref}
            editable={!disabled}
            style={[
              styles.input,
              rtl && styles.rtlText,
              inputStyle,
              style,
              { flex: 1 },
              disabled && styles.inputTextDisabled,
              isDark && styles.inputTextDark,
            ]}
            placeholderTextColor={isDark ? "#999" : "#aaa"}
            textAlign={rtl ? "right" : "left"}
            {...rest}
          />
          {!!endComponent && (
            <View style={styles.sideComponent}>
              {renderComponent(endComponent)}
            </View>
          )}
        </View>
        {!!errorMessage && (
          <Text style={[styles.errorMessage, errorStyle]}>{errorMessage}</Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    fontFamily: "Cairo-Medium",
  },
  labelDark: {
    color: "#fff",
  },
  labelDisabled: {
    color: "#aaa",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 0.75,
    borderColor: "#ccc",
    backgroundColor: "white",
    minHeight: 45,
  },
  input: {
    fontFamily: "Cairo-Medium",
    fontSize: 16,
    color: "#000",
    paddingVertical: 0,
    paddingHorizontal: 6,
    height: 30,
  },
  inputTextDark: {
    color: "#fff",
  },
  inputTextDisabled: {
    color: "#999",
  },
  inputDark: {
    borderColor: "#444",
    backgroundColor: "#222",
  },
  inputError: {
    borderColor: "#ff4d4f",
  },
  inputDisabled: {
    backgroundColor: "#f0f0f0",
  },
  rtlText: {
    textAlign: "right",
    writingDirection: "rtl",
  },
  errorMessage: {
    color: "#ff4d4f",
    fontSize: 12,
    marginTop: 4,
  },
  sideComponent: {
    marginHorizontal: 2,
  },
});

export default TextInputField;
