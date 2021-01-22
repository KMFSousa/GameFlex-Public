# GameFlex
Fourth Year Design Project - Capstone<br>
University of Waterloo<br>
Electrical and Computer Engineering 2021<br><br>
Kristopher Sousa, Zachary Walford, Jackson Barr, William Huang<br>

### !!! Note: This Repo is a mirror of the private Repo where work is ongoing.  !!!

## Mission
 GameFlex is an online web application that allows people to play any card game they desire. Players can take pictures of and upload owned physical cards to use in gameplay, design the “table” that the game will be played on and join games with friends or strangers. The advantage of GameFlex over existing alternatives is that it provides a free, easy-to-use online platform with very low system requirements, fast load times and the ability to play any card game the user wishes to.

## Features
- Play any card based game from Euchure to Magic The Gathering
- Easy to join game codes less then 6 characters in length
- Upload cards you own to play with and configure them into decks however you want
- Build and customize configurations once to use with friends or share with the community
- Securely store assets, credentials and games to continue with later
- Mobile card upload and deck editing support
- Support for the top 3 most common Desktop browsers
- Simple enough to join that your grandma could do it, but powerful enough that you can setup your obscure card card


## Stack
In short we've utilized the latest of the MEAN stack plus MySQL hosted on GCP. 

The complete list of tools is: TypeScript, JavaScript, MongoDB, Express, Angular 11, Node.js, MySQL, Phaser, GridFS and Google Cloud Platform.

MySQL handles the storage of metadata, user credential information and and anything that makes sense in a relational context. MongoDB however stores the meat of the project, the: game states, configurations, and files

## Original Design Plans

While modifications have been made to these as development progresses they still provide a nice overview of the concept.

![Services Diagram](https://github.com/KMFSousa/GameFlex-Public/edit/develop/Services-Diagram.png?raw=true)

![GameFlex Mockup](https://github.com/KMFSousa/GameFlex-Public/edit/develop/GameFlex-Mockup.png)

![Database Schema V2](https://github.com/KMFSousa/GameFlex-Public/edit/develop/Database-Schema-V2.png)
