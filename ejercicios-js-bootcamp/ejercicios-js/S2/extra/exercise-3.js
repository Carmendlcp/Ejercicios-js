const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

/* Este ejercicio lo he hecho mirando y mirando, pero sinceramente no lo he terminado de entender*/

const soundCounts = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (soundCounts[sound]) {
      soundCounts[sound]++;
    } else {
      soundCounts[sound] = 1;
    }
  }
}

for (const sound in soundCounts) {
  console.log(`El sonido ${sound} ha sido favorito ${soundCounts[sound]} veces.`);
}
    
      