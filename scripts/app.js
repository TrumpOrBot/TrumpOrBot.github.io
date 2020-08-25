// Array with questions
var questions = [
    {
        "name": "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
        "type": "trump",
        "text": "--Source: Trump on Twitter 2012 <a href='https://twitter.com/realdonaldtrump/status/260482827458592768?lang=en' target='_blank'>https://twitter.com/realdonaldtrump/status/260482827458592768?lang=en</a>",
        "imgName": null
    },
    {
        "name": "When I became President, I had a meeting at the Pentagon with lots of generals. They were like from a movie. Better looking than Tom Cruise and stronger. And I had more generals than I've ever seen, and we were at the bottom of this incredible room. I said 'this is greatest room I've ever seen.' I saw more computer boards than I think that they make today.",
        "type": "trump",
        "text": "--Source: Public portion of a cabinet meeting. January 2, 2019",
        "imgName": null
    },
    {
        "name": "What I won't do is take in two hundred thousand Syrians who could be ISIS... I have been watching this migration. And I see the people. I mean, they're men. They're mostly men, and they're strong men. These are physically young, strong men. They look like prime-time soldiers. Now it's probably not true, but where are the women?",
        "type": "trump",
        "text": "--Source: Trump on CBS's Face the Nation with John Dickerson in 2015.",
        "imgName": null,
    },
    {
        "name": "It's like in golf... A lot of people - I don't want this to sound trivial - but a lot of people are switching to these really long putters, very unattractive... it's weird. You see these great players with these really long putters, because they can't sink three-footers anymore. And, I hate it. I am a traditionalist. I have so many fabulous friends who happen to be gay, but I am a traditionalist.",
        "type": "trump",
        "text": "--Source: Trump during an interview with the New York Times in 2011 <a href='https://www.nytimes.com/2011/05/02/nyregion/after-roasting-trump-reacts-in-character.html' target='_blank'>https://www.nytimes.com/2011/05/02/nyregion/after-roasting-trump-reacts-in-character.html</a>",
        "imgName": null
    },
    {
        "name": "She does have a very nice figure... If [Ivanka] weren't my daughter, perhaps I'd be dating her.",
        "type": "trump",
        "text": "--Source: Trump said this during an appearance with Ivanka on The View in 2006 in response to a question about how he would react if Ivanka were to pose in Playboy magazine. Video that includes the response in question: <a href='https://www.youtube.com/watch?v=MjVvZhExf70' target='_blank'>https://www.youtube.com/watch?v=MjVvZhExf70</a> Relevant article: <a href='https://www.independent.co.uk/news/world/americas/us-elections/donald-trump-ivanka-trump-creepiest-most-unsettling-comments-a-roundup-a7353876.html' target='_blank'>https://www.independent.co.uk/news/world/americas/us-elections/donald-trump-ivanka-trump-creepiest-most-unsettling-comments-a-roundup-a7353876.html</a>",
        "imgName": null
    },
    {
        "name": "We’re … increasing our budget by many billions of dollars, because of North Korea and other reasons, having to do with the anti-missile.",
        "type": "trump",
        "text": "--Source: Q&A with the press, August 10th, 2017 <a href='https://www.cnbc.com/2017/08/10/president-donald-trump-pledges-to-increase-missile-defense-spending.html' target='_blank'>https://www.cnbc.com/2017/08/10/president-donald-trump-pledges-to-increase-missile-defense-spending.html</a>",
        "imgName": null
    },
    {
        "name": "They have to get better than what they’ve been doing. I mean obviously that was a terrible thing. And I’ve spoken about it numerous times in various speeches. And what’s interesting is I spoke about it when we launched a very successful rocket — a tremendous program that culminated on that day and obviously it goes on from there.",
        "type": "trump",
        "text": "--Source: Fox News Radio Interview with Brian Kilmeade. June 3rd, 2020 <a href='https://radio.foxnews.com/2020/06/03/president-trump-on-the-brian-kilmeade-show/' target='_blank'>https://radio.foxnews.com/2020/06/03/president-trump-on-the-brian-kilmeade-show/</a>",
        "imgName": null
    },
    {
        "name": "Look, having nuclear — my uncle was a great professor and scientist and engineer, Dr. John Trump at MIT; good genes, very good genes, OK, very smart, the Wharton School of Finance, very good, very smart — you know, if you’re a conservative Republican, if I were a liberal, if, like, OK, if I ran as a liberal Democrat, they would say I’m one of the smartest people anywhere in the world — it’s true! — but when you’re a conservative Republican they try — oh, do they do a number — that’s why I always start off: Went to Wharton, was a good student, went there, went there, did this, built a fortune — you know I have to give my like credentials all the time, because we’re a little disadvantaged — but you look at the nuclear deal, the thing that really bothers me — it would have been so easy, and it’s not as important as these lives are — nuclear is so powerful; my uncle explained that to me many, many years ago, the power and that was 35 years ago; he would explain the power of what’s going to happen and he was right, who would have thought? — but when you look at what’s going on with the four prisoners — now it used to be three, now it’s four — but when it was three and even now, I would have said it’s all in the messenger; fellas, and it is fellas because, you know, they don’t, they haven’t figured that the women are smarter right now than the men, so, you know, it’s gonna take them about another 150 years — but the Persians are great negotiators, the Iranians are great negotiators, so, and they, they just killed, they just killed us, this is horrible.",
        "type": "trump",
        "text": "--Source: Public speech in South Carolina July 19th, 2016 <a href='https://www.snopes.com/fact-check/donald-trump-sentence/' target='_blank'>https://www.snopes.com/fact-check/donald-trump-sentence/</a>",
        "imgName": null
    },
    {
        "name": "Hillary Clinton and the Democrats want to make it impossible for many people to get health care. You know what I hear? The Republicans, they want to make it possible for many people to get health care. And we will have great plans that are going to be very good plans but they're going to be affordable. But I heard the other day. The other day, somebody said, well, if you don't have to pay for it, you don't have to pay for it. I said to him, no. But it's going to be -- you know, in some cases, it's going to be so expensive that it's going to be unaffordable for many people. And I heard that the Democrats, they want to make it impossible for many people to get health care. And, you know, in some cases, it's going to be so expensive that people aren't going to be able to afford it, OK?",
        "type": "bot",
        "text": "This text was generated by the model when prompted with 'Hillary'.",
        "imgName": null
    },
    {
        "name": "Women's health care is going to be very important for this country. We have to have it, but women's health care is going to be very important for this country. And we have to make it affordable. We have to make it really good. And we're going to be working on that.Well, I've done a very good job. I mean, I've done a very good job. I've done business well, I've been successful. And I've been very good at what I've done. But I hate to see people that have a hard time doing things for themselves. I mean, I have great friends in New York, in California, where they have a big business. They're very successful people. They're very good at what they do. And they don't have the luxury of being able to take care of themselves. And so I've learned a lot from my business. And I've learned how to take care of myself. I have a great family. I have a great wife. And I have a great business. And I've learned a lot from my business. And I've learned how to take care of myself. And, you know, I do have a lot of money.",
        "type": "bot",
        "text": "This text was generated by the model when prompted with 'Women's health care'.",
        "imgName": null
    },
    {
        "name": "We have some great women. And I think Ivanka, Ivanka is the best. And she really is somebody you should be keeping a close eye on. So any of my daughters-- I think I like most of my daughters. I really like most of my children. But I've been in business so long. I've had so many children. And I think I'll be able to tell you, I'd rather talk about business, business, business. But you know, Ivanka is very smart. She's very smart, very smart. And she's really a very, very independent person.",
        "type": "bot",
        "text": "This text was generated by the model when prompted with 'Ivanka'.",
        "imgName": null
    },
    {
        "name": "We have a problem with the pandemic, and it's a problem that we have to solve. I think that's going to go well. I think that, honestly, we're going to do really well. I think that the unemployment numbers are going to go well. The labor market is really starting to come back. I think that the economy is really starting to turn around. It's starting to pick up some of the big cities, and we're going to see a lot of that. And I think that the economy is starting to turn around.",
        "type": "bot",
        "text": "This text was generated by the model when promnpted with 'flu', even though the model's most recent training data comes from mid-2019.",
        "imgName": null
    },
    {
        "name": "Golf is a great game. I'm a big fan of golf. Having been a -- I've been a part of the golf industry for a long time. I've been a part of this game for a long time. I love the golf course at Mar-a-Lago. I love all of the golf courses.",
        "type": "bot",
        "text": "This text was generated by the model when prompted with 'Golf'.",
        "imgName": null
    },
    {
        "name": "You know, I actually get along very well with a lot of women. And I think it's because I have the best personality. I think I'm very honest, I'm very straight, I like women. I'm a big fan of women. I want to see women be respected. You know, I know a lot of women. I've been with women for many years, I've always had nice women. Well, I have a big heart. That's why I'm doing it. I have a big heart. And I like women.",
        "type": "bot",
        "text": "This text was generated by the model when prompted with a sentence about respecting women.",
        "imgName": null
    },
    {
        "name": "China and our relationship with China has been getting worse and worse. And you know, we're doing what we're supposed to do. I mean, it's very interesting. The other day, you see something, we're going to the United Nations -- they're going to try and get us out of, I think it's, I think it's going to be an interesting meeting. But it's going to be a difficult meeting. I think it's a very, very bad thing. I think it's very, very bad for our country. And I think I have a lot of people that are very, very angry about it. And I think this is something -- this is really something that really hurts.",
        "type": "bot",
        "text": "This text was generated by the model when prompted with 'China'.",
        "imgName": null
    },
    {
        "name": "You know, if I go to China, I say, 'Here's what I'm going to do. You have to pay a 35 percent tax on your car to entice the Chinese into building factories.' They don't think of it. They go here, they build a factory. Then they go to Vietnam, they build a factory. And I tell them, here's what I'm going to do. We're going to tax Chinese cars, we're going to tax Chinese home-entertainment companies. We're going to tax Chinese people. We're going to tax Chinese banks. We're going to tax Chinese business.",
        "type": "bot",
        "text": "This text was generated by the model when prompted with 'China'.",
        "imgName": null
    },
];


// Small utility to shuffle array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
shuffle(questions);

// Variable to follow the game
var currentQuestion = 0;
// Total right answers
var rightAnswers = 0;
// Number of time the user tried again
var retries = 0;

// Start game
function startGame() {
    $(".mainSite").hide();
    $(".questionsOptions").show();
    $(".questionObject").show();
}

// Initialize variables and hide DOM elements
function initGame() {
    currentQuestion = 0;
    rightAnswers = 0;

    // Hide Game and options
    $(".questionsOptions").hide();
    $(".questionObject").hide();

    // Hide total result
    $(".totalResult").hide();

    // Hide all in-game texts
    $(".gameDescription").hide();
    $(".gameAnswer").hide();
    $(".gameImage").hide();

    // Hide all buttons
    $(".questionNext").hide();
    $(".questionEndGame").hide();
    $(".questionNewGame").hide();

    showButton("play");
    showCurrentQuestion();
}

// Ger current question in game
function getCurrentQuestion() {
    return questions[currentQuestion];
}

// Move to the next question or finish the game!
function nextQuestion() {
    currentQuestion = currentQuestion + 1;

    if (currentQuestion < questions.length) {
        $(".gameAnswer").hide();
        $(".gameDescription").hide();
        $(".gameImage").hide();
        $(".gameImage .picture").attr("src", "");

        showCurrentQuestion();
        showButton("play");
    } else {
        showEnded();
    }
}

// Validate if answer is correct in current question
function validateQuestion(typeAnswer) {
    let question = getCurrentQuestion();
    return (question.type === typeAnswer);
}

// Display current cuestion on DOM
function showCurrentQuestion() {
    let question = getCurrentQuestion();
    $(".score").text(`${currentQuestion+1}/16`);
    $(".gameName").text(question.name);
}

// Show Answer (true/)
function showAnswer(isRight) {
    if (isRight === true) {
        rightAnswers = rightAnswers + 1;
    }

    let question = getCurrentQuestion();
    let imgName = (question.imgName) ? question.imgName : `${question.type}.svg`;
    $(".gameImage .picture").attr("src", `assets/${imgName}`);


    if (isRight === true) {
        $(".gameAnswer").text("Correct!");
    } else {
        $(".gameAnswer").text("Wrong!");
    }

    $(".gameAnswer").show();
    $(".gameDescription").html(question.text).show();
    $(".gameImage").show();

    if (currentQuestion + 1 === questions.length) {
        showButton("ended");
    } else {
        showButton("next");
    }
	gtag('event', 'quizResultsProgress', {
		'event_category': 'quizMetrics',
		'correctAnswersProgress': rightAnswers,
		'questionsAttemptedProgress': currentQuestion
	});
}

function showTotalResult() {
    $(".questionObject").hide();
    $(".totalResult").show();

    $(".totalResult .totalAnswers").text(`Right answers ${rightAnswers} of ${questions.length}`);
    showButton("new");
}

// Hide all buttons and the display the proper element, according to the parameter
// 'play' to show trump/bot
// 'next' to show next question
// 'ended' to show end game
// 'new' to start a new game
function showButton(btnName) {
    let validClasses = [
        "questionTrump",
        "questionBot",
        "questionNext",
        "questionEndGame",
        "share",
        "extraInfo",
        "questionNewGame"
    ];
    validClasses.forEach(className => {
        $(`.${className}`).hide();
    });

    switch (btnName) {
        case "play":
            $(".questionTrump").show();
            $(".questionBot").show();
            break;
        case "next":
           $(".questionNext").show();
           break;
        case "ended":
            $(".questionEndGame").show();
            break;
        case "new":
            $(".questionNewGame").show();
            $(".share").show();
            $(".extraInfo").show();
            break;
    }
}

$(".playButton").on("click", () => {
    startGame();
});

$(".questionTrump").on("click", () => {
    let answer = validateQuestion("trump");
    showAnswer(answer);
});

$(".questionBot").on("click", () => {
    let answer = validateQuestion("bot");
    showAnswer(answer);
});

$(".questionNext").on("click", () => {
    nextQuestion();
	gtag('event', 'quizProgress', {
		'event_category': 'quizMetrics',
		'value': currentQuestion,
		'quizProgressReached': currentQuestion
	});
});

$(".questionEndGame").on("click", () => {
    showTotalResult();
	gtag('event', 'quizComplete', {
		 'event_category': 'quizMetrics',
		 'value': rightAnswers,
		 'finalScore': rightAnswers
	});
});

$(".questionNewGame").on("click", () => {
	retries += 1;
	gtag('event', 'startOver', {
		 'event_category': 'quizMetrics',
		 'retriesValue': retries
	});
    location.reload();
});

initGame();
