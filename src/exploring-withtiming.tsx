import React, { useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from "react-native-reanimated";

const duration = 2000;

export const ExploreWithTiming = () => {
  const defaultAnim = useSharedValue(200);
  const linear = useSharedValue(200);

  const animatedDefault = useAnimatedStyle(() => ({
    transform: [{ translateX: defaultAnim.value }],
  }));

  const animatedChanged = useAnimatedStyle(() => ({
    transform: [{ translateX: linear.value }],
  }));

  useEffect(() => {
    linear.value = withRepeat(
      // highlight-next-line
      withTiming(-linear.value, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      true
    );

    defaultAnim.value = withRepeat(
      // highlight-next-line
      withTiming(-defaultAnim.value, {
        duration,
        easing: Easing.circle,
      }),
      -1,
      true
    );
  }, []);

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedDefault]}>
          <Text style={styles.text}>inout</Text>
        </Animated.View>

        <Animated.View style={[styles.box, animatedChanged]}>
          <Text style={styles.text}>linear</Text>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: 80,
    width: 80,
    margin: 20,
    borderWidth: 1,
    borderColor: "#b58df1",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#b58df1",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
