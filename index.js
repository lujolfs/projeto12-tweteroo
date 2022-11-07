import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());


let users = []

const tweets = [
    {
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
    },
    {
		username: "vascodagama",
		avatar: "https://s2.glbimg.com/2JD1yTQW5JMxNXiUIeBT-fP6Qq0=/0x0:1600x1067/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/8/K/rU7F5IS521gPYdP7qQGQ/rib1990.jpg",
		tweet: "Vascoooo!!"
    },

]


app.post('/sign-up', (req, res) => {
    let user = {
        username: req.body.user,
        avatar: req.body.avatar,
    }
    users.push(user);
    res.send(user)
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
    let userAvatar = users.avatar;
    tweets.push({
        username: userPost,
        avatar: userAvatar,
        tweet: userTweet,
    });
    res.send(tweets);
})

app.listen(5000);