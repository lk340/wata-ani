# WataAni

## How To Run Locally
1. Clone repository.
2. Create two tabs on terminal and `cd` into the cloned wata-ani directory in both of them.
3. On one tab, `cd` into the "frontend" directory. 
4. On the other tab, `cd` into the "backend" directory.

### In The "backend" directory...
1. Make sure you have PostgreSQL enabled on port 5432. Also, make sure you're up to date on the most recent version of Python 3.
2. This is optional, but I'd recommend installing a Python virtual envrionment of your choice. I personally like to work with `virtualenvwrapper`.
3. Execute this command in the terminal: `pip install -r requirements.txt`. This should install all of the required packages for the Django REST Framework project.
4. Execute `python3 manage.py makemigrations`
5. Execute `python3 manage.py migrate`
6. Execute `python3 manage.py loaddata fixtures/fixtures.json`
7. Execute `python3 manage.py createsuperuser` and follow the steps given to you in the terminal
8. Execute `python3 manage.py runserver 7000`. I run the backend on port 7000 to prevent port conflicts with the front end.

### In The "frontend" directory...
1. Run `yarn` or `npm install`. I personally prefer yarn :)
2. Run `yarn start` or `npm run start`.
3. The app should be working now!

### If You're Having Trouble With Migrating The Database
1. Go into the "backend" directory within the "backend" directory.
2. Go into `settings.py`.
3. Scroll down to the `DATABASES` dictionary.
4. Create a new table on PostgreSQL using the default parameters provided in the dictionary.

## About
*Anime*, short for "animation", is the Japanese take on what is better known in the western world as cartoons. In a more serious sense, it's the creation of worlds, both fictional and non-fictional, where stories, imagination, characters, and events unfold in ways that can enrapture audiences from all over the world. The anime industry has become a media super franchise, even inspiring the creation of non-animation-related goods, such as figurines, games, novels, cosplay, and many more. Not to mention, its global popularity has allowed it to influence millions of fans, both young and old, while also spawning countless sub-cultures filled with passionate fans. One of these sub-cultures is a community of fans who write reviews for anime, both professionally and casually. We can see this reflected in people who make a living off of websites such as YouTube or blogs, where they create lengthy reviews on anime such as *Neon Genesis Evangelion*, *Attack on Titan*, *Kono Subarashii Sekai ni Shukufuku Wo*, and many more. We can also see the casual anime review community in websites such as *MyAnimeList* and *YouTube* as well. One issue with a lot of these reviews is that, as mentioned previously, they're lengthy. This brings us to an existential question: What is the purpose of a review?

The world of anime has stood long and strong and, thus, has given birth to an amount of stories capable of lasting a lifetime. Well, maybe not that long, but the point is that there is a ton of anime out there, and it would take a long time to watch every single one. Much like many other genres out there, anime has its own fair share of shows that are worth watching and shows that are not worth watching. However, at the end of the day, this is subjective and, thus, the final word as to whether or not a series is worth watching should be left to the person who is curious enough to spend their valuable time watching it. And so, the purpose of a review is to aid a person in deciding on whether or not a show is worth their time. However, as mentioned before, a lot of these reviews, whether they be on YouTube, blogs, or MyAnimeList, are lengthy, and that's a big issue. Why? Because it takes more than one review to make a decision on whether or not you would think a particular series would be worth your while. Why should you watch anime A when you could've had a much better time enjoying anime B? It doesn't take an essay to explain who would enjoy a particular show or not; however, many people opt to write out lengthy reviews because "details are important". Well, they're not. At least, when it comes to helping people know whether or not a series is worth their while. That's where *WataAni* comes in.

*WataAni*, short for *Watashi wa Kono Anime wo Mitai no Ka? Mitaku wa Nai no Ka? Docchida?!* (私はこのアニメを見たいのか？ 見たくわないのか？ どっちだ？！), or, in English, *Do I Want To Watch This Anime? Do I Not Want To Watch This Anime? Which is it?!* is a mobile-friendly web application whose main purpose is to appeal to two audiences: the reviewers and the users who read these reviews. The application encourages reviewers to write succinct one-paragraph reviews. Their reviews are augmented with a genre tagging system, which allows users who are reading reviews to know, from the get go, whether or not a certain anime is within the genre they're currently interested in watching without having to read through a block of text. 

**TL;DR** : *WataAni* is a single-page web application meant to encourage users to create succinct anime reviews, rather than something like the unnecessarily-long description above.

## Assets
You can view all of the mocks up [here](https://www.dropbox.com/sh/mq89830g3ppo6od/AAAeooa9EifCsNM0zBguTFTaa?dl=0) (created on Figma).

## Live Website
https://wata-ani.netlify.app/
