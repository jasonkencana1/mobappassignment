/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App() {
  const [tasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);


  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
