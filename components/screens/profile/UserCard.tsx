import { AppText } from "@/components/AppText";
import AppCard from "@/components/global/AppCard";
import { IconButton } from "@/components/ui/IconButton";
import MingCuteIcon from "@/components/ui/MingCute/MingCuteIcon";
import React from "react";
import { StyleSheet, View } from "react-native";

interface UserCardProps {
  userName: string;
  phoneNumber: string;
}

const UserCard: React.FC<UserCardProps> = ({ userName, phoneNumber }) => {
  return (
    <AppCard>
      <View style={styles.container}>
        <IconButton
          variant="secondary"
          rounded={false}
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
