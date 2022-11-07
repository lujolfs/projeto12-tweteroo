import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());


let user

const tweets = [

]


app.post('/sign-up', (req, res) => {
    user = {
        username: req.body.user,
        avatar: req.body.avatar,
    }
    res.status(201).send("OK")
})

app.get('/tweets', (req, res) => {
    res.send(tweets);
})

app.post('/tweets', (req, res) => {
    let tweetPost = {
        username: req.body.username,
        tweet: req.body.tweet
    }
    let userPost = tweetPost.username;
    let userTweet = tweetPost.tweet;
    let userAvatar = user.avatar;

    if (tweets.length < 10) {

        tweets.unshift({
            username: userPost,
            avatar: userAvatar,
            tweet: userTweet,
        });

    } else {
        tweets.splice(-1);
        tweets.unshift({
            username: userPost,
            avatar: userAvatar,
            tweet: userTweet,
        });
    }
    res.send(tweets);
    res.status(201).send("OK");
})

app.listen(5000);