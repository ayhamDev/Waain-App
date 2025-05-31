import AppBottomView from "@/components/global/AppBottomView";
import AppPhoneInput from "@/components/global/AppPhoneInput";
import AppScreen from "@/components/global/AppScreen";
import { AppButton } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import TextInputField from "@/components/ui/Input";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import React from "react";
import { View } from "react-native";

const ProfileEditScreen = () => {
  return (
    <>
      <AppScreen stack={true} title={"تعديل الملف الشخصي"}>
        <View style={{ gap: 12 }}>
          <TextInputField
            endComponent={({ color }) => (
              <MingCuteIcon name="user_1_line" size={20} color={color} />
            )}
            rtl={true}
            label="اسم المستخدم"
            placeholder="اسم المستخدم"
          />
          <View
            style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}
          >
            <IconButton
              rounded={false}
              variant="primary"
              style={{ height: 50, width: 50 }}
              icon={(color) => (
                <MingCuteIcon name="edit_2_fill" color={color} size={20} />
              )}
            />
            <TextInputField
              endComponent={({ color }) => (
                <MingCuteIcon
                  name="mail_line"
                  size={20}
                  color={color}
                  style={{ marginRight: 8 }}
                  key="edit"
                />
              )}
              disabled={true}
              rtl={true}
              label="البريد الالكتروني"
              placeholder="البريد الالكتروني"
            />
          </View>

          <View
            style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}
          >
            <IconButton
              rounded={false}
              variant="primary"
              style={{ height: 50, width: 50 }}
              icon={(color) => (
                <MingCuteIcon name="edit_2_fill" color={color} size={20} />
              )}
            />
            <AppPhoneInput rtl={true} label="رقم الجوال" disabled={true} />
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "flex-end", gap: 8 }}
          >
            <IconButton
              rounded={false}
              variant="primary"
              style={{ height: 50, width: 50 }}
              icon={(color) => (
                <MingCuteIcon name="edit_2_fill" color={color} size={20} />
              )}
            />
            <TextInputField
              endComponent={({ color }) => (
                <MingCuteIcon
                  name="shield_shape_line"
                  size={20}
                  color={color}
                  style={{ marginRight: 8 }}
                  key="edit"
                />
              )}
              disabled={true}
              rtl={true}
              label="كلمة المرور"
              placeholder="*************"
            />
          </View>
        </View>
      </AppScreen>
      <AppBottomView>
        <AppButton
          onPress={() => {}}
          variant="secondary"
          title="حفظ التغيرات"
        />
      </AppBottomView>
    </>
  );
};

export default ProfileEditScreen;
