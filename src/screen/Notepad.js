import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notepad = () => {
  const [note, setNote] = useState(''); // Stores the current note being typed
  const [savedNotes, setSavedNotes] = useState([]); // Stores all saved notes
  const [isEditing, setIsEditing] = useState(null); // Tracks if we are editing a note
  
  // Load saved notes from AsyncStorage on initial load
  useEffect(() => {
    loadNotes();
  }, []);

  // Save notes to AsyncStorage whenever the notes array changes
  useEffect(() => {
    saveNotesToStorage();
  }, [savedNotes]);

  // Function to handle saving the note
  const saveNote = () => {
    if (note.trim()) {
      if (isEditing !== null) {
        // Edit mode: Update the existing note
        const updatedNotes = savedNotes.map((item, index) => 
          index === isEditing ? note : item
        );
        setSavedNotes(updatedNotes);
        setIsEditing(null);
      } else {
        // Add new note to the list
        setSavedNotes([...savedNotes, note]);
      }
      setNote(''); // Clear the input after saving
    }
  };

  // Load saved notes from AsyncStorage
  const loadNotes = async () => {
    try {
      const saved = await AsyncStorage.getItem('notes');
      if (saved) {
        setSavedNotes(JSON.parse(saved));
      }
    } catch (error) {
      console.log('Error loading notes', error);
    }
  };

  // Save notes to AsyncStorage
  const saveNotesToStorage = async () => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(savedNotes));
    } catch (error) {
      console.log('Error saving notes', error);
    }
  };

  // Function to delete a note
  const deleteNote = (index) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete", 
          style: "destructive", 
          onPress: () => {
            const updatedNotes = savedNotes.filter((_, i) => i !== index);
            setSavedNotes(updatedNotes);
          }
        }
      ]
    );
  };

  // Function to edit a note
  const editNote = (index) => {
    setNote(savedNotes[index]);
    setIsEditing(index);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your note here..."
        value={note}
        onChangeText={setNote}
      />
      <Button
        title={isEditing !== null ? "Update Note" : "Save Note"}
        onPress={saveNote}
      />

      {/* Display saved notes */}
      <ScrollView style={styles.notesContainer}>
        {savedNotes.map((savedNote, index) => (
          <View key={index} style={styles.note}>
            <Text>{savedNote}</Text>
            <View style={styles.noteButtons}>
              <TouchableOpacity
                onPress={() => editNote(index)}
                style={styles.editButton}
              >
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteNote(index)}
                style={styles.deleteButton}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  notesContainer: {
    marginTop: 20,
  },
  note: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 5,
  },
  noteButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 3,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 3,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Notepad;
