import React from "react";
import { StyleSheet, Text, View } from "react-native";

// In React Native, all components must be imported.
// Unlike using React for the web, none of the components
// are pre-loaded (e.g. <main>, <input>, <form>, etc.)

// Component Comparisons
// <View> == <div>
// <ScrollView> == <div> with scrolling ability
// <Button> == <button>
// <TextInput> == <input type="text">
// <Picker> == <select>
// Any text MUST BE placed inside of a <Text> component.

// To find more components provided by react-native, go to:
// https://facebook.github.io/react-native/docs/getting-started

// To find ever more components (provided by expo), go to:
// https://docs.expo.io/versions/latest/

// Styling Components

// A small subset of CSS is re-implemented for React Native.
// You can only style using the `style` prop. CSS files are not
// a thing.

// All React Native components are flex containers and
// flex items. Essentially, they're all set to display
// "flex" and are not allowed to work with any another
// display value.

// Units

// React Native has two units for dimensions:

// - The non-unit. In otherwords, the value are written
//   without a unit (e.g. `fontSize: 30.2`) This is unit
//   is like the `px`.
// - The "%" unit.

import { QuestionIndexScreen } from "./components/QuestionIndexScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionIndexScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
