import AppBottomView from "@/components/global/AppBottomView";
import PasswordInput from "@/components/global/AppPasswordInput";
import PhoneInputField from "@/components/global/AppPhoneInput";
import { AppText } from "@/components/global/AppText";
import AuthContainer from "@/components/global/AuthContainer";
import { AppButton } from "@/components/ui/Button";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Keyboard, KeyboardAvoidingView, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const RegisterScreen = () => {
  const { theme } = useColorScheme();
  const router = useRouter();
  return (
    <>
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <AuthContainer
          header={null}
          contentStyle={{
            paddingBottom: Keyboard.isVisible() ? 0 : 200,
          }}
        >
          <View
            style={{
              width: "100%",
              height: 230,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("@/assets/images/Logo.svg")}
              style={{
                width: 170,
                height: 66,
              }}
            />
          </View>
          <View
            style={{
              marginTop: -50,
            }}
          >
            <AppText
              style={{
                marginBottom: 24,
                alignSelf: "center",
                textAlign: "center",
              }}
              type="pageTitle"
            >
              تسجيل حساب جديد
            </AppText>
            <View
              style={{
                gap: 12,
                marginBottom: 16,
              }}
            >
              <TextInputField
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
              <TextInputField
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
              <PhoneInputField label="رقم تلفونك" rtl={true} />
              <PasswordInput
                textContentType="newPassword"
                placeholder="***********"
                label="كلمة المرور"
              />
              <PasswordInput
                textContentType="newPassword"
                placeholder="***********"
                label="تاكيد كلمة المرور"
              />
            </View>
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
          </View>
        </AuthContainer>
      </KeyboardAvoidingView>
      <AppBottomView style={{ gap: 16 }}>
        <AppButton title="تسجيل حساب جديد" variant="secondary" />
        <AppButton
          title="تسجيل دخول"
          variant="outline"
          onPress={() => router.push("/auth/login")}
        />
      </AppBottomView>
    </>
  );
};

export default RegisterScreen;
