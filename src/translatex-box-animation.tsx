import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export const TranslatexBoxAnimation = () => {
  const translateX = useSharedValue(0);

  function handleTranslateX() {
    translateX.value = withSpring(translateX.value + 50);
  }

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "violet",
            borderRadius: 10,
            marginBottom: 10,
            transform: [{ translateX }],
          }}
        />
        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={handleTranslateX}>
            Translate X
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
