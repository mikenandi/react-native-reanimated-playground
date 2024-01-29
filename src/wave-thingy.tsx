import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const COLOR = "#6E01EF";
const SIZE = 100;

export const WaveThingy = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.dot}>
          {[...Array(3).keys()].map((index) => (
            <MotiView
              from={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 4 }}
              transition={{
                type: "timing",
                duration: 2000,
                easing: Easing.out(Easing.ease),
                delay: index * 400,
                loop: true,
              }}
              key={index}
              style={[StyleSheet.absoluteFillObject, styles.dot]}
            />
          ))}

          <Feather name="phone-outgoing" size={32} color="#fff" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    backgroundColor: COLOR,
    borderRadius: SIZE,
    height: SIZE,
    width: SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
});
