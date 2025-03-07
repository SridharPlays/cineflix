const movies = [
    {
        name: "Leo",
        image_loc: "Leo.jpg",
        language: "Tamil, Telugu, Hindi, Kannada, Malayalam",
        format: "IMAX 2D, 2D",
        genre: "Action, Crime, Drama, Thriller",
        length: "02:45",
        imdb_rating: 8.1,
        age_rating: "U/A",
        story: "A mild-mannered man gets drawn into a world of crime and violence when he is forced to protect his family.",
        director: "Lokesh Kanagaraj",
        writer: "Lokesh Kanagaraj",
        stars: ["Vijay", "Trisha", "Arjun Sarja"],
        trailer: "https://www.youtube.com/embed/Po3jStA673E?si=WK58tYXPa_3Yippt",
        music: "Leo.mp3"
    },
    {
        name: "Lucky Bhaskar",
        image_loc: "LuckyBhaskar.jpg",
        language: "Telugu, Malayalam, Tamil, Hindi",
        format: "2D",
        genre: "Crime, Drama, Thriller",
        length: "02:25",
        imdb_rating: 7.8,
        age_rating: "U/A",
        story: "The story follows a clever gambler whose antics lead him to face unforeseen consequences.",
        director: "Harish Kalyan",
        writer: "Harish Kalyan",
        stars: ["Nithin", "Keerthy Suresh", "Rao Ramesh"],
        trailer: "https://www.youtube.com/embed/Kv5RKsqVe-Y?si=seatYQsbQJk1TsxG"
    },
    {
        name: "Transformer One",
        image_loc: "TransformerOne.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Animation, Action, Adventure, Fantasy, Sci-Fi",
        length: "02:30",
        imdb_rating: 8.5,
        age_rating: "U/A",
        story: "A prequel to the Transformers saga that explores the origins of Optimus Prime and Megatron.",
        director: "Steven Caple Jr.",
        writer: "Joby Harold",
        stars: ["Peter Cullen", "Frank Welker", "Angela Bassett"],
        trailer: "https://www.youtube.com/embed/u2NuUWuwPCM?si=3K-xygfgrXk3w8Ty",
        music: "Transformers.mp3"
    },
    {
        name: "Amaran",
        image_loc: "Amaran.jpg",
        language: "Tamil",
        format: "2D",
        genre: "Action, Biography, Drama, War",
        length: "02:15",
        imdb_rating: 7.9,
        age_rating: "A",
        story: "The life and struggles of an unsung hero who fights for justice in the face of adversity.",
        director: "K. Rajeshwar",
        writer: "K. Rajeshwar",
        stars: ["Karthik", "Rambha", "Vijayakumar"],
        trailer: "https://www.youtube.com/embed/H7FT-d4YA74?si=rn-IRG2UzpL7Vyy_"
    },
    {
        name: "Interstellar",
        image_loc: "Interstellar.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Adventure, Drama, Sci-Fi",
        length: "02:49",
        imdb_rating: 8.6,
        age_rating: "U/A",
        story: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan",
        writer: "Jonathan Nolan, Christopher Nolan",
        stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?si=PB0ohc7JSi7Bu4oX",
        music: "Interstellar2.mp3"
    },
    {
        name: "Aavesham",
        image_loc: "Aavesham.jpg",
        language: "Malayalam",
        format: "2D",
        genre: "Action, Comedy",
        length: "02:10",
        imdb_rating: 7.3,
        age_rating: "U",
        story: "A fun-filled action drama that follows a quirky group of misfits and their hilarious adventures.",
        director: "Basil Joseph",
        writer: "Basil Joseph",
        stars: ["Tovino Thomas", "Aju Varghese", "Shane Nigam"],
        trailer: "https://www.youtube.com/embed/OsMqr3556F8?si=2PuDppzCB2O6BhrP"
    },
    {
        name: "KGF Chapter 2",
        image_loc: "KGFChapter2.jpg",
        language: "Kannada, Tamil, Hindi, Telugu, Malayalam",
        format: "2D",
        genre: "Action, Drama",
        length: "02:48",
        imdb_rating: 8.2,
        age_rating: "A", 
        story: "Rocky continues his rise to power in the criminal underworld, battling enemies on all sides.",
        director: "Prashanth Neel",
        writer: "Prashanth Neel",
        stars: ["Yash", "Sanjay Dutt", "Raveena Tandon"],
        trailer: "https://www.youtube.com/embed/jQsE85cI384?si=pusjtz0ucNzzB_YM"
    },
    {
        name: "Avengers Endgame",
        image_loc: "AvengersEndgame.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Action, Adventure, Drama, Sci-Fi",
        length: "03:02",
        imdb_rating: 8.4,
        age_rating: "U/A",
        story: "The Avengers assemble one final time to reverse Thanos's destruction and restore balance to the universe.",
        director: "Anthony Russo, Joe Russo",
        writer: "Christopher Markus, Stephen McFeely",
        stars: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        trailer: "https://www.youtube.com/embed/TcMBFSGVi1c?si=TpQ525xCTInCkd90",
        // music: "Victory.mp3"
    },
    {
        name: "Godzilla x Kong: The New Empire",
        image_loc: "GodzillaxKong.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Action, Adventure, Sci-Fi",
        length: "02:34",
        imdb_rating: 7.6,
        age_rating: "U/A",
        story: "Godzilla and Kong face a new threat that could endanger both their species and humanity.",
        director: "Adam Wingard",
        writer: "Terry Rossio",
        stars: ["Alexander Skarsgård", "Rebecca Hall", "Brian Tyree Henry"],
        trailer: "https://www.youtube.com/embed/lV1OOlGwExM?si=CiqyO0jZDyxYRW7T",
        music: "Godzilla.mp3"
    },
    {
        name: "Avatar: The Way of Water",
        image_loc: "Avatar2.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Action, Adventure, Fantasy, Sci-Fi",
        length: "03:12",
        imdb_rating: 7.8,
        age_rating: "U/A",
        story: "Jake Sully and Neytiri must protect their family when an old threat resurfaces on Pandora.",
        director: "James Cameron",
        writer: "James Cameron",
        stars: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        trailer: "https://www.youtube.com/embed/1f65r8BUZ5I?si=FArw1TBePmx_OstJ",
        music: "Avatar2.mp3"
    },
    {
        name: "Cars 3",
        image_loc: "Cars3.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Animation, Adventure, Comedy, Sport",
        length: "01:42",
        imdb_rating: 6.7,
        age_rating: "U",
        story: "Lightning McQueen struggles to stay relevant in a new era of racing technology.",
        director: "Brian Fee",
        writer: "Kiel Murray",
        stars: ["Owen Wilson", "Cristela Alonzo", "Chris Cooper"],
        trailer: "https://www.youtube.com/embed/2LeOH9AGJQM?si=cEWua5IBNniLEamG"
    },
    {
        name: "Mission: Impossible - The Final Reckoning",
        image_loc: "MissionImpossible.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Action, Adventure, Thriller",
        length: "02:27",
        imdb_rating: 8.0,
        age_rating: "A",
        story: "Ethan Hunt and his team undertake their most dangerous mission yet to secure world peace.",
        director: "Christopher McQuarrie",
        writer: "Bruce Geller",
        stars: ["Tom Cruise", "Rebecca Ferguson", "Simon Pegg"],
        trailer: "https://www.youtube.com/embed/NOhDyUmT9z0?si=rQH77vI2LgXbtue4"
    },
    {
        name: "The Wild Robot",
        image_loc: "WildRobot.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Animation, Adventure, Sci-Fi",
        length: "01:55",
        imdb_rating: 7.3,
        age_rating: "U",
        story: "A robot becomes stranded on an uninhabited island and learns to adapt and survive.",
        director: "Sarah Smith",
        writer: "Peter Brown",
        stars: ["Tessa Thompson", "John Krasinski", "Scarlett Johansson"],
        trailer: "https://www.youtube.com/embed/67vbA5ZJdKQ?si=MbvdIF5tQt_9w0Sg"
    },
    {
        name: "Mufasa: The Lion King",
        image_loc: "Mufasa.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Animation, Adventure, Drama",
        length: "01:58",
        imdb_rating: 7.5,
        age_rating: "U",
        story: "The origin story of Mufasa, chronicling his rise to power as king of the Pride Lands.",
        director: "Barry Jenkins",
        writer: "Jeff Nathanson",
        stars: ["Aaron Pierre", "Kelvin Harrison Jr.", "Billy Eichner"],
        trailer: "https://www.youtube.com/embed/lMXh6vjiZrI?si=kGDQxkGjWr2EBMNg"
    },
    {
        name: "Manjummel Boys",
        image_loc: "ManjummelBoys.jpg",
        language: "Malayalam",
        format: "2D",
        genre: "Comedy, Drama",
        length: "02:10",
        imdb_rating: 7.4,
        age_rating: "U/A",
        story: "A nostalgic coming-of-age tale of a group of friends navigating life in their small town.",
        director: "Lijo Jose Pellissery",
        writer: "Shyam Pushkaran",
        stars: ["Tovino Thomas", "Soubin Shahir", "Anna Ben"],
        trailer: "https://www.youtube.com/embed/id848Ww1YLo?si=2m30jkOfpXtRCkV0"
    },
    {
        name: "Soorarai Potru",
        image_loc: "SooraraiPotru.jpg",
        language: "Tamil",
        format: "2D",
        genre: "Biography, Drama",
        length: "02:33",
        imdb_rating: 8.7,
        age_rating: "U/A",
        story: "A determined man fights against all odds to make air travel affordable for the common man.",
        director: "Sudha Kongara",
        writer: "Sudha Kongara",
        stars: ["Suriya", "Aparna Balamurali", "Paresh Rawal"],
        trailer: "https://www.youtube.com/embed/dyzraT_np8w?si=4yBZAoulfUIiRETD"
    },
    {
        name: "Kingdom of the Planet of the Apes",
        image_loc: "KingdomOfApes.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Action, Adventure, Drama, Sci-Fi",
        length: "02:20",
        imdb_rating: 7.8,
        age_rating: "A",
        story: "The apes face new challenges as they strive to create a thriving civilization.",
        director: "Wes Ball",
        writer: "Rick Jaffa",
        stars: ["Andy Serkis", "Freya Allan", "Peter Capaldi"],
        trailer: "https://www.youtube.com/embed/XtFI7SNtVpY?si=DE-oPpuKtf-U9oUF"
    },
    {
        name: "Dune: Part Two",
        image_loc: "Dune.jpg",
        language: "English",
        format: "IMAX 2D, 4DX, 2D",
        genre: "Adventure, Drama, Sci-Fi",
        length: "02:55",
        imdb_rating: 8.3,
        age_rating: "U/A",
        story: "Paul Atreides unites with the Fremen to bring justice to the desert planet of Arrakis.",
        director: "Denis Villeneuve",
        writer: "Frank Herbert",
        stars: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
        trailer: "https://www.youtube.com/embed/Way9Dexny3w?si=CWL6a5fLJfCmxpBs"
    },
    {
        name: "Alien: Romulus",
        image_loc: "AlienRomulus.jpg",
        language: "English",
        format: "IMAX 2D, 4DX, 2D",
        genre: "Horror, Sci-Fi, Thriller",
        length: "02:10",
        imdb_rating: 7.1,
        age_rating: "A",
        story: "A group of colonists face a terrifying alien threat on a distant planet.",
        director: "Fede Álvarez",
        writer: "Ridley Scott",
        stars: ["Katherine Waterston", "Michael Fassbender", "Danny McBride"],
        trailer: "https://www.youtube.com/embed/OzY2r2JXsDM?si=oBm7lzhNoLEHomcW"
    },
    {
        name: "Wicked",
        image_loc: "Wicked.jpg",
        language: "English",
        format: "2D",
        genre: "Fantasy, Romance",
        length: "02:15",
        imdb_rating: 7.4,
        age_rating: "U/A",
        story: "The untold story of the witches of Oz and their journey before Dorothy's arrival.",
        director: "Jon M. Chu",
        writer: "Winnie Holzman",
        stars: ["Ariana Grande", "Cynthia Erivo", "Jonathan Bailey"],
        trailer: "https://www.youtube.com/embed/6COmYeLsz4c?si=FRRG6j9cOI5r7_Ki"
    },
    {
        name: "Ponniyin Selvan: Part Two",
        image_loc: "PS2.jpg",
        language: "Tamil, Hindi, Kannada, Telugu, Malayalam",
        format: "IMAX 2D, 2D",
        genre: "Action, Adventure, History, Drama",
        length: "02:50",
        imdb_rating: 8.2,
        age_rating: "U/A",
        story: "The Chola dynasty faces internal and external challenges in its quest for power.",
        director: "Mani Ratnam",
        writer: "Kalki Krishnamurthy",
        stars: ["Vikram", "Aishwarya Rai Bachchan", "Karthi"],
        trailer: "https://www.youtube.com/embed/EnhS3matIoU?si=ISLAtCjp5yuIhTXs"
    },
    {
        name: "Bullet Train",
        image_loc: "BulletTrain.jpg",
        language: "English",
        format: "IMAX 3D",
        genre: "Action, Comedy, Thriller",
        length: "02:06",
        imdb_rating: 7.3,
        age_rating: "A",
        story: "Five assassins find their missions interlinked aboard a fast-moving train.",
        director: "David Leitch",
        writer: "Zak Olkewicz",
        stars: ["Brad Pitt", "Joey King", "Aaron Taylor-Johnson"],
        trailer: "https://www.youtube.com/embed/EGeJczJvWns?si=L-XbL0y0ajxfZ6nS"
    },
    {
        name: "How to Train Your Dragon",
        image_loc: "Dragon.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 3D",
        genre: "Action, Adventure, Comedy, Drama, Fantasy",
        length: "01:38",
        imdb_rating: 8.1,
        age_rating: "U",
        story: "A young Viking befriends a dragon and learns to bridge the gap between humans and dragons.",
        director: "Dean DeBlois",
        writer: "Cressida Cowell",
        stars: ["Jay Baruchel", "Gerard Butler", "America Ferrera"],
        trailer: "https://www.youtube.com/embed/5lzoxHSn0C0?si=zsA7nu-mWEH-PSlQ"
    },
    {
        name: "Gladiador II",
        image_loc: "Gladiador.jpg",
        language: "English",
        format: "IMAX 2D, 4DX, 2D",
        genre: "Action, Adventure, Drama",
        length: "02:50",
        imdb_rating: 8.5,
        age_rating: "A",
        story: "The legacy of Maximus continues as new challenges arise in the Roman Empire.",
        director: "Ridley Scott",
        writer: "David Franzoni",
        stars: ["Paul Mescal", "Denzel Washington", "Connie Nielsen"],
        trailer: "https://www.youtube.com/embed/4rgYUipGJNo?si=qn8aihJLm8VNGIJY"
    },
    {
        name: "Pacific Rim",
        image_loc: "PacificRim.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Action, Adventure, Sci-Fi",
        length: "02:11",
        imdb_rating: 6.9,
        age_rating: "U/A",
        story: "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
        director: "Guillermo del Toro",
        writer: "Travis Beacham, Guillermo del Toro",
        stars: ["Charlie Hunnam", "Idris Elba", "Rinko Kikuchi"],
        trailer: "https://www.youtube.com/embed/5guMumPFBag?si=aznBd1iDLnEJQaqW",
        music: "PacificRim.mp3"
    },
    {
        name: "Minecraft",
        image_loc: "Minecraft.jpg",
        language: "English",
        format: "IMAX 3D, 4DX, 2D",
        genre: "Animation, Adventure, Fantasy",
        length: "01:45",
        imdb_rating: 7.5,
        age_rating: "U/A",
        story: "A young adventurer embarks on a journey through the blocky world of Minecraft, facing challenges and discovering the secrets of the land.",
        director: "Peter Sollett",
        writer: "Allison Schroeder",
        stars: ["Jason Momoa", "Jack Black", "Jessica Henwick"],
        trailer: "https://www.youtube.com/embed/wJO_vIDZn-I?si=4w-VnhJxjjtjCfB0",
        music: "Minecraft.mp3"
    },
    {
        name: "Oppenheimer",
        image_loc: "Oppenheimer.jpg",
        language: "English",
        format: "IMAX 2D, 4DX, 2D",
        genre: "Biography, Drama, History",
        length: "03:00",
        imdb_rating: 8.5,
        age_rating: "U/A",
        story: "The story of J. Robert Oppenheimer, the theoretical physicist who led the Manhattan Project, which developed the atomic bomb during World War II.",
        director: "Christopher Nolan",
        writer: "Christopher Nolan",
        stars: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
        trailer: "https://www.youtube.com/embed/uYPbbksJxIg?si=8aSuLgDxnXbsIYdP",
        music: "Oppenheimer.mp3"
    }
    
];

const urlParams = new URLSearchParams(window.location.search);
const movieName = urlParams.get('movie');

if(movieName === ""){
    window.location.href = 'movieLibrary.html';
}    

movies.forEach(element => {
    if(movieName.toLowerCase() === element.name.toLowerCase()) {
        moviesInfoDiv = document.getElementById('card');
        let length = element.length;
        let [hours, minutes] = length.split(":");
        hours = parseInt(hours, 10);
        let formattedLength = `${hours}h ${minutes}m`;
        document.title = movieName + " - " + element.age_rating;
        let musicElement = '';
        let abbrMeaning = '';
        if(element.age_rating === 'U/A') {
            abbrMeaning = "Unrestricted Public Exhibition - Parental Discretion";
        } else if (element.age_rating === 'U') {
            abbrMeaning = "Universal";
        } else {
            abbrMeaning = "Adult Only";
        }

        if('music' in element) {
        musicElement = `
            <audio id="bgm" controls autoplay loop>
                <source src="./Musics/${element.music}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>

            <button title="Mute Song" class="mute-button" id="muteBtn"><i class="fa-solid fa-volume-high"></i></Button>
        `;
        }

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML += `
            <button id="previous-button" type="button"><i class="fa-solid fa-arrow-left"></i></button>

          <header>
              <h2>${element.name} - <abbr title="${abbrMeaning}">${element.age_rating}</abbr></h2>
          </header>
            <div class="wrapper">
              <div class="image-container">
                  <img src="./MovieBanner/${element.image_loc}" alt="${element.name}">
              </div>
              <div class="content">
                  <p id="languageValue">Languages: ${element.language}</p>
                  <p>${formattedLength} | ${element.genre}</p>
                  <p>Rating: ${element.imdb_rating}</p>
                  <p class='story'>Story: ${element.story}</p>
                  <p>Director: ${element.director}</p>
                  <p>Writer: ${element.writer}</p>
                  <p>Stars: ${element.stars.join(', ')}</p>
                  <button class="book-now">Book Now!</button>
              </div>
            </div>

        ${musicElement}
      `;
      moviesInfoDiv.appendChild(movieDiv);
        }
  });


  const audio = document.getElementById('bgm'); 
  const muteButton = document.getElementById('muteBtn');
  try {
    audio.volume = 0.2;
  } catch(error) {
  }

    document.querySelector('.book-now').addEventListener('click', () => {
        movies.forEach(e => {
            if(e.name.toLowerCase() === movieName.toLowerCase()) {
                const movieLanguages = e.language;

                const dialog = document.getElementById('languageDialog');
                const languageCheckboxes = document.getElementById('languageCheckboxes');

                languageCheckboxes.innerHTML = '';

                const languagesArray = movieLanguages.split(',').map(lang => lang.trim());
                languagesArray.forEach(language => {
                    const radioContainer = document.createElement('div');
                    radioContainer.classList.add('radio-container');

                    const radio = document.createElement('input');
                    radio.type = 'radio';
                    radio.name = 'language';
                    radio.id = language;
                    radio.value = language;

                    const label = document.createElement('label');
                    label.setAttribute('for', language);
                    label.innerText = language;

                    radioContainer.appendChild(radio);
                    radioContainer.appendChild(label);
                    languageCheckboxes.appendChild(radioContainer);
                });

                dialog.style.display = 'flex';

                document.getElementById('dialogCloseButton').onclick = () => {
                    dialog.style.display = 'none';
                };

            }});
            });
    
            document.getElementById('dialogBookButton').onclick = () => {
                const selectedLanguage = document.querySelector('input[name="language"]:checked');
                if (selectedLanguage) {
                    selected = selectedLanguage.value;
                        window.location.href = `screenLoader.html?movie=${encodeURIComponent(movieName)}&lang=${encodeURIComponent(selected)}`;
                    }
                dialog.style.display = 'none';
            }

    document.querySelector(".image-container").addEventListener("click", () => {
        const trailerContainer = document.getElementById('trailerContainer');
        try {
            audio.muted = true;
        } catch(error) {

        }
        movies.forEach(movie => {
            if(movie.name.toLowerCase() === movieName.toLowerCase()) {
                trailerContainer.innerHTML = `
        <div class="trailer">
                <h2>${movieName} Trailer</h2>
                <iframe width="854" height="480" src="${movie.trailer}&autoplay=1&fs=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                <button id="close-trailer"><ion-icon name="close-outline"></ion-icon></button>
            </div>
        `;
        trailerContainer.style.display = 'Flex';
        document.getElementById('close-trailer').addEventListener('click', () => { 
            trailerContainer.style.display = 'none'; 
            trailerContainer.innerHTML = '';
            try {
                audio.muted = false;
            } catch(error) {
    
            }
            }
    );
}});
});

previous = document.getElementById('previous-button');
previous.addEventListener('click', ()=> {
    window.location.href = './movieLibrary.html';
})

try {
muteButton.addEventListener('click', ()=> {
    if(audio.muted) {
        audio.muted = false;    
        muteButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
        muteButton.title = "Mute Song";
    } else {
        audio.muted = true;
        muteButton.innerHTML = `<i class="fa-solid fa-volume-xmark">`;
        muteButton.title = "Play Song"
    }
});
}
catch(error) {
}

document.body.addEventListener("keydown", (e)=> {
    if(e.key === 'MediaPlayPause') {
        if(audio.muted) {
            audio.muted = false;    
            muteButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
            muteButton.title = "Mute Song";
        } else {
            audio.muted = true;
            muteButton.innerHTML = `<i class="fa-solid fa-volume-xmark">`;
            muteButton.title = "Play Song"
        }
    }
})