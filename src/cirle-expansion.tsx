import React from "react";
// import { StatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircleExpansion = () => {
  const r = useSharedValue(20);

  function handlePress() {
    r.value += 10;
  }

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Svg style={styles.svg}>
          <AnimatedCircle
            cx="50%"
            cy="50%"
            r={r}
            fill="violet"
            animatedProps={animatedProps}
          />
        </Svg>

        <Button mode="contained" onPress={handlePress}>
          Click Me
        </Button>
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
  svg: {
    height: 250,
    width: "100%",
  },
});
