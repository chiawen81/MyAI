import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/fennel.mjs
var lang = Object.freeze({
  "displayName": "Fennel",
  "name": "fennel",
  "patterns": [{
    "include": "#expression"
  }],
  "repository": {
    "comment": {
      "patterns": [{
        "begin": ";",
        "end": "$",
        "name": "comment.line.semicolon.fennel"
      }]
    },
    "constants": {
      "patterns": [{
        "match": "nil",
        "name": "constant.language.nil.fennel"
      }, {
        "match": "false|true",
        "name": "constant.language.boolean.fennel"
      }, {
        "match": "(-?\\d+\\.\\d+([eE][+-]?\\d+)?)",
        "name": "constant.numeric.double.fennel"
      }, {
        "match": "(-?\\d+)",
        "name": "constant.numeric.integer.fennel"
      }]
    },
    "expression": {
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#constants"
      }, {
        "include": "#sexp"
      }, {
        "include": "#table"
      }, {
        "include": "#vector"
      }, {
        "include": "#keywords"
      }, {
        "include": "#special"
      }, {
        "include": "#lua"
      }, {
        "include": "#strings"
      }, {
        "include": "#methods"
      }, {
        "include": "#symbols"
      }]
    },
    "keywords": {
      "match": ":[^ ]+",
      "name": "constant.keyword.fennel"
    },
    "lua": {
      "patterns": [{
        "match": "\\b(assert|collectgarbage|dofile|error|getmetatable|ipairs|load|loadfile|next|pairs|pcall|print|rawequal|rawget|rawlen|rawset|require|select|setmetatable|tonumber|tostring|type|xpcall)\\b",
        "name": "support.function.fennel"
      }, {
        "match": "\\b(coroutine|coroutine.create|coroutine.isyieldable|coroutine.resume|coroutine.running|coroutine.status|coroutine.wrap|coroutine.yield|debug|debug.debug|debug.gethook|debug.getinfo|debug.getlocal|debug.getmetatable|debug.getregistry|debug.getupvalue|debug.getuservalue|debug.sethook|debug.setlocal|debug.setmetatable|debug.setupvalue|debug.setuservalue|debug.traceback|debug.upvalueid|debug.upvaluejoin|io|io.close|io.flush|io.input|io.lines|io.open|io.output|io.popen|io.read|io.stderr|io.stdin|io.stdout|io.tmpfile|io.type|io.write|math|math.abs|math.acos|math.asin|math.atan|math.ceil|math.cos|math.deg|math.exp|math.floor|math.fmod|math.huge|math.log|math.max|math.maxinteger|math.min|math.mininteger|math.modf|math.pi|math.rad|math.random|math.randomseed|math.sin|math.sqrt|math.tan|math.tointeger|math.type|math.ult|os|os.clock|os.date|os.difftime|os.execute|os.exit|os.getenv|os.remove|os.rename|os.setlocale|os.time|os.tmpname|package|package.config|package.cpath|package.loaded|package.loadlib|package.path|package.preload|package.searchers|package.searchpath|string|string.byte|string.char|string.dump|string.find|string.format|string.gmatch|string.gsub|string.len|string.lower|string.match|string.pack|string.packsize|string.rep|string.reverse|string.sub|string.unpack|string.upper|table|table.concat|table.insert|table.move|table.pack|table.remove|table.sort|table.unpack|utf8|utf8.char|utf8.charpattern|utf8.codepoint|utf8.codes|utf8.len|utf8.offset)\\b",
        "name": "support.function.library.fennel"
      }, {
        "match": "\\b(_G|_VERSION)\\b",
        "name": "constant.language.fennel"
      }]
    },
    "methods": {
      "patterns": [{
        "match": "\\w+\\:\\w+",
        "name": "entity.name.function.method.fennel"
      }]
    },
    "sexp": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.paren.open.fennel"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.paren.close.fennel"
        }
      },
      "name": "sexp.fennel",
      "patterns": [{
        "include": "#expression"
      }]
    },
    "special": {
      "patterns": [{
        "match": "\\#|\\%|\\+|\\*|[?][.]|(\\.)?\\.|(\\/)?\\/|:|<=?|=|>=?|\\^",
        "name": "keyword.special.fennel"
      }, {
        "match": "(\\-\\>(\\>)?)",
        "name": "keyword.special.fennel"
      }, {
        "match": "\\-\\?\\>(\\>)?",
        "name": "keyword.special.fennel"
      }, {
        "match": "-",
        "name": "keyword.special.fennel"
      }, {
        "match": "not=",
        "name": "keyword.special.fennel"
      }, {
        "match": "set-forcibly!",
        "name": "keyword.special.fennel"
      }, {
        "match": "\\b(and|band|bnot|bor|bxor|collect|comment|do|doc|doto|each|eval-compiler|for|global|hashfn|icollect|if|import-macros|include|lambda|length|let|local|lshift|lua|macro|macrodebug|macros|match|not=?|or|partial|pick-args|pick-values|quote|require-macros|rshift|set|tset|values|var|when|while|with-open)\\b",
        "name": "keyword.special.fennel"
      }, {
        "match": "\\b(fn)\\b",
        "name": "keyword.control.fennel"
      }, {
        "match": "~=",
        "name": "keyword.special.fennel"
      }, {
        "match": "λ",
        "name": "keyword.special.fennel"
      }]
    },
    "strings": {
      "begin": '"',
      "end": '"',
      "name": "string.quoted.double.fennel",
      "patterns": [{
        "match": "\\\\.",
        "name": "constant.character.escape.fennel"
      }]
    },
    "symbols": {
      "patterns": [{
        "match": "\\w+(?:\\.\\w+)+",
        "name": "entity.name.function.symbol.fennel"
      }, {
        "match": "\\w+",
        "name": "variable.other.fennel"
      }]
    },
    "table": {
      "begin": "\\{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.table.bracket.open.fennel"
        }
      },
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.table.bracket.close.fennel"
        }
      },
      "name": "table.fennel",
      "patterns": [{
        "include": "#expression"
      }]
    },
    "vector": {
      "begin": "\\[",
      "beginCaptures": {
        "0": {
          "name": "punctuation.vector.bracket.open.fennel"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "punctuation.vector.bracket.close.fennel"
        }
      },
      "name": "meta.vector.fennel",
      "patterns": [{
        "include": "#expression"
      }]
    }
  },
  "scopeName": "source.fnl"
});
var fennel = [lang];
export {
  fennel as default
};
//# sourceMappingURL=fennel-5WM7OUIH.js.map
