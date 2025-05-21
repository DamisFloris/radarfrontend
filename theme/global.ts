// src/theme/styles.ts
import { StyleSheet } from "react-native";

export const g = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  itemsCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  padSm: {
    padding: 8,
  },
  padMd: {
    padding: 12,
  },
  padLg: {
    padding: 16,
  },
  padXl: {
    padding: 20,
  },
  gapXs: {
    gap: 4,
  },
  gapSm: {
    gap: 8,
  },
  gapMd: {
    gap: 12,
  },
  gapLg: {
    gap: 16,
  },
  gapXl: {
    gap: 20,
  },
  textCenter: {
    textAlign: "center",
  },
});
