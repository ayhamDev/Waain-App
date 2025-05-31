import { useColorScheme } from "@/hooks/useColorScheme";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import TextInputField from "../ui/Input";

// Country data with phone codes and formatting
const COUNTRIES = [
  {
    code: "SA",
    name: "Saudi Arabia",
    dialCode: "+966",
    flag: "🇸🇦",
    format: "## ### ####",
  },
];

type Country = (typeof COUNTRIES)[0];

type PhoneInputProps = {
  value?: string;
  onChangeText?: (
    phoneNumber: string,
    formattedNumber: string,
    country: Country
  ) => void;
  onCountryChange?: (country: Country) => void;
  defaultCountry?: string;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  countryPickerStyle?: ViewStyle;
  modalStyle?: ViewStyle;
  rtl?: boolean;
};

export type PhoneInputRef = {
  focus: () => void;
  blur: () => void;
  getFormattedNumber: () => string;
  getUnformattedNumber: () => string;
  getCountry: () => Country;
};
function formatWithMask(template: string, digits: string = "0123456789") {
  let digitIndex = 0;
  return template.replace(/#/g, () => {
    if (digitIndex < digits.length) {
      return digits[digitIndex++];
    } else {
      // If no more digits, replace with empty or keep #
      return "#";
    }
  });
}

const PhoneInputField = forwardRef<PhoneInputRef, PhoneInputProps>(
  (
    {
      value = "",
      onChangeText,
      onCountryChange,
      defaultCountry = "US",
      placeholder = "Enter phone number",
      label,
      errorMessage,
      disabled = false,
      containerStyle,
      countryPickerStyle,
      modalStyle,
      rtl = false,
      ...rest
    },
    ref
  ) => {
    const { theme } = useColorScheme() ?? "light";
    const isDark = theme === "dark";

    const [selectedCountry, setSelectedCountry] = useState<Country>(
      COUNTRIES.find((c) => c.code === defaultCountry) || COUNTRIES[0]
    );
    const [phoneNumber, setPhoneNumber] = useState(value);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const inputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      getFormattedNumber: () =>
        formatPhoneNumber(phoneNumber, selectedCountry.format),
      getUnformattedNumber: () => phoneNumber.replace(/\D/g, ""),
      getCountry: () => selectedCountry,
    }));

    const formatPhoneNumber = (number: string, format: string): string => {
      const cleaned = number.replace(/\D/g, "");
      let formatted = "";
      let numberIndex = 0;

      for (let i = 0; i < format.length && numberIndex < cleaned.length; i++) {
        if (format[i] === "#") {
          formatted += cleaned[numberIndex];
          numberIndex++;
        } else {
          formatted += format[i];
        }
      }

      return formatted;
    };

    const handlePhoneNumberChange = (text: string) => {
      // Remove all non-digits
      const cleaned = text.replace(/\D/g, "");

      // Apply formatting
      const formatted = formatPhoneNumber(cleaned, selectedCountry.format);

      setPhoneNumber(cleaned);
      onChangeText?.(cleaned, formatted, selectedCountry);
    };

    const handleCountrySelect = (country: Country) => {
      setSelectedCountry(country);
      setIsModalVisible(false);
      onCountryChange?.(country);

      // Reformat current number with new country format
      const formatted = formatPhoneNumber(phoneNumber, country.format);
      onChangeText?.(phoneNumber, formatted, country);
    };

    const CountryPicker = () => (
      <TouchableOpacity
        style={[
          styles.countryPicker,
          isDark && styles.countryPickerDark,
          countryPickerStyle,
        ]}
        onPress={() => !disabled && setIsModalVisible(true)}
        disabled={disabled}
      >
        <Text style={styles.flag}>{selectedCountry.flag}</Text>
        <Text
          style={[
            styles.dialCode,
            isDark && styles.dialCodeDark,
            disabled && styles.dialCodeDisabled,
          ]}
        >
          {selectedCountry.dialCode}
        </Text>
        <Text
          style={[
            styles.dropdownArrow,
            isDark && styles.dropdownArrowDark,
            disabled && styles.dropdownArrowDisabled,
          ]}
        >
          ▼
        </Text>
      </TouchableOpacity>
    );

    const renderCountryItem = ({ item }: { item: Country }) => (
      <TouchableOpacity
        style={[styles.countryItem, isDark && styles.countryItemDark]}
        onPress={() => handleCountrySelect(item)}
      >
        <Text style={styles.flag}>{item.flag}</Text>
        <View style={styles.countryInfo}>
          <Text style={[styles.countryName, isDark && styles.countryNameDark]}>
            {item.name}
          </Text>
          <Text
            style={[
              styles.countryDialCode,
              isDark && styles.countryDialCodeDark,
            ]}
          >
            {item.dialCode}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={[styles.container, containerStyle]}>
        <TextInputField
          ref={inputRef}
          label={label}
          placeholder={formatWithMask(selectedCountry.format) || placeholder}
          value={formatPhoneNumber(phoneNumber, selectedCountry.format)}
          onChangeText={handlePhoneNumberChange}
          errorMessage={errorMessage}
          disabled={disabled}
          keyboardType="phone-pad"
          rtl={rtl}
          startComponent={rtl ? null : <CountryPicker />}
          endComponent={rtl ? <CountryPicker /> : null}
          {...rest}
        />

        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View
              style={[
                styles.modalContent,
                isDark && styles.modalContentDark,
                modalStyle,
              ]}
            >
              <View style={styles.modalHeader}>
                <Text
                  style={[styles.modalTitle, isDark && styles.modalTitleDark]}
                >
                  Select Country
                </Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text
                    style={[
                      styles.closeButtonText,
                      isDark && styles.closeButtonTextDark,
                    ]}
                  >
                    ✕
                  </Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={COUNTRIES}
                keyExtractor={(item) => item.code}
                renderItem={renderCountryItem}
                style={styles.countryList}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countryPicker: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
  },
  countryPickerDark: {
    backgroundColor: "#333",
  },
  flag: {
    fontSize: 18,
    marginRight: 6,
  },
  dialCode: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginRight: 4,
  },
  dialCodeDark: {
    color: "#fff",
  },
  dialCodeDisabled: {
    color: "#999",
  },
  dropdownArrow: {
    fontSize: 10,
    color: "#666",
  },
  dropdownArrowDark: {
    color: "#ccc",
  },
  dropdownArrowDisabled: {
    color: "#999",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 0,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalContentDark: {
    backgroundColor: "#222",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  modalTitleDark: {
    color: "#fff",
  },
  closeButton: {
    padding: 4,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#666",
  },
  closeButtonTextDark: {
    color: "#ccc",
  },
  countryList: {
    maxHeight: 400,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  countryItemDark: {
    borderBottomColor: "#333",
  },
  countryInfo: {
    flex: 1,
    marginLeft: 12,
  },
  countryName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 2,
  },
  countryNameDark: {
    color: "#fff",
  },
  countryDialCode: {
    fontSize: 14,
    color: "#666",
  },
  countryDialCodeDark: {
    color: "#ccc",
  },
});

export default PhoneInputField;
