
const form = document.querySelector('#tweetForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const tweets = document.querySelector('ul');
    const tweetList = document.createElement('li');
    tweetList.innerHTML = "<b>"+ form.username.value + "</b>" + " " + form.tweet.value;
    tweetList.style.listStyle = 'none';
    tweets.appendChild(tweetList);
});


//teacher's solution

form.addEventListener('submit', function(e){
    e.preventDefault();
    const userNameInput = form.getElementsByClassName.username;
    const tweetInput = form.getElementsByClassName.tweet;
    addTweet(userNameInput.value, tweetInput.value);
    userNameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    //li
    const newTweet = document.createElement(li);
    //b
    const bTag = document.createElement('b');
    //append
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`-${tweet}`);
    // tweetContainer.appendChild(newTweet);

}