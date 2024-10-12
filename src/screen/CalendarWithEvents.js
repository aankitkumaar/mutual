import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, ScrollView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalendarWithEvents = () => {
  const [selectedDate, setSelectedDate] = useState(''); // Current selected date
  const [event, setEvent] = useState(''); // Current event being added/edited
  const [events, setEvents] = useState({}); // Stores all events
  const [isEditing, setIsEditing] = useState(false); // Flag for editing mode

  // Load saved events from AsyncStorage on initial load
  useEffect(() => {
    loadEvents();
  }, []);

  // Save events to AsyncStorage when they change
  useEffect(() => {
    saveEventsToStorage();
  }, [events]);

  // Load events from AsyncStorage
  const loadEvents = async () => {
    try {
      const storedEvents = await AsyncStorage.getItem('calendarEvents');
      if (storedEvents) {
        setEvents(JSON.parse(storedEvents));
      }
    } catch (error) {
      console.log('Error loading events', error);
    }
  };

  // Save events to AsyncStorage
  const saveEventsToStorage = async () => {
    try {
      await AsyncStorage.setItem('calendarEvents', JSON.stringify(events));
    } catch (error) {
      console.log('Error saving events', error);
    }
  };

  // Save a new event or update an existing one
  const saveEvent = () => {
    if (!event.trim()) return; // Do nothing if event is empty

    setEvents({
      ...events,
      [selectedDate]: { ...events[selectedDate], event },
    });

    setEvent(''); // Clear the input
    setIsEditing(false); // Exit editing mode
  };

  // Function to handle selecting a date
  const onDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setEvent(events[date.dateString]?.event || ''); // Load existing event if available
    setIsEditing(!!events[date.dateString]); // Switch to editing mode if event exists
  };

  // Function to delete an event
  const deleteEvent = () => {
    Alert.alert(
      "Delete Event",
      "Are you sure you want to delete this event?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete", 
          style: "destructive", 
          onPress: () => {
            const updatedEvents = { ...events };
            delete updatedEvents[selectedDate]; // Remove event from the selected date
            setEvents(updatedEvents);
            setEvent('');
            setIsEditing(false); // Exit editing mode
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Calendar component */}
      <Calendar
        onDayPress={onDateSelect}
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: 'blue' }; // Mark dates with events
            return acc;
          }, {}),
          [selectedDate]: { selected: true, marked: !!events[selectedDate], dotColor: 'blue' }
        }}
        theme={{
          selectedDayBackgroundColor: 'blue',
          todayTextColor: 'blue',
        }}
      />

      {/* Event input section */}
      {selectedDate ? (
        <View style={styles.eventInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter event details"
            value={event}
            onChangeText={setEvent}
          />
          <Button title={isEditing ? 'Update Event' : 'Add Event'} onPress={saveEvent} />
          {isEditing && (
            <TouchableOpacity style={styles.deleteButton} onPress={deleteEvent}>
              <Text style={styles.deleteButtonText}>Delete Event</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <Text style={styles.instructionText}>Select a date to add an event</Text>
      )}

      {/* Display all events */}
      <ScrollView style={styles.eventsList}>
        {Object.entries(events).map(([date, eventData]) => (
          <View key={date} style={styles.eventItem}>
            <Text style={styles.eventDate}>{date}</Text>
            <Text style={styles.eventText}>{eventData.event}</Text>
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
  eventInputContainer: {
    marginTop: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  deleteButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f44336',
    alignItems: 'center',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  instructionText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
  eventsList: {
    marginTop: 20,
  },
  eventItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 5,
  },
  eventDate: {
    fontWeight: 'bold',
    color: '#333',
  },
  eventText: {
    color: '#555',
  },
});

export default CalendarWithEvents;
