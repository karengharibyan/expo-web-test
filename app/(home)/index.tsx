import { useMemo, useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

export default function HomeScreen() {
  const [backgroundColor, setBackgroundColor] = useState("#fff");
  const handlePress = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setBackgroundColor(color);
  };

  const rootStyles = useMemo(() => {
    return [styles.root, { backgroundColor }];
  }, [backgroundColor]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={rootStyles}>
        <Text style={styles.textStyle}>Hello there</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 40,
  }
});
