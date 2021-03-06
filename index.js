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


var date1

//get query string
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

//assigns and converts from string into varaible that matches the already declared variable
var currUser = eval(params['user']) || userss.user1;

var currObj = userss[currUser];
console.log(currObj);

// console.log(users, 'print user array to see if this adding of objects works')
// correctly added

// Not needed with the mock JSON - will design as if it reads in from this sort of code
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
// };
// xhttp.open("GET", "ajax_info.txt", true);
// xhttp.send();

//loop over array of users

//will use this for the timeline
// for (let user of users) {
//     for (const key in user) {
//         console.log(key, 'key');
//         console.log(user[key], 'value of key');

//     }
// }

//user 1 render
var head = document.getElementsByTagName('header')[0];
var container = document.getElementById('container');


var headNameTweets = document.createElement('section');
headNameTweets.innerHTML = `
    <h4>${currUser.displayName} ??????</h4>
    <h6>${currUser.tweets.length} Tweets</h6>
`;
head.appendChild(headNameTweets);

document.getElementById('banner').style.cssText = `background: url("${currUser.coverPhotoURL}");`;
document.getElementById('profile-image').setAttribute('src', `${currUser.avatarURL}`);

document.getElementById('text-portion-prof').innerHTML = `
                <h2>${currUser.displayName} ??????</h2>
                <h5>${currUser.userName}</h5>
                <h5>???? Joined ${currUser.joinedDate}</h5>
                <span><h4>${currUser.followingCount.toLocaleString("en-US")}</h4> following <h4>${currUser.followerCount.toLocaleString("en-US")}</h4> followers </span>
            `;

var currTweets = currUser.tweets

for (const currTweet of currTweets) {
    // console.log(currTweet.text);
    let tweetCode = document.createElement('section');
    tweetCode.setAttribute('class', 'indiv-tweets')
    tweetCode.innerHTML = `
        <img id="profile-image" src="${currUser.avatarURL}" alt="profile image">
        <section class="text-of-tweet">
            <span>
                <span> <h4>${currUser.displayName} ??????</h4> <h6>${currUser.userName}</h6><h5> </h5> </span> <span>...</span>
            </span>

            <p>${currTweet.text}</p>
            <span>
                <p> ???? 5.5k </p>
                <p> ???? 5.5k </p>
                <p> ???? 5.5k</p>
                <p> ???? </p>
            </span>
        </section>
    `
    container.appendChild(tweetCode);
}

//function to determine time since tweet
/* difference between date1 and date2 in days (date2 - date1) */
/* date1 and date 2 are already javascript date objects */
function dateDifference(date1) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    date1 = new Date.parse(date1);
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.now()

    return Math.floor((Date.now() - utc1) / _MS_PER_DAY);
}

//15-Oct - need to make this work off of reading a combined object - object made but cannot get to that