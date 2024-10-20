import {
  glsl
} from "./chunk-6RSWGAQN.js";

// node_modules/shiki/dist/langs/elm.mjs
var lang = Object.freeze({
  "displayName": "Elm",
  "fileTypes": ["elm"],
  "name": "elm",
  "patterns": [{
    "include": "#import"
  }, {
    "include": "#module"
  }, {
    "include": "#debug"
  }, {
    "include": "#comments"
  }, {
    "match": "\\b(_)\\b",
    "name": "keyword.unused.elm"
  }, {
    "include": "#type-signature"
  }, {
    "include": "#type-declaration"
  }, {
    "include": "#type-alias-declaration"
  }, {
    "include": "#string-triple"
  }, {
    "include": "#string-quote"
  }, {
    "include": "#char"
  }, {
    "comment": "Floats are always decimal",
    "match": "\\b([0-9]+\\.[0-9]+([eE][+-]?[0-9]+)?|[0-9]+[eE][+-]?[0-9]+)\\b",
    "name": "constant.numeric.float.elm"
  }, {
    "match": "\\b([0-9]+)\\b",
    "name": "constant.numeric.elm"
  }, {
    "match": "\\b(0x[0-9a-fA-F]+)\\b",
    "name": "constant.numeric.elm"
  }, {
    "include": "#glsl"
  }, {
    "include": "#record-prefix"
  }, {
    "include": "#module-prefix"
  }, {
    "include": "#constructor"
  }, {
    "captures": {
      "1": {
        "name": "punctuation.bracket.elm"
      },
      "2": {
        "name": "record.name.elm"
      },
      "3": {
        "name": "keyword.pipe.elm"
      },
      "4": {
        "name": "entity.name.record.field.elm"
      }
    },
    "match": "(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\|)\\s+([a-z][a-zA-Z0-9_]*)",
    "name": "meta.record.field.update.elm"
  }, {
    "captures": {
      "1": {
        "name": "keyword.pipe.elm"
      },
      "2": {
        "name": "entity.name.record.field.elm"
      },
      "3": {
        "name": "keyword.operator.assignment.elm"
      }
    },
    "match": "(\\|)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",
    "name": "meta.record.field.update.elm"
  }, {
    "captures": {
      "1": {
        "name": "punctuation.bracket.elm"
      },
      "2": {
        "name": "record.name.elm"
      }
    },
    "match": "(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+$",
    "name": "meta.record.field.update.elm"
  }, {
    "captures": {
      "1": {
        "name": "punctuation.bracket.elm"
      },
      "2": {
        "name": "entity.name.record.field.elm"
      },
      "3": {
        "name": "keyword.operator.assignment.elm"
      }
    },
    "match": "(\\{)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",
    "name": "meta.record.field.elm"
  }, {
    "captures": {
      "1": {
        "name": "punctuation.separator.comma.elm"
      },
      "2": {
        "name": "entity.name.record.field.elm"
      },
      "3": {
        "name": "keyword.operator.assignment.elm"
      }
    },
    "match": "(,)\\s+([a-z][a-zA-Z0-9_]*)\\s+(\\=)",
    "name": "meta.record.field.elm"
  }, {
    "match": "(\\}|\\{)",
    "name": "punctuation.bracket.elm"
  }, {
    "include": "#unit"
  }, {
    "include": "#comma"
  }, {
    "include": "#parens"
  }, {
    "match": "(->)",
    "name": "keyword.operator.arrow.elm"
  }, {
    "include": "#infix_op"
  }, {
    "match": "(\\=|\\:|\\||\\\\)",
    "name": "keyword.other.elm"
  }, {
    "match": "\\b(type|as|port|exposing|alias|infixl|infixr|infix)\\s+",
    "name": "keyword.other.elm"
  }, {
    "match": "\\b(if|then|else|case|of|let|in)\\s+",
    "name": "keyword.control.elm"
  }, {
    "include": "#record-accessor"
  }, {
    "include": "#top_level_value"
  }, {
    "include": "#value"
  }, {
    "include": "#period"
  }, {
    "include": "#square_brackets"
  }],
  "repository": {
    "block_comment": {
      "applyEndPatternLast": 1,
      "begin": "\\{-(?!#)",
      "captures": {
        "0": {
          "name": "punctuation.definition.comment.elm"
        }
      },
      "end": "-\\}",
      "name": "comment.block.elm",
      "patterns": [{
        "include": "#block_comment"
      }]
    },
    "char": {
      "begin": "'",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.char.begin.elm"
        }
      },
      "end": "'",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.char.end.elm"
        }
      },
      "name": "string.quoted.single.elm",
      "patterns": [{
        "match": `\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})`,
        "name": "constant.character.escape.elm"
      }, {
        "match": "\\^[A-Z@\\[\\]\\\\\\^_]",
        "name": "constant.character.escape.control.elm"
      }]
    },
    "comma": {
      "match": "(,)",
      "name": "punctuation.separator.comma.elm"
    },
    "comments": {
      "patterns": [{
        "begin": "--",
        "captures": {
          "1": {
            "name": "punctuation.definition.comment.elm"
          }
        },
        "end": "$",
        "name": "comment.line.double-dash.elm"
      }, {
        "include": "#block_comment"
      }]
    },
    "constructor": {
      "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
      "name": "constant.type-constructor.elm"
    },
    "debug": {
      "match": "\\b(Debug)\\b",
      "name": "invalid.illegal.debug.elm"
    },
    "glsl": {
      "begin": "(\\[)(glsl)(\\|)",
      "beginCaptures": {
        "1": {
          "name": "entity.glsl.bracket.elm"
        },
        "2": {
          "name": "entity.glsl.name.elm"
        },
        "3": {
          "name": "entity.glsl.bracket.elm"
        }
      },
      "end": "(\\|\\])",
      "endCaptures": {
        "1": {
          "name": "entity.glsl.bracket.elm"
        }
      },
      "name": "meta.embedded.block.glsl",
      "patterns": [{
        "include": "source.glsl"
      }]
    },
    "import": {
      "begin": "^\\b(import)\\s+",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.import.elm"
        }
      },
      "end": "\\n(?!\\s)",
      "name": "meta.import.elm",
      "patterns": [{
        "match": "(as|exposing)",
        "name": "keyword.control.elm"
      }, {
        "include": "#module_chunk"
      }, {
        "include": "#period"
      }, {
        "match": "\\s+",
        "name": "punctuation.spaces.elm"
      }, {
        "include": "#module-exports"
      }]
    },
    "infix_op": {
      "match": "(</>|<\\?>|<\\||<=|\\|\\||&&|>=|\\|>|\\|=|\\|\\.|\\+\\+|::|/=|==|//|>>|<<|<|>|\\^|\\+|-|/|\\*)",
      "name": "keyword.operator.elm"
    },
    "module": {
      "begin": "^\\b((port |effect )?module)\\s+",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.elm"
        }
      },
      "end": "\\n(?!\\s)",
      "endCaptures": {
        "1": {
          "name": "keyword.other.elm"
        }
      },
      "name": "meta.declaration.module.elm",
      "patterns": [{
        "include": "#module_chunk"
      }, {
        "include": "#period"
      }, {
        "match": "(exposing)",
        "name": "keyword.other.elm"
      }, {
        "match": "\\s+",
        "name": "punctuation.spaces.elm"
      }, {
        "include": "#module-exports"
      }]
    },
    "module-exports": {
      "begin": "(\\()",
      "beginCaptures": {
        "1": {
          "name": "punctuation.parens.module-export.elm"
        }
      },
      "end": "(\\))",
      "endCaptures": {
        "1": {
          "name": "punctuation.parens.module-export.elm"
        }
      },
      "name": "meta.declaration.exports.elm",
      "patterns": [{
        "match": "\\b[a-z][a-zA-Z_'0-9]*",
        "name": "entity.name.function.elm"
      }, {
        "match": "\\b[A-Z][A-Za-z_'0-9]*",
        "name": "storage.type.elm"
      }, {
        "match": ",",
        "name": "punctuation.separator.comma.elm"
      }, {
        "match": "\\s+",
        "name": "punctuation.spaces.elm"
      }, {
        "include": "#comma"
      }, {
        "match": "\\(\\.\\.\\)",
        "name": "punctuation.parens.ellipses.elm"
      }, {
        "match": "\\.\\.",
        "name": "punctuation.parens.ellipses.elm"
      }, {
        "include": "#infix_op"
      }, {
        "comment": "So named because I don't know what to call this.",
        "match": "\\(.*?\\)",
        "name": "meta.other.unknown.elm"
      }]
    },
    "module-prefix": {
      "captures": {
        "1": {
          "name": "support.module.elm"
        },
        "2": {
          "name": "keyword.other.period.elm"
        }
      },
      "match": "([A-Z][a-zA-Z0-9_]*)(\\.)",
      "name": "meta.module.name.elm"
    },
    "module_chunk": {
      "match": "[A-Z][a-zA-Z0-9_]*",
      "name": "support.module.elm"
    },
    "parens": {
      "match": "(\\(|\\))",
      "name": "punctuation.parens.elm"
    },
    "period": {
      "match": "[.]",
      "name": "keyword.other.period.elm"
    },
    "record-accessor": {
      "captures": {
        "1": {
          "name": "keyword.other.period.elm"
        },
        "2": {
          "name": "entity.name.record.field.accessor.elm"
        }
      },
      "match": "(\\.)([a-z][a-zA-Z0-9_]*)",
      "name": "meta.record.accessor"
    },
    "record-prefix": {
      "captures": {
        "1": {
          "name": "record.name.elm"
        },
        "2": {
          "name": "keyword.other.period.elm"
        },
        "3": {
          "name": "entity.name.record.field.accessor.elm"
        }
      },
      "match": "([a-z][a-zA-Z0-9_]*)(\\.)([a-z][a-zA-Z0-9_]*)",
      "name": "record.accessor.elm"
    },
    "square_brackets": {
      "match": "[\\[\\]]",
      "name": "punctuation.definition.list.elm"
    },
    "string-quote": {
      "begin": '"',
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.elm"
        }
      },
      "end": '"',
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.elm"
        }
      },
      "name": "string.quoted.double.elm",
      "patterns": [{
        "match": `\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})`,
        "name": "constant.character.escape.elm"
      }, {
        "match": "\\^[A-Z@\\[\\]\\\\\\^_]",
        "name": "constant.character.escape.control.elm"
      }]
    },
    "string-triple": {
      "begin": '"""',
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.elm"
        }
      },
      "end": '"""',
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.elm"
        }
      },
      "name": "string.quoted.triple.elm",
      "patterns": [{
        "match": `\\\\(NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\"'\\&]|x[0-9a-fA-F]{1,5})`,
        "name": "constant.character.escape.elm"
      }, {
        "match": "\\^[A-Z@\\[\\]\\\\\\^_]",
        "name": "constant.character.escape.control.elm"
      }]
    },
    "top_level_value": {
      "match": "^[a-z][a-zA-Z0-9_]*\\b",
      "name": "entity.name.function.top_level.elm"
    },
    "type-alias-declaration": {
      "begin": "^(type\\s+)(alias\\s+)([A-Z][a-zA-Z0-9_']*)\\s+",
      "beginCaptures": {
        "1": {
          "name": "keyword.type.elm"
        },
        "2": {
          "name": "keyword.type-alias.elm"
        },
        "3": {
          "name": "storage.type.elm"
        }
      },
      "end": "^(?=\\S)",
      "name": "meta.function.type-declaration.elm",
      "patterns": [{
        "match": "\\n\\s+",
        "name": "punctuation.spaces.elm"
      }, {
        "match": "\\=",
        "name": "keyword.operator.assignment.elm"
      }, {
        "include": "#module-prefix"
      }, {
        "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
        "name": "storage.type.elm"
      }, {
        "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
        "name": "variable.type.elm"
      }, {
        "include": "#comments"
      }, {
        "include": "#type-record"
      }]
    },
    "type-declaration": {
      "begin": "^(type\\s+)([A-Z][a-zA-Z0-9_']*)\\s+",
      "beginCaptures": {
        "1": {
          "name": "keyword.type.elm"
        },
        "2": {
          "name": "storage.type.elm"
        }
      },
      "end": "^(?=\\S)",
      "name": "meta.function.type-declaration.elm",
      "patterns": [{
        "captures": {
          "1": {
            "name": "constant.type-constructor.elm"
          }
        },
        "match": "^\\s*([A-Z][a-zA-Z0-9_]*)\\b",
        "name": "meta.record.field.elm"
      }, {
        "match": "\\s+",
        "name": "punctuation.spaces.elm"
      }, {
        "captures": {
          "1": {
            "name": "keyword.operator.assignment.elm"
          },
          "2": {
            "name": "constant.type-constructor.elm"
          }
        },
        "match": "(\\=|\\|)\\s+([A-Z][a-zA-Z0-9_]*)\\b",
        "name": "meta.record.field.elm"
      }, {
        "match": "\\=",
        "name": "keyword.operator.assignment.elm"
      }, {
        "match": "\\-\\>",
        "name": "keyword.operator.arrow.elm"
      }, {
        "include": "#module-prefix"
      }, {
        "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
        "name": "variable.type.elm"
      }, {
        "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
        "name": "storage.type.elm"
      }, {
        "include": "#comments"
      }, {
        "include": "#type-record"
      }]
    },
    "type-record": {
      "begin": "(\\{)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.section.braces.begin"
        }
      },
      "end": "(\\})",
      "endCaptures": {
        "1": {
          "name": "punctuation.section.braces.end"
        }
      },
      "name": "meta.function.type-record.elm",
      "patterns": [{
        "match": "\\s+",
        "name": "punctuation.spaces.elm"
      }, {
        "match": "->",
        "name": "keyword.operator.arrow.elm"
      }, {
        "captures": {
          "1": {
            "name": "entity.name.record.field.elm"
          },
          "2": {
            "name": "keyword.other.elm"
          }
        },
        "match": "([a-z][a-zA-Z0-9_]*)\\s+(\\:)",
        "name": "meta.record.field.elm"
      }, {
        "match": "\\,",
        "name": "punctuation.separator.comma.elm"
      }, {
        "include": "#module-prefix"
      }, {
        "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
        "name": "variable.type.elm"
      }, {
        "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
        "name": "storage.type.elm"
      }, {
        "include": "#comments"
      }, {
        "include": "#type-record"
      }]
    },
    "type-signature": {
      "begin": "^(port\\s+)?([a-z_][a-zA-Z0-9_']*)\\s+(\\:)",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.port.elm"
        },
        "2": {
          "name": "entity.name.function.elm"
        },
        "3": {
          "name": "keyword.other.colon.elm"
        }
      },
      "end": "((^(?=[a-z]))|^$)",
      "name": "meta.function.type-declaration.elm",
      "patterns": [{
        "include": "#type-signature-chunk"
      }]
    },
    "type-signature-chunk": {
      "patterns": [{
        "match": "->",
        "name": "keyword.operator.arrow.elm"
      }, {
        "match": "\\s+",
        "name": "punctuation.spaces.elm"
      }, {
        "include": "#module-prefix"
      }, {
        "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
        "name": "variable.type.elm"
      }, {
        "match": "\\b[A-Z][a-zA-Z0-9_]*\\b",
        "name": "storage.type.elm"
      }, {
        "match": "\\(\\)",
        "name": "constant.unit.elm"
      }, {
        "include": "#comma"
      }, {
        "include": "#parens"
      }, {
        "include": "#comments"
      }, {
        "include": "#type-record"
      }]
    },
    "unit": {
      "match": "\\(\\)",
      "name": "constant.unit.elm"
    },
    "value": {
      "match": "\\b[a-z][a-zA-Z0-9_]*\\b",
      "name": "meta.value.elm"
    }
  },
  "scopeName": "source.elm",
  "embeddedLangs": ["glsl"]
});
var elm = [...glsl, lang];

export {
  elm
};
//# sourceMappingURL=chunk-6VGFC5AX.js.map
