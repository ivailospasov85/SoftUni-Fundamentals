// Define a class Song, which holds the following information about songs: typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. Next n elements will be the songs data in the following format:
// "{typeList}_{name}_{time}", and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). If the value of the
// last element is "all", print the names of all the songs.


function songs(arr) {
    let numberOfSongs = arr.shift()
    let typeListArr = arr.pop()


    for (const elements of arr) {
        let [typeList, name, time] = elements.split('_')
        if (typeListArr === "all") {
            console.log(name);
        } else if (typeList === typeListArr) {
            console.log(name);
        }
    }

}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']

)