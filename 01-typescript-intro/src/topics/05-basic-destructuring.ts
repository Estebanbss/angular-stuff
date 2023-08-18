interface AudioPLayer{
                    audioVolume: number;
                    songDuration: number;
                    song: string;
                    details: Details;
}

interface Details {
                    author: string;
                    year: number;
}

const audioPlayer: AudioPLayer = {
                    audioVolume: 90,
                    songDuration: 36,
                    song: "Mess",
                    details: {
                                        author: "Ed Sheeran",
                                        year: 2015
                    }
}

 const song = "New Song";

const {song:anotherSong, audioVolume:volume, songDuration:duration, details:{author:author,year:year}} = audioPlayer;

console.log("Song: ", anotherSong);
console.log("Audio Volume: ", volume);
console.log("Song Duration: ", duration);
console.log("Author: ", author);
console.log("Year: ", year);


export {}