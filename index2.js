var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

//redundant with code below to append objects into one

var userss = {
    user1: {
        userName: '@elonmusk',
        displayName: 'Elon Musk',
        joinedDate: 'June 2009',
        followingCount: 103,
        followerCount: 47900000,
        avatarURL: 'assets/elonmusk.jpg',
        coverPhotoURL: 'assets/elonmusk-cover.jpeg',
        tweets: [
            {
                text: 'I admit to judging books by their cover',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Starship to the moon',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'Out on launch pad, engine swap underway',
                timestamp: '2/09/2021 12:11:51'
            }
        ],
    },
    user2: {
        userName: '@BillGates',
        displayName: 'Bill Gates',
        joinedDate: 'June 2009',
        followingCount: 274,
        followerCount: 53800000,
        avatarURL: 'assets/billgates.jpg',
        coverPhotoURL: 'assets/billgates-cover.jpeg',
        tweets: [
            {
                text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
                timestamp: '2/10/2021 00:01:20'
            },
            {
                text: 'Should I start tweeting memes? Let me know in a comment.',
                timestamp: '2/09/2021 18:37:12'
            },
            {
                text: 'In 2020, I read a book every hour.',
                timestamp: '2/09/2021 12:11:51'
            }
        ],
    }
};
console.log(userss);

userss = { user1, user2 };

console.log(userss);


var container = document.getElementById('container');

var countOfTweets = 0;


var allTweets = [];

for (const user in userss) {
    for (const tweet in userss[user].tweets) {
        countOfTweets++;
        allTweets.push(userss[user].tweets[tweet]);
        // allTweets.push(tweet, tweet);

        // console.log(currTweet.text);
        let tweetCode = document.createElement('section');
        tweetCode.setAttribute('class', 'indiv-tweets')
        tweetCode.innerHTML =
            `
            <img id="profile-image" src="${userss[user].avatarURL}" alt="profile image">
            <section class="text-of-tweet">
                <span>
                    <span> <h4>${userss[user].displayName} ✔️</h4> <h6>${userss[user].userName}</h6><h5> </h5> </span> <span>...</span>
                </span>

                <p>${userss[user].tweets[tweet].text}</p>
                <span>
                    <p> 💬 5.5k </p>
                    <p> 💬 5.5k </p>
                    <p> 💬 5.5k</p>
                    <p> 🔗 </p>
                </span>
            </section>
            `
        container.appendChild(tweetCode);
    }
}

//attempted code for time and adding key/value to tweets
//tweet.ago = Date.now() - Date.parse(userss[user].tweets[tweet].timestamp);


console.log(countOfTweets);
console.log(allTweets);

//take old code that was used in profile page rendering and use it here
// for (const tweet of tweets) {
// for (const user in userss) {
//     for (const nextTweet of currTweets) {
//         // console.log(currTweet.text);
//         let tweetCode = document.createElement('section');
//         tweetCode.setAttribute('class', 'indiv-tweets')
//         tweetCode.innerHTML = `
//                 <img id="profile-image" src="${currUser.avatarURL}" alt="profile image">
//                 <section class="text-of-tweet">
//                     <span>
//                         <span> <h4>${currUser.displayName} ✔️</h4> <h6>${currUser.userName}</h6><h5> </h5> </span> <span>...</span>
//                     </span>

//                     <p>${currTweet.text}</p>
//                     <span>
//                         <p> 💬 5.5k </p>
//                         <p> 💬 5.5k </p>
//                         <p> 💬 5.5k</p>
//                         <p> 🔗 </p>
//                     </span>
//                 </section>
//             `
//         container.appendChild(tweetCode);
//     }
// };
