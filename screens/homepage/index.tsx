import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import DashboardContainer from "@/components/DashboardContainer";
import GradientCard from "@/components/GradientCard";

const { width } = Dimensions.get("window");
const containerPadding = 12;
const imageWidth = width - 2 * containerPadding;

const Homepage = () => {
  return (
    <DashboardContainer>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: containerPadding, gap: 24 }}>
        <ImageBackground source={require("../../assets/images/backgrounds/you-owe.png")} resizeMode="contain" style={styles.cardContainer}>
          <ThemedText style={styles.title}>You owe</ThemedText>
          <ThemedText style={[styles.subTitle, { color: "#AB41FF" }]}>$25,000</ThemedText>
        </ImageBackground>
        <ImageBackground source={require("../../assets/images/backgrounds/you-lent.png")} resizeMode="contain" style={[styles.cardContainer]}>
          <ThemedText style={styles.title}>You lent</ThemedText>
          <ThemedText style={[styles.subTitle, { color: "#543BED" }]}>$25,000</ThemedText>
        </ImageBackground>
        <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
          <GradientCard>
            <View style={styles.gradientCardContainer}>
              <ThemedText style={styles.gradientCardTitle}>Transactions</ThemedText>
              <ThemedText style={styles.gradientCardSubTitle}>this month</ThemedText>
              <View style={styles.numberContainer}>
                <ThemedText style={styles.number}>2,500</ThemedText>
              </View>
            </View>
          </GradientCard>
          <GradientCard>
            <View style={styles.gradientCardContainer}>
              <ThemedText style={styles.gradientCardTitle}>Amount Spent</ThemedText>
              <ThemedText style={styles.gradientCardSubTitle}>this month</ThemedText>
              <View style={styles.numberContainer}>
                <ThemedText style={styles.number}>$25,000</ThemedText>
              </View>
            </View>
          </GradientCard>
        </View>
      </ScrollView>
    </DashboardContainer>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  cardContainer: {
    width: imageWidth,
    height: 0.355 * imageWidth,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 16,
  },
  title: {
    fontFamily: "Poppins600",
    fontSize: 32,
    lineHeight: 40,
  },
  subTitle: {
    fontFamily: "Poppins600",
    fontSize: 40,
    lineHeight: 48,
  },
  gradientCardContainer: {
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  gradientCardTitle: { fontFamily: "Poppins600", fontSize: 20 },
  gradientCardSubTitle: { fontFamily: "Poppins600", fontSize: 12, lineHeight: 14 },
  numberContainer: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
  },
  number: {
    fontFamily: "Poppins600",
    fontSize: 32,
    lineHeight: 40,
  },
});
