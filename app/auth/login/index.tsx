import PasswordInput from "@/components/global/AppPasswordInput";
import { AppText } from "@/components/global/AppText";
import AuthContainer from "@/components/global/AuthContainer";
import { AppButton } from "@/components/ui/Button";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
const LoginScreen = () => {
  const { theme } = useColorScheme();
  const router = useRouter();
  return (
    <>
      <AuthContainer header={null}>
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
            تسجيل الدخول
          </AppText>
          <View
            style={{
              gap: 12,
              marginBottom: 16,
            }}
          >
            <TextInputField
              label="ايميل"
              textContentType="emailAddress"
              rtl={true}
              placeholder="email@example.com"
              endComponent={({ color }) => (
                <MingCuteIcon
                  name="mail_fill"
                  size={20}
                  color={Colors[theme].secondary.default}
                />
              )}
            />
            <PasswordInput
              placeholder="***********"
              textContentType="password"
              label="كلمة المرور"
            />
            <AppText style={{ alignSelf: "flex-end" }} type="link">
              <Link href={"/(tabs)"}>نسيت كلمة المرور ؟</Link>
            </AppText>
          </View>
          <View style={{ gap: 16, marginTop: 25 }}>
            <AppButton
              title="تسجيل دخول"
              variant="secondary"
              onPress={() => router.replace("/(tabs)")}
            />
            <AppButton
              onPress={() => router.push("/auth/register")}
              title="تسجيل حساب جديد"
              variant="outline"
            />
          </View>
        </View>
      </AuthContainer>
    </>
  );
};

export default LoginScreen;
