# Shorter Url (by rules)
A url copier and rewritter based on the url shortener rules configured by the user, for example, goLink rules.


## Why we need this

Suppose you are using goLinks and there are some short links with variables you have defined. But assemble these links based on the variable takes manual efforts and why not just use rules to do it?

## How it works

This extension get the current page's url and use user predefined rules to rewrite it if possible and copy the url to your pasteboard. 

1. This extension uses regex to replace the long link with short link.
2. This extension runs rules from top to bottom, and if any rule changed the url, it will stop and use the shorter url. Otherwise, it uses the original url.

## How to start

1. You need to clone the project to your local folder.
2. Use chrome development mode and load this unpacked extention.
3. Open the option of this extension, put more rules in the text area. Click save. Close it.
4. On any tab, click on this extension, it will rewrite current url if it matches any rules and then copy the url to the pasteboard.

## Writing new rules

Open options of this extension to set up your own rules.
1. Each rule occupies one line in the rule area.
2. Each rule contains 2 parts separted by a comma(,):  (short link),(long link)
3. If there is no variable in your rule.
   1. You can keep the long url as is, but the replacement only works when your url exactly match.
   2. You can append .* to your long url, so any urls starts with that long url will be replaced to the short url.
4. If there is variables in your rule.
   1. In the short url part, put each varialbe as $[number] based on how many variable the url have. For example: go/b/$1, or go/week/$1/$2/$3.
   2. You can use a capturing group to represent the variable part in the long url.
   3. If you are not familar with capturing group, you can use {*} to represent the variable part.  

## Example

There is a default rules already defined which based on a go link rule: 
*  Link:   `go/week`
*  Destination url:  `https://calendar.google.com/calendar/u/0/r/week/{*}/{*}/{*}`

When you copy a url like `https://calendar.google.com/calendar/u/0/r/week/2022/7/31`, it will be rewritten to  `http://go/week/2022/7/31`.