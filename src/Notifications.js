export const sendNotification = (message) => {
    if (Notification.permission === 'granted') {
        alert('hello');
      new Notification('New Message', {
        body: message,
        icon: '/path/to/icon.png' // Optional: path to an icon
      });
    } else {
      alert("Notification permission not granted");
    }
  };
  