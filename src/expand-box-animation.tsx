import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export const ExpandBoxAnimation = () => {
  const width = useSharedValue(100);

  function handlePress() {
    width.value = withSpring(width.value + 50);
  }

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Animated.View
          style={{
            width,
            height: 100,
            backgroundColor: "violet",
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handlePress}>
            expand
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});
