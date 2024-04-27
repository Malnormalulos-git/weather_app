const formatDate = (dateString) => {
  const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June',
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ];

  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${month} ${day}, ${hour}:${minute < 10 ? '0' : ''}${minute}`;
};

export default formatDate;