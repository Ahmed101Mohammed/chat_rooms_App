![GitHub Repo stars](https://img.shields.io/github/stars/Ahmed101Mohammed/chat_rooms_App?color=red&logoColor=green&style=social)
&nbsp;
![GitHub forks](https://img.shields.io/github/forks/Ahmed101Mohammed/chat_rooms_App?logoColor=green&style=social)
&nbsp;
![GitHub](https://img.shields.io/github/license/Ahmed101Mohammed/chat_rooms_App?style=flat-square)

# chat rooms App
simple chat rooms app with just two rooms.

## Description:
- This chat app has just two rooms ("arts","sports"), It can help you to talk with other users in the fiels that you prefere, by join to the field in rooms page.

- It built with html, css, js, node.js, express framework and socket.io library.

- I face some problems with save the userName, without save it in database, or any file in local storage. And I solve it wiht socket data atribute.

## Install and Runing the project:

### Installation:

You can install the project by clone the repository in your computer by typing this line in your
terminal:

```
git clone https://github.com/Ahmed101Mohammed/chat_rooms_App.git
```
### Runing the project:

To runing the project, inter the project file by your terminal and do that:
1- Type this line in your terminal:
```
npm install
```
This line will install these packejes:
- **express**
- **socket.io**
- **nodemon**

2- After installation done, you can write this line in you terminal:
```
npm test
```
In this step the server will run in port ***5000***.

3- Open your browser and type that in the search place:
```
http://localhost:5000/
```
## How to use:
### How to register your self?
When you open the project in the browser, you will see this page:
![Enter page in chat_rooms_app](https://github.com/Ahmed101Mohammed/chat_rooms_App/blob/main/images/enterBageInChatRoomsProject.png)
1 - Write your name in the middle input:
> In th middle of the page you can see an input, 
> In this input you will write your name.

2 - Click the middle button:
> Under the input you can see a button,
> click it, after riting your name.

### How to join to a room?
When you click the middle button, You will see this page:
![Rooms and chating page](https://github.com/Ahmed101Mohammed/chat_rooms_App/blob/main/images/roomsPageInChatRoomsApp.png)

To join to one of these pages ("Arts", "sports"), All you need to do is to click on the room that you want to join to.
When you join the page will be like this:
![What Rooms and chating page like after choosing the room](https://github.com/Ahmed101Mohammed/chat_rooms_App/blob/main/images/choseRoomFromRooms.png)

> ***Note***:
> 1 - Every time you join to a room, all old message will removed.
> 2 - you can't join to more one room.

### How to write your message?
Under the room par you can see an input, In this input you can write your message, like this:
![Writing message in the message input](https://github.com/Ahmed101Mohammed/chat_rooms_App/blob/main/images/writeYourMessage.png)

### How to send your message?
Undet the message input you can see a button with "send" word, click it and your message will send:
![Sending message in messaging page](https://github.com/Ahmed101Mohammed/chat_rooms_App/blob/main/images/putTheSendButtonToSendMSSG.png)

### How to test the webSocket protocole in this project:
> You can open many taps in your browser, and type this line in search input of every tab:
```
http://localhost:5000/
```
> Then you can use every tab as a uniq user, and use the project in any way, according the "How to use?" part of the README file that you read now.

## The License:
The MIT License (MIT)

Copyright (c) 2022 Ahmed M. Mohamed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
