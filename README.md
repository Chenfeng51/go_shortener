# Url Shortener(by rules)
A url shortener based on the other url shortener rules, for example, goLink rules.


## Why we need this

Suppose you are using goLinks and there are some short links with variables you have defined. But assemble these links based on the variable takes manual efforts and why not just use rules to do it?

## How it works

This go shortener get the current page's url and use rules to replace it if possible and copy the url to your pasteboard. 

1. Each rule occupies one line
2. Each rule contains 2 parts:  short link  and long link
3. This extension will use regex to replace the long link with short link.
4. This extension runs rules from top to bottom, and if any rule changed the url, it will stop and return the short url. Otherwise, it return the original url.

## How to start

1. You need to clone the project to your local folder.
2. Use chrome development mode and load this unpacked extention.
3. Open the option of this extension, put more rules in the text area. Click save. Close it.
4. On any tab, click on this extension, it will copy the current url, and shorten it if it matches any rules.

