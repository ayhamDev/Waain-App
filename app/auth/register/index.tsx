import PasswordInput from "@/components/global/AppPasswordInput";
import PhoneInputField from "@/components/global/AppPhoneInput";
import { AppText } from "@/components/global/AppText";
import RegisterContainer from "@/components/global/RegisterContainer";
import ParallaxScrollView, {
  ParallaxScrollViewRef,
} from "@/components/ParallaxScrollView";
import { AppButton } from "@/components/ui/Button";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useScrollToInput } from "@/hooks/useScrollToInput";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TextInput } from "react-native-gesture-handler";

const RegisterScreen = () => {
  const { theme } = useColorScheme();
  const router = useRouter();

  // Parallax Header Component
  const ParallaxHeader = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Image
        source={require("@/assets/images/AuthPattern.svg")}
        contentFit="cover"
        contentPosition="center"
        style={{
          position: "absolute",
          top: -30,
          width: "100%",
          height: 220,
          zIndex: -1,
        }}
        cachePolicy={"memory-disk"}
      />

      <Image
        source={require("@/assets/images/Logo.svg")}
        style={{
          width: 170,
          height: 66,
        }}
      />
      <AppText type="heading" style={{ textAlign: "center" }}>
        تسجيل حساب جديد
      </AppText>
    </View>
  );

  // Sticky Header Component
  const StickyHeader = () => (
    <View
      style={{
        height: 60,
        backgroundColor: Colors[theme].background.default,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: Colors[theme].secondary.default,
      }}
    >
      <AppText type="heading" style={{ textAlign: "center" }}>
        تسجيل حساب جديد
      </AppText>
    </View>
  );

  // Scroll-to-input hook
  const scrollRef = useRef<ParallaxScrollViewRef>(null);
  const FoucsInput = useScrollToInput(scrollRef);

  // Refs for each input
  const inputNameRef = useRef<TextInput>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPhoneRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);
  const inputConfirmPasswordRef = useRef<TextInput>(null);

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ParallaxScrollView
        ref={scrollRef}
        headerHeight={200}
        sticyHeaderHeight={60}
        header={<ParallaxHeader />}
        stickyHeader={<StickyHeader />}
      >
        <RegisterContainer
          header={null}
          contentStyle={{
            paddingTop: 20,
          }}
          scroll={false}
        >
          <View style={{ paddingBottom: 75 }}>
            <View
              style={{
                gap: 12,
                marginBottom: 16,
              }}
            >
              {/* Username */}
              <TextInputField
                ref={inputNameRef}
                onFocus={() => {
                  FoucsInput(inputNameRef as any);
                }}
                label="اسم المستخدم"
                rtl={true}
                placeholder="اسم المستخدم"
                textContentType="username"
                endComponent={({ color }) => (
                  <MingCuteIcon
                    name="user_2_fill"
                    size={20}
                    color={Colors[theme].secondary.default}
                  />
                )}
              />

              {/* Email */}
              <TextInputField
                ref={inputEmailRef}
                onFocus={() => {
                  FoucsInput(inputEmailRef as any);
                }}
                label="ايميل"
                rtl={true}
                textContentType="emailAddress"
                placeholder="email@example.com"
                endComponent={({ color }) => (
                  <MingCuteIcon
                    name="mail_fill"
                    size={20}
                    color={Colors[theme].secondary.default}
                  />
                )}
              />

              {/* Phone */}
              <PhoneInputField
                ref={inputPhoneRef as any}
                onFocus={() => {
                  FoucsInput(inputPhoneRef as any);
                }}
                label="رقم تلفونك"
                rtl={true}
              />

              {/* Password */}
              <PasswordInput
                ref={inputPasswordRef}
                onFocus={() => {
                  FoucsInput(inputPasswordRef as any);
                }}
                textContentType="newPassword"
                placeholder="***********"
                label="كلمة المرور"
              />

              {/* Confirm Password */}
              <PasswordInput
                ref={inputConfirmPasswordRef}
                onFocus={() => {
                  FoucsInput(inputConfirmPasswordRef as any);
                }}
                textContentType="newPassword"
                placeholder="***********"
                label="تاكيد كلمة المرور"
              />
            </View>

            {/* Checkboxes */}
            <View style={{ gap: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <View style={{ gap: 5, flexDirection: "row" }}>
                  <AppText type="link" style={{ fontSize: 12 }}>
                    الشروط والأحكام وسياسة الخصوصية
                  </AppText>
                  <AppText type="defaultBold" style={{ fontSize: 12 }}>
                    أوافق على
                  </AppText>
                </View>
                <BouncyCheckbox
                  size={25}
                  fillColor={Colors[theme].primary[600]}
                  disableText={true}
                  unFillColor="#FFFFFF"
                  iconStyle={{ borderColor: Colors[theme].primary[100] }}
                  innerIconStyle={{ borderWidth: 2 }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <AppText>اشترك برسائل ترويجية وعروض خاصة</AppText>
                <BouncyCheckbox
                  size={25}
                  fillColor={Colors[theme].primary[600]}
                  disableText={true}
                  unFillColor="#FFFFFF"
                  iconStyle={{ borderColor: Colors[theme].primary[400] }}
                  innerIconStyle={{ borderWidth: 2 }}
                />
              </View>
            </View>

            {/* Buttons */}
            <View style={{ gap: 10, marginTop: 50 }}>
              <AppButton title="تسجيل حساب جديد" variant="secondary" />
              <AppButton
                title="تسجيل دخول"
                variant="outline"
                onPress={() => router.push("/auth/login")}
              />
            </View>
          </View>
        </RegisterContainer>
      </ParallaxScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
