import AppCard from "@/components/global/AppCard";
import { AppText } from "@/components/global/AppText";
import { IconButton } from "@/components/ui/IconButton";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

interface UserCardProps {
  userName: string;
  phoneNumber: string;
}

const UserCard: React.FC<UserCardProps> = ({ userName, phoneNumber }) => {
  const router = useRouter();
  return (
    <AppCard>
      <View style={styles.container}>
        <IconButton
          variant="primary"
          rounded={false}
          onPress={() => router.push("/profile/edit")}
          icon={(color: string) => (
            <MingCuteIcon name={"settings_1_fill"} size={24} color={color} />
          )}
        />
        <View>
          <AppText style={styles.name} type="pageTitle">
            {userName} اهلا
          </AppText>
          <AppText style={styles.phone} type="secondary">
            {phoneNumber}
          </AppText>
        </View>
      </View>
    </AppCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    textAlign: "right",
  },
  phone: {
    textAlign: "right",
  },
});

export default UserCard;
