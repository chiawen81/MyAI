// node_modules/shiki/dist/langs/ocaml.mjs
var lang = Object.freeze({
  "displayName": "OCaml",
  "fileTypes": [".ml", ".mli"],
  "name": "ocaml",
  "patterns": [{
    "include": "#comment"
  }, {
    "include": "#pragma"
  }, {
    "include": "#decl"
  }],
  "repository": {
    "attribute": {
      "begin": "(\\[)[[:space:]]*((?<![#\\-:!?.@*/&%^+<=>|~$])@{1,3}(?![#\\-:!?.@*/&%^+<=>|~$]))",
      "beginCaptures": {
        "1": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        },
        "2": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        }
      },
      "patterns": [{
        "include": "#attributePayload"
      }]
    },
    "attributeIdentifier": {
      "captures": {
        "1": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
        },
        "2": {
          "name": "punctuation.definition.tag"
        }
      },
      "match": `((?<![#\\-:!?.@*/&%^+<=>|~$])%(?![#\\-:!?.@*/&%^+<=>|~$]))((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))`
    },
    "attributePayload": {
      "patterns": [{
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]%|^%))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "((?<![#\\-:!?.@*/&%^+<=>|~$])[:\\?](?![#\\-:!?.@*/&%^+<=>|~$]))|(?<=[[:space:]])|(?=\\])",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#pathModuleExtended"
        }, {
          "include": "#pathRecord"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(?=\\])",
        "patterns": [{
          "include": "#signature"
        }, {
          "include": "#type"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]\\?|^\\?))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(?=\\])",
        "patterns": [{
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]\\?|^\\?))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": "(?=\\])|\\bwhen\\b",
          "endCaptures": {
            "1": {}
          },
          "patterns": [{
            "include": "#pattern"
          }]
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]when|^when))(?![[:word:]]))",
          "end": "(?=\\])",
          "patterns": [{
            "include": "#term"
          }]
        }]
      }, {
        "include": "#term"
      }]
    },
    "bindClassTerm": {
      "patterns": [{
        "begin": "(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]class|^class|[^[:word:]]type|^type))(?![[:word:]]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])(:)|(=)(?![#\\-:!?.@*/&%^+<=>|~$])|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "begin": "(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]class|^class|[^[:word:]]type|^type))(?![[:word:]]))",
          "end": `(?=(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)[[:space:]]*,|[^[:space:][:lower:]%])|(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)|(?=\\btype\\b)`,
          "endCaptures": {
            "0": {
              "name": "entity.name.function strong emphasis"
            }
          },
          "patterns": [{
            "include": "#attributeIdentifier"
          }]
        }, {
          "begin": "\\[",
          "captures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          },
          "end": "\\]",
          "patterns": [{
            "include": "#type"
          }]
        }, {
          "include": "#bindTermArgs"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])=(?![#\\-:!?.@*/&%^+<=>|~$])|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#literalClassType"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "\\band\\b|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          }
        },
        "patterns": [{
          "include": "#term"
        }]
      }]
    },
    "bindClassType": {
      "patterns": [{
        "begin": "(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]class|^class|[^[:word:]]type|^type))(?![[:word:]]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])(:)|(=)(?![#\\-:!?.@*/&%^+<=>|~$])|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "begin": "(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]class|^class|[^[:word:]]type|^type))(?![[:word:]]))",
          "end": `(?=(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)[[:space:]]*,|[^[:space:][:lower:]%])|(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)|(?=\\btype\\b)`,
          "endCaptures": {
            "0": {
              "name": "entity.name.function strong emphasis"
            }
          },
          "patterns": [{
            "include": "#attributeIdentifier"
          }]
        }, {
          "begin": "\\[",
          "captures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          },
          "end": "\\]",
          "patterns": [{
            "include": "#type"
          }]
        }, {
          "include": "#bindTermArgs"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])=(?![#\\-:!?.@*/&%^+<=>|~$])|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#literalClassType"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "\\band\\b|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          }
        },
        "patterns": [{
          "include": "#literalClassType"
        }]
      }]
    },
    "bindConstructor": {
      "patterns": [{
        "begin": "(?:(?<=(?:[^[:word:]]exception|^exception))(?![[:word:]]))|(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]\\+=|^\\+=|[^#\\-:!?.@*/&%^+<=>|~$]=|^=|[^#\\-:!?.@*/&%^+<=>|~$]\\||^\\|))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(:)|(\\bof\\b)|((?<![#\\-:!?.@*/&%^+<=>|~$])\\|(?![#\\-:!?.@*/&%^+<=>|~$]))|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "punctuation.definition.tag"
          },
          "3": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#attributeIdentifier"
        }, {
          "match": "\\.\\.",
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }, {
          "match": "\\b(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)\\b(?![[:space:]]*(?:\\.|\\([^\\*]))",
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        }, {
          "include": "#type"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))|(?:(?<=(?:[^[:word:]]of|^of))(?![[:word:]]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])\\|(?![#\\-:!?.@*/&%^+<=>|~$])|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#type"
        }]
      }]
    },
    "bindSignature": {
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]type|^type))(?![[:word:]]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])=(?![#\\-:!?.@*/&%^+<=>|~$])",
        "endCaptures": {
          "0": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "include": "#pathModuleExtended"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "\\band\\b|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          }
        },
        "patterns": [{
          "include": "#signature"
        }]
      }]
    },
    "bindStructure": {
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]and|^and))(?![[:word:]]))|(?=[[:upper:]])",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])(:(?!=))|(:?=)(?![#\\-:!?.@*/&%^+<=>|~$])|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "match": "\\bmodule\\b",
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
        }, {
          "match": "(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)",
          "name": "entity.name.function strong emphasis"
        }, {
          "begin": "\\((?!\\))",
          "captures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          },
          "end": "\\)",
          "patterns": [{
            "include": "#comment"
          }, {
            "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$]):(?![#\\-:!?.@*/&%^+<=>|~$])",
            "beginCaptures": {
              "0": {
                "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
              }
            },
            "end": "(?=\\))",
            "patterns": [{
              "include": "#signature"
            }]
          }, {
            "include": "#variableModule"
          }]
        }, {
          "include": "#literalUnit"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "\\b(and)\\b|((?<![#\\-:!?.@*/&%^+<=>|~$])=(?![#\\-:!?.@*/&%^+<=>|~$]))|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#signature"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:=|^:=|[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "\\b(?:(and)|(with))\\b|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          },
          "2": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          }
        },
        "patterns": [{
          "include": "#structure"
        }]
      }]
    },
    "bindTerm": {
      "patterns": [{
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]!|^!))(?![#\\-:!?.@*/&%^+<=>|~$]))|(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]external|^external|[^[:word:]]let|^let|[^[:word:]]method|^method|[^[:word:]]val|^val))(?![[:word:]]))",
        "end": "(\\bmodule\\b)|(\\bopen\\b)|(?<![#\\-:!?.@*/&%^+<=>|~$])(:)|((?<![#\\-:!?.@*/&%^+<=>|~$])=(?![#\\-:!?.@*/&%^+<=>|~$]))(?![#\\-:!?.@*/&%^+<=>|~$])|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
          },
          "2": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "4": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]!|^!))(?![#\\-:!?.@*/&%^+<=>|~$]))|(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]external|^external|[^[:word:]]let|^let|[^[:word:]]method|^method|[^[:word:]]val|^val))(?![[:word:]]))",
          "end": `(?=\\b(?:module|open)\\b)|(?=(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)[[:space:]]*,|[^[:space:][:lower:]%])|(\\brec\\b)|((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))`,
          "endCaptures": {
            "1": {
              "name": "variable.other.class.js message.error variable.interpolation string.regexp"
            },
            "2": {
              "name": "entity.name.function strong emphasis"
            }
          },
          "patterns": [{
            "include": "#attributeIdentifier"
          }, {
            "include": "#comment"
          }]
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]rec|^rec))(?![[:word:]]))",
          "end": `((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))|(?=[^[:space:][:alpha:]])`,
          "endCaptures": {
            "0": {
              "name": "entity.name.function strong emphasis"
            }
          },
          "patterns": [{
            "include": "#bindTermArgs"
          }]
        }, {
          "include": "#bindTermArgs"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]module|^module))(?![[:word:]]))",
        "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "include": "#declModule"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]open|^open))(?![[:word:]]))",
        "end": "(?=\\bin\\b)|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "include": "#pathModuleSimple"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])=(?![#\\-:!?.@*/&%^+<=>|~$])|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": "\\btype\\b|(?=[^[:space:]])",
          "endCaptures": {
            "0": {
              "name": "keyword.control"
            }
          }
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]type|^type))(?![[:word:]]))",
          "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])\\.(?![#\\-:!?.@*/&%^+<=>|~$])",
          "endCaptures": {
            "0": {
              "name": "variable.other.class.js message.error variable.interpolation string.regexp"
            }
          },
          "patterns": [{
            "include": "#pattern"
          }]
        }, {
          "include": "#type"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "\\band\\b|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          }
        },
        "patterns": [{
          "include": "#term"
        }]
      }]
    },
    "bindTermArgs": {
      "patterns": [{
        "applyEndPatternLast": true,
        "begin": "~|\\?",
        "beginCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "end": ":|(?=[^[:space:]])",
        "endCaptures": {
          "0": {
            "name": "keyword"
          }
        },
        "patterns": [{
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]~|^~|[^#\\-:!?.@*/&%^+<=>|~$]\\?|^\\?))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)|(?<=\\))`,
          "endCaptures": {
            "0": {
              "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
            }
          },
          "patterns": [{
            "include": "#comment"
          }, {
            "begin": "\\((?!\\*)",
            "captures": {
              "0": {
                "name": "punctuation.definition.tag"
              }
            },
            "end": "\\)",
            "patterns": [{
              "begin": "(?<=\\()",
              "end": ":|=",
              "endCaptures": {
                "0": {
                  "name": "keyword"
                }
              },
              "patterns": [{
                "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
                "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
              }]
            }, {
              "begin": "(?<=:)",
              "end": "=|(?=\\))",
              "endCaptures": {
                "0": {
                  "name": "keyword"
                }
              },
              "patterns": [{
                "include": "#type"
              }]
            }, {
              "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
              "end": "(?=\\))",
              "patterns": [{
                "include": "#term"
              }]
            }]
          }]
        }]
      }, {
        "include": "#pattern"
      }]
    },
    "bindType": {
      "patterns": [{
        "begin": "(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]type|^type))(?![[:word:]]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])\\+=|=(?![#\\-:!?.@*/&%^+<=>|~$])|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#attributeIdentifier"
        }, {
          "include": "#pathType"
        }, {
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "entity.name.function strong"
        }, {
          "include": "#type"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]\\+=|^\\+=|[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "\\band\\b|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          }
        },
        "patterns": [{
          "include": "#bindConstructor"
        }]
      }]
    },
    "comment": {
      "patterns": [{
        "include": "#attribute"
      }, {
        "include": "#extension"
      }, {
        "include": "#commentBlock"
      }, {
        "include": "#commentDoc"
      }]
    },
    "commentBlock": {
      "begin": "\\(\\*(?!\\*[^\\)])",
      "contentName": "emphasis",
      "end": "\\*\\)",
      "name": "comment constant.regexp meta.separator.markdown",
      "patterns": [{
        "include": "#commentBlock"
      }, {
        "include": "#commentDoc"
      }]
    },
    "commentDoc": {
      "begin": "\\(\\*\\*",
      "end": "\\*\\)",
      "name": "comment constant.regexp meta.separator.markdown",
      "patterns": [{
        "match": "\\*"
      }, {
        "include": "#comment"
      }]
    },
    "decl": {
      "patterns": [{
        "include": "#declClass"
      }, {
        "include": "#declException"
      }, {
        "include": "#declInclude"
      }, {
        "include": "#declModule"
      }, {
        "include": "#declOpen"
      }, {
        "include": "#declTerm"
      }, {
        "include": "#declType"
      }]
    },
    "declClass": {
      "begin": "\\bclass\\b",
      "beginCaptures": {
        "0": {
          "name": "entity.name.class constant.numeric markup.underline"
        }
      },
      "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]class|^class))(?![[:word:]]))",
        "beginCaptures": {
          "0": {
            "name": "entity.name.class constant.numeric markup.underline"
          }
        },
        "end": "\\btype\\b|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|val)\\b)",
        "endCaptures": {
          "0": {
            "name": "keyword"
          }
        },
        "patterns": [{
          "include": "#bindClassTerm"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]type|^type))(?![[:word:]]))",
        "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "include": "#bindClassType"
        }]
      }]
    },
    "declException": {
      "begin": "\\bexception\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword markup.underline"
        }
      },
      "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "patterns": [{
        "include": "#attributeIdentifier"
      }, {
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "include": "#bindConstructor"
      }]
    },
    "declInclude": {
      "begin": "\\binclude\\b",
      "beginCaptures": {
        "0": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "patterns": [{
        "include": "#attributeIdentifier"
      }, {
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "include": "#signature"
      }]
    },
    "declModule": {
      "begin": "(?:(?<=(?:[^[:word:]]module|^module))(?![[:word:]]))|\\bmodule\\b",
      "beginCaptures": {
        "0": {
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename markup.underline"
        }
      },
      "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]module|^module))(?![[:word:]]))",
        "end": "(\\btype\\b)|(?=[[:upper:]])",
        "endCaptures": {
          "0": {
            "name": "keyword"
          }
        },
        "patterns": [{
          "include": "#attributeIdentifier"
        }, {
          "include": "#comment"
        }, {
          "match": "\\brec\\b",
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]type|^type))(?![[:word:]]))",
        "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "include": "#bindSignature"
        }]
      }, {
        "begin": "(?=[[:upper:]])",
        "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "include": "#bindStructure"
        }]
      }]
    },
    "declOpen": {
      "begin": "\\bopen\\b",
      "beginCaptures": {
        "0": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "patterns": [{
        "include": "#attributeIdentifier"
      }, {
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "include": "#pathModuleExtended"
      }]
    },
    "declTerm": {
      "begin": "\\b(?:(external|val)|(method)|(let))\\b(!?)",
      "beginCaptures": {
        "1": {
          "name": "support.type markup.underline"
        },
        "2": {
          "name": "storage.type markup.underline"
        },
        "3": {
          "name": "keyword.control markup.underline"
        },
        "4": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "include": "#bindTerm"
      }]
    },
    "declType": {
      "begin": "(?:(?<=(?:[^[:word:]]type|^type))(?![[:word:]]))|\\btype\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword markup.underline"
        }
      },
      "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "include": "#bindType"
      }]
    },
    "extension": {
      "begin": "(\\[)((?<![#\\-:!?.@*/&%^+<=>|~$])%{1,3}(?![#\\-:!?.@*/&%^+<=>|~$]))",
      "beginCaptures": {
        "1": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        },
        "2": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "end": "\\]",
      "endCaptures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        }
      },
      "patterns": [{
        "include": "#attributePayload"
      }]
    },
    "literal": {
      "patterns": [{
        "include": "#termConstructor"
      }, {
        "include": "#literalArray"
      }, {
        "include": "#literalBoolean"
      }, {
        "include": "#literalCharacter"
      }, {
        "include": "#literalList"
      }, {
        "include": "#literalNumber"
      }, {
        "include": "#literalObjectTerm"
      }, {
        "include": "#literalString"
      }, {
        "include": "#literalRecord"
      }, {
        "include": "#literalUnit"
      }]
    },
    "literalArray": {
      "begin": "\\[\\|",
      "captures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        }
      },
      "end": "\\|\\]",
      "patterns": [{
        "include": "#term"
      }]
    },
    "literalBoolean": {
      "match": "\\bfalse|true\\b",
      "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
    },
    "literalCharacter": {
      "begin": "(?<![[:word:]])'",
      "end": "'",
      "name": "markup.punctuation.quote.beginning",
      "patterns": [{
        "include": "#literalCharacterEscape"
      }]
    },
    "literalCharacterEscape": {
      "match": `\\\\(?:[\\\\"'ntbr]|[[:digit:]][[:digit:]][[:digit:]]|x[[:xdigit:]][[:xdigit:]]|o[0-3][0-7][0-7])`
    },
    "literalClassType": {
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "\\bobject\\b",
        "captures": {
          "0": {
            "name": "punctuation.definition.tag emphasis"
          }
        },
        "end": "\\bend\\b",
        "patterns": [{
          "begin": "\\binherit\\b",
          "beginCaptures": {
            "0": {
              "name": "variable.other.class.js message.error variable.interpolation string.regexp"
            }
          },
          "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          },
          "patterns": [{
            "begin": "\\bas\\b",
            "beginCaptures": {
              "0": {
                "name": "variable.other.class.js message.error variable.interpolation string.regexp"
              }
            },
            "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
            "patterns": [{
              "include": "#variablePattern"
            }]
          }, {
            "include": "#type"
          }]
        }, {
          "include": "#pattern"
        }, {
          "include": "#declTerm"
        }]
      }, {
        "begin": "\\[",
        "end": "\\]"
      }]
    },
    "literalList": {
      "patterns": [{
        "begin": "\\[",
        "captures": {
          "0": {
            "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
          }
        },
        "end": "\\]",
        "patterns": [{
          "include": "#term"
        }]
      }]
    },
    "literalNumber": {
      "match": "(?<![[:alpha:]])[[:digit:]][[:digit:]]*(\\.[[:digit:]][[:digit:]]*)?",
      "name": "constant.numeric"
    },
    "literalObjectTerm": {
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "\\bobject\\b",
        "captures": {
          "0": {
            "name": "punctuation.definition.tag emphasis"
          }
        },
        "end": "\\bend\\b",
        "patterns": [{
          "begin": "\\binherit\\b",
          "beginCaptures": {
            "0": {
              "name": "variable.other.class.js message.error variable.interpolation string.regexp"
            }
          },
          "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          },
          "patterns": [{
            "begin": "\\bas\\b",
            "beginCaptures": {
              "0": {
                "name": "variable.other.class.js message.error variable.interpolation string.regexp"
              }
            },
            "end": ";;|(?=\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
            "patterns": [{
              "include": "#variablePattern"
            }]
          }, {
            "include": "#term"
          }]
        }, {
          "include": "#pattern"
        }, {
          "include": "#declTerm"
        }]
      }, {
        "begin": "\\[",
        "end": "\\]"
      }]
    },
    "literalRecord": {
      "begin": "\\{",
      "captures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong strong"
        }
      },
      "end": "\\}",
      "patterns": [{
        "begin": "(?<=\\{|;)",
        "end": "(:)|(=)|(;)|(with)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "4": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "include": "#pathModulePrefixSimple"
        }, {
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]with|^with))(?![[:word:]]))",
        "end": "(:)|(=)|(;)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(;)|(=)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#type"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": ";|(?=\\})",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#term"
        }]
      }]
    },
    "literalString": {
      "patterns": [{
        "begin": '"',
        "end": '"',
        "name": "string beginning.punctuation.definition.quote.markdown",
        "patterns": [{
          "include": "#literalStringEscape"
        }]
      }, {
        "begin": "(\\{)([_[:lower:]]*?)(\\|)",
        "end": "(\\|)(\\2)(\\})",
        "name": "string beginning.punctuation.definition.quote.markdown",
        "patterns": [{
          "include": "#literalStringEscape"
        }]
      }]
    },
    "literalStringEscape": {
      "match": '\\\\(?:[\\\\"ntbr]|[[:digit:]][[:digit:]][[:digit:]]|x[[:xdigit:]][[:xdigit:]]|o[0-3][0-7][0-7])'
    },
    "literalUnit": {
      "match": "\\(\\)",
      "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
    },
    "pathModuleExtended": {
      "patterns": [{
        "include": "#pathModulePrefixExtended"
      }, {
        "match": "(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)",
        "name": "entity.name.class constant.numeric"
      }]
    },
    "pathModulePrefixExtended": {
      "begin": "(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*\\.|$|\\()",
      "beginCaptures": {
        "0": {
          "name": "entity.name.class constant.numeric"
        }
      },
      "end": "(?![[:space:]\\.]|$|\\()",
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "\\(",
        "captures": {
          "0": {
            "name": "keyword.control"
          }
        },
        "end": "\\)",
        "patterns": [{
          "match": "((?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*\\)))",
          "name": "string.other.link variable.language variable.parameter emphasis"
        }, {
          "include": "#structure"
        }]
      }, {
        "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$])\\.(?![#\\-:!?.@*/&%^+<=>|~$])",
        "beginCaptures": {
          "0": {
            "name": "keyword strong"
          }
        },
        "end": "((?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*\\.|$))|((?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*(?:$|\\()))|((?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*\\)))|(?![[:space:]\\.[:upper:]]|$|\\()",
        "endCaptures": {
          "1": {
            "name": "entity.name.class constant.numeric"
          },
          "2": {
            "name": "entity.name.function strong"
          },
          "3": {
            "name": "string.other.link variable.language variable.parameter emphasis"
          }
        }
      }]
    },
    "pathModulePrefixExtendedParens": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "keyword.control"
        }
      },
      "end": "\\)",
      "patterns": [{
        "match": "((?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*\\)))",
        "name": "string.other.link variable.language variable.parameter emphasis"
      }, {
        "include": "#structure"
      }]
    },
    "pathModulePrefixSimple": {
      "begin": "(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*\\.)",
      "beginCaptures": {
        "0": {
          "name": "entity.name.class constant.numeric"
        }
      },
      "end": "(?![[:space:]\\.])",
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$])\\.(?![#\\-:!?.@*/&%^+<=>|~$])",
        "beginCaptures": {
          "0": {
            "name": "keyword strong"
          }
        },
        "end": "((?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*\\.))|((?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)(?=[[:space:]]*))|(?![[:space:]\\.[:upper:]])",
        "endCaptures": {
          "1": {
            "name": "entity.name.class constant.numeric"
          },
          "2": {
            "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
          }
        }
      }]
    },
    "pathModuleSimple": {
      "patterns": [{
        "include": "#pathModulePrefixSimple"
      }, {
        "match": "(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)",
        "name": "entity.name.class constant.numeric"
      }]
    },
    "pathRecord": {
      "patterns": [{
        "begin": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
        "end": "(?=[^[:space:]\\.])(?!\\(\\*)",
        "patterns": [{
          "include": "#comment"
        }, {
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]\\.|^\\.))(?![#\\-:!?.@*/&%^+<=>|~$]))|(?<![#\\-:!?.@*/&%^+<=>|~$])\\.(?![#\\-:!?.@*/&%^+<=>|~$])",
          "beginCaptures": {
            "0": {
              "name": "keyword strong"
            }
          },
          "end": `((?<![#\\-:!?.@*/&%^+<=>|~$])\\.(?![#\\-:!?.@*/&%^+<=>|~$]))|((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|mutable|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))|(?<=\\))|(?<=\\])`,
          "endCaptures": {
            "1": {
              "name": "keyword strong"
            },
            "2": {
              "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
            }
          },
          "patterns": [{
            "include": "#comment"
          }, {
            "include": "#pathModulePrefixSimple"
          }, {
            "begin": "\\((?!\\*)",
            "captures": {
              "0": {
                "name": "variable.other.class.js message.error variable.interpolation string.regexp"
              }
            },
            "end": "\\)",
            "patterns": [{
              "include": "#term"
            }]
          }, {
            "begin": "\\[",
            "captures": {
              "0": {
                "name": "variable.other.class.js message.error variable.interpolation string.regexp"
              }
            },
            "end": "\\]",
            "patterns": [{
              "include": "#pattern"
            }]
          }]
        }]
      }]
    },
    "pattern": {
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#patternArray"
      }, {
        "include": "#patternLazy"
      }, {
        "include": "#patternList"
      }, {
        "include": "#patternMisc"
      }, {
        "include": "#patternModule"
      }, {
        "include": "#patternRecord"
      }, {
        "include": "#literal"
      }, {
        "include": "#patternParens"
      }, {
        "include": "#patternType"
      }, {
        "include": "#variablePattern"
      }, {
        "include": "#termOperator"
      }]
    },
    "patternArray": {
      "begin": "\\[\\|",
      "captures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        }
      },
      "end": "\\|\\]",
      "patterns": [{
        "include": "#pattern"
      }]
    },
    "patternLazy": {
      "match": "lazy",
      "name": "variable.other.class.js message.error variable.interpolation string.regexp"
    },
    "patternList": {
      "begin": "\\[",
      "captures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
        }
      },
      "end": "\\]",
      "patterns": [{
        "include": "#pattern"
      }]
    },
    "patternMisc": {
      "captures": {
        "1": {
          "name": "string.regexp strong"
        },
        "2": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        },
        "3": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "match": "((?<![#\\-:!?.@*/&%^+<=>|~$]),(?![#\\-:!?.@*/&%^+<=>|~$]))|([#\\-:!?.@*/&%^+<=>|~$]+)|\\b(as)\\b"
    },
    "patternModule": {
      "begin": "\\bmodule\\b",
      "beginCaptures": {
        "0": {
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
        }
      },
      "end": "(?=\\))",
      "patterns": [{
        "include": "#declModule"
      }]
    },
    "patternParens": {
      "begin": "\\((?!\\))",
      "captures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "end": "\\)",
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$]):(?![#\\-:!?.@*/&%^+<=>|~$])",
        "beginCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          }
        },
        "end": "(?=\\))",
        "patterns": [{
          "include": "#type"
        }]
      }, {
        "include": "#pattern"
      }]
    },
    "patternRecord": {
      "begin": "\\{",
      "captures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong strong"
        }
      },
      "end": "\\}",
      "patterns": [{
        "begin": "(?<=\\{|;)",
        "end": "(:)|(=)|(;)|(with)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "4": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "include": "#pathModulePrefixSimple"
        }, {
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]with|^with))(?![[:word:]]))",
        "end": "(:)|(=)|(;)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(;)|(=)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#type"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": ";|(?=\\})",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#pattern"
        }]
      }]
    },
    "patternType": {
      "begin": "\\btype\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword"
        }
      },
      "end": "(?=\\))",
      "patterns": [{
        "include": "#declType"
      }]
    },
    "pragma": {
      "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$])#(?![#\\-:!?.@*/&%^+<=>|~$])",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#literalNumber"
      }, {
        "include": "#literalString"
      }]
    },
    "signature": {
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#signatureLiteral"
      }, {
        "include": "#signatureFunctor"
      }, {
        "include": "#pathModuleExtended"
      }, {
        "include": "#signatureParens"
      }, {
        "include": "#signatureRecovered"
      }, {
        "include": "#signatureConstraints"
      }]
    },
    "signatureConstraints": {
      "begin": "\\bwith\\b",
      "beginCaptures": {
        "0": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
        }
      },
      "end": "(?=\\))|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
      "patterns": [{
        "begin": "(?:(?<=(?:[^[:word:]]with|^with))(?![[:word:]]))",
        "end": "\\b(?:(module)|(type))\\b",
        "endCaptures": {
          "1": {
            "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
          },
          "2": {
            "name": "keyword"
          }
        }
      }, {
        "include": "#declModule"
      }, {
        "include": "#declType"
      }]
    },
    "signatureFunctor": {
      "patterns": [{
        "begin": "\\bfunctor\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword"
          }
        },
        "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "begin": "(?:(?<=(?:[^[:word:]]functor|^functor))(?![[:word:]]))",
          "end": "(\\(\\))|(\\((?!\\)))",
          "endCaptures": {
            "1": {
              "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
            },
            "2": {
              "name": "punctuation.definition.tag"
            }
          }
        }, {
          "begin": "(?<=\\()",
          "end": "(:)|(\\))",
          "endCaptures": {
            "1": {
              "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
            },
            "2": {
              "name": "punctuation.definition.tag"
            }
          },
          "patterns": [{
            "include": "#variableModule"
          }]
        }, {
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          },
          "patterns": [{
            "include": "#signature"
          }]
        }, {
          "begin": "(?<=\\))",
          "end": "(\\()|((?<![#\\-:!?.@*/&%^+<=>|~$])->(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.tag"
            },
            "2": {
              "name": "support.type strong"
            }
          }
        }, {
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]->|^->))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
          "patterns": [{
            "include": "#signature"
          }]
        }]
      }, {
        "match": "(?<![#\\-:!?.@*/&%^+<=>|~$])->(?![#\\-:!?.@*/&%^+<=>|~$])",
        "name": "support.type strong"
      }]
    },
    "signatureLiteral": {
      "begin": "\\bsig\\b",
      "captures": {
        "0": {
          "name": "punctuation.definition.tag emphasis"
        }
      },
      "end": "\\bend\\b",
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "include": "#decl"
      }]
    },
    "signatureParens": {
      "begin": "\\((?!\\))",
      "captures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "end": "\\)",
      "patterns": [{
        "include": "#comment"
      }, {
        "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$]):(?![#\\-:!?.@*/&%^+<=>|~$])",
        "beginCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          }
        },
        "end": "(?=\\))",
        "patterns": [{
          "include": "#signature"
        }]
      }, {
        "include": "#signature"
      }]
    },
    "signatureRecovered": {
      "patterns": [{
        "begin": "\\(|(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:|[^#\\-:!?.@*/&%^+<=>|~$]->|^->))(?![#\\-:!?.@*/&%^+<=>|~$]))|(?:(?<=(?:[^[:word:]]include|^include|[^[:word:]]open|^open))(?![[:word:]]))",
        "end": "\\bmodule\\b|(?!$|[[:space:]]|\\bmodule\\b)",
        "endCaptures": {
          "0": {
            "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
          }
        }
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]module|^module))(?![[:word:]]))",
        "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "begin": "(?:(?<=(?:[^[:word:]]module|^module))(?![[:word:]]))",
          "end": "\\btype\\b",
          "endCaptures": {
            "0": {
              "name": "keyword"
            }
          }
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]type|^type))(?![[:word:]]))",
          "end": "\\bof\\b",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          }
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]of|^of))(?![[:word:]]))",
          "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
          "patterns": [{
            "include": "#signature"
          }]
        }]
      }]
    },
    "structure": {
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#structureLiteral"
      }, {
        "include": "#structureFunctor"
      }, {
        "include": "#pathModuleExtended"
      }, {
        "include": "#structureParens"
      }]
    },
    "structureFunctor": {
      "patterns": [{
        "begin": "\\bfunctor\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword"
          }
        },
        "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "patterns": [{
          "begin": "(?:(?<=(?:[^[:word:]]functor|^functor))(?![[:word:]]))",
          "end": "(\\(\\))|(\\((?!\\)))",
          "endCaptures": {
            "1": {
              "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
            },
            "2": {
              "name": "punctuation.definition.tag"
            }
          }
        }, {
          "begin": "(?<=\\()",
          "end": "(:)|(\\))",
          "endCaptures": {
            "1": {
              "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
            },
            "2": {
              "name": "punctuation.definition.tag"
            }
          },
          "patterns": [{
            "include": "#variableModule"
          }]
        }, {
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.tag"
            }
          },
          "patterns": [{
            "include": "#signature"
          }]
        }, {
          "begin": "(?<=\\))",
          "end": "(\\()|((?<![#\\-:!?.@*/&%^+<=>|~$])->(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.tag"
            },
            "2": {
              "name": "support.type strong"
            }
          }
        }, {
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]->|^->))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": "(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)",
          "patterns": [{
            "include": "#structure"
          }]
        }]
      }, {
        "match": "(?<![#\\-:!?.@*/&%^+<=>|~$])->(?![#\\-:!?.@*/&%^+<=>|~$])",
        "name": "support.type strong"
      }]
    },
    "structureLiteral": {
      "begin": "\\bstruct\\b",
      "captures": {
        "0": {
          "name": "punctuation.definition.tag emphasis"
        }
      },
      "end": "\\bend\\b",
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#pragma"
      }, {
        "include": "#decl"
      }]
    },
    "structureParens": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "end": "\\)",
      "patterns": [{
        "include": "#structureUnpack"
      }, {
        "include": "#structure"
      }]
    },
    "structureUnpack": {
      "begin": "\\bval\\b",
      "beginCaptures": {
        "0": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "end": "(?=\\))"
    },
    "term": {
      "patterns": [{
        "include": "#termLet"
      }, {
        "include": "#termAtomic"
      }]
    },
    "termAtomic": {
      "patterns": [{
        "include": "#comment"
      }, {
        "include": "#termConditional"
      }, {
        "include": "#termConstructor"
      }, {
        "include": "#termDelim"
      }, {
        "include": "#termFor"
      }, {
        "include": "#termFunction"
      }, {
        "include": "#literal"
      }, {
        "include": "#termMatch"
      }, {
        "include": "#termMatchRule"
      }, {
        "include": "#termPun"
      }, {
        "include": "#termOperator"
      }, {
        "include": "#termTry"
      }, {
        "include": "#termWhile"
      }, {
        "include": "#pathRecord"
      }]
    },
    "termConditional": {
      "match": "\\b(?:if|then|else)\\b",
      "name": "keyword.control"
    },
    "termConstructor": {
      "patterns": [{
        "include": "#pathModulePrefixSimple"
      }, {
        "match": "(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)",
        "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong"
      }]
    },
    "termDelim": {
      "patterns": [{
        "begin": "\\((?!\\))",
        "captures": {
          "0": {
            "name": "punctuation.definition.tag"
          }
        },
        "end": "\\)",
        "patterns": [{
          "include": "#term"
        }]
      }, {
        "begin": "\\bbegin\\b",
        "captures": {
          "0": {
            "name": "punctuation.definition.tag"
          }
        },
        "end": "\\bend\\b",
        "patterns": [{
          "include": "#attributeIdentifier"
        }, {
          "include": "#term"
        }]
      }]
    },
    "termFor": {
      "patterns": [{
        "begin": "\\bfor\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control"
          }
        },
        "end": "\\bdone\\b",
        "endCaptures": {
          "0": {
            "name": "keyword.control"
          }
        },
        "patterns": [{
          "begin": "(?:(?<=(?:[^[:word:]]for|^for))(?![[:word:]]))",
          "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])=(?![#\\-:!?.@*/&%^+<=>|~$])",
          "endCaptures": {
            "0": {
              "name": "support.type strong"
            }
          },
          "patterns": [{
            "include": "#pattern"
          }]
        }, {
          "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "end": "\\b(?:downto|to)\\b",
          "endCaptures": {
            "0": {
              "name": "keyword.control"
            }
          },
          "patterns": [{
            "include": "#term"
          }]
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]to|^to))(?![[:word:]]))",
          "end": "\\bdo\\b",
          "endCaptures": {
            "0": {
              "name": "keyword.control"
            }
          },
          "patterns": [{
            "include": "#term"
          }]
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]do|^do))(?![[:word:]]))",
          "end": "(?=\\bdone\\b)",
          "patterns": [{
            "include": "#term"
          }]
        }]
      }]
    },
    "termFunction": {
      "captures": {
        "1": {
          "name": "storage.type"
        },
        "2": {
          "name": "storage.type"
        }
      },
      "match": "\\b(?:(fun)|(function))\\b"
    },
    "termLet": {
      "patterns": [{
        "begin": "(?:(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=|[^#\\-:!?.@*/&%^+<=>|~$]->|^->))(?![#\\-:!?.@*/&%^+<=>|~$]))|(?<=;|\\())(?=[[:space:]]|\\blet\\b)|(?:(?<=(?:[^[:word:]]begin|^begin|[^[:word:]]do|^do|[^[:word:]]else|^else|[^[:word:]]in|^in|[^[:word:]]struct|^struct|[^[:word:]]then|^then|[^[:word:]]try|^try))(?![[:word:]]))|(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]@@|^@@))(?![#\\-:!?.@*/&%^+<=>|~$]))[[:space:]]+",
        "end": "\\b(?:(and)|(let))\\b|(?=[^[:space:]])(?!\\(\\*)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          },
          "2": {
            "name": "storage.type markup.underline"
          }
        },
        "patterns": [{
          "include": "#comment"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]and|^and|[^[:word:]]let|^let))(?![[:word:]]))|(let)",
        "beginCaptures": {
          "1": {
            "name": "storage.type markup.underline"
          }
        },
        "end": "\\b(?:(and)|(in))\\b|(?=\\}|\\)|\\]|\\b(?:end|class|exception|external|include|inherit|initializer|let|method|module|open|type|val)\\b)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp markup.underline"
          },
          "2": {
            "name": "storage.type markup.underline"
          }
        },
        "patterns": [{
          "include": "#bindTerm"
        }]
      }]
    },
    "termMatch": {
      "begin": "\\bmatch\\b",
      "captures": {
        "0": {
          "name": "keyword.control"
        }
      },
      "end": "\\bwith\\b",
      "patterns": [{
        "include": "#term"
      }]
    },
    "termMatchRule": {
      "patterns": [{
        "begin": "(?:(?<=(?:[^[:word:]]fun|^fun|[^[:word:]]function|^function|[^[:word:]]with|^with))(?![[:word:]]))",
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])(\\|)|(->)(?![#\\-:!?.@*/&%^+<=>|~$])",
        "endCaptures": {
          "1": {
            "name": "support.type strong"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "include": "#attributeIdentifier"
        }, {
          "include": "#pattern"
        }]
      }, {
        "begin": "(?:(?<=(?:[^\\[#\\-:!?.@*/&%^+<=>|~$]\\||^\\|))(?![#\\-:!?.@*/&%^+<=>|~$]))|(?<![#\\-:!?.@*/&%^+<=>|~$])\\|(?![#\\-:!?.@*/&%^+<=>|~$])",
        "beginCaptures": {
          "0": {
            "name": "support.type strong"
          }
        },
        "end": "(?<![#\\-:!?.@*/&%^+<=>|~$])(\\|)|(->)(?![#\\-:!?.@*/&%^+<=>|~$])",
        "endCaptures": {
          "1": {
            "name": "support.type strong"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#pattern"
        }, {
          "begin": "\\bwhen\\b",
          "beginCaptures": {
            "0": {
              "name": "variable.other.class.js message.error variable.interpolation string.regexp"
            }
          },
          "end": "(?=(?<![#\\-:!?.@*/&%^+<=>|~$])->(?![#\\-:!?.@*/&%^+<=>|~$]))",
          "patterns": [{
            "include": "#term"
          }]
        }]
      }]
    },
    "termOperator": {
      "patterns": [{
        "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$])#(?![#\\-:!?.@*/&%^+<=>|~$])",
        "beginCaptures": {
          "0": {
            "name": "keyword"
          }
        },
        "end": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
        "endCaptures": {
          "0": {
            "name": "entity.name.function"
          }
        }
      }, {
        "captures": {
          "0": {
            "name": "keyword.control strong"
          }
        },
        "match": "<-"
      }, {
        "captures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "2": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "match": "(,|[#\\-:!?.@*/&%^+<=>|~$]+)|(;)"
      }, {
        "match": "\\b(?:and|assert|asr|land|lazy|lsr|lxor|mod|new|or)\\b",
        "name": "variable.other.class.js message.error variable.interpolation string.regexp"
      }]
    },
    "termPun": {
      "applyEndPatternLast": true,
      "begin": "(?<![#\\-:!?.@*/&%^+<=>|~$])\\?|~(?![#\\-:!?.@*/&%^+<=>|~$])",
      "beginCaptures": {
        "0": {
          "name": "variable.other.class.js message.error variable.interpolation string.regexp"
        }
      },
      "end": ":|(?=[^[:space:]:])",
      "endCaptures": {
        "0": {
          "name": "keyword"
        }
      },
      "patterns": [{
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]\\?|^\\?|[^#\\-:!?.@*/&%^+<=>|~$]~|^~))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
        "endCaptures": {
          "0": {
            "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
          }
        }
      }]
    },
    "termTry": {
      "begin": "\\btry\\b",
      "captures": {
        "0": {
          "name": "keyword.control"
        }
      },
      "end": "\\bwith\\b",
      "patterns": [{
        "include": "#term"
      }]
    },
    "termWhile": {
      "patterns": [{
        "begin": "\\bwhile\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control"
          }
        },
        "end": "\\bdone\\b",
        "endCaptures": {
          "0": {
            "name": "keyword.control"
          }
        },
        "patterns": [{
          "begin": "(?:(?<=(?:[^[:word:]]while|^while))(?![[:word:]]))",
          "end": "\\bdo\\b",
          "endCaptures": {
            "0": {
              "name": "keyword.control"
            }
          },
          "patterns": [{
            "include": "#term"
          }]
        }, {
          "begin": "(?:(?<=(?:[^[:word:]]do|^do))(?![[:word:]]))",
          "end": "(?=\\bdone\\b)",
          "patterns": [{
            "include": "#term"
          }]
        }]
      }]
    },
    "type": {
      "patterns": [{
        "include": "#comment"
      }, {
        "match": "\\bnonrec\\b",
        "name": "variable.other.class.js message.error variable.interpolation string.regexp"
      }, {
        "include": "#pathModulePrefixExtended"
      }, {
        "include": "#typeLabel"
      }, {
        "include": "#typeObject"
      }, {
        "include": "#typeOperator"
      }, {
        "include": "#typeParens"
      }, {
        "include": "#typePolymorphicVariant"
      }, {
        "include": "#typeRecord"
      }, {
        "include": "#typeConstructor"
      }]
    },
    "typeConstructor": {
      "patterns": [{
        "begin": `(_)|((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))|(')((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))|(?<=[^\\*]\\)|\\])`,
        "beginCaptures": {
          "1": {
            "name": "comment constant.regexp meta.separator.markdown"
          },
          "3": {
            "name": "string.other.link variable.language variable.parameter emphasis strong emphasis"
          },
          "4": {
            "name": "keyword.control emphasis"
          }
        },
        "end": `(?=\\((?!\\*)|\\*|:|,|=|\\.|>|-|\\{|\\[|\\+|\\}|\\)|\\]|;|\\|)|((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))[:space:]*(?!\\(\\*|[[:word:]])|(?=;;|\\}|\\)|\\]|\\b(?:end|and|class|exception|external|in|include|inherit|initializer|let|method|module|open|type|val)\\b)`,
        "endCaptures": {
          "1": {
            "name": "entity.name.function strong"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "include": "#pathModulePrefixExtended"
        }]
      }]
    },
    "typeLabel": {
      "patterns": [{
        "begin": `(\\??)((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))[[:space:]]*((?<![#\\-:!?.@*/&%^+<=>|~$]):(?![#\\-:!?.@*/&%^+<=>|~$]))`,
        "captures": {
          "1": {
            "name": "keyword strong emphasis"
          },
          "2": {
            "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
          },
          "3": {
            "name": "keyword"
          }
        },
        "end": "(?=(?<![#\\-:!?.@*/&%^+<=>|~$])->(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "patterns": [{
          "include": "#type"
        }]
      }]
    },
    "typeModule": {
      "begin": "\\bmodule\\b",
      "beginCaptures": {
        "0": {
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename"
        }
      },
      "end": "(?=\\))",
      "patterns": [{
        "include": "#pathModuleExtended"
      }, {
        "include": "#signatureConstraints"
      }]
    },
    "typeObject": {
      "begin": "<",
      "captures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong strong"
        }
      },
      "end": ">",
      "patterns": [{
        "begin": "(?<=<|;)",
        "end": "(:)|(?=>)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "4": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "include": "#pathModulePrefixSimple"
        }, {
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(;)|(?=>)",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#type"
        }]
      }]
    },
    "typeOperator": {
      "patterns": [{
        "match": ",|;|[#\\-:!?.@*/&%^+<=>|~$]+",
        "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
      }]
    },
    "typeParens": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.definition.tag"
        }
      },
      "end": "\\)",
      "patterns": [{
        "match": ",",
        "name": "variable.other.class.js message.error variable.interpolation string.regexp"
      }, {
        "include": "#typeModule"
      }, {
        "include": "#type"
      }]
    },
    "typePolymorphicVariant": {
      "begin": "\\[",
      "end": "\\]",
      "patterns": []
    },
    "typeRecord": {
      "begin": "\\{",
      "captures": {
        "0": {
          "name": "constant.language constant.numeric entity.other.attribute-name.id.css strong strong"
        }
      },
      "end": "\\}",
      "patterns": [{
        "begin": "(?<=\\{|;)",
        "end": "(:)|(=)|(;)|(with)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "4": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#comment"
        }, {
          "include": "#pathModulePrefixSimple"
        }, {
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
        }]
      }, {
        "begin": "(?:(?<=(?:[^[:word:]]with|^with))(?![[:word:]]))",
        "end": "(:)|(=)|(;)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp strong"
          },
          "2": {
            "name": "support.type strong"
          },
          "3": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "match": `(?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*)`,
          "name": "markup.inserted constant.language support.constant.property-value entity.name.filename emphasis"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]:|^:))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": "(;)|(=)|(?=\\})",
        "endCaptures": {
          "1": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          },
          "2": {
            "name": "support.type strong"
          }
        },
        "patterns": [{
          "include": "#type"
        }]
      }, {
        "begin": "(?:(?<=(?:[^#\\-:!?.@*/&%^+<=>|~$]=|^=))(?![#\\-:!?.@*/&%^+<=>|~$]))",
        "end": ";|(?=\\})",
        "endCaptures": {
          "0": {
            "name": "variable.other.class.js message.error variable.interpolation string.regexp"
          }
        },
        "patterns": [{
          "include": "#type"
        }]
      }]
    },
    "variableModule": {
      "captures": {
        "0": {
          "name": "string.other.link variable.language variable.parameter emphasis"
        }
      },
      "match": "(?:\\b(?=[[:upper:]])[[:alpha:]_][[:word:]']*)"
    },
    "variablePattern": {
      "captures": {
        "1": {
          "name": "comment constant.regexp meta.separator.markdown"
        },
        "2": {
          "name": "string.other.link variable.language variable.parameter emphasis"
        }
      },
      "match": `(\\b_\\b)|((?:(?!\\b(?:and|'|as|asr|assert|\\*|begin|class|:|,|@|constraint|do|done|downto|else|end|=|exception|external|false|for|\\.|fun|function|functor|>|-|if|in|include|inherit|initializer|land|lazy|\\{|\\(|\\[|<|let|lor|lsl|lsr|lxor|match|method|mod|module|mutable|new|nonrec|#|object|of|open|or|%|\\+|private|\\?|"|rec|\\\\|\\}|\\)|\\]|;|sig|/|struct|then|~|to|true|try|type|val|\\||virtual|when|while|with)\\b(?:[^']|$))\\b(?=[[:lower:]_])[[:alpha:]_][[:word:]']*))`
    }
  },
  "scopeName": "source.ocaml"
});
var ocaml = [lang];

export {
  ocaml
};
//# sourceMappingURL=chunk-D2VTVZQ7.js.map
