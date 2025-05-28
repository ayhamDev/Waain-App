import AppScreen from "@/components/global/AppScreen";
import NotificationCard, {
  NotificationCardProps,
} from "@/components/screens/notification/NotificationCard";
import React from "react";
import { View } from "react-native";

export default function NotificationScreen() {
  const notificationDummyData: NotificationCardProps[] = [
    {
      title: "Order Confirmed",
      subTitle: "Your order #12345 has been confirmed.",
      value: "Now",
      imageSource: "https://placehold.co/600x400",
      onPress: () => console.log("Pressed 1"),
      variant: "primary",
    },
    {
      title: "New Message",
      subTitle: "You received a message from Alice.",
      value: "2h ago",
      imageSource: "https://placehold.co/600x400",
      onPress: () => console.log("Pressed 2"),
      variant: "secondary",
    },
    {
      title: "Payment Received",
      subTitle: "$99.99 was added to your balance.",
      value: "1d ago",
      imageSource: "https://placehold.co/600x400",
      onPress: () => console.log("Pressed 3"),
      variant: "secondary",
    },
  ];
  return (
    <AppScreen stack={true} title={"الاشعارات"}>
      <View style={{ gap: 24 }}>
        <View style={{ gap: 10 }}>
          {notificationDummyData.map((item, index) => (
            <NotificationCard rtl={true} key={index} {...item} />
          ))}
        </View>
      </View>
    </AppScreen>
  );
}
