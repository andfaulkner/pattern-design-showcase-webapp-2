Hacks / evil
============

*   yes, including jquery, react, react-dom, and marked inline in index.html is a bit evil. But
    it's SO MUCH FASTER for building than if I put it in the webpack config, so I don't even care

*   I'm aware using full-on es6 is better. I don't really care, it's too big a slowdown. My main
    concern is faster build times, I hate waiting 6 seconds for webpack. Node covers most of it 
    anyway nowadays. The only thing I care about that it's missing is import statements, and
    honestly, 'require' works just fine.

