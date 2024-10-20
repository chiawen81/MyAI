import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/gleam.mjs
var lang = Object.freeze({
  "displayName": "Gleam",
  "name": "gleam",
  "patterns": [{
    "include": "#comments"
  }, {
    "include": "#keywords"
  }, {
    "include": "#strings"
  }, {
    "include": "#constant"
  }, {
    "include": "#entity"
  }, {
    "include": "#discards"
  }],
  "repository": {
    "binary_number": {
      "match": "\\b0[bB](_?[01])+\\b",
      "name": "constant.numeric.binary.gleam",
      "patterns": []
    },
    "boolean": {
      "match": "\\b(True|False)\\b",
      "name": "constant.language.boolean.gleam",
      "patterns": []
    },
    "comments": {
      "patterns": [{
        "match": "//.*",
        "name": "comment.line.gleam"
      }]
    },
    "constant": {
      "patterns": [{
        "include": "#binary_number"
      }, {
        "include": "#octal_number"
      }, {
        "include": "#hexadecimal_number"
      }, {
        "include": "#decimal_number"
      }, {
        "include": "#boolean"
      }, {
        "match": "[[:upper:]][[:word:]]*",
        "name": "entity.name.type.gleam"
      }]
    },
    "decimal_number": {
      "match": "\\b[[:digit:]]+(_?[[:digit:]])*(\\.[[:digit:]]*)?(e-?[[:digit:]]*)?\\b",
      "name": "constant.numeric.decimal.gleam",
      "patterns": []
    },
    "discards": {
      "match": "\\b_(?:[[:word:]]+)?\\b",
      "name": "comment.unused.gleam"
    },
    "entity": {
      "patterns": [{
        "begin": "\\b([[:lower:]][[:word:]]*)([[:space:]]*)?\\(",
        "captures": {
          "1": {
            "name": "entity.name.function.gleam"
          }
        },
        "end": "\\)",
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "match": "\\b([[:lower:]][[:word:]]*):\\s",
        "name": "variable.parameter.gleam"
      }, {
        "match": "\\b([[:lower:]][[:word:]]*):",
        "name": "entity.name.namespace.gleam"
      }]
    },
    "hexadecimal_number": {
      "match": "\\b0[xX](_?[[:xdigit:]])+\\b",
      "name": "constant.numeric.hexadecimal.gleam",
      "patterns": []
    },
    "keywords": {
      "patterns": [{
        "match": "\\b(as|use|case|if|fn|import|let|assert|pub|type|opaque|const|todo|panic)\\b",
        "name": "keyword.control.gleam"
      }, {
        "match": "(<\\-|\\->)",
        "name": "keyword.operator.arrow.gleam"
      }, {
        "match": "\\|>",
        "name": "keyword.operator.pipe.gleam"
      }, {
        "match": "\\.\\.",
        "name": "keyword.operator.splat.gleam"
      }, {
        "match": "(<=\\.|>=\\.|==\\.|!=\\.|<\\.|>\\.)",
        "name": "keyword.operator.comparison.float.gleam"
      }, {
        "match": "(<=|>=|==|!=|<|>)",
        "name": "keyword.operator.comparison.int.gleam"
      }, {
        "match": "(&&|\\|\\|)",
        "name": "keyword.operator.logical.gleam"
      }, {
        "match": "<>",
        "name": "keyword.operator.string.gleam"
      }, {
        "match": "\\|",
        "name": "keyword.operator.other.gleam"
      }, {
        "match": "(\\+\\.|\\-\\.|/\\.|\\*\\.|%\\.)",
        "name": "keyword.operator.arithmetic.float.gleam"
      }, {
        "match": "(\\+|\\-|/|\\*|%)",
        "name": "keyword.operator.arithmetic.int.gleam"
      }, {
        "match": "=",
        "name": "keyword.operator.assignment.gleam"
      }]
    },
    "octal_number": {
      "match": "\\b0[oO](_?[0-7])+\\b",
      "name": "constant.numeric.octal.gleam",
      "patterns": []
    },
    "strings": {
      "begin": '"',
      "end": '"',
      "name": "string.quoted.double.gleam",
      "patterns": [{
        "match": "\\\\.",
        "name": "constant.character.escape.gleam"
      }]
    }
  },
  "scopeName": "source.gleam"
});
var gleam = [lang];
export {
  gleam as default
};
//# sourceMappingURL=gleam-547MAVSP.js.map
