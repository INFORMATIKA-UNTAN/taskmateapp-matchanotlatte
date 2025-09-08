import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native';
import TaskItem from '../../src/components/TaskItem';
import { dummyTasks } from '../../src/data/dummyTasks';


export interface Task {
  id: number;
  title: string;
  status: 'pending' | 'done';
}

export default function HomeScreen() {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const handleToggle = (task: Task) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? { ...t, status: t.status === 'done' ? 'pending' : 'done' }
          : t
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>TaskMate – Daftar Tugas</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={handleToggle} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { fontSize: 20, fontWeight: '700', padding: 16 },
});
