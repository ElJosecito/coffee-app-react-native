import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import React from "react";

//icons
import { FontAwesome6, Feather, Fontisto } from "@expo/vector-icons";

import { categories } from "../data/categories";
import { allProducts, bestSellingProducts } from "../data/products";

const HomeScreen = ({ navigation }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="bg-[#FBFBFB] flex-1"
      style={{ marginBottom: 82 }}
    >
      <View className="flex-1">
        <View className="flex-row justify-between items-center p-3 pb-0">
          <Image
            className="h-12 w-12 rounded-full"
            source={{
              uri: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
          <Text>Home</Text>
          <Fontisto name="bell" size={24} color="black" />
        </View>

        <View className="flex-col justify-center">
          <View className="flex-row justify-between items-center p-3">
            <Text className="text-xl font-bold">Welcome, John</Text>
            <Text className="text-gray-400">View Profile</Text>
          </View>
          <View className="flex-row justify-center ">
            <View
              className="flex-row items-center bg-white rounded-full w-11/12 p-2"
              style={styles.shadow}
            >
              <Fontisto name="search" size={20} color="black" />
              <TouchableWithoutFeedback
                onPress={dismissKeyboard}
                accessible={false}
              >
                <TextInput className="w-full p-2 pl-3" placeholder="Search" />
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View className="flex-col justify-center">
            <View className="flex-row justify-between items-center p-3 py-0 pt-1">
              <Text className="text-xl font-bold">Categories</Text>
              <Text className="text-gray-400">See All</Text>
            </View>
          </View>
          <FlatList
            className="p-3 pt-1"
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                className="flex-col items-center p-2 px-4 mx-1 rounded-full bg-[#FFFFFF] "
                style={styles.shadow}
              >
                <View className="flex-row items-center">
                  <Feather name="coffee" size={24} color="#00582F" />
                  <Text className="text-sm pl-2 font-bold text-[#00582F]">
                    {item.nombre}
                  </Text>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View className="flex-1">
          <View className="flex-col justify-center">
            <View className="flex-row justify-between items-center p-3 pb-0">
              <Text className="text-xl font-bold">Best Selling</Text>
            </View>

            <FlatList
              className="p-3 pt-1"
              data={allProducts}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    navigation.push("details", {
                      image: item.imagen,
                      name: item.nombre,
                      price: item.precio,
                      
                    });
                  }}
                >
                  <View
                    className="flex-col p-2 mx-1 rounded-lg bg-[#FFFFFF]"
                    style={styles.shadow}
                  >
                    <Image
                      className="h-32 w-40 rounded-lg"
                      source={{ uri: item.imagen }}
                    />

                    <Text className="text-sm font-bold">{item.nombre}</Text>
                    {item.azucar ? (
                      <Text className="text-sm ">Con Azúcar</Text>
                    ) : (
                      <Text className="text-sm">Sin Azúcar</Text>
                    )}
                    <View className="flex-row justify-between items-center">
                      <Text className="text-sm font-bold">${item.precio}</Text>
                      <View className="flex-row items-center bg-[#00582F] rounded-full p-1">
                        <FontAwesome6 name="plus" size={18} color="white" />
                      </View>
                    </View>
                  </View>
                </Pressable>
              )}
            />
          </View>
        </View>

        <View className="flex-1">
          <View className="flex-col justify-center">
            <View className="flex-row justify-between items-center p-3 pb-0">
              <Text className="text-xl font-bold">Special Offers</Text>
            </View>

            <FlatList
              className="p-3 pt-1"
              data={bestSellingProducts}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View
                  className="flex-col p-2 mx-1 rounded-lg bg-[#FFFFFF]"
                  style={styles.shadow}
                >
                  <Image
                    className="h-32 w-40 rounded-lg"
                    source={{ uri: item.imagen }}
                  />

                  <Text className="text-sm font-bold">{item.nombre}</Text>
                  {item.azucar ? (
                    <Text className="text-sm ">Con Azúcar</Text>
                  ) : (
                    <Text className="text-sm">Sin Azúcar</Text>
                  )}

                  <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                      <Text className="text-sm font-bold">${item.precio}</Text>
                      <Text className="text-sm pl-2 line-through text-gray-400">
                        $5.00
                      </Text>
                    </View>
                    <Text className="text-sm font-bold text-[#00582F]">
                      -20%
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,

    elevation: 2,
  },
});
