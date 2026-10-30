import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photoUrl }} style={styles.photo} />

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{name}</Text>
        <Text style={styles.studentYear}>{year}</Text>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flaggedButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text
          style={[styles.flagButtonText, flagged && styles.flaggedButtonText]}
        >
          {flagged ? "★ Flagged" : "☆ Flag for Advising"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 14,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E7F0",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  photo: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E8E5F5",
  },
  studentInfo: {
    flex: 1,
    marginLeft: 12,
  },
  studentName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#25233A",
  },
  studentYear: {
    fontSize: 12,
    color: "#77758A",
    marginTop: 5,
  },
  flagButton: {
    borderWidth: 1,
    borderColor: "#B9B5C8",
    borderRadius: 22,
    paddingVertical: 9,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  flaggedButton: {
    backgroundColor: "#E9A900",
    borderColor: "#E9A900",
  },
  pressedButton: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
  flagButtonText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#55516A",
  },
  flaggedButtonText: {
    color: "#FFFFFF",
  },
});
