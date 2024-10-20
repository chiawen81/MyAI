import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/smalltalk.mjs
var lang = Object.freeze({
  "displayName": "Smalltalk",
  "fileTypes": ["st"],
  "foldingStartMarker": "\\[",
  "foldingStopMarker": "^\\s*\\]|^\\s\\]",
  "name": "smalltalk",
  "patterns": [{
    "match": "\\$.",
    "name": "constant.character.smalltalk"
  }, {
    "match": "\\b(class)\\b",
    "name": "storage.type.$1.smalltalk"
  }, {
    "match": "\\b(extend|super|self)\\b",
    "name": "storage.modifier.$1.smalltalk"
  }, {
    "match": "\\b(yourself|new|Smalltalk)\\b",
    "name": "keyword.control.$1.smalltalk"
  }, {
    "match": ":=",
    "name": "keyword.operator.assignment.smalltalk"
  }, {
    "comment": "Parse the variable declaration like: |a b c|",
    "match": "/^:\\w*\\s*\\|/",
    "name": "constant.other.block.smalltalk"
  }, {
    "captures": {
      "1": {
        "name": "punctuation.definition.instance-variables.begin.smalltalk"
      },
      "2": {
        "patterns": [{
          "match": "\\w+",
          "name": "support.type.variable.declaration.smalltalk"
        }]
      },
      "3": {
        "name": "punctuation.definition.instance-variables.end.smalltalk"
      }
    },
    "match": "(\\|)(\\s*\\w[\\w ]*)(\\|)"
  }, {
    "captures": {
      "1": {
        "patterns": [{
          "match": ":\\w+",
          "name": "entity.name.function.block.smalltalk"
        }]
      }
    },
    "comment": "Parse the blocks like: [ :a :b | ...... ]",
    "match": "\\[((\\s+|:\\w+)*)\\|"
  }, {
    "include": "#numeric"
  }, {
    "match": "<(?!<|=)|>(?!<|=|>)|<=|>=|=|==|~=|~~|>>|\\^",
    "name": "keyword.operator.comparison.smalltalk"
  }, {
    "match": "(\\*|\\+|\\-|/|\\\\)",
    "name": "keyword.operator.arithmetic.smalltalk"
  }, {
    "match": "(?<=[ \\t])!+|\\bnot\\b|&|\\band\\b|\\||\\bor\\b",
    "name": "keyword.operator.logical.smalltalk"
  }, {
    "comment": "Fake reserved word -> main Smalltalk messages",
    "match": "(?<!\\.)\\b(ensure|resume|retry|signal)\\b(?![?!])",
    "name": "keyword.control.smalltalk"
  }, {
    "comment": "Fake conditionals. Smalltalk Methods.",
    "match": "ifCurtailed:|ifTrue:|ifFalse:|whileFalse:|whileTrue:",
    "name": "keyword.control.conditionals.smalltalk"
  }, {
    "captures": {
      "1": {
        "name": "entity.other.inherited-class.smalltalk"
      },
      "3": {
        "name": "keyword.control.smalltalk"
      },
      "4": {
        "name": "entity.name.type.class.smalltalk"
      }
    },
    "match": "(\\w+)(\\s+(subclass:))\\s*(\\w*)",
    "name": "meta.class.smalltalk"
  }, {
    "begin": '"',
    "beginCaptures": [{
      "name": "punctuation.definition.comment.begin.smalltalk"
    }],
    "end": '"',
    "endCaptures": [{
      "name": "punctuation.definition.comment.end.smalltalk"
    }],
    "name": "comment.block.smalltalk"
  }, {
    "match": "\\b(true|false)\\b",
    "name": "constant.language.boolean.smalltalk"
  }, {
    "match": "\\b(nil)\\b",
    "name": "constant.language.nil.smalltalk"
  }, {
    "captures": {
      "1": {
        "name": "punctuation.definition.constant.smalltalk"
      }
    },
    "comment": "messages/methods",
    "match": "(?>[a-zA-Z_]\\w*(?>[?!])?)(:)(?!:)",
    "name": "constant.other.messages.smalltalk"
  }, {
    "captures": {
      "1": {
        "name": "punctuation.definition.constant.smalltalk"
      }
    },
    "comment": "symbols",
    "match": "(#)[a-zA-Z_][a-zA-Z0-9_:]*",
    "name": "constant.other.symbol.smalltalk"
  }, {
    "begin": "#\\[",
    "beginCaptures": [{
      "name": "punctuation.definition.constant.begin.smalltalk"
    }],
    "end": "\\]",
    "endCaptures": [{
      "name": "punctuation.definition.constant.end.smalltalk"
    }],
    "name": "meta.array.byte.smalltalk",
    "patterns": [{
      "match": "[0-9]+(r[a-zA-Z0-9]+)?",
      "name": "constant.numeric.integer.smalltalk"
    }, {
      "match": "[^\\s\\]]+",
      "name": "invalid.illegal.character-not-allowed-here.smalltalk"
    }]
  }, {
    "begin": "#\\(",
    "beginCaptures": [{
      "name": "punctuation.definition.constant.begin.smalltalk"
    }],
    "comment": "Array Constructor",
    "end": "\\)",
    "endCaptures": [{
      "name": "punctuation.definition.constant.end.smalltalk"
    }],
    "name": "constant.other.array.smalltalk"
  }, {
    "begin": "'",
    "beginCaptures": [{
      "name": "punctuation.definition.string.begin.smalltalk"
    }],
    "end": "'",
    "endCaptures": [{
      "name": "punctuation.definition.string.end.smalltalk"
    }],
    "name": "string.quoted.single.smalltalk"
  }, {
    "match": "\\b[A-Z]\\w*\\b",
    "name": "variable.other.constant.smalltalk"
  }],
  "repository": {
    "numeric": {
      "patterns": [{
        "match": "(?<!\\w)[0-9]+\\.[0-9]+s[0-9]*",
        "name": "constant.numeric.float.scaled.smalltalk"
      }, {
        "match": "(?<!\\w)[0-9]+\\.[0-9]+([edq]-?[0-9]+)?",
        "name": "constant.numeric.float.smalltalk"
      }, {
        "match": "(?<!\\w)-?[0-9]+r[a-zA-Z0-9]+",
        "name": "constant.numeric.integer.radix.smalltalk"
      }, {
        "match": "(?<!\\w)-?[0-9]+([edq]-?[0-9]+)?",
        "name": "constant.numeric.integer.smalltalk"
      }]
    }
  },
  "scopeName": "source.smalltalk"
});
var smalltalk = [lang];
export {
  smalltalk as default
};
//# sourceMappingURL=smalltalk-H4SMJLPN.js.map
