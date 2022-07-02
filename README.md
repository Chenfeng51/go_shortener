# Url Shortener(by rules)
A url shortener based on the other url shortener rules, for example, goLink rules.


## Why we need this

Suppose you are using goLinks and there are some short links with variables you have defined. But assemble these links based on the variable takes manual efforts and why not just use rules to do it?

## How it works

This go shortener get the current page's url and use rules to replace it if possible and copy the url to your pasteboard. 

1. This extension will use regex to replace the long link with short link.
2. This extension runs rules from top to bottom, and if any rule changed the url, it will stop and return the short url. Otherwise, it return the original url.

## How to start

1. You need to clone the project to your local folder.
2. Use chrome development mode and load this unpacked extention.
3. Open the option of this extension, put more rules in the text area. Click save. Close it.
4. On any tab, click on this extension, it will copy the current url, and shorten it if it matches any rules.

## Writing new rules

1. Each rule occupies one line in the rule area.
2. Each rule contains 2 parts separted by a comma(,):  (short link),(long link)
3. If there is no variable in your rule.
  1. You can keep the long url as is, but the replacement only works when your url exactly match.
  2. You can append .* to your long url, so any urls starts with that long url will be replaced to the short url.
4. If there is variables in your rule.
  1. In the short url part, always put $1 in the url as a place holder of the variable.
  2. You can use a capturing group to represent the variable part in the long url.
  3. If you are not familar with capturing group, you can use {*} to represent the variable part.  
