const search = document.getElementById('search');
const getTweets = document.getElementById('getTweets');
const output = document.getElementById('output');
const mesSender = document.getElementById('mesSender');

function outputTweets(data) {
    output.innerHTML = '';
    data.forEach(function (item, i) {
        console.log(item);
        let hyper = `<a href="https://twitter.com/${i}/web/status/${item.id_str}
        " target ="_blank">${item.text}</a>`;
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerHTML = `${hyper}<small>${item.user.name}</small>
        ${item.retweet_count}`;
        li.appendChild(span);
        output.appendChild(li);
    });
    console.log(data);
}

function getAllTweets() {
    const url = '/tweets/' + search.value;
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        outputTweets(data.statuses);
    }).catch(function (err) {
        console.log(JSON.stringify(err));
    });
}

function addComment() {
    event.preventDefault();

    let newTweetComment = {
        'comment': document.getElementById('newMessage').value
    }
    console.log(newTweetComment);

    let xhrequest = new XMLHttpRequest();
    xhrequest.open('POST', '/comment/', true);
    xhrequest.setRequestHeader('Content-Type',
        'application/json;charset=UTF-8');

    xhrequest.onreadystatechange = function () {
        if (xhrequest.readyState != 4 || xhrequest.status != 200) {
            return;
        }
        console.log(xhrequest.responseText);
    }
    xhrequest.send(JSON.stringify(newTweetComment));
}

//Modifications in order to use the Fetch API
function addCommentFetch() {
    event.preventDefault();

    let newTweetComment = {
        'comment': document.getElementById('newMessage').value
    }
    console.log(newTweetComment);

    const url = '/comment/';
    const myInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTweetComment)
    };

    fetch(url, myInit)
        .then(function (response) {
            response.json();
        })
        .then(function () {
            console.log('TWITTED!');
        }).catch(function (err) {
            console.log(JSON.stringify(err));
        });

}

getTweets.addEventListener('click', getAllTweets);
mesSender.addEventListener('submit', addCommentFetch);