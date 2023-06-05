import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, withBadge } from 'react-native-elements';
import { colors } from '../global/styles';

const headerHeight = 50; // Set the desired header height here

export default function HomeHeader({ navigation }) {
  const BadgeIcon = withBadge(0)(Icon);

  return (
    <View style={styles.header}>
      <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 15 }}>
        <Icon
          type="material-community"
          name="menu"
          color={colors.cardbackground}
          size={32}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: colors.cardbackground, fontSize: 25, fontWeight: "bold" }}>Car Wash</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", marginRight: 15 }}>
        <BadgeIcon
          type="material-community"
          name="cart"
          size={28}
          color={colors.cardbackground}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: headerHeight,
    justifyContent: "space-between",
  },
});
