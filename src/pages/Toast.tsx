import React from 'react';
import addNotification from 'react-push-notification';

const buttonClick = async () => {
  // Request permission for notifications if not already granted
  if (Notification.permission === 'default') {
    try {
      await Notification.requestPermission();
    } catch (error) {
      console.error('Permission request failed:', error);
      return;
    }
  }

  // Check if permission is granted
  if (Notification.permission !== 'granted') {
    console.error('Notification permission not granted.');
    return;
  }

  // Show the notification
  addNotification({
    title: 'Free Medicare',
    subtitle: 'This is a subtitle',
    message: 'This is a very long message that goes into more detail about the notification. It can be as detailed as needed to provide complete context to the user.',
    theme: 'darkblue',
    native: true, // Use native notifications for OS-specific theming
    vibrate: [200, 100, 200], // Vibration pattern (if supported)
    icon: 'https://i.pinimg.com/564x/09/f6/6d/09f66d8e4b73391859d58f9f596cfb12.jpg' // Icon image (if supported)
  });
};

const App = () => (
  <button onClick={buttonClick} className="button">
    Press me for notification
  </button>
);

export default App;
