import { Colors } from "@/constants/Styles";
import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MingCuteIcon, { MingCuteIconName } from "../ui/MingCute/MingCuteIcon";

const { width } = Dimensions.get("window");

export enum BaseCategory {
  BasicFoods = "Basic Foods",
  FrozenProducts = "Frozen Products",
  MilkDairyProducts = "Milk & Dairy Products",
  Breakfast = "Breakfast",
  CheeseColdCuts = "Cheese & Cold Cuts",
  Bakery = "Bakery",
  MeatPoultry = "Meat & Poultry",
  VegetablesFruits = "Vegetables & Fruits",
  BeautyProducts = "Beauty Products",
  PersonalCare = "Personal Care",
  BabyCare = "Baby Care",
  PetCare = "Pet Care",
  CoffeeTea = "Coffee & Tea",
  Beverages = "Beverages",
  Snacks = "Snacks",
  Other = "other",
}

interface Category {
  id: string;
  name: BaseCategory;
  icon: MingCuteIconName;
  color: string;
}

interface BrowseCategoriesProps {
  categories?: Category[];
  onCategoryPress?: (category: Category) => void;
}

const BrowseCategories: React.FC<BrowseCategoriesProps> = ({
  categories,
  onCategoryPress,
}) => {
  const { theme } = useColorScheme();
  // Default categories based on BaseCategory enum
  const defaultCategories: Category[] = [
    {
      id: "basic-foods",
      name: BaseCategory.BasicFoods,
      icon: "rice",
      color: "#FFFFFF",
    },
    {
      id: "frozen-products",
      name: BaseCategory.FrozenProducts,
      icon: "snowflake",
      color: "#FFFFFF",
    },
    {
      id: "milk-dairy",
      name: BaseCategory.MilkDairyProducts,
      icon: "milk",
      color: "#FFFFFF",
    },
    {
      id: "breakfast",
      name: BaseCategory.Breakfast,
      icon: "coffee",
      color: "#FFFFFF",
    },
    {
      id: "cheese-cold-cuts",
      name: BaseCategory.CheeseColdCuts,
      icon: "cheese",
      color: "#FFFFFF",
    },
    {
      id: "bakery",
      name: BaseCategory.Bakery,
      icon: "bread",
      color: "#FFFFFF",
    },
    {
      id: "meat-poultry",
      name: BaseCategory.MeatPoultry,
      icon: "meat",
      color: "#FFFFFF",
    },
    {
      id: "vegetables-fruits",
      name: BaseCategory.VegetablesFruits,
      icon: "apple",
      color: "#FFFFFF",
    },
    {
      id: "beauty-products",
      name: BaseCategory.BeautyProducts,
      icon: "lipstick",
      color: "#FFFFFF",
    },
    {
      id: "personal-care",
      name: BaseCategory.PersonalCare,
      icon: "shower",
      color: "#FFFFFF",
    },
    {
      id: "baby-care",
      name: BaseCategory.BabyCare,
      icon: "baby",
      color: "#FFFFFF",
    },
    {
      id: "pet-care",
      name: BaseCategory.PetCare,
      icon: "paw",
      color: "#FFFFFF",
    },
    {
      id: "coffee-tea",
      name: BaseCategory.CoffeeTea,
      icon: "tea",
      color: "#FFFFFF",
    },
    {
      id: "beverages",
      name: BaseCategory.Beverages,
      icon: "bottle",
      color: "#FFFFFF",
    },
    {
      id: "snacks",
      name: BaseCategory.Snacks,
      icon: "cookie",
      color: "#FFFFFF",
    },
    {
      id: "other",
      name: BaseCategory.Other,
      icon: "more",
      color: "#FFFFFF",
    },
  ];

  const categoriesToRender = categories || defaultCategories;

  // Calculate column width including margins
  const columnWidth = (width - 60) / 3; // Account for container padding and item margins
  const itemWidth = columnWidth - 10; // Account for item margins

  // Group categories into columns (each column has 2 items vertically)
  const columns: Category[][] = [];
  for (let col = 0; col < Math.ceil(categoriesToRender.length / 2); col++) {
    const columnItems = [];
    // Add top item
    if (categoriesToRender[col * 2]) {
      columnItems.push(categoriesToRender[col * 2]);
    }
    // Add bottom item
    if (categoriesToRender[col * 2 + 1]) {
      columnItems.push(categoriesToRender[col * 2 + 1]);
    }
    columns.push(columnItems);
  }

  const renderColumn = (columnCategories: Category[], columnIndex: number) => (
    <View key={columnIndex} style={[styles.column, { width: columnWidth }]}>
      {columnCategories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryItem,
            { backgroundColor: category.color, width: itemWidth },
          ]}
          onPress={() => onCategoryPress && onCategoryPress(category)}
          activeOpacity={0.7}
        >
          <MingCuteIcon
            name={category.icon}
            size={24}
            color={Colors[theme].primary[950]}
          />
          <Text
            style={[
              styles.categoryText,
              {
                color: Colors[theme].primary[950],
              },
            ]}
            numberOfLines={2}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={columnWidth}
        snapToAlignment="start"
        decelerationRate="fast"
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {columns.map(renderColumn)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    paddingVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  column: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  categoryItem: {
    height: 80,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: "600",
    marginTop: 4,
    textAlign: "center",
    lineHeight: 12,
  },
});

export default BrowseCategories;
