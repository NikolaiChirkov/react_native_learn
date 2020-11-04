import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    setTodos([...todos, newTodo]);
  }

  return (
    <View>
      <Navbar title="Todo App"/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <View>
          { todos.map(todo => {
            return <Text>{todo.title}</Text>
          }) }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
