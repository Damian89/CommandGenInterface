# Command generator for bug bounty/pentest related tasks

While bug bounty hunting you are usually using some kind of command line commands/tools like dirseach, wfuzz oder hydra.
All those tools have a lot of arguments and by time it becomes irritating to write those commands. Especially if you 
arguments (wordlists, ...) alot. So I developed a simple vueJS based command generator for my needs. 

You could use it as a base for you own workflow. What I use it for:

- I have a module which generates report templates
- I have a module for my private tools 
- I have a module for regular expressions I use a lot
- I have a sqlmap command generator
- I have a nmap command generator

## Install

- adjust config.js
- adjust wordlists and filenames
- Install dependencies: npm install
- Build project: npm run build

## Execute

After building the project, you will find a dist/ folder in the root which contains two files. One is an index.html 
which can be opened with a webbrowser.

## Example:

I uploaded the current version here: __https://www.damianschwyrz.de/interface/index.html__

## What you need to know

I won't add more modules to this public version because everyone uses other commands/tools and has its own workflow.

Additionally: The dirsearch version used here for command generation is my own fork: https://github.com/Damian89/dirsearch

The main difference is - it has more then only GET http method.