This is the starter code for the first Intoxicoders lesson, on AJAX and simple single-page web applications. Start here!

*Note:* You don't need to do anything before the lesson starts. However, the code sample that we'll working with is in this repository, so you're welcome to clone it and follow along. We'll be projecting the code onto the screen and explaining everything step by step, so you won't even need your laptop, but we'll leave the learning methodologies up to you. If you run into problems, wait until the end of the session and we'll help you out.

For this project, you'll need to have installed [git](http://git-scm.com) to "clone" this repository, and [node.js](http://nodejs.org) to run the application server. Once you do, get into the bash shell and enter the commands preceded by a dollar sign. (Lines not preceded by a dollar sign will resemble the output you'll get if everything's working right.)

    $ git clone https://github.com/intoxicoders/lesson-ajax.git
    Cloning into 'lesson-ajax'...
    remote: Counting objects: 1050, done.
    remote: Compressing objects: 100% (820/820), done.
    remote: Total 1050 (delta 68), reused 1044 (delta 65)
    Receiving objects: 100% (1050/1050), 1.18 MiB, done.
    Resolving deltas: 100% (68/68), done.
    
    $ cd lesson-ajax
    
    $ node app
    Express server listening on port 3000
    
Once the server is listening, open a web browser and go to http://localhost:3000.

*Have you already done the initial setup?* Awesome. If you want to see the final product (it works now, I promise!) go back into terminal and enter the following commands. *Note: You will lose any work you've done so far.*

    $ git reset --hard origin/master
    HEAD is now at (something)
    
    $ git pull origin master
    remote: Counting objects: 8, done.
    remote: Compressing objects: 100% (2/2), done.
    remote: Total 5 (delta 2), reused 5 (delta 2)
    Unpacking objects: 100% (5/5), done.
    From github.com:intoxicoders/lesson-ajax
     * branch            master     -> FETCH_HEAD
    Updating 5e635d4..3cf2b5f
    Fast-forward
     routes/index.js |    6 +++---
     1 file changed, 3 insertions(+), 3 deletions(-)
     
    $ git checkout complete
    Switched to branch 'complete'
    
    $ node app
    Express server listening on port 3000
    
Once again, go to http://localhost:3000 in a web browser and it'll work. If you have any issues, feel free get in touch with me and we can resolve them.