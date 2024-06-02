import { Text, matchFont } from "@shopify/react-native-skia";
import { Platform } from "react-native";
import { SharedValue, useDerivedValue } from "react-native-reanimated";

const fontFamily = Platform.select({ ios: "Helvetica", default: "serif" });
const fontStyle = {
  fontFamily,
  fontSize: 14,
};
const font = matchFont(fontStyle);

export const Score = ({ score }: { score: SharedValue<number> }) => {
  const scoreString = useDerivedValue(() => `Score: ${score.value.toFixed(0)}`);
  return (
    <Text x={16} y={fontStyle.fontSize + 50} text={scoreString} font={font} />
  );
};
