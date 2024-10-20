import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/shiki/dist/langs/json.mjs
var lang = Object.freeze({
  "displayName": "JSON",
  "name": "json",
  "patterns": [{
    "include": "#value"
  }],
  "repository": {
    "array": {
      "begin": "\\[",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.array.begin.json"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.array.end.json"
        }
      },
      "name": "meta.structure.array.json",
      "patterns": [{
        "include": "#value"
      }, {
        "match": ",",
        "name": "punctuation.separator.array.json"
      }, {
        "match": "[^\\s\\]]",
        "name": "invalid.illegal.expected-array-separator.json"
      }]
    },
    "comments": {
      "patterns": [{
        "begin": "/\\*\\*(?!/)",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.json"
          }
        },
        "end": "\\*/",
        "name": "comment.block.documentation.json"
      }, {
        "begin": "/\\*",
        "captures": {
          "0": {
            "name": "punctuation.definition.comment.json"
          }
        },
        "end": "\\*/",
        "name": "comment.block.json"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.json"
          }
        },
        "match": "(//).*$\\n?",
        "name": "comment.line.double-slash.js"
      }]
    },
    "constant": {
      "match": "\\b(?:true|false|null)\\b",
      "name": "constant.language.json"
    },
    "number": {
      "match": "(?x)\n-?\n(?:\n0\n|\n[1-9]\n\\d*\n)\n(?:\n(?:\n\\.\n\\d+\n)?\n(?:\n[eE]\n[+-]?\n\\d+\n)?\n)?",
      "name": "constant.numeric.json"
    },
    "object": {
      "begin": "\\{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.dictionary.begin.json"
        }
      },
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.dictionary.end.json"
        }
      },
      "name": "meta.structure.dictionary.json",
      "patterns": [{
        "comment": "the JSON object key",
        "include": "#objectkey"
      }, {
        "include": "#comments"
      }, {
        "begin": ":",
        "beginCaptures": {
          "0": {
            "name": "punctuation.separator.dictionary.key-value.json"
          }
        },
        "end": "(,)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "punctuation.separator.dictionary.pair.json"
          }
        },
        "name": "meta.structure.dictionary.value.json",
        "patterns": [{
          "comment": "the JSON object value",
          "include": "#value"
        }, {
          "match": "[^\\s,]",
          "name": "invalid.illegal.expected-dictionary-separator.json"
        }]
      }, {
        "match": "[^\\s\\}]",
        "name": "invalid.illegal.expected-dictionary-separator.json"
      }]
    },
    "objectkey": {
      "begin": '"',
      "beginCaptures": {
        "0": {
          "name": "punctuation.support.type.property-name.begin.json"
        }
      },
      "end": '"',
      "endCaptures": {
        "0": {
          "name": "punctuation.support.type.property-name.end.json"
        }
      },
      "name": "string.json support.type.property-name.json",
      "patterns": [{
        "include": "#stringcontent"
      }]
    },
    "string": {
      "begin": '"',
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.json"
        }
      },
      "end": '"',
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.json"
        }
      },
      "name": "string.quoted.double.json",
      "patterns": [{
        "include": "#stringcontent"
      }]
    },
    "stringcontent": {
      "patterns": [{
        "match": '(?x)\n\\\\\n(?:\n["\\\\/bfnrt]\n|\nu\n[0-9a-fA-F]{4})',
        "name": "constant.character.escape.json"
      }, {
        "match": "\\\\.",
        "name": "invalid.illegal.unrecognized-string-escape.json"
      }]
    },
    "value": {
      "patterns": [{
        "include": "#constant"
      }, {
        "include": "#number"
      }, {
        "include": "#string"
      }, {
        "include": "#array"
      }, {
        "include": "#object"
      }, {
        "include": "#comments"
      }]
    }
  },
  "scopeName": "source.json"
});
var json = [lang];

export {
  json
};
//# sourceMappingURL=chunk-K7RVDJWM.js.map
