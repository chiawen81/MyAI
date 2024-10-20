// node_modules/shiki/dist/langs/go.mjs
var lang = Object.freeze({
  "displayName": "Go",
  "name": "go",
  "patterns": [{
    "include": "#statements"
  }],
  "repository": {
    "after_control_variables": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations-without-brackets"
          }, {
            "match": "\\[",
            "name": "punctuation.definition.begin.bracket.square.go"
          }, {
            "match": "\\]",
            "name": "punctuation.definition.end.bracket.square.go"
          }, {
            "match": "(?:\\w+)",
            "name": "variable.other.go"
          }]
        }
      },
      "comment": "After control variables, to not highlight as a struct/interface (before formatting with gofmt)",
      "match": "(?:(?<=\\brange\\b|\\bswitch\\b|\\;|\\bif\\b|\\bfor\\b|\\<|\\>|\\<\\=|\\>\\=|\\=\\=|\\!\\=|\\w(?:\\+|/|\\-|\\*|\\%)|\\w(?:\\+|/|\\-|\\*|\\%)\\=|\\|\\||\\&\\&)(?:\\s*)((?![\\[\\]]+)[[:alnum:]\\-\\_\\!\\.\\[\\]\\<\\>\\=\\*/\\+\\%\\:]+)(?:\\s*)(?=\\{))"
    },
    "brackets": {
      "patterns": [{
        "begin": "\\{",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.curly.go"
          }
        },
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.curly.go"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.round.go"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }, {
        "begin": "\\[",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.square.go"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.go"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "built_in_functions": {
      "comment": "Built-in functions",
      "patterns": [{
        "match": "\\b(append|cap|close|complex|copy|delete|imag|len|panic|print|println|real|recover|min|max|clear)\\b(?=\\()",
        "name": "entity.name.function.support.builtin.go"
      }, {
        "begin": "(?:(\\bnew\\b)(\\())",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.support.builtin.go"
          },
          "2": {
            "name": "punctuation.definition.begin.bracket.round.go"
          }
        },
        "comment": "new keyword",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "#functions"
        }, {
          "include": "#struct_variables_types"
        }, {
          "include": "#type-declarations"
        }, {
          "include": "#generic_types"
        }, {
          "match": "(?:\\w+)",
          "name": "entity.name.type.go"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?:(\\bmake\\b)(?:(\\()((?:(?:(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+(?:\\([^\\)]+\\))?)?(?:[\\[\\]\\*]+)?(?:(?!\\bmap\\b)(?:[\\w\\.]+))?(\\[(?:(?:[\\S]+)(?:(?:\\,\\s*(?:[\\S]+))*))?\\])?(?:\\,)?)?))",
        "beginCaptures": {
          "1": {
            "name": "entity.name.function.support.builtin.go"
          },
          "2": {
            "name": "punctuation.definition.begin.bracket.round.go"
          },
          "3": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "include": "#parameter-variable-types"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "make keyword",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "$self"
        }]
      }]
    },
    "comments": {
      "patterns": [{
        "begin": "(\\/\\*)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.go"
          }
        },
        "end": "(\\*\\/)",
        "endCaptures": {
          "1": {
            "name": "punctuation.definition.comment.go"
          }
        },
        "name": "comment.block.go"
      }, {
        "begin": "(\\/\\/)",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.comment.go"
          }
        },
        "end": "(?:\\n|$)",
        "name": "comment.line.double-slash.go"
      }]
    },
    "delimiters": {
      "patterns": [{
        "match": "\\,",
        "name": "punctuation.other.comma.go"
      }, {
        "match": "\\.(?!\\.\\.)",
        "name": "punctuation.other.period.go"
      }, {
        "match": ":(?!=)",
        "name": "punctuation.other.colon.go"
      }]
    },
    "double_parentheses_types": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations-without-brackets"
          }, {
            "match": "\\(",
            "name": "punctuation.definition.begin.bracket.round.go"
          }, {
            "match": "\\)",
            "name": "punctuation.definition.end.bracket.round.go"
          }, {
            "match": "\\[",
            "name": "punctuation.definition.begin.bracket.square.go"
          }, {
            "match": "\\]",
            "name": "punctuation.definition.end.bracket.square.go"
          }, {
            "match": "\\w+",
            "name": "entity.name.type.go"
          }]
        }
      },
      "comment": "double parentheses types",
      "match": "(?:(?<!\\w)(\\((?:[\\w\\.\\[\\]\\*\\&]+)\\))(?=\\())"
    },
    "field_hover": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "\\w+",
            "name": "variable.other.property.go"
          }]
        },
        "2": {
          "patterns": [{
            "match": "\\binvalid\\b\\s+\\btype\\b",
            "name": "invalid.field.go"
          }, {
            "include": "#type-declarations-without-brackets"
          }, {
            "include": "#parameter-variable-types"
          }, {
            "match": "\\w+",
            "name": "entity.name.type.go"
          }]
        }
      },
      "comment": "struct field property and types when hovering with the mouse",
      "match": "(?:(?<=^\\bfield\\b)\\s+([\\w\\*\\.]+)\\s+([\\s\\S]+))"
    },
    "function_declaration": {
      "begin": "(?:^(\\bfunc\\b)(?:\\s*(\\([^\\)]+\\)\\s*)?(?:(\\w+)(?=\\(|\\[))?))",
      "beginCaptures": {
        "1": {
          "name": "keyword.function.go"
        },
        "2": {
          "patterns": [{
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.begin.bracket.round.go"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.round.go"
              }
            },
            "patterns": [{
              "captures": {
                "1": {
                  "name": "variable.parameter.go"
                },
                "2": {
                  "patterns": [{
                    "include": "#type-declarations-without-brackets"
                  }, {
                    "include": "#parameter-variable-types"
                  }, {
                    "match": "(?:\\w+)",
                    "name": "entity.name.type.go"
                  }]
                }
              },
              "match": "(?:(\\w+(?:\\s+))?((?:[\\w\\.\\*]+)(?:\\[(?:(?:(?:[\\w\\.\\*]+)(?:\\,\\s+)?)+)?\\])?))"
            }, {
              "include": "$self"
            }]
          }]
        },
        "3": {
          "patterns": [{
            "match": "\\d\\w*",
            "name": "invalid.illegal.identifier.go"
          }, {
            "match": "\\w+",
            "name": "entity.name.function.go"
          }]
        }
      },
      "comment": "Function declarations",
      "end": "(?:(?<=\\))\\s*((?:(?:(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?!(?:[\\[\\]\\*]+)?(?:\\bstruct\\b|\\binterface\\b))[\\w\\.\\-\\*\\[\\]]+)?\\s*(?=\\{))",
      "endCaptures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations-without-brackets"
          }, {
            "include": "#parameter-variable-types"
          }, {
            "match": "(?:\\w+)",
            "name": "entity.name.type.go"
          }]
        }
      },
      "patterns": [{
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.round.go"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "#function_param_types"
        }]
      }, {
        "begin": "(?:([\\w\\.\\*]+)?(\\[))",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          },
          "2": {
            "name": "punctuation.definition.begin.bracket.square.go"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.go"
          }
        },
        "patterns": [{
          "include": "#generic_param_types"
        }]
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "include": "#parameter-variable-types"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "single function as a type returned type(s) declaration",
        "match": "(?:(?<=\\))(?:\\s*)((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?[\\w\\*\\.\\[\\]\\<\\>\\-]+(?:\\s*)(?:\\/(?:\\/|\\*).*)?)$)"
      }, {
        "include": "$self"
      }]
    },
    "function_param_types": {
      "comment": "function parameter variables and types",
      "patterns": [{
        "include": "#struct_variables_types"
      }, {
        "include": "#interface_variables_types"
      }, {
        "include": "#type-declarations-without-brackets"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "variable.parameter.go"
            }]
          }
        },
        "comment": "struct/interface type declaration",
        "match": "((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)\\s+(?=(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:[\\[\\]\\*]+)?\\b(?:struct|interface)\\b\\s*\\{)"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "variable.parameter.go"
            }]
          }
        },
        "comment": "multiple parameters one type -with multilines",
        "match": "(?:(?:(?<=\\()|^\\s*)((?:(?:\\b\\w+\\,\\s*)+)(?:/(?:/|\\*).*)?)$)"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#delimiters"
            }, {
              "match": "\\w+",
              "name": "variable.parameter.go"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "include": "#parameter-variable-types"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "multiple params and types | multiple params one type | one param one type",
        "match": "(?:((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)(?:\\s+)((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:(?:(?:[\\w\\[\\]\\.\\*]+)?(?:(?:\\bfunc\\b\\((?:[^\\)]+)?\\))(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:\\s*))+(?:(?:(?:[\\w\\*\\.\\[\\]]+)|(?:\\((?:[^\\)]+)?\\))))?)|(?:(?:[\\[\\]\\*]+)?[\\w\\*\\.]+(?:\\[(?:[^\\]]+)\\])?(?:[\\w\\.\\*]+)?)+)))"
      }, {
        "include": "#parameter-variable-types"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "other types",
        "match": "([\\w\\.]+)"
      }, {
        "include": "$self"
      }]
    },
    "functions": {
      "begin": "(?:(\\bfunc\\b)(?=\\())",
      "beginCaptures": {
        "1": {
          "name": "keyword.function.go"
        }
      },
      "comment": "Functions",
      "end": "(?:(?<=\\))(\\s*(?:(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?((?:(?:\\s*(?:(?:[\\[\\]\\*]+)?[\\w\\.\\*]+)?(?:(?:\\[(?:(?:[\\w\\.\\*]+)?(?:\\[(?:[^\\]]+)?\\])?(?:\\,\\s+)?)+\\])|(?:\\((?:[^\\)]+)?\\)))?(?:[\\w\\.\\*]+)?)(?:\\s*)(?=\\{))|(?:\\s*(?:(?:(?:[\\[\\]\\*]+)?(?!\\bfunc\\b)(?:[\\w\\.\\*]+)(?:\\[(?:(?:[\\w\\.\\*]+)?(?:\\[(?:[^\\]]+)?\\])?(?:\\,\\s+)?)+\\])?(?:[\\w\\.\\*]+)?)|(?:\\((?:[^\\)]+)?\\)))))?)",
      "endCaptures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#type-declarations-without-brackets"
          }, {
            "include": "#parameter-variable-types"
          }, {
            "match": "(?:\\w+)",
            "name": "entity.name.type.go"
          }]
        }
      },
      "patterns": [{
        "include": "#parameter-variable-types"
      }]
    },
    "functions_inline": {
      "captures": {
        "1": {
          "name": "keyword.function.go"
        },
        "2": {
          "patterns": [{
            "include": "#type-declarations-without-brackets"
          }, {
            "begin": "\\(",
            "beginCaptures": {
              "0": {
                "name": "punctuation.definition.begin.bracket.round.go"
              }
            },
            "end": "\\)",
            "endCaptures": {
              "0": {
                "name": "punctuation.definition.end.bracket.round.go"
              }
            },
            "patterns": [{
              "include": "#function_param_types"
            }, {
              "include": "$self"
            }]
          }, {
            "match": "\\[",
            "name": "punctuation.definition.begin.bracket.square.go"
          }, {
            "match": "\\]",
            "name": "punctuation.definition.end.bracket.square.go"
          }, {
            "match": "\\{",
            "name": "punctuation.definition.begin.bracket.curly.go"
          }, {
            "match": "\\}",
            "name": "punctuation.definition.end.bracket.curly.go"
          }, {
            "match": "(?:\\w+)",
            "name": "entity.name.type.go"
          }]
        }
      },
      "comment": "functions in-line with multi return types",
      "match": "(?:(\\bfunc\\b)((?:\\((?:[^/]*?)\\))(?:\\s+)(?:\\((?:[^/]*?)\\)))(?:\\s+)(?=\\{))"
    },
    "generic_param_types": {
      "comment": "generic parameter variables and types",
      "patterns": [{
        "include": "#struct_variables_types"
      }, {
        "include": "#interface_variables_types"
      }, {
        "include": "#type-declarations-without-brackets"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "variable.parameter.go"
            }]
          }
        },
        "comment": "struct/interface type declaration",
        "match": "((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)\\s+(?=(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:[\\[\\]\\*]+)?\\b(?:struct|interface)\\b\\s*\\{)"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "variable.parameter.go"
            }]
          }
        },
        "comment": "multiple parameters one type -with multilines",
        "match": "(?:(?:(?<=\\()|^\\s*)((?:(?:\\b\\w+\\,\\s*)+)(?:/(?:/|\\*).*)?)$)"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#delimiters"
            }, {
              "match": "\\w+",
              "name": "variable.parameter.go"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "include": "#parameter-variable-types"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          },
          "3": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "multiple params and types | multiple types one param",
        "match": "(?:((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)(?:\\s+)((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:(?:(?:[\\w\\[\\]\\.\\*]+)?(?:(?:\\bfunc\\b\\((?:[^\\)]+)?\\))(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:\\s*))+(?:(?:(?:[\\w\\*\\.]+)|(?:\\((?:[^\\)]+)?\\))))?)|(?:(?:(?:[\\w\\*\\.\\~]+)|(?:\\[(?:(?:[\\w\\.\\*]+)?(?:\\[(?:[^\\]]+)?\\])?(?:\\,\\s+)?)+\\]))(?:[\\w\\.\\*]+)?)+)))"
      }, {
        "include": "#parameter-variable-types"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "other types",
        "match": "(?:\\b([\\w\\.]+))"
      }, {
        "include": "$self"
      }]
    },
    "generic_types": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "\\w+",
            "name": "entity.name.type.go"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#parameter-variable-types"
          }]
        }
      },
      "comment": "Generic support for all types",
      "match": "(?:([\\w\\.\\*]+)(\\[(?:[^\\]]+)?\\]))"
    },
    "group-functions": {
      "comment": "all statements related to functions",
      "patterns": [{
        "include": "#function_declaration"
      }, {
        "include": "#functions_inline"
      }, {
        "include": "#functions"
      }, {
        "include": "#built_in_functions"
      }, {
        "include": "#support_functions"
      }]
    },
    "group-types": {
      "comment": "all statements related to types",
      "patterns": [{
        "include": "#other_struct_interface_expressions"
      }, {
        "include": "#type_assertion_inline"
      }, {
        "include": "#struct_variables_types"
      }, {
        "include": "#interface_variables_types"
      }, {
        "include": "#single_type"
      }, {
        "include": "#multi_types"
      }, {
        "include": "#struct_interface_declaration"
      }, {
        "include": "#double_parentheses_types"
      }, {
        "include": "#switch_types"
      }, {
        "include": "#type-declarations"
      }]
    },
    "group-variables": {
      "comment": "all statements related to variables",
      "patterns": [{
        "include": "#var_const_assignment"
      }, {
        "include": "#variable_assignment"
      }, {
        "include": "#label_loop_variables"
      }, {
        "include": "#slice_index_variables"
      }, {
        "include": "#property_variables"
      }, {
        "include": "#switch_select_case_variables"
      }, {
        "include": "#other_variables"
      }]
    },
    "import": {
      "comment": "import",
      "patterns": [{
        "begin": "\\b(import)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.import.go"
          }
        },
        "comment": "import",
        "end": "(?!\\G)",
        "patterns": [{
          "include": "#imports"
        }]
      }]
    },
    "imports": {
      "comment": "import package(s)",
      "patterns": [{
        "captures": {
          "1": {
            "patterns": [{
              "include": "#delimiters"
            }, {
              "match": "(?:\\w+)",
              "name": "variable.other.import.go"
            }]
          },
          "2": {
            "name": "string.quoted.double.go"
          },
          "3": {
            "name": "punctuation.definition.string.begin.go"
          },
          "4": {
            "name": "entity.name.import.go"
          },
          "5": {
            "name": "punctuation.definition.string.end.go"
          }
        },
        "match": '(\\s*[\\w\\.]+)?\\s*((")([^"]*)("))'
      }, {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.imports.begin.bracket.round.go"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.imports.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "#comments"
        }, {
          "include": "#imports"
        }]
      }, {
        "include": "$self"
      }]
    },
    "interface_variables_types": {
      "begin": "(\\binterface\\b)\\s*(\\{)",
      "beginCaptures": {
        "1": {
          "name": "keyword.interface.go"
        },
        "2": {
          "name": "punctuation.definition.begin.bracket.curly.go"
        }
      },
      "comment": "interface variable types",
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.end.bracket.curly.go"
        }
      },
      "patterns": [{
        "include": "#interface_variables_types_field"
      }, {
        "include": "$self"
      }]
    },
    "interface_variables_types_field": {
      "comment": "interface variable type fields",
      "patterns": [{
        "include": "#support_functions"
      }, {
        "include": "#type-declarations-without-brackets"
      }, {
        "begin": "(?:([\\w\\.\\*]+)?(\\[))",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          },
          "2": {
            "name": "punctuation.definition.begin.bracket.square.go"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.go"
          }
        },
        "patterns": [{
          "include": "#generic_param_types"
        }]
      }, {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.round.go"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "#function_param_types"
        }]
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "other types",
        "match": "([\\w\\.]+)"
      }]
    },
    "keywords": {
      "patterns": [{
        "comment": "Flow control keywords",
        "match": "\\b(break|case|continue|default|defer|else|fallthrough|for|go|goto|if|range|return|select|switch)\\b",
        "name": "keyword.control.go"
      }, {
        "match": "\\bchan\\b",
        "name": "keyword.channel.go"
      }, {
        "match": "\\bconst\\b",
        "name": "keyword.const.go"
      }, {
        "match": "\\bvar\\b",
        "name": "keyword.var.go"
      }, {
        "match": "\\bfunc\\b",
        "name": "keyword.function.go"
      }, {
        "match": "\\binterface\\b",
        "name": "keyword.interface.go"
      }, {
        "match": "\\bmap\\b",
        "name": "keyword.map.go"
      }, {
        "match": "\\bstruct\\b",
        "name": "keyword.struct.go"
      }, {
        "match": "\\bimport\\b",
        "name": "keyword.control.import.go"
      }, {
        "match": "\\btype\\b",
        "name": "keyword.type.go"
      }]
    },
    "label_loop_variables": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "\\w+",
            "name": "variable.other.label.go"
          }]
        }
      },
      "comment": "labeled loop variable name",
      "match": "((?:^\\s*\\w+:\\s*$)|(?:^\\s*(?:\\bbreak\\b|\\bgoto\\b|\\bcontinue\\b)\\s+\\w+(?:\\s*/(?:/|\\*)\\s*.*)?$))"
    },
    "language_constants": {
      "captures": {
        "1": {
          "name": "constant.language.boolean.go"
        },
        "2": {
          "name": "constant.language.null.go"
        },
        "3": {
          "name": "constant.language.iota.go"
        }
      },
      "comment": "Language constants",
      "match": "\\b(?:(true|false)|(nil)|(iota))\\b"
    },
    "map_types": {
      "begin": "(?:(\\bmap\\b)(\\[))",
      "beginCaptures": {
        "1": {
          "name": "keyword.map.go"
        },
        "2": {
          "name": "punctuation.definition.begin.bracket.square.go"
        }
      },
      "comment": "map types",
      "end": "(?:(\\])((?:(?:(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?!(?:[\\[\\]\\*]+)?\\b(?:func|struct|map)\\b)(?:[\\*\\[\\]]+)?(?:[\\w\\.]+)(?:\\[(?:(?:[\\w\\.\\*\\[\\]\\{\\}]+)(?:(?:\\,\\s*(?:[\\w\\.\\*\\[\\]\\{\\}]+))*))?\\])?)?)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.end.bracket.square.go"
        },
        "2": {
          "patterns": [{
            "include": "#type-declarations-without-brackets"
          }, {
            "match": "\\[",
            "name": "punctuation.definition.begin.bracket.square.go"
          }, {
            "match": "\\]",
            "name": "punctuation.definition.end.bracket.square.go"
          }, {
            "match": "\\w+",
            "name": "entity.name.type.go"
          }]
        }
      },
      "patterns": [{
        "include": "#type-declarations-without-brackets"
      }, {
        "include": "#parameter-variable-types"
      }, {
        "include": "#functions"
      }, {
        "match": "\\[",
        "name": "punctuation.definition.begin.bracket.square.go"
      }, {
        "match": "\\]",
        "name": "punctuation.definition.end.bracket.square.go"
      }, {
        "match": "\\{",
        "name": "punctuation.definition.begin.bracket.curly.go"
      }, {
        "match": "\\}",
        "name": "punctuation.definition.end.bracket.curly.go"
      }, {
        "match": "\\(",
        "name": "punctuation.definition.begin.bracket.round.go"
      }, {
        "match": "\\)",
        "name": "punctuation.definition.end.bracket.round.go"
      }, {
        "match": "\\w+",
        "name": "entity.name.type.go"
      }]
    },
    "multi_types": {
      "begin": "(\\btype\\b)\\s*(\\()",
      "beginCaptures": {
        "1": {
          "name": "keyword.type.go"
        },
        "2": {
          "name": "punctuation.definition.begin.bracket.round.go"
        }
      },
      "comment": "multi type declaration",
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.end.bracket.round.go"
        }
      },
      "patterns": [{
        "include": "#struct_variables_types"
      }, {
        "include": "#interface_variables_types"
      }, {
        "include": "#type-declarations-without-brackets"
      }, {
        "include": "#parameter-variable-types"
      }, {
        "match": "(?:\\w+)",
        "name": "entity.name.type.go"
      }]
    },
    "numeric_literals": {
      "captures": {
        "0": {
          "patterns": [{
            "begin": "(?=.)",
            "end": "(?:\\n|$)",
            "patterns": [{
              "captures": {
                "1": {
                  "name": "constant.numeric.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "2": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "3": {
                  "name": "constant.numeric.decimal.point.go"
                },
                "4": {
                  "name": "constant.numeric.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "5": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "6": {
                  "name": "keyword.other.unit.exponent.decimal.go"
                },
                "7": {
                  "name": "keyword.operator.plus.exponent.decimal.go"
                },
                "8": {
                  "name": "keyword.operator.minus.exponent.decimal.go"
                },
                "9": {
                  "name": "constant.numeric.exponent.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "10": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "11": {
                  "name": "constant.numeric.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "12": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "13": {
                  "name": "keyword.other.unit.exponent.decimal.go"
                },
                "14": {
                  "name": "keyword.operator.plus.exponent.decimal.go"
                },
                "15": {
                  "name": "keyword.operator.minus.exponent.decimal.go"
                },
                "16": {
                  "name": "constant.numeric.exponent.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "17": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "18": {
                  "name": "constant.numeric.decimal.point.go"
                },
                "19": {
                  "name": "constant.numeric.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "20": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "21": {
                  "name": "keyword.other.unit.exponent.decimal.go"
                },
                "22": {
                  "name": "keyword.operator.plus.exponent.decimal.go"
                },
                "23": {
                  "name": "keyword.operator.minus.exponent.decimal.go"
                },
                "24": {
                  "name": "constant.numeric.exponent.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "25": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "26": {
                  "name": "keyword.other.unit.hexadecimal.go"
                },
                "27": {
                  "name": "constant.numeric.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "28": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "29": {
                  "name": "constant.numeric.hexadecimal.go"
                },
                "30": {
                  "name": "constant.numeric.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "31": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "32": {
                  "name": "keyword.other.unit.exponent.hexadecimal.go"
                },
                "33": {
                  "name": "keyword.operator.plus.exponent.hexadecimal.go"
                },
                "34": {
                  "name": "keyword.operator.minus.exponent.hexadecimal.go"
                },
                "35": {
                  "name": "constant.numeric.exponent.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "36": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "37": {
                  "name": "keyword.other.unit.hexadecimal.go"
                },
                "38": {
                  "name": "constant.numeric.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "39": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "40": {
                  "name": "keyword.other.unit.exponent.hexadecimal.go"
                },
                "41": {
                  "name": "keyword.operator.plus.exponent.hexadecimal.go"
                },
                "42": {
                  "name": "keyword.operator.minus.exponent.hexadecimal.go"
                },
                "43": {
                  "name": "constant.numeric.exponent.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "44": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "45": {
                  "name": "keyword.other.unit.hexadecimal.go"
                },
                "46": {
                  "name": "constant.numeric.hexadecimal.go"
                },
                "47": {
                  "name": "constant.numeric.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "48": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "49": {
                  "name": "keyword.other.unit.exponent.hexadecimal.go"
                },
                "50": {
                  "name": "keyword.operator.plus.exponent.hexadecimal.go"
                },
                "51": {
                  "name": "keyword.operator.minus.exponent.hexadecimal.go"
                },
                "52": {
                  "name": "constant.numeric.exponent.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "53": {
                  "name": "keyword.other.unit.imaginary.go"
                }
              },
              "match": "(?:(?:(?:(?:(?:\\G(?=[0-9.])(?!0[xXbBoO])([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?<=[0-9])\\.|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?(?:(?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?(i(?!\\w))?(?:\\n|$)|\\G(?=[0-9.])(?!0[xXbBoO])([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))|\\G((?:(?<=[0-9])\\.|\\.(?=[0-9])))([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?:(?<!_)([eE])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?(i(?!\\w))?(?:\\n|$))|(\\G0[xX])_?([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?(?<!_)([pP])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))|(\\G0[xX])_?([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?<!_)([pP])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))|(\\G0[xX])((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?<!_)([pP])(\\+?)(\\-?)((?:[0-9](?:[0-9]|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))"
            }, {
              "captures": {
                "1": {
                  "name": "constant.numeric.decimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "2": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "3": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "4": {
                  "name": "keyword.other.unit.binary.go"
                },
                "5": {
                  "name": "constant.numeric.binary.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "6": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "7": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "8": {
                  "name": "keyword.other.unit.octal.go"
                },
                "9": {
                  "name": "constant.numeric.octal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "10": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "11": {
                  "name": "keyword.other.unit.imaginary.go"
                },
                "12": {
                  "name": "keyword.other.unit.hexadecimal.go"
                },
                "13": {
                  "name": "constant.numeric.hexadecimal.go",
                  "patterns": [{
                    "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                    "name": "punctuation.separator.constant.numeric.go"
                  }]
                },
                "14": {
                  "name": "punctuation.separator.constant.numeric.go"
                },
                "15": {
                  "name": "keyword.other.unit.imaginary.go"
                }
              },
              "match": "(?:(?:(?:\\G(?=[0-9.])(?!0[xXbBoO])([0-9](?:[0-9]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(i(?!\\w))?(?:\\n|$)|(\\G0[bB])_?([01](?:[01]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(i(?!\\w))?(?:\\n|$))|(\\G0[oO]?)_?((?:[0-7]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))+)(i(?!\\w))?(?:\\n|$))|(\\G0[xX])_?([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(i(?!\\w))?(?:\\n|$))"
            }, {
              "match": "(?:(?:[0-9a-zA-Z_\\.])|(?<=[eEpP])[+-])+",
              "name": "invalid.illegal.constant.numeric.go"
            }]
          }]
        }
      },
      "match": "(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.])|(?<=[eEpP])[+-])*"
    },
    "operators": {
      "comment": "Note that the order here is very important!",
      "patterns": [{
        "match": "((?:\\*|\\&)+)(?:(?!\\d)(?=(?:[\\w\\[\\]])|(?:\\<\\-)))",
        "name": "keyword.operator.address.go"
      }, {
        "match": "<\\-",
        "name": "keyword.operator.channel.go"
      }, {
        "match": "\\-\\-",
        "name": "keyword.operator.decrement.go"
      }, {
        "match": "\\+\\+",
        "name": "keyword.operator.increment.go"
      }, {
        "match": "(==|!=|<=|>=|<(?!<)|>(?!>))",
        "name": "keyword.operator.comparison.go"
      }, {
        "match": "(&&|\\|\\||!)",
        "name": "keyword.operator.logical.go"
      }, {
        "match": "(=|\\+=|\\-=|\\|=|\\^=|\\*=|/=|:=|%=|<<=|>>=|&\\^=|&=)",
        "name": "keyword.operator.assignment.go"
      }, {
        "match": "(\\+|\\-|\\*|/|%)",
        "name": "keyword.operator.arithmetic.go"
      }, {
        "match": "(&(?!\\^)|\\||\\^|&\\^|<<|>>|\\~)",
        "name": "keyword.operator.arithmetic.bitwise.go"
      }, {
        "match": "\\.\\.\\.",
        "name": "keyword.operator.ellipsis.go"
      }]
    },
    "other_struct_interface_expressions": {
      "comment": "struct and interface expression in-line (before curly bracket)",
      "patterns": [{
        "comment": "after control variables must be added exactly here, do not move it! (changing may not affect tests, so be careful!)",
        "include": "#after_control_variables"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          },
          "2": {
            "patterns": [{
              "begin": "\\[",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "\\]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [{
                "include": "#type-declarations"
              }, {
                "match": "\\w+",
                "name": "entity.name.type.go"
              }, {
                "include": "$self"
              }]
            }]
          }
        },
        "match": "(\\b[\\w\\.]+)(\\[(?:[^\\]]+)?\\])?(?=\\{)(?<!\\bstruct\\b|\\binterface\\b)"
      }]
    },
    "other_variables": {
      "comment": "all other variables",
      "match": "\\w+",
      "name": "variable.other.go"
    },
    "package_name": {
      "patterns": [{
        "begin": "\\b(package)\\s+",
        "beginCaptures": {
          "1": {
            "name": "keyword.package.go"
          }
        },
        "comment": "package name",
        "end": "(?!\\G)",
        "patterns": [{
          "match": "\\d\\w*",
          "name": "invalid.illegal.identifier.go"
        }, {
          "match": "\\w+",
          "name": "entity.name.type.package.go"
        }]
      }]
    },
    "parameter-variable-types": {
      "comment": "function and generic parameter types",
      "patterns": [{
        "match": "\\{",
        "name": "punctuation.definition.begin.bracket.curly.go"
      }, {
        "match": "\\}",
        "name": "punctuation.definition.end.bracket.curly.go"
      }, {
        "begin": "(?:([\\w\\.\\*]+)?(\\[))",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          },
          "2": {
            "name": "punctuation.definition.begin.bracket.square.go"
          }
        },
        "end": "\\]",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.square.go"
          }
        },
        "patterns": [{
          "include": "#generic_param_types"
        }]
      }, {
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.begin.bracket.round.go"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "#function_param_types"
        }]
      }]
    },
    "property_variables": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "\\w+",
            "name": "variable.other.property.go"
          }]
        }
      },
      "comment": "Property variables in struct",
      "match": "((?:\\b[\\w\\.]+)(?:\\:(?!\\=)))"
    },
    "raw_string_literals": {
      "begin": "`",
      "beginCaptures": {
        "0": {
          "name": "punctuation.definition.string.begin.go"
        }
      },
      "comment": "Raw string literals",
      "end": "`",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.go"
        }
      },
      "name": "string.quoted.raw.go",
      "patterns": [{
        "include": "#string_placeholder"
      }]
    },
    "runes": {
      "patterns": [{
        "begin": "'",
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.go"
          }
        },
        "end": "'",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.go"
          }
        },
        "name": "string.quoted.rune.go",
        "patterns": [{
          "match": `\\G(\\\\([0-7]{3}|[abfnrtv\\\\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})|.)(?=')`,
          "name": "constant.other.rune.go"
        }, {
          "match": "[^']+",
          "name": "invalid.illegal.unknown-rune.go"
        }]
      }]
    },
    "single_type": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.type.go"
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          },
          "3": {
            "patterns": [{
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [{
                "include": "#function_param_types"
              }, {
                "include": "$self"
              }]
            }, {
              "include": "#type-declarations"
            }, {
              "include": "#generic_types"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "single type declaration",
        "match": "(?:(?:^\\s*)(\\btype\\b)(?:\\s*)([\\w\\.\\*]+)(?:\\s+)(?!(?:\\=\\s*)?(?:[\\[\\]\\*]+)?\\b(?:struct|interface)\\b)([\\s\\S]+))"
      }, {
        "begin": "(?:(?:^|\\s+)(\\btype\\b)(?:\\s*)([\\w\\.\\*]+)(?=\\[))",
        "beginCaptures": {
          "1": {
            "name": "keyword.type.go"
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "single type declaration with generics",
        "end": "(?:(?<=\\])((?:\\s+)(?:(?:(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:(?!(?:[\\[\\]\\*]+)?(?:\\bstruct\\b|\\binterface\\b|\\bfunc\\b))[\\w\\.\\-\\*\\[\\]]+(?:\\,\\s+[\\w\\.\\[\\]\\*]+)*))?)",
        "endCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "match": "\\[",
              "name": "punctuation.definition.begin.bracket.square.go"
            }, {
              "match": "\\]",
              "name": "punctuation.definition.end.bracket.square.go"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "patterns": [{
          "include": "#struct_variables_types"
        }, {
          "include": "#type-declarations-without-brackets"
        }, {
          "include": "#parameter-variable-types"
        }, {
          "match": "\\[",
          "name": "punctuation.definition.begin.bracket.square.go"
        }, {
          "match": "\\]",
          "name": "punctuation.definition.end.bracket.square.go"
        }, {
          "match": "\\{",
          "name": "punctuation.definition.begin.bracket.curly.go"
        }, {
          "match": "\\}",
          "name": "punctuation.definition.end.bracket.curly.go"
        }, {
          "match": "\\(",
          "name": "punctuation.definition.begin.bracket.round.go"
        }, {
          "match": "\\)",
          "name": "punctuation.definition.end.bracket.round.go"
        }, {
          "match": "\\w+",
          "name": "entity.name.type.go"
        }]
      }]
    },
    "slice_index_variables": {
      "captures": {
        "1": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "\\w+",
            "name": "variable.other.go"
          }]
        }
      },
      "comment": "slice index and capacity variables, to not scope them as property variables",
      "match": "(?<=\\w\\[)((?:(?:\\b[\\w\\.\\*\\+/\\-\\%\\<\\>\\|\\&]+\\:)|(?:\\:\\b[\\w\\.\\*\\+/\\-\\%\\<\\>\\|\\&]+))(?:\\b[\\w\\.\\*\\+/\\-\\%\\<\\>\\|\\&]+)?(?:\\:\\b[\\w\\.\\*\\+/\\-\\%\\<\\>\\|\\&]+)?)(?=\\])"
    },
    "statements": {
      "patterns": [{
        "include": "#package_name"
      }, {
        "include": "#import"
      }, {
        "include": "#syntax_errors"
      }, {
        "include": "#group-functions"
      }, {
        "include": "#group-types"
      }, {
        "include": "#group-variables"
      }, {
        "include": "#field_hover"
      }]
    },
    "storage_types": {
      "patterns": [{
        "match": "\\bbool\\b",
        "name": "storage.type.boolean.go"
      }, {
        "match": "\\bbyte\\b",
        "name": "storage.type.byte.go"
      }, {
        "match": "\\berror\\b",
        "name": "storage.type.error.go"
      }, {
        "match": "\\b(complex(64|128)|float(32|64)|u?int(8|16|32|64)?)\\b",
        "name": "storage.type.numeric.go"
      }, {
        "match": "\\brune\\b",
        "name": "storage.type.rune.go"
      }, {
        "match": "\\bstring\\b",
        "name": "storage.type.string.go"
      }, {
        "match": "\\buintptr\\b",
        "name": "storage.type.uintptr.go"
      }, {
        "match": "\\bany\\b",
        "name": "entity.name.type.any.go"
      }]
    },
    "string_escaped_char": {
      "patterns": [{
        "match": `\\\\([0-7]{3}|[abfnrtv\\\\'"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})`,
        "name": "constant.character.escape.go"
      }, {
        "match": `\\\\[^0-7xuUabfnrtv\\'"]`,
        "name": "invalid.illegal.unknown-escape.go"
      }]
    },
    "string_literals": {
      "patterns": [{
        "begin": '"',
        "beginCaptures": {
          "0": {
            "name": "punctuation.definition.string.begin.go"
          }
        },
        "comment": "Interpreted string literals",
        "end": '"',
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.string.end.go"
          }
        },
        "name": "string.quoted.double.go",
        "patterns": [{
          "include": "#string_escaped_char"
        }, {
          "include": "#string_placeholder"
        }]
      }]
    },
    "string_placeholder": {
      "patterns": [{
        "match": "%(\\[\\d+\\])?([\\+#\\-0\\x20]{,2}((\\d+|\\*)?(\\.?(\\d+|\\*|(\\[\\d+\\])\\*?)?(\\[\\d+\\])?)?))?[vT%tbcdoqxXUbeEfFgGspw]",
        "name": "constant.other.placeholder.go"
      }]
    },
    "struct_interface_declaration": {
      "captures": {
        "1": {
          "name": "keyword.type.go"
        },
        "2": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "\\w+",
            "name": "entity.name.type.go"
          }]
        }
      },
      "comment": "struct, interface type declarations (related to: struct_variables_types, interface_variables_types)",
      "match": "(?:(?:^\\s*)(\\btype\\b)(?:\\s*)([\\w\\.]+))"
    },
    "struct_variable_types_fields_multi": {
      "comment": "struct variable and type fields with multi lines",
      "patterns": [{
        "begin": "(?:((?:\\w+(?:\\,\\s*\\w+)*)(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:\\s+)(?:[\\[\\]\\*]+)?)(\\bstruct\\b)(?:\\s*)(\\{))",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "variable.other.property.go"
            }]
          },
          "2": {
            "name": "keyword.struct.go"
          },
          "3": {
            "name": "punctuation.definition.begin.bracket.curly.go"
          }
        },
        "comment": "struct in struct types",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.curly.go"
          }
        },
        "patterns": [{
          "include": "#struct_variables_types_fields"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?:((?:\\w+(?:\\,\\s*\\w+)*)(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:\\s+)(?:[\\[\\]\\*]+)?)(\\binterface\\b)(?:\\s*)(\\{))",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "variable.other.property.go"
            }]
          },
          "2": {
            "name": "keyword.interface.go"
          },
          "3": {
            "name": "punctuation.definition.begin.bracket.curly.go"
          }
        },
        "comment": "interface in struct types",
        "end": "\\}",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.curly.go"
          }
        },
        "patterns": [{
          "include": "#interface_variables_types_field"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?:((?:\\w+(?:\\,\\s*\\w+)*)(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:\\s+)(?:[\\[\\]\\*]+)?)(\\bfunc\\b)(?:\\s*)(\\())",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "variable.other.property.go"
            }]
          },
          "2": {
            "name": "keyword.function.go"
          },
          "3": {
            "name": "punctuation.definition.begin.bracket.round.go"
          }
        },
        "comment": "function in struct types",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "include": "#function_param_types"
        }, {
          "include": "$self"
        }]
      }, {
        "begin": "(?:((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?<!\\,\\s*)(?:[\\w\\.\\*]+)\\s*)(?=\\`))",
        "beginCaptures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "one type only with multi line raw string",
        "end": "(?=\\`)",
        "patterns": [{
          "include": "#raw_string_literals"
        }]
      }, {
        "include": "#parameter-variable-types"
      }]
    },
    "struct_variables_types": {
      "begin": "(\\bstruct\\b)\\s*(\\{)",
      "beginCaptures": {
        "1": {
          "name": "keyword.struct.go"
        },
        "2": {
          "name": "punctuation.definition.begin.bracket.curly.go"
        }
      },
      "comment": "Struct variable type",
      "end": "\\}",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.end.bracket.curly.go"
        }
      },
      "patterns": [{
        "include": "#struct_variables_types_fields"
      }, {
        "include": "$self"
      }]
    },
    "struct_variables_types_fields": {
      "comment": "Struct variable type fields",
      "patterns": [{
        "include": "#struct_variable_types_fields_multi"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "one line - single type",
        "match": "(?:(?<=\\{)\\s*((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:[\\w\\.\\*\\[\\]]+))\\s*(?=\\}))"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "variable.other.property.go"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "one line - property variables and types",
        "match": "(?:(?<=\\{)\\s*((?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:[\\w\\.\\*\\[\\]]+))\\s*(?=\\}))"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "captures": {
                "1": {
                  "patterns": [{
                    "include": "#type-declarations"
                  }, {
                    "match": "(?:\\w+)",
                    "name": "variable.other.property.go"
                  }]
                },
                "2": {
                  "patterns": [{
                    "include": "#type-declarations"
                  }, {
                    "match": "(?:\\w+)",
                    "name": "entity.name.type.go"
                  }]
                }
              },
              "match": "(?:((?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))?((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:[\\S]+)(?:\\;)?))"
            }]
          }
        },
        "comment": "one line with semicolon(;) without formatting gofmt - single type | property variables and types",
        "match": "(?:(?<=\\{)((?:\\s*(?:(?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))?(?:(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?:[\\S]+)(?:\\;)?))+)\\s*(?=\\}))"
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "one type only",
        "match": '(?:((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?(?<!\\,\\s*)(?:[\\w\\.\\*]+)\\s*(?:(?:(?:".*")|(?:\\`.*\\`))\\s*)?(?:/(?:/|\\*).*)?)$)'
      }, {
        "captures": {
          "1": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "(?:\\w+)",
              "name": "variable.other.property.go"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "include": "#parameter-variable-types"
            }, {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "property variables and types",
        "match": "(?:((?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))([^\\`]+))"
      }]
    },
    "support_functions": {
      "captures": {
        "1": {
          "name": "entity.name.function.support.go"
        },
        "2": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "\\d\\w*",
            "name": "invalid.illegal.identifier.go"
          }, {
            "match": "\\w+",
            "name": "entity.name.function.support.go"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#type-declarations-without-brackets"
          }, {
            "match": "\\[",
            "name": "punctuation.definition.begin.bracket.square.go"
          }, {
            "match": "\\]",
            "name": "punctuation.definition.end.bracket.square.go"
          }, {
            "match": "\\{",
            "name": "punctuation.definition.begin.bracket.curly.go"
          }, {
            "match": "\\}",
            "name": "punctuation.definition.end.bracket.curly.go"
          }, {
            "match": "\\w+",
            "name": "entity.name.type.go"
          }]
        }
      },
      "comment": "Support Functions",
      "match": `(?:(?:((?<=\\.)\\b\\w+)|(\\b\\w+))(\\[(?:(?:[\\w\\.\\*\\[\\]\\{\\}"\\']+)(?:(?:\\,\\s*(?:[\\w\\.\\*\\[\\]\\{\\}]+))*))?\\])?(?=\\())`
    },
    "switch_select_case_variables": {
      "captures": {
        "1": {
          "name": "keyword.control.go"
        },
        "2": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "include": "#support_functions"
          }, {
            "include": "#variable_assignment"
          }, {
            "match": "\\w+",
            "name": "variable.other.go"
          }]
        }
      },
      "comment": "variables after case control keyword in switch/select expression, to not scope them as property variables",
      "match": "(?:(?:^\\s*(\\bcase\\b))(?:\\s+)([\\s\\S]+(?:\\:)\\s*(?:/(?:/|\\*).*)?)$)"
    },
    "switch_types": {
      "begin": "(?<=\\bswitch\\b)(?:\\s*)(?:(\\w+\\s*\\:\\=)?\\s*([\\w\\.\\*\\(\\)\\[\\]\\+/\\-\\%\\<\\>\\|\\&]+))(\\.\\(\\btype\\b\\)\\s*)(\\{)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#operators"
          }, {
            "match": "\\w+",
            "name": "variable.other.assignment.go"
          }]
        },
        "2": {
          "patterns": [{
            "include": "#support_functions"
          }, {
            "include": "#type-declarations"
          }, {
            "match": "\\w+",
            "name": "variable.other.go"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#delimiters"
          }, {
            "include": "#brackets"
          }, {
            "match": "\\btype\\b",
            "name": "keyword.type.go"
          }]
        },
        "4": {
          "name": "punctuation.definition.begin.bracket.curly.go"
        }
      },
      "comment": "switch type assertions, only highlights types after case keyword",
      "end": "(?:\\})",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.end.bracket.curly.go"
        }
      },
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.control.go"
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          },
          "3": {
            "name": "punctuation.other.colon.go"
          },
          "4": {
            "patterns": [{
              "include": "#comments"
            }]
          }
        },
        "comment": "types after case keyword with single line",
        "match": "(?:^\\s*(\\bcase\\b))(?:\\s+)([\\w\\.\\,\\*\\=\\<\\>\\!\\s]+)(:)(\\s*/(?:/|\\*)\\s*.*)?$"
      }, {
        "begin": "\\bcase\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.go"
          }
        },
        "comment": "types after case keyword with multi lines",
        "end": "\\:",
        "endCaptures": {
          "0": {
            "name": "punctuation.other.colon.go"
          }
        },
        "patterns": [{
          "include": "#type-declarations"
        }, {
          "match": "\\w+",
          "name": "entity.name.type.go"
        }]
      }, {
        "include": "$self"
      }]
    },
    "syntax_errors": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "invalid.illegal.slice.go"
          }
        },
        "comment": "Syntax error using slices",
        "match": "\\[\\](\\s+)"
      }, {
        "comment": "Syntax error numeric literals",
        "match": "\\b0[0-7]*[89]\\d*\\b",
        "name": "invalid.illegal.numeric.go"
      }]
    },
    "terminators": {
      "comment": "Terminators",
      "match": ";",
      "name": "punctuation.terminator.go"
    },
    "type-declarations": {
      "comment": "includes all type declarations",
      "patterns": [{
        "include": "#language_constants"
      }, {
        "include": "#comments"
      }, {
        "include": "#map_types"
      }, {
        "include": "#brackets"
      }, {
        "include": "#delimiters"
      }, {
        "include": "#keywords"
      }, {
        "include": "#operators"
      }, {
        "include": "#runes"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#raw_string_literals"
      }, {
        "include": "#string_literals"
      }, {
        "include": "#numeric_literals"
      }, {
        "include": "#terminators"
      }]
    },
    "type-declarations-without-brackets": {
      "comment": "includes all type declarations without brackets (in some cases, brackets need to be captured manually)",
      "patterns": [{
        "include": "#language_constants"
      }, {
        "include": "#comments"
      }, {
        "include": "#map_types"
      }, {
        "include": "#delimiters"
      }, {
        "include": "#keywords"
      }, {
        "include": "#operators"
      }, {
        "include": "#runes"
      }, {
        "include": "#storage_types"
      }, {
        "include": "#raw_string_literals"
      }, {
        "include": "#string_literals"
      }, {
        "include": "#numeric_literals"
      }, {
        "include": "#terminators"
      }]
    },
    "type_assertion_inline": {
      "captures": {
        "1": {
          "name": "keyword.type.go"
        },
        "2": {
          "patterns": [{
            "include": "#type-declarations"
          }, {
            "match": "(?:\\w+)",
            "name": "entity.name.type.go"
          }]
        }
      },
      "comment": "struct/interface types in-line (type assertion) | switch type keyword",
      "match": "(?:(?<=\\.\\()(?:(\\btype\\b)|((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+)?[\\w\\.\\[\\]\\*]+))(?=\\)))"
    },
    "var_const_assignment": {
      "comment": "variable assignment with var and const keyword",
      "patterns": [{
        "captures": {
          "1": {
            "patterns": [{
              "include": "#delimiters"
            }, {
              "match": "\\w+",
              "name": "variable.other.assignment.go"
            }]
          },
          "2": {
            "patterns": [{
              "include": "#type-declarations-without-brackets"
            }, {
              "include": "#generic_types"
            }, {
              "match": "\\(",
              "name": "punctuation.definition.begin.bracket.round.go"
            }, {
              "match": "\\)",
              "name": "punctuation.definition.end.bracket.round.go"
            }, {
              "match": "\\[",
              "name": "punctuation.definition.begin.bracket.square.go"
            }, {
              "match": "\\]",
              "name": "punctuation.definition.end.bracket.square.go"
            }, {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }]
          }
        },
        "comment": "var and const with single type assignment",
        "match": "(?:(?<=\\bvar\\b|\\bconst\\b)(?:\\s*)(\\b[\\w\\.]+(?:\\,\\s*[\\w\\.]+)*)(?:\\s*)((?:(?:(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+(?:\\([^\\)]+\\))?)?(?!(?:[\\[\\]\\*]+)?\\b(?:struct|func|map)\\b)(?:[\\w\\.\\[\\]\\*]+(?:\\,\\s*[\\w\\.\\[\\]\\*]+)*)?(?:\\s*)(?:\\=)?)?)"
      }, {
        "begin": "(?:(?<=\\bvar\\b|\\bconst\\b)(?:\\s*)(\\())",
        "beginCaptures": {
          "1": {
            "name": "punctuation.definition.begin.bracket.round.go"
          }
        },
        "comment": "var and const with multi type assignment",
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.definition.end.bracket.round.go"
          }
        },
        "patterns": [{
          "captures": {
            "1": {
              "patterns": [{
                "include": "#delimiters"
              }, {
                "match": "\\w+",
                "name": "variable.other.assignment.go"
              }]
            },
            "2": {
              "patterns": [{
                "include": "#type-declarations-without-brackets"
              }, {
                "include": "#generic_types"
              }, {
                "match": "\\(",
                "name": "punctuation.definition.begin.bracket.round.go"
              }, {
                "match": "\\)",
                "name": "punctuation.definition.end.bracket.round.go"
              }, {
                "match": "\\[",
                "name": "punctuation.definition.begin.bracket.square.go"
              }, {
                "match": "\\]",
                "name": "punctuation.definition.end.bracket.square.go"
              }, {
                "match": "\\w+",
                "name": "entity.name.type.go"
              }]
            }
          },
          "match": "(?:(?:^\\s*)(\\b[\\w\\.]+(?:\\,\\s*[\\w\\.]+)*)(?:\\s*)((?:(?:(?:[\\*\\[\\]]+)?(?:\\<\\-\\s*)?\\bchan\\b(?:\\s*\\<\\-)?\\s*)+(?:\\([^\\)]+\\))?)?(?!(?:[\\[\\]\\*]+)?\\b(?:struct|func|map)\\b)(?:[\\w\\.\\[\\]\\*]+(?:\\,\\s*[\\w\\.\\[\\]\\*]+)*)?(?:\\s*)(?:\\=)?)?)"
        }, {
          "include": "$self"
        }]
      }]
    },
    "variable_assignment": {
      "comment": "variable assignment",
      "patterns": [{
        "captures": {
          "0": {
            "patterns": [{
              "include": "#delimiters"
            }, {
              "match": "\\d\\w*",
              "name": "invalid.illegal.identifier.go"
            }, {
              "match": "\\w+",
              "name": "variable.other.assignment.go"
            }]
          }
        },
        "comment": "variable assignment with :=",
        "match": "\\b\\w+(?:\\,\\s*\\w+)*(?=\\s*:=)"
      }, {
        "captures": {
          "0": {
            "patterns": [{
              "include": "#delimiters"
            }, {
              "include": "#operators"
            }, {
              "match": "\\d\\w*",
              "name": "invalid.illegal.identifier.go"
            }, {
              "match": "\\w+",
              "name": "variable.other.assignment.go"
            }]
          }
        },
        "comment": "variable assignment with =",
        "match": "\\b[\\w\\.\\*]+(?:\\,\\s*[\\w\\.\\*]+)*(?=\\s*=(?!=))"
      }]
    }
  },
  "scopeName": "source.go"
});
var go = [lang];

export {
  go
};
//# sourceMappingURL=chunk-RGPMBX3K.js.map
