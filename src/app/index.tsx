import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import StudentCard from "../components/StudentCard";

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

export default function StudentDirectory() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "s1",
      name: "Ana Cruz",
      year: "3rd Year",
      photoUrl: "https://i.pravatar.cc/100?img=1",
      flagged: false,
    },
    {
      id: "s2",
      name: "Bea Santos",
      year: "2nd Year",
      photoUrl: "https://i.pravatar.cc/100?img=2",
      flagged: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      year: "4th Year",
      photoUrl: "https://i.pravatar.cc/100?img=3",
      flagged: false,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      year: "1st Year",
      photoUrl: "https://i.pravatar.cc/100?img=4",
      flagged: false,
    },
    {
      id: "s5",
      name: "Eli Tan",
      year: "3rd Year",
      photoUrl: "https://i.pravatar.cc/100?img=5",
      flagged: false,
    },
  ]);

  const [query, setQuery] = useState("");

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase()),
  );

  const toggleFlag = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Directory</Text>
        <Text style={styles.headerSubtitle}>
          {students.length} students this term
        </Text>
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.searchInput}
          placeholder="⌕  Search students..."
          placeholderTextColor="#9996AA"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                year={student.year}
                photoUrl={student.photoUrl}
                flagged={student.flagged}
                onToggleFlag={toggleFlag}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>No students found</Text>
              <Text style={styles.emptySubtitle}>
                Try searching another student name.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F6FB",
  },
  header: {
    backgroundColor: "#211B59",
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 25,
  },
  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#D7D3F0",
    marginTop: 6,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  searchInput: {
    height: 48,
    backgroundColor: "#EFEDF7",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#25233A",
    marginBottom: 18,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 45,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#25233A",
  },
  emptySubtitle: {
    fontSize: 13,
    color: "#77758A",
    marginTop: 7,
  },
});
