import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React, { forwardRef, useState } from "react";
import { TextInput } from "react-native";
import { IconButton } from "../ui/IconButton";
import TextInputField from "../ui/Input";
import MingCuteIcon from "../ui/MingCute/MingCuteIcon";

// Props from TextInputField are forwarded automatically
type PasswordInputProps = React.ComponentProps<typeof TextInputField>;

const PasswordInput = forwardRef<TextInput, PasswordInputProps>(
  (props, ref) => {
    const [visible, setVisible] = useState(false);
    const { theme } = useColorScheme();
    return (
      <TextInputField
        ref={ref}
        secureTextEntry={!visible}
        rtl
        startComponent={() => (
          <IconButton
            rounded={false}
            onPress={() => setVisible(!visible)}
            style={{
              width: 35,
              height: 35,
            }}
            variant="primary"
            icon={(color) => (
              <MingCuteIcon
                name={visible ? "eye_close_line" : "eye_line"}
                size={20}
                color={color}
              />
            )}
          />
        )}
        endComponent={({ color }) => (
          <MingCuteIcon
            name="shield_shape_fill"
            size={20}
            color={Colors[theme].secondary.default}
          />
        )}
        {...props} // 👈 spread all additional props from parent
      />
    );
  }
);

export default PasswordInput;
