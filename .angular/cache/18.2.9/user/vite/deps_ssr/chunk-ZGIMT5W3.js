import { createRequire } from 'module';const require = createRequire(import.meta.url);

// node_modules/shiki/dist/langs/bibtex.mjs
var lang = Object.freeze({
  "displayName": "BibTeX",
  "name": "bibtex",
  "patterns": [{
    "captures": {
      "0": {
        "name": "punctuation.definition.comment.bibtex"
      }
    },
    "match": "@(?i:comment)(?=[\\s{(])",
    "name": "comment.block.at-sign.bibtex"
  }, {
    "begin": "((@)(?i:preamble))\\s*(\\{)\\s*",
    "beginCaptures": {
      "1": {
        "name": "keyword.other.preamble.bibtex"
      },
      "2": {
        "name": "punctuation.definition.keyword.bibtex"
      },
      "3": {
        "name": "punctuation.section.preamble.begin.bibtex"
      }
    },
    "end": "\\}",
    "endCaptures": {
      "0": {
        "name": "punctuation.section.preamble.end.bibtex"
      }
    },
    "name": "meta.preamble.braces.bibtex",
    "patterns": [{
      "include": "#field_value"
    }]
  }, {
    "begin": "((@)(?i:preamble))\\s*(\\()\\s*",
    "beginCaptures": {
      "1": {
        "name": "keyword.other.preamble.bibtex"
      },
      "2": {
        "name": "punctuation.definition.keyword.bibtex"
      },
      "3": {
        "name": "punctuation.section.preamble.begin.bibtex"
      }
    },
    "end": "\\)",
    "endCaptures": {
      "0": {
        "name": "punctuation.section.preamble.end.bibtex"
      }
    },
    "name": "meta.preamble.parenthesis.bibtex",
    "patterns": [{
      "include": "#field_value"
    }]
  }, {
    "begin": "((@)(?i:string))\\s*(\\{)\\s*([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)",
    "beginCaptures": {
      "1": {
        "name": "keyword.other.string-constant.bibtex"
      },
      "2": {
        "name": "punctuation.definition.keyword.bibtex"
      },
      "3": {
        "name": "punctuation.section.string-constant.begin.bibtex"
      },
      "4": {
        "name": "variable.other.bibtex"
      }
    },
    "end": "\\}",
    "endCaptures": {
      "0": {
        "name": "punctuation.section.string-constant.end.bibtex"
      }
    },
    "name": "meta.string-constant.braces.bibtex",
    "patterns": [{
      "include": "#field_value"
    }]
  }, {
    "begin": "((@)(?i:string))\\s*(\\()\\s*([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)",
    "beginCaptures": {
      "1": {
        "name": "keyword.other.string-constant.bibtex"
      },
      "2": {
        "name": "punctuation.definition.keyword.bibtex"
      },
      "3": {
        "name": "punctuation.section.string-constant.begin.bibtex"
      },
      "4": {
        "name": "variable.other.bibtex"
      }
    },
    "end": "\\)",
    "endCaptures": {
      "0": {
        "name": "punctuation.section.string-constant.end.bibtex"
      }
    },
    "name": "meta.string-constant.parenthesis.bibtex",
    "patterns": [{
      "include": "#field_value"
    }]
  }, {
    "begin": "((@)[a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\{)\\s*([^\\s,}]*)",
    "beginCaptures": {
      "1": {
        "name": "keyword.other.entry-type.bibtex"
      },
      "2": {
        "name": "punctuation.definition.keyword.bibtex"
      },
      "3": {
        "name": "punctuation.section.entry.begin.bibtex"
      },
      "4": {
        "name": "entity.name.type.entry-key.bibtex"
      }
    },
    "end": "\\}",
    "endCaptures": {
      "0": {
        "name": "punctuation.section.entry.end.bibtex"
      }
    },
    "name": "meta.entry.braces.bibtex",
    "patterns": [{
      "begin": "([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\=)",
      "beginCaptures": {
        "1": {
          "name": "support.function.key.bibtex"
        },
        "2": {
          "name": "punctuation.separator.key-value.bibtex"
        }
      },
      "end": "(?=[,}])",
      "name": "meta.key-assignment.bibtex",
      "patterns": [{
        "include": "#field_value"
      }]
    }]
  }, {
    "begin": "((@)[a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\()\\s*([^\\s,]*)",
    "beginCaptures": {
      "1": {
        "name": "keyword.other.entry-type.bibtex"
      },
      "2": {
        "name": "punctuation.definition.keyword.bibtex"
      },
      "3": {
        "name": "punctuation.section.entry.begin.bibtex"
      },
      "4": {
        "name": "entity.name.type.entry-key.bibtex"
      }
    },
    "end": "\\)",
    "endCaptures": {
      "0": {
        "name": "punctuation.section.entry.end.bibtex"
      }
    },
    "name": "meta.entry.parenthesis.bibtex",
    "patterns": [{
      "begin": "([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\=)",
      "beginCaptures": {
        "1": {
          "name": "support.function.key.bibtex"
        },
        "2": {
          "name": "punctuation.separator.key-value.bibtex"
        }
      },
      "end": "(?=[,)])",
      "name": "meta.key-assignment.bibtex",
      "patterns": [{
        "include": "#field_value"
      }]
    }]
  }, {
    "begin": "[^@\\n]",
    "end": "(?=@)",
    "name": "comment.block.bibtex"
  }],
  "repository": {
    "field_value": {
      "patterns": [{
        "include": "#string_content"
      }, {
        "include": "#integer"
      }, {
        "include": "#string_var"
      }, {
        "match": "#",
        "name": "keyword.operator.bibtex"
      }]
    },
    "integer": {
      "captures": {
        "1": {
          "name": "constant.numeric.bibtex"
        }
      },
      "match": "\\s*(\\d+)\\s*"
    },
    "nested_braces": {
      "begin": "\\{",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.group.begin.bibtex"
        }
      },
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.group.end.bibtex"
        }
      },
      "patterns": [{
        "include": "#nested_braces"
      }]
    },
    "string_content": {
      "patterns": [{
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.bibtex"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.bibtex"
          }
        },
        "patterns": [{
          "include": "#nested_braces"
        }]
      }, {
        "begin": '"',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.bibtex"
          }
        },
        "end": '"',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.bibtex"
          }
        },
        "patterns": [{
          "include": "#nested_braces"
        }]
      }]
    },
    "string_var": {
      "captures": {
        "0": {
          "name": "support.variable.bibtex"
        }
      },
      "match": "[a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*"
    }
  },
  "scopeName": "text.bibtex"
});
var bibtex = [lang];

export {
  bibtex
};
//# sourceMappingURL=chunk-ZGIMT5W3.js.map
