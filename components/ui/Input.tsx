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

type Props = {
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
  rtl?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
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
      ...rest
    },
    ref
  ) => {
    const { theme } = useColorScheme() ?? "light";
    const isDark = theme === "dark";
    const isErrored = !!errorMessage;

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
        <TextInput
          ref={ref}
          editable={!disabled}
          style={[
            styles.input,
            isDark && styles.inputDark,
            rtl && styles.rtlText,
            isErrored && styles.inputError,
            disabled && styles.inputDisabled,
            inputStyle,
            style,
          ]}
          placeholderTextColor={isDark ? "#999" : "#aaa"}
          textAlign={rtl ? "right" : "left"}
          {...rest}
        />
        {!!errorMessage && (
          <Text style={[styles.errorMessage, errorStyle]}>{errorMessage}</Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
  labelDark: {
    color: "#fff",
  },
  labelDisabled: {
    color: "#aaa",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fff",
  },
  inputDark: {
    borderColor: "#444",
    backgroundColor: "#222",
    color: "#fff",
  },
  inputError: {
    borderColor: "#ff4d4f",
  },
  inputDisabled: {
    backgroundColor: "#f0f0f0",
    color: "#999",
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
});

export default TextInputField;
