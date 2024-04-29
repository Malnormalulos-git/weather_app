const formatWindDirection = (direction) => {
  const directions = {
    'N': 'north',
    'NNE': 'north-northeast',
    'NE': 'northeast',
    'ENE': 'east-northeast',
    'E': 'east',
    'ESE': 'east-southeast',
    'SE': 'southeast',
    'SSE': 'south-southeast',
    'S': 'south',
    'SSW': 'south-southwest',
    'SW': 'southwest',
    'WSW': 'west-southwest',
    'W': 'west',
    'WNW': 'west-northwest',
    'NW': 'northwest',
    'NNW': 'north-northwest'
  };

  return directions[direction] || direction;
}

export default formatWindDirection;