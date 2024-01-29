import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withDelay,
} from "react-native-reanimated";
import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

export const ShakeWithDelay = () => {
  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const OFFSET = 40;
  const TIME = 250;
  const DELAY = 400;

  const handlePress = () => {
    offset.value = withDelay(
      DELAY,
      withSequence(
        // start from -OFFSET
        withTiming(-OFFSET, { duration: TIME / 2 }),
        // shake between -OFFSET and OFFSET 5 times
        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
        // go back to 0 at the end
        withTiming(0, { duration: TIME / 2 })
      )
    );
  };

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.container}>
        <Animated.View style={[styles.box, style]} />

        <Button mode="contained" onPress={handlePress}>
          shake with 5 second delay
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
    margin: 50,
    borderRadius: 15,
    backgroundColor: "#b58df1",
  },
});
