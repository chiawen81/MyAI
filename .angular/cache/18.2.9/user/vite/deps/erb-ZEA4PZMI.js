import {
  ruby
} from "./chunk-N3R7NRVI.js";
import "./chunk-74C33KRH.js";
import "./chunk-EAN5SPEZ.js";
import "./chunk-UU4GEDHZ.js";
import "./chunk-2D6DQX7C.js";
import "./chunk-IJJOYCV3.js";
import "./chunk-7GBRS376.js";
import {
  html
} from "./chunk-QDO4ZXC2.js";
import "./chunk-DMZ2PROU.js";
import "./chunk-XYT5QLPL.js";
import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/erb.mjs
var lang = Object.freeze({
  "displayName": "ERB",
  "fileTypes": ["erb", "rhtml", "html.erb"],
  "injections": {
    "text.html.erb - (meta.embedded.block.erb | meta.embedded.line.erb | comment)": {
      "patterns": [{
        "begin": "(^\\s*)(?=<%+#(?![^%]*%>))",
        "beginCaptures": {
          "0": {
            "name": "punctuation.whitespace.comment.leading.erb"
          }
        },
        "end": "(?!\\G)(\\s*$\\n)?",
        "endCaptures": {
          "0": {
            "name": "punctuation.whitespace.comment.trailing.erb"
          }
        },
        "patterns": [{
          "include": "#comment"
        }]
      }, {
        "begin": "(^\\s*)(?=<%(?![^%]*%>))",
        "beginCaptures": {
          "0": {
            "name": "punctuation.whitespace.embedded.leading.erb"
          }
        },
        "end": "(?!\\G)(\\s*$\\n)?",
        "endCaptures": {
          "0": {
            "name": "punctuation.whitespace.embedded.trailing.erb"
          }
        },
        "patterns": [{
          "include": "#tags"
        }]
      }, {
        "include": "#comment"
      }, {
        "include": "#tags"
      }]
    }
  },
  "name": "erb",
  "patterns": [{
    "include": "text.html.basic"
  }],
  "repository": {
    "comment": {
      "patterns": [{
        "begin": "<%+#",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.comment.begin.erb"
          }
        },
        "end": "%>",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.comment.end.erb"
          }
        },
        "name": "comment.block.erb"
      }]
    },
    "tags": {
      "patterns": [{
        "begin": "<%+(?!>)[-=]?(?![^%]*%>)",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.erb"
          }
        },
        "contentName": "source.ruby",
        "end": "(-?%)>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.erb"
          },
          "1": {
            "name": "source.ruby"
          }
        },
        "name": "meta.embedded.block.erb",
        "patterns": [{
          "captures": {
            "1": {
              "name": "punctuation.definition.comment.erb"
            }
          },
          "match": "(#).*?(?=-?%>)",
          "name": "comment.line.number-sign.erb"
        }, {
          "include": "source.ruby"
        }]
      }, {
        "begin": "<%+(?!>)[-=]?",
        "beginCaptures": {
          "0": {
            "name": "punctuation.section.embedded.begin.erb"
          }
        },
        "contentName": "source.ruby",
        "end": "(-?%)>",
        "endCaptures": {
          "0": {
            "name": "punctuation.section.embedded.end.erb"
          },
          "1": {
            "name": "source.ruby"
          }
        },
        "name": "meta.embedded.line.erb",
        "patterns": [{
          "captures": {
            "1": {
              "name": "punctuation.definition.comment.erb"
            }
          },
          "match": "(#).*?(?=-?%>)",
          "name": "comment.line.number-sign.erb"
        }, {
          "include": "source.ruby"
        }]
      }]
    }
  },
  "scopeName": "text.html.erb",
  "embeddedLangs": ["html", "ruby"]
});
var erb = [...html, ...ruby, lang];
export {
  erb as default
};
//# sourceMappingURL=erb-ZEA4PZMI.js.map
