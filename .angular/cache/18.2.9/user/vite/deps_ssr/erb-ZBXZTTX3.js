import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  ruby
} from "./chunk-4GWXPJLH.js";
import "./chunk-UI2VLQQK.js";
import "./chunk-SWAVIBYJ.js";
import "./chunk-6ZZBOZY5.js";
import "./chunk-L3CNJAQQ.js";
import {
  html
} from "./chunk-INHGZOUG.js";
import "./chunk-RYDGKIIS.js";
import "./chunk-PZDAJBBP.js";
import "./chunk-TZXFUJOZ.js";
import "./chunk-2SZ5X6K7.js";
import "./chunk-NQ4HTGF6.js";

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
//# sourceMappingURL=erb-ZBXZTTX3.js.map
