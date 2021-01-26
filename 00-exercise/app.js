
const form = document.querySelector('#tweetForm');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const tweets = document.querySelector('ul');
    const tweetList = document.createElement('li');
    tweetList.innerHTML = "<b>"+ form.username.value + "</b>" + " " + form.tweet.value;
    tweetList.style.listStyle = 'none';
    tweets.appendChild(tweetList);
});