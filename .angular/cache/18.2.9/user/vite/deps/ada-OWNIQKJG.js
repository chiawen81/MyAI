import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/ada.mjs
var lang = Object.freeze({
  "displayName": "Ada",
  "name": "ada",
  "patterns": [{
    "include": "#library_unit"
  }, {
    "include": "#comment"
  }, {
    "include": "#use_clause"
  }, {
    "include": "#with_clause"
  }, {
    "include": "#pragma"
  }, {
    "include": "#keyword"
  }],
  "repository": {
    "abort_statement": {
      "begin": "(?i)\\babort\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.abort.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "match": "\\b(\\w|\\d|\\.|_)+\\b",
        "name": "entity.name.task.ada"
      }]
    },
    "accept_statement": {
      "begin": "(?i)\\b(accept)\\s+((?:\\w|\\d|\\.|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "entity.name.accept.ada"
        }
      },
      "end": "(?i)(?:\\b(end)\\s*(\\s\\2)?\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "entity.name.accept.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.accept.ada",
      "patterns": [{
        "begin": "(?i)\\bdo\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "include": "#statement"
        }]
      }, {
        "include": "#parameter_profile"
      }]
    },
    "access_definition": {
      "captures": {
        "1": {
          "name": "storage.visibility.ada"
        },
        "2": {
          "name": "storage.visibility.ada"
        },
        "3": {
          "name": "storage.modifier.ada"
        },
        "4": {
          "name": "entity.name.type.ada"
        }
      },
      "match": "(?i)(not\\s+null\\s+)?(access)\\s+(constant\\s+)?((?:\\w|\\d|\\.|_)+)\\b",
      "name": "meta.declaration.access.definition.ada"
    },
    "access_type_definition": {
      "begin": "(?i)\\b(not\\s+null\\s+)?(access)\\b",
      "beginCaptures": {
        "1": {
          "name": "storage.visibility.ada"
        },
        "2": {
          "name": "storage.visibility.ada"
        }
      },
      "end": "(?i)(?=(with|;))",
      "name": "meta.declaration.type.definition.access.ada",
      "patterns": [{
        "match": "(?i)\\ball\\b",
        "name": "storage.visibility.ada"
      }, {
        "match": "(?i)\\bconstant\\b",
        "name": "storage.modifier.ada"
      }, {
        "include": "#subtype_mark"
      }]
    },
    "actual_parameter_part": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "end": "\\)",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "include": "#parameter_association"
      }]
    },
    "adding_operator": {
      "match": "(\\+|-|\\&)",
      "name": "keyword.operator.adding.ada"
    },
    "array_aggregate": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "end": "\\)",
      "name": "meta.definition.array.aggregate.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "include": "#positional_array_aggregate"
      }, {
        "include": "#array_component_association"
      }]
    },
    "array_component_association": {
      "captures": {
        "1": {
          "name": "variable.name.ada"
        },
        "2": {
          "name": "keyword.other.ada"
        },
        "3": {
          "patterns": [{
            "match": "<>",
            "name": "keyword.modifier.unknown.ada"
          }, {
            "include": "#expression"
          }]
        }
      },
      "match": "(?i)\\b([^(=>)]*)\\s*(=>)\\s*([^,\\)]+)",
      "name": "meta.definition.array.aggregate.component.ada"
    },
    "array_dimensions": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "end": "\\)",
      "name": "meta.declaration.type.definition.array.dimensions.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "match": "(?i)\\brange\\b",
        "name": "storage.modifier.ada"
      }, {
        "match": "<>",
        "name": "keyword.modifier.unknown.ada"
      }, {
        "match": "\\.\\.",
        "name": "keyword.ada"
      }, {
        "include": "#expression"
      }, {
        "patterns": [{
          "include": "#subtype_mark"
        }]
      }]
    },
    "array_type_definition": {
      "begin": "(?i)\\barray\\b",
      "beginCaptures": {
        "0": {
          "name": "storage.modifier.ada"
        }
      },
      "end": "(?i)(?=(with|;))",
      "name": "meta.declaration.type.definition.array.ada",
      "patterns": [{
        "include": "#array_dimensions"
      }, {
        "match": "(?i)\\bof\\b",
        "name": "storage.modifier.ada"
      }, {
        "match": "(?i)\\baliased\\b",
        "name": "storage.visibility.ada"
      }, {
        "include": "#access_definition"
      }, {
        "include": "#subtype_mark"
      }]
    },
    "aspect_clause": {
      "begin": "(?i)\\b(for)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "patterns": [{
            "include": "#subtype_mark"
          }]
        },
        "3": {
          "name": "punctuation.ada"
        },
        "5": {
          "name": "keyword.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.aspect.clause.ada",
      "patterns": [{
        "begin": "(?i)\\buse\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?=;)",
        "endCaptures": {
          "0": {
            "name": "punctuation.ada"
          }
        },
        "patterns": [{
          "include": "#record_representation_clause"
        }, {
          "include": "#array_aggregate"
        }, {
          "include": "#expression"
        }]
      }, {
        "begin": "(?i)(?<=for)",
        "captures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=use)",
        "patterns": [{
          "captures": {
            "1": {
              "patterns": [{
                "include": "#subtype_mark"
              }]
            },
            "2": {
              "patterns": [{
                "include": "#attribute"
              }]
            }
          },
          "match": "((?:\\w|\\d|_)+)('((?:\\w|\\d|_)+))?"
        }]
      }]
    },
    "aspect_definition": {
      "begin": "=>",
      "beginCaptures": {
        "0": {
          "name": "keyword.other.ada"
        }
      },
      "end": "(?i)(?=(,|;|\\bis\\b))",
      "name": "meta.aspect.definition.ada",
      "patterns": [{
        "include": "#expression"
      }]
    },
    "aspect_mark": {
      "captures": {
        "1": {
          "name": "keyword.control.directive.ada"
        },
        "2": {
          "name": "punctuation.ada"
        },
        "3": {
          "name": "entity.other.attribute-name.ada"
        }
      },
      "match": "(?i)\\b((?:\\w|\\d|\\.|_)+)(?:(')(class))?\\b",
      "name": "meta.aspect.mark.ada"
    },
    "aspect_specification": {
      "begin": "(?i)\\bwith\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.ada"
        }
      },
      "end": "(?i)(?=(;|\\bis\\b))",
      "name": "meta.aspect.specification.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "captures": {
          "1": {
            "name": "storage.modifier.ada"
          },
          "2": {
            "name": "storage.modifier.ada"
          }
        },
        "match": "(?i)\\b(null)\\s+(record)\\b"
      }, {
        "begin": "(?i)\\brecord\\b",
        "beginCaptures": {
          "0": {
            "name": "storage.modifier.ada"
          }
        },
        "end": "(?i)\\b(end)\\s+(record)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.ada"
          },
          "2": {
            "name": "storage.modifier.ada"
          }
        },
        "patterns": [{
          "include": "#component_item"
        }]
      }, {
        "captures": {
          "0": {
            "name": "storage.visibility.ada"
          }
        },
        "match": "(?i)\\bprivate\\b"
      }, {
        "include": "#aspect_definition"
      }, {
        "include": "#aspect_mark"
      }, {
        "include": "#comment"
      }]
    },
    "assignment_statement": {
      "begin": `\\b((?:\\w|\\d|\\.|_|\\(|\\)|"|'|\\s)+)\\s*(:=)`,
      "beginCaptures": {
        "1": {
          "patterns": [{
            "match": "((?:\\w|\\d|\\.|_)+)",
            "name": "variable.name.ada"
          }, {
            "begin": "\\(",
            "captures": {
              "0": {
                "name": "punctuation.ada"
              }
            },
            "end": "\\)",
            "patterns": [{
              "include": "#expression"
            }]
          }]
        },
        "2": {
          "name": "keyword.operator.new.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.assignment.ada",
      "patterns": [{
        "include": "#expression"
      }, {
        "include": "#comment"
      }]
    },
    "attribute": {
      "captures": {
        "1": {
          "name": "punctuation.ada"
        },
        "2": {
          "name": "entity.other.attribute-name.ada"
        }
      },
      "match": "(')((?:\\w|\\d|_)+)\\b",
      "name": "meta.attribute.ada"
    },
    "based_literal": {
      "captures": {
        "1": {
          "name": "constant.numeric.base.ada"
        },
        "2": {
          "name": "punctuation.ada"
        },
        "3": {
          "name": "punctuation.ada"
        },
        "4": {
          "name": "punctuation.radix-point.ada"
        },
        "5": {
          "name": "punctuation.ada"
        },
        "6": {
          "name": "constant.numeric.base.ada"
        },
        "7": {
          "patterns": [{
            "include": "#exponent_part"
          }]
        }
      },
      "match": "(?i)(\\d(?:(_)?\\d)*#)[0-9a-f](?:(_)?[0-9a-f])*(?:(\\.)[0-9a-f](?:(_)?[0-9a-f])*)?(#)([eE](?:\\+|\\-)?\\d(?:_?\\d)*)?",
      "name": "constant.numeric.ada"
    },
    "basic_declaration": {
      "patterns": [{
        "include": "#type_declaration"
      }, {
        "include": "#subtype_declaration"
      }, {
        "include": "#exception_declaration"
      }, {
        "include": "#object_declaration"
      }, {
        "include": "#single_protected_declaration"
      }, {
        "include": "#single_task_declaration"
      }, {
        "include": "#subprogram_specification"
      }, {
        "include": "#package_declaration"
      }, {
        "include": "#pragma"
      }, {
        "include": "#comment"
      }]
    },
    "basic_declarative_item": {
      "patterns": [{
        "include": "#basic_declaration"
      }, {
        "include": "#aspect_clause"
      }, {
        "include": "#use_clause"
      }, {
        "include": "#keyword"
      }]
    },
    "block_statement": {
      "begin": "(?i)\\bdeclare\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.ada"
        }
      },
      "end": "(?i)\\b(end)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.label.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.block.ada",
      "patterns": [{
        "begin": "(?i)(?<=declare)",
        "end": "(?i)\\bbegin\\b",
        "endCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "patterns": [{
          "include": "#body"
        }, {
          "include": "#basic_declarative_item"
        }]
      }, {
        "begin": "(?i)(?<=begin)",
        "end": "(?i)(?=end)",
        "patterns": [{
          "include": "#statement"
        }]
      }]
    },
    "body": {
      "patterns": [{
        "include": "#subprogram_body"
      }, {
        "include": "#package_body"
      }, {
        "include": "#task_body"
      }, {
        "include": "#protected_body"
      }]
    },
    "case_statement": {
      "begin": "(?i)\\bcase\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(case)\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "keyword.control.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.case.ada",
      "patterns": [{
        "begin": "(?i)(?<=case)\\b",
        "end": "(?i)\\bis\\b",
        "endCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "begin": "(?i)\\bwhen\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "=>",
        "endCaptures": {
          "0": {
            "name": "punctuation.ada"
          }
        },
        "name": "meta.statement.case.alternative.ada",
        "patterns": [{
          "match": "(?i)\\bothers\\b",
          "name": "keyword.modifier.unknown.ada"
        }, {
          "match": "\\|",
          "name": "punctuation.ada"
        }, {
          "include": "#expression"
        }]
      }, {
        "include": "#statement"
      }]
    },
    "character_literal": {
      "captures": {
        "0": {
          "patterns": [{
            "match": "'",
            "name": "punctuation.definition.string.ada"
          }]
        }
      },
      "match": "'.'",
      "name": "string.quoted.single.ada"
    },
    "comment": {
      "patterns": [{
        "include": "#preprocessor"
      }, {
        "include": "#comment-section"
      }, {
        "include": "#comment-doc"
      }, {
        "include": "#comment-line"
      }]
    },
    "comment-doc": {
      "captures": {
        "1": {
          "name": "comment.line.double-dash.ada"
        },
        "2": {
          "name": "punctuation.definition.tag.ada"
        },
        "3": {
          "name": "entity.name.tag.ada"
        },
        "4": {
          "name": "comment.line.double-dash.ada"
        }
      },
      "match": "(--)\\s*(@)(\\w+)\\s+(.*)$",
      "name": "comment.block.documentation.ada"
    },
    "comment-line": {
      "match": "--.*$",
      "name": "comment.line.double-dash.ada"
    },
    "comment-section": {
      "captures": {
        "1": {
          "name": "entity.name.section.ada"
        }
      },
      "match": "--\\s*([^-].*?[^-])\\s*--\\s*$",
      "name": "comment.line.double-dash.ada"
    },
    "component_clause": {
      "begin": "(?i)\\b((?:\\w|\\d|_)+)\\b",
      "beginCaptures": {
        "0": {
          "name": "variable.name.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.aspect.clause.record.representation.component.ada",
      "patterns": [{
        "begin": "(?i)\\bat\\b",
        "beginCaptures": {
          "0": {
            "name": "storage.modifier.ada"
          }
        },
        "end": "(?i)\\b(?=range)\\b",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "include": "#range_constraint"
      }]
    },
    "component_declaration": {
      "begin": "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)?)\\s*(:)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "match": ",",
            "name": "punctuation.ada"
          }, {
            "match": "\\b(\\w|\\d|_)+\\b",
            "name": "variable.name.ada"
          }]
        },
        "2": {
          "name": "punctuation.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.type.definition.record.component.ada",
      "patterns": [{
        "patterns": [{
          "match": ":=",
          "name": "keyword.operator.new.ada"
        }, {
          "include": "#expression"
        }]
      }, {
        "include": "#component_definition"
      }]
    },
    "component_definition": {
      "patterns": [{
        "match": "(?i)\\baliased\\b",
        "name": "storage.visibility.ada"
      }, {
        "match": "(?i)\\brange\\b",
        "name": "storage.modifier.ada"
      }, {
        "match": "\\.\\.",
        "name": "keyword.ada"
      }, {
        "include": "#access_definition"
      }, {
        "include": "#subtype_mark"
      }]
    },
    "component_item": {
      "patterns": [{
        "include": "#component_declaration"
      }, {
        "include": "#variant_part"
      }, {
        "include": "#comment"
      }, {
        "include": "#aspect_clause"
      }, {
        "captures": {
          "1": {
            "name": "keyword.ada"
          },
          "2": {
            "name": "punctuation.ada"
          }
        },
        "match": "(?i)\\b(null)\\s*(;)"
      }]
    },
    "composite_constraint": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "end": "\\)",
      "name": "meta.declaration.constraint.composite.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "match": "\\.\\.",
        "name": "keyword.ada"
      }, {
        "captures": {
          "1": {
            "name": "variable.name.ada"
          },
          "2": {
            "name": "keyword.other.ada"
          },
          "3": {
            "patterns": [{
              "include": "#expression"
            }]
          }
        },
        "match": "(?i)\\b((?:\\w|\\d|_)+)\\s*(=>)\\s*([^,\\)])+\\b"
      }, {
        "include": "#expression"
      }]
    },
    "decimal_literal": {
      "captures": {
        "1": {
          "name": "punctuation.ada"
        },
        "2": {
          "name": "punctuation.radix-point.ada"
        },
        "3": {
          "name": "punctuation.ada"
        },
        "4": {
          "patterns": [{
            "include": "#exponent_part"
          }]
        }
      },
      "match": "\\d(?:(_)?\\d)*(?:(\\.)\\d(?:(_)?\\d)*)?([eE](?:\\+|\\-)?\\d(?:_?\\d)*)?",
      "name": "constant.numeric.ada"
    },
    "declarative_item": {
      "patterns": [{
        "include": "#body"
      }, {
        "include": "#basic_declarative_item"
      }]
    },
    "delay_relative_statement": {
      "begin": "(?i)\\b(delay)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "patterns": [{
        "include": "#expression"
      }]
    },
    "delay_statement": {
      "patterns": [{
        "include": "#delay_until_statement"
      }, {
        "include": "#delay_relative_statement"
      }]
    },
    "delay_until_statement": {
      "begin": "(?i)\\b(delay)\\s+(until)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "keyword.control.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.delay.until.ada",
      "patterns": [{
        "include": "#expression"
      }]
    },
    "derived_type_definition": {
      "name": "meta.declaration.type.definition.derived.ada",
      "patterns": [{
        "begin": "(?i)\\bnew\\b",
        "beginCaptures": {
          "0": {
            "name": "storage.modifier.ada"
          }
        },
        "end": "(?i)(?=(\\bwith\\b|;))",
        "patterns": [{
          "match": "(?i)\\band\\b",
          "name": "storage.modifier.ada"
        }, {
          "include": "#subtype_mark"
        }]
      }, {
        "match": "(?i)\\b(abstract|and|limited|tagged)\\b",
        "name": "storage.modifier.ada"
      }, {
        "match": "(?i)\\bprivate\\b",
        "name": "storage.visibility.ada"
      }, {
        "include": "#subtype_mark"
      }]
    },
    "discriminant_specification": {
      "begin": "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)?)\\s*(:)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "match": ",",
            "name": "punctuation.ada"
          }, {
            "match": "\\b(\\w|\\d|_)+\\b",
            "name": "variable.name.ada"
          }]
        },
        "2": {
          "name": "punctuation.ada"
        }
      },
      "end": "(?=(;|\\)))",
      "patterns": [{
        "begin": ":=",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.new.ada"
          }
        },
        "end": "(?=(;|\\)))",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "captures": {
          "1": {
            "name": "storage.visibility.ada"
          },
          "2": {
            "patterns": [{
              "include": "#subtype_mark"
            }]
          }
        },
        "match": "(?i)(not\\s+null\\s+)?((?:\\w|\\d|\\.|_)+)\\b"
      }, {
        "include": "#access_definition"
      }]
    },
    "entry_body": {
      "begin": "(?i)\\b(entry)\\s+((?:\\w|\\d|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.entry.ada"
        }
      },
      "end": "(?i)\\b(end)\\s*(\\s\\2)\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.entry.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=begin)\\b",
        "patterns": [{
          "include": "#declarative_item"
        }]
      }, {
        "begin": "(?i)\\bbegin\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "include": "#statement"
        }]
      }, {
        "begin": "(?i)\\bwhen\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=is)\\b",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "include": "#parameter_profile"
      }]
    },
    "entry_declaration": {
      "begin": "(?i)\\b(?:(not)?\\s+(overriding)\\s+)?(entry)\\s+((?:\\w|\\d|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.ada"
        },
        "2": {
          "name": "storage.modifier.ada"
        },
        "3": {
          "name": "keyword.ada"
        },
        "4": {
          "name": "entity.name.entry.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "patterns": [{
        "include": "#parameter_profile"
      }]
    },
    "enumeration_type_definition": {
      "begin": "\\(",
      "beginCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "end": "\\)",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.type.definition.enumeration.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "match": "\\b(\\w|\\d|_)+\\b",
        "name": "variable.name.ada"
      }, {
        "include": "#comment"
      }]
    },
    "exception_declaration": {
      "begin": "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)?)\\s*(:)\\s*(exception)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "match": ",",
            "name": "punctuation.ada"
          }, {
            "match": "\\b(\\w|\\d|_)+\\b",
            "name": "entity.name.exception.ada"
          }]
        },
        "2": {
          "name": "punctuation.ada"
        },
        "3": {
          "name": "storage.type.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.exception.ada",
      "patterns": [{
        "match": "(?i)\\b(renames)\\s+((\\w|\\d|_|\\.)+)",
        "name": "entity.name.exception.ada"
      }]
    },
    "exit_statement": {
      "begin": "(?i)\\bexit\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.exit.ada",
      "patterns": [{
        "begin": "(?i)\\bwhen\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?=;)",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "match": "(?:\\w|\\d|_)+",
        "name": "entity.name.label.ada"
      }]
    },
    "exponent_part": {
      "captures": {
        "1": {
          "name": "punctuation.exponent-mark.ada"
        },
        "2": {
          "name": "keyword.operator.unary.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "match": "([eE])(\\+|\\-)?\\d(?:(_)?\\d)*"
    },
    "expression": {
      "name": "meta.expression.ada",
      "patterns": [{
        "match": "(?i)\\bnull\\b",
        "name": "constant.language.ada"
      }, {
        "match": "=>(\\+)?",
        "name": "keyword.other.ada"
      }, {
        "begin": "\\(",
        "captures": {
          "0": {
            "name": "punctuation.ada"
          }
        },
        "end": "\\)",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "match": "\\.\\.",
        "name": "keyword.ada"
      }, {
        "include": "#value"
      }, {
        "include": "#attribute"
      }, {
        "include": "#comment"
      }, {
        "include": "#operator"
      }, {
        "match": "(?i)\\b(and|or|xor)\\b",
        "name": "keyword.ada"
      }, {
        "match": "(?i)\\b(if|then|else|elsif|in|for|(?<!\\.)all|some|\\.\\.|delta|with)\\b",
        "name": "keyword.ada"
      }]
    },
    "for_loop_statement": {
      "begin": "(?i)\\bfor\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(loop)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "keyword.control.ada"
        },
        "3": {
          "name": "entity.name.label.ada"
        },
        "4": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.loop.for.ada",
      "patterns": [{
        "begin": "(?i)(?<=for)",
        "end": "(?i)\\bloop\\b",
        "endCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "patterns": [{
          "captures": {
            "1": {
              "name": "variable.name.ada"
            },
            "2": {
              "name": "keyword.control.ada"
            },
            "3": {
              "name": "keyword.control.ada"
            }
          },
          "match": "(?i)\\b((?:\\w|\\d|_)+)\\s+(in)(\\s+reverse)?\\b"
        }, {
          "captures": {
            "1": {
              "name": "variable.name.ada"
            },
            "2": {
              "name": "punctuation.ada"
            },
            "3": {
              "patterns": [{
                "include": "#subtype_mark"
              }]
            },
            "4": {
              "name": "keyword.control.ada"
            },
            "5": {
              "name": "keyword.control.ada"
            }
          },
          "match": "(?i)\\b((?:\\w|\\d|_)+)(?:\\s*(:)\\s*((?:\\w|\\d|\\.|_)+))?\\s+(of)(\\s+reverse)?\\b"
        }, {
          "include": "#expression"
        }]
      }, {
        "include": "#statement"
      }]
    },
    "full_type_declaration": {
      "patterns": [{
        "include": "#task_type_declaration"
      }, {
        "include": "#regular_type_declaration"
      }]
    },
    "function_body": {
      "begin": '(?i)\\b(overriding\\s+)?(function)\\s+(?:((?:\\w|\\d|\\.|_)+\\b)|(".+"))',
      "beginCaptures": {
        "1": {
          "name": "storage.visibility.ada"
        },
        "2": {
          "name": "keyword.ada"
        },
        "3": {
          "name": "entity.name.function.ada"
        },
        "4": {
          "patterns": [{
            "include": "#string_literal"
          }]
        }
      },
      "end": "(?i)(?:\\b(end)\\s+(\\3|\\4)\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.function.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.function.body.ada",
      "patterns": [{
        "begin": "(?i)\\bbegin\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=end)",
        "patterns": [{
          "include": "#handled_sequence_of_statements"
        }]
      }, {
        "include": "#aspect_specification"
      }, {
        "include": "#result_profile"
      }, {
        "include": "#subprogram_renaming_declaration"
      }, {
        "include": "#parameter_profile"
      }, {
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=(with|begin|;))",
        "name": "meta.function.body.spec_part.ada",
        "patterns": [{
          "begin": "(?i)\\bnew\\b",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.new.ada"
            }
          },
          "end": "(?=;)",
          "name": "meta.declaration.package.generic.ada",
          "patterns": [{
            "match": "((?:\\w|\\d|\\.|_)+)",
            "name": "entity.name.function.ada"
          }, {
            "include": "#actual_parameter_part"
          }]
        }, {
          "captures": {
            "0": {
              "name": "storage.modifier.ada"
            }
          },
          "match": "(?i)\\babstract\\b",
          "name": "meta.declaration.function.abstract.ada"
        }, {
          "include": "#declarative_item"
        }, {
          "include": "#subprogram_renaming_declaration"
        }, {
          "include": "#expression"
        }]
      }]
    },
    "function_specification": {
      "patterns": [{
        "include": "#function_body"
      }]
    },
    "goto_statement": {
      "begin": "(?i)\\bgoto\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.goto.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.goto.ada",
      "patterns": [{}]
    },
    "guard": {
      "begin": "(?i)\\bwhen\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "=>",
      "endCaptures": {
        "0": {
          "name": "keyword.other.ada"
        }
      },
      "patterns": [{
        "include": "#expression"
      }]
    },
    "handled_sequence_of_statements": {
      "patterns": [{
        "begin": "(?i)\\bexception\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "name": "meta.handler.exception.ada",
        "patterns": [{
          "begin": "(?i)\\bwhen\\b",
          "beginCaptures": {
            "0": {
              "name": "keyword.ada"
            }
          },
          "end": "=>",
          "endCaptures": {
            "0": {
              "name": "keyword.other.ada"
            }
          },
          "patterns": [{
            "captures": {
              "1": {
                "name": "variable.name.ada"
              },
              "2": {
                "name": "punctuation.ada"
              }
            },
            "match": "\\b((?:\\w|\\d|\\.|_)+)\\s*(:)"
          }, {
            "match": "\\|",
            "name": "punctuation.ada"
          }, {
            "match": "(?i)\\bothers\\b",
            "name": "keyword.ada"
          }, {
            "match": "(?:\\w|\\d|\\.|_)+",
            "name": "entity.name.exception.ada"
          }]
        }, {
          "include": "#statement"
        }]
      }, {
        "include": "#statement"
      }]
    },
    "highest_precedence_operator": {
      "match": "(?i)(\\*\\*|\\babs\\b|\\bnot\\b)",
      "name": "keyword.operator.highest-precedence.ada"
    },
    "if_statement": {
      "begin": "(?i)\\bif\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(if)\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "keyword.control.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.if.ada",
      "patterns": [{
        "begin": "(?i)\\belsif\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?i)(?:(?<!\\sand)\\s+(?=then))",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "begin": "(?i)\\belse\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?i)(?=end)",
        "patterns": [{
          "include": "#statement"
        }]
      }, {
        "begin": "(?i)(?<=if)\\b",
        "end": "(?i)(?:(?<!\\sand)\\s+(?=then))",
        "endCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "begin": "(?i)\\bthen\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?i)(?=(elsif|else|end))",
        "patterns": [{
          "include": "#statement"
        }]
      }]
    },
    "integer_type_definition": {
      "name": "meta.declaration.type.definition.integer.ada",
      "patterns": [{
        "include": "#signed_integer_type_definition"
      }, {
        "include": "#modular_type_definition"
      }]
    },
    "interface_type_definition": {
      "begin": "(?i)\\b(?:(limited|task|protected|synchronized)\\s+)?(interface)",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.ada"
        },
        "2": {
          "name": "storage.modifier.ada"
        }
      },
      "end": "(?i)(?=(with|;))",
      "name": "meta.declaration.type.definition.interface.ada",
      "patterns": [{
        "match": "(?i)\\band\\b",
        "name": "storage.modifier.ada"
      }, {
        "include": "#subtype_mark"
      }]
    },
    "keyword": {
      "patterns": [{
        "match": "(?i)\\b(abort|abs|accept|all|and|at|begin|body|declare|delay|end|entry|exception|function|generic|in|is|mod|new|not|null|of|or|others|out|package|pragma|procedure|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|then|type|use|when|with|xor)\\b",
        "name": "keyword.ada"
      }, {
        "match": "(?i)\\b(case|do|else|elsif|exit|for|goto|if|loop|raise|return|terminate|until|while)\\b",
        "name": "keyword.control.ada"
      }, {
        "match": "(?i)\\b(abstract|access|aliased|array|constant|delta|digits|interface|limited|protected|synchronized|tagged|task)\\b",
        "name": "storage.modifier.ada"
      }, {
        "match": "(?i)\\b(private|overriding)\\b",
        "name": "storage.visibility.ada"
      }, {
        "match": "<>",
        "name": "keyword.modifier.unknown.ada"
      }, {
        "match": "(\\+|-|\\*|/)",
        "name": "keyword.operator.arithmetic.ada"
      }, {
        "match": ":=",
        "name": "keyword.operator.assignment.ada"
      }, {
        "match": "(=|/=|<|>|<=|>=)",
        "name": "keyword.operator.logic.ada"
      }, {
        "match": "\\&",
        "name": "keyword.operator.concatenation.ada"
      }]
    },
    "known_discriminant_part": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "end": "\\)",
      "name": "meta.declaration.type.discriminant.ada",
      "patterns": [{
        "match": ";",
        "name": "punctuation.ada"
      }, {
        "include": "#discriminant_specification"
      }]
    },
    "label": {
      "captures": {
        "1": {
          "name": "punctuation.label.ada"
        },
        "2": {
          "name": "entity.name.label.ada"
        },
        "3": {
          "name": "punctuation.label.ada"
        }
      },
      "match": "(<<)?((?:\\w|\\d|_)+)\\s*(:[^=]|>>)",
      "name": "meta.label.ada"
    },
    "library_unit": {
      "name": "meta.library.unit.ada",
      "patterns": [{
        "include": "#package_body"
      }, {
        "include": "#package_specification"
      }, {
        "include": "#subprogram_body"
      }]
    },
    "loop_statement": {
      "patterns": [{
        "include": "#simple_loop_statement"
      }, {
        "include": "#while_loop_statement"
      }, {
        "include": "#for_loop_statement"
      }]
    },
    "modular_type_definition": {
      "begin": "(?i)\\b(mod)\\b",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.ada"
        }
      },
      "end": "(?i)(?=(with|;))",
      "patterns": [{
        "match": "<>",
        "name": "keyword.modifier.unknown.ada"
      }, {
        "include": "#expression"
      }]
    },
    "multiplying_operator": {
      "match": "(?i)(\\*|/|\\bmod\\b|\\brem\\b)",
      "name": "keyword.operator.multiplying.ada"
    },
    "null_statement": {
      "captures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "punctuation.ada"
        }
      },
      "match": "(?i)\\b(null)\\s*(;)",
      "name": "meta.statement.null.ada"
    },
    "object_declaration": {
      "begin": "(?i)\\b((?:\\w|\\d|_)+(?:\\s*,\\s*(?:\\w|\\d|_)+)*)\\s*(:)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "match": ",",
            "name": "punctuation.ada"
          }, {
            "match": "\\b(\\w|\\d|_)+\\b",
            "name": "variable.name.ada"
          }]
        },
        "2": {
          "name": "punctuation.ada"
        }
      },
      "end": "(;)",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.object.ada",
      "patterns": [{
        "begin": "(?<=:)",
        "end": "(?:(?=;)|(:=)|(\\brenames\\b))",
        "endCaptures": {
          "1": {
            "name": "keyword.operator.new.ada"
          },
          "2": {
            "name": "keyword.ada"
          }
        },
        "patterns": [{
          "match": "(?i)\\bconstant\\b",
          "name": "storage.modifier.ada"
        }, {
          "match": "(?i)\\baliased\\b",
          "name": "storage.visibility.ada"
        }, {
          "include": "#aspect_specification"
        }, {
          "include": "#subtype_mark"
        }]
      }, {
        "begin": "(?<=:=)",
        "end": "(?=;)",
        "patterns": [{
          "include": "#aspect_specification"
        }, {
          "include": "#expression"
        }]
      }, {
        "begin": "(?<=renames)",
        "end": "(?=;)",
        "patterns": [{
          "include": "#aspect_specification"
        }]
      }]
    },
    "operator": {
      "patterns": [{
        "include": "#highest_precedence_operator"
      }, {
        "include": "#multiplying_operator"
      }, {
        "include": "#adding_operator"
      }, {
        "include": "#relational_operator"
      }, {
        "include": "#logical_operator"
      }]
    },
    "package_body": {
      "begin": "(?i)\\b(package)\\s+(body)\\s+((?:\\w|\\d|\\.|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "keyword.ada"
        },
        "3": {
          "patterns": [{
            "include": "#package_mark"
          }]
        }
      },
      "end": "(?i)\\b(end)\\s+(\\3)\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "patterns": [{
            "include": "#package_mark"
          }]
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.package.body.ada",
      "patterns": [{
        "begin": "(?i)\\bbegin\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "include": "#handled_sequence_of_statements"
        }]
      }, {
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=(\\bbegin\\b|\\bend\\b))",
        "patterns": [{
          "match": "(?i)\\bprivate\\b",
          "name": "keyword.ada"
        }, {
          "include": "#declarative_item"
        }, {
          "include": "#comment"
        }]
      }, {
        "include": "#aspect_specification"
      }]
    },
    "package_declaration": {
      "patterns": [{
        "include": "#package_specification"
      }]
    },
    "package_mark": {
      "match": "\\b(\\w|\\d|\\.|_)+\\b",
      "name": "entity.name.package.ada"
    },
    "package_specification": {
      "begin": "(?i)\\b(package)\\s+((?:\\w|\\d|\\.|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "patterns": [{
            "include": "#package_mark"
          }]
        }
      },
      "end": "(?i)(?:\\b(end)\\s+(\\2)\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "patterns": [{
            "include": "#package_mark"
          }]
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.package.specification.ada",
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?=(end|;))",
        "patterns": [{
          "begin": "(?i)\\bnew\\b",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.new.ada"
            }
          },
          "end": "(?=;)",
          "name": "meta.declaration.package.generic.ada",
          "patterns": [{
            "include": "#package_mark"
          }, {
            "include": "#actual_parameter_part"
          }]
        }, {
          "match": "(?i)\\bprivate\\b",
          "name": "keyword.ada"
        }, {
          "include": "#basic_declarative_item"
        }, {
          "include": "#comment"
        }]
      }, {
        "include": "#aspect_specification"
      }]
    },
    "parameter_association": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "variable.parameter.ada"
          },
          "2": {
            "name": "keyword.other.ada"
          }
        },
        "match": "((?:\\w|\\d|_)+)\\s*(=>)"
      }, {
        "include": "#expression"
      }]
    },
    "parameter_profile": {
      "begin": "\\(",
      "captures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "end": "\\)",
      "patterns": [{
        "match": ";",
        "name": "punctuation.ada"
      }, {
        "include": "#parameter_specification"
      }]
    },
    "parameter_specification": {
      "patterns": [{
        "begin": ":(?!=)",
        "beginCaptures": {
          "0": {
            "name": "punctuation.ada"
          }
        },
        "end": "(?=[:;)])",
        "name": "meta.type.annotation.ada",
        "patterns": [{
          "match": "(?i)\\b(in|out)\\b",
          "name": "keyword.ada"
        }, {
          "include": "#subtype_mark"
        }]
      }, {
        "begin": ":=",
        "beginCaptures": {
          "0": {
            "name": "keyword.operator.new.ada"
          }
        },
        "end": "(?=[:;)])",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "match": "\\b(?:\\w|\\d|\\.|_)+\\b",
        "name": "variable.parameter.ada"
      }, {
        "include": "#comment"
      }]
    },
    "positional_array_aggregate": {
      "name": "meta.definition.array.aggregate.positional.ada",
      "patterns": [{
        "captures": {
          "1": {
            "name": "keyword.ada"
          },
          "2": {
            "name": "keyword.other.ada"
          },
          "3": {
            "patterns": [{
              "match": "<>",
              "name": "keyword.modifier.unknown.ada"
            }, {
              "include": "#expression"
            }]
          }
        },
        "match": "(?i)\\b(others)\\s*(=>)\\s*([^,\\)]+)"
      }, {
        "include": "#expression"
      }]
    },
    "pragma": {
      "begin": "(?i)\\b(pragma)\\s+((?:\\w|\\d|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "keyword.control.directive.ada"
        }
      },
      "end": "(;)",
      "endCaptures": {
        "1": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.pragma.ada",
      "patterns": [{
        "include": "#expression"
      }]
    },
    "preprocessor": {
      "name": "meta.preprocessor.ada",
      "patterns": [{
        "captures": {
          "1": {
            "name": "punctuation.definition.directive.ada"
          },
          "2": {
            "name": "keyword.control.directive.conditional.ada"
          },
          "3": {
            "patterns": [{
              "include": "#expression"
            }]
          }
        },
        "match": "^\\s*(#)(if|elsif)\\s+(.*)$"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.directive.ada"
          },
          "2": {
            "name": "keyword.control.directive.conditional"
          },
          "3": {
            "name": "punctuation.ada"
          }
        },
        "match": "^\\s*(#)(end if)(;)"
      }, {
        "captures": {
          "1": {
            "name": "punctuation.definition.directive.ada"
          },
          "2": {
            "name": "keyword.control.directive.conditional"
          }
        },
        "match": "^\\s*(#)(else)"
      }]
    },
    "procedure_body": {
      "begin": "(?i)\\b(overriding\\s+)?(procedure)\\s+((?:\\w|\\d|\\.|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "storage.visibility.ada"
        },
        "2": {
          "name": "keyword.ada"
        },
        "3": {
          "name": "entity.name.function.ada"
        }
      },
      "end": "(?i)(?:\\b(end)\\s+(\\3)\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.function.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.procedure.body.ada",
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=(with|begin|;))",
        "patterns": [{
          "begin": "(?i)\\bnew\\b",
          "beginCaptures": {
            "0": {
              "name": "keyword.operator.new.ada"
            }
          },
          "end": "(?=;)",
          "name": "meta.declaration.package.generic.ada",
          "patterns": [{
            "match": "((?:\\w|\\d|\\.|_)+)",
            "name": "entity.name.function.ada"
          }, {
            "include": "#actual_parameter_part"
          }]
        }, {
          "match": "(?i)\\b(null|abstract)\\b",
          "name": "storage.modifier.ada"
        }, {
          "include": "#declarative_item"
        }]
      }, {
        "begin": "(?i)\\bbegin\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=\\bend\\b)",
        "patterns": [{
          "include": "#handled_sequence_of_statements"
        }]
      }, {
        "include": "#subprogram_renaming_declaration"
      }, {
        "include": "#aspect_specification"
      }, {
        "include": "#parameter_profile"
      }, {
        "include": "#comment"
      }]
    },
    "procedure_call_statement": {
      "begin": "(?i)\\b((?:\\w|\\d|_|\\.)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "entity.name.function.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.call.ada",
      "patterns": [{
        "include": "#attribute"
      }, {
        "include": "#actual_parameter_part"
      }, {
        "include": "#comment"
      }]
    },
    "procedure_specification": {
      "patterns": [{
        "include": "#procedure_body"
      }]
    },
    "protected_body": {
      "begin": "(?i)\\b(protected)\\s+(body)\\s+((?:\\w|\\d|\\.|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.ada"
        },
        "2": {
          "name": "keyword.ada"
        },
        "3": {
          "name": "entity.name.body.ada"
        }
      },
      "end": "(?i)(?:\\b(end)\\s*(\\s\\3)\\s*)(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.body.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.procedure.body.ada",
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "include": "#protected_operation_item"
        }]
      }]
    },
    "protected_element_declaration": {
      "patterns": [{
        "include": "#subprogram_specification"
      }, {
        "include": "#aspect_clause"
      }, {
        "include": "#entry_declaration"
      }, {
        "include": "#component_declaration"
      }, {
        "include": "#pragma"
      }]
    },
    "protected_operation_item": {
      "patterns": [{
        "include": "#subprogram_specification"
      }, {
        "include": "#subprogram_body"
      }, {
        "include": "#aspect_clause"
      }, {
        "include": "#entry_body"
      }]
    },
    "raise_expression": {
      "begin": "(?i)\\braise\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "(?=;)",
      "name": "meta.expression.raise.ada",
      "patterns": [{
        "begin": "(?i)\\bwith\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?=(;|\\))",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "match": "\\b(\\w|\\d|_)+\\b",
        "name": "entity.name.exception.ada"
      }]
    },
    "raise_statement": {
      "begin": "(?i)\\braise\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.raise.ada",
      "patterns": [{
        "begin": "(?i)\\bwith\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?=;)",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "match": "\\b(\\w|\\d|\\.|_)+\\b",
        "name": "entity.name.exception.ada"
      }]
    },
    "range_constraint": {
      "begin": "(?i)\\brange\\b",
      "beginCaptures": {
        "0": {
          "name": "storage.modifier.ada"
        }
      },
      "end": "(?=(\\bwith\\b|;))",
      "patterns": [{
        "match": "\\.\\.",
        "name": "keyword.ada"
      }, {
        "match": "<>",
        "name": "keyword.modifier.unknown.ada"
      }, {
        "include": "#expression"
      }]
    },
    "real_type_definition": {
      "name": "meta.declaration.type.definition.real-type.ada",
      "patterns": [{
        "include": "#scalar_constraint"
      }]
    },
    "record_representation_clause": {
      "begin": "(?i)\\b(record)\\b",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(record)\\b",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "storage.modifier.ada"
        }
      },
      "name": "meta.aspect.clause.record.representation.ada",
      "patterns": [{
        "include": "#component_clause"
      }, {
        "include": "#comment"
      }]
    },
    "record_type_definition": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "storage.modifier.ada"
          },
          "2": {
            "name": "storage.modifier.ada"
          },
          "3": {
            "name": "storage.modifier.ada"
          },
          "4": {
            "name": "storage.modifier.ada"
          },
          "5": {
            "name": "storage.modifier.ada"
          }
        },
        "match": "(?i)\\b(?:(abstract)\\s+)?(?:(tagged)\\s+)?(?:(limited)\\s+)?(null)\\s+(record)\\b",
        "name": "meta.declaration.type.definition.record.null.ada",
        "patterns": [{
          "include": "#component_item"
        }]
      }, {
        "begin": "(?i)\\b(?:(abstract)\\s+)?(?:(tagged)\\s+)?(?:(limited)\\s+)?(record)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.ada"
          },
          "2": {
            "name": "storage.modifier.ada"
          },
          "3": {
            "name": "storage.modifier.ada"
          },
          "4": {
            "name": "storage.modifier.ada"
          }
        },
        "end": "(?i)\\b(end)\\s+(record)\\b",
        "endCaptures": {
          "1": {
            "name": "keyword.ada"
          },
          "2": {
            "name": "storage.modifier.ada"
          }
        },
        "name": "meta.declaration.type.definition.record.ada",
        "patterns": [{
          "include": "#component_item"
        }]
      }]
    },
    "regular_type_declaration": {
      "begin": "(?i)\\b(type)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.type.definition.regular.ada",
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=(with(?!\\s+(private))|;))",
        "patterns": [{
          "include": "#type_definition"
        }]
      }, {
        "begin": "(?i)\\b(?<=type)\\b",
        "end": "(?i)(?=(is|;))",
        "patterns": [{
          "include": "#known_discriminant_part"
        }, {
          "include": "#subtype_mark"
        }]
      }, {
        "include": "#aspect_specification"
      }]
    },
    "relational_operator": {
      "match": "(=|/=|<|<=|>|>=)",
      "name": "keyword.operator.relational.ada"
    },
    "requeue_statement": {
      "begin": "(?i)\\brequeue\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.requeue.ada",
      "patterns": [{
        "match": "(?i)\\b(with|abort)\\b",
        "name": "keyword.control.ada"
      }, {
        "match": "\\b(\\w|\\d|\\.|_)+\\b",
        "name": "entity.name.function.ada"
      }]
    },
    "result_profile": {
      "begin": "(?i)\\breturn\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.ada"
        }
      },
      "end": "(?=(is|with|renames|;))",
      "patterns": [{
        "include": "#subtype_mark"
      }]
    },
    "return_statement": {
      "begin": "(?i)\\breturn\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.return.ada",
      "patterns": [{
        "begin": "(?i)\\bdo\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?i)\\b(end)\\s+(return)\\s*(?=;)",
        "endCaptures": {
          "1": {
            "name": "keyword.control.ada"
          },
          "2": {
            "name": "keyword.control.ada"
          }
        },
        "patterns": [{
          "include": "#label"
        }, {
          "include": "#statement"
        }]
      }, {
        "captures": {
          "1": {
            "name": "variable.name.ada"
          },
          "2": {
            "name": "punctuation.ada"
          },
          "3": {
            "name": "entity.name.type.ada"
          }
        },
        "match": "\\b((?:\\w|\\d|_)+)\\s*(:)\\s*((?:\\w|\\d|\\.|_)+)\\b"
      }, {
        "match": ":=",
        "name": "keyword.operator.new.ada"
      }, {
        "include": "#expression"
      }]
    },
    "scalar_constraint": {
      "name": "meta.declaration.constraint.scalar.ada",
      "patterns": [{
        "begin": "(?i)\\b(digits|delta)\\b",
        "beginCaptures": {
          "1": {
            "name": "storage.modifier.ada"
          }
        },
        "end": "(?i)(?=\\brange\\b|\\bdigits\\b|\\bwith\\b|;)",
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "include": "#range_constraint"
      }, {
        "include": "#expression"
      }]
    },
    "select_alternative": {
      "patterns": [{
        "begin": "(?i)\\bterminate\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.ada"
          }
        }
      }, {
        "include": "#statement"
      }]
    },
    "select_statement": {
      "begin": "(?i)\\bselect\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(select)\\b",
      "endCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "keyword.control.ada"
        }
      },
      "name": "meta.statement.select.ada",
      "patterns": [{
        "begin": "(?i)\\b(?:(or)|(?<=select))\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?i)\\b(?=(or|else|end))\\b",
        "patterns": [{
          "include": "#guard"
        }, {
          "include": "#select_alternative"
        }]
      }, {
        "begin": "(?i)\\belse\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "include": "#statement"
        }]
      }]
    },
    "signed_integer_type_definition": {
      "patterns": [{
        "include": "#range_constraint"
      }]
    },
    "simple_loop_statement": {
      "begin": "(?i)\\bloop\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(loop)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "keyword.control.ada"
        },
        "3": {
          "name": "entity.name.label.ada"
        },
        "4": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.loop.ada",
      "patterns": [{
        "include": "#statement"
      }]
    },
    "single_protected_declaration": {
      "begin": "(?i)\\b(protected)\\s+((?:\\w|\\d|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.protected.ada"
        }
      },
      "end": "(?i)(?:\\b(end)\\s*(\\s\\2)?\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.protected.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.protected.ada",
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=(\\bend\\b|;))",
        "patterns": [{
          "begin": "(?i)\\bnew\\b",
          "captures": {
            "0": {
              "name": "keyword.ada"
            }
          },
          "end": "(?i)\\bwith\\b",
          "patterns": [{
            "match": "(?i)\\band\\b",
            "name": "keyword.ada"
          }, {
            "include": "#subtype_mark"
          }, {
            "include": "#comment"
          }]
        }, {
          "match": "(?i)\\bprivate\\b",
          "name": "keyword.ada"
        }, {
          "include": "#protected_element_declaration"
        }, {
          "include": "#comment"
        }]
      }, {
        "include": "#comment"
      }]
    },
    "single_task_declaration": {
      "begin": "(?i)\\b(task)\\s+((?:\\w|\\d|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.task.ada"
        }
      },
      "end": "(?i)(?:\\b(end)\\s*(\\s\\2)?\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.task.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "begin": "(?i)\\bnew\\b",
          "captures": {
            "0": {
              "name": "keyword.ada"
            }
          },
          "end": "(?i)\\bwith\\b",
          "patterns": [{
            "match": "(?i)\\band\\b",
            "name": "keyword.ada"
          }, {
            "include": "#subtype_mark"
          }, {
            "include": "#comment"
          }]
        }, {
          "match": "(?i)\\bprivate\\b",
          "name": "keyword.ada"
        }, {
          "include": "#task_item"
        }, {
          "include": "#comment"
        }]
      }, {
        "include": "#comment"
      }]
    },
    "statement": {
      "patterns": [{
        "begin": "(?i)\\bbegin\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(end)\\s*(;)",
        "endCaptures": {
          "1": {
            "name": "keyword.ada"
          },
          "2": {
            "name": "punctuation.ada"
          }
        },
        "patterns": [{
          "include": "#handled_sequence_of_statements"
        }]
      }, {
        "include": "#label"
      }, {
        "include": "#null_statement"
      }, {
        "include": "#return_statement"
      }, {
        "include": "#assignment_statement"
      }, {
        "include": "#exit_statement"
      }, {
        "include": "#goto_statement"
      }, {
        "include": "#requeue_statement"
      }, {
        "include": "#delay_statement"
      }, {
        "include": "#abort_statement"
      }, {
        "include": "#raise_statement"
      }, {
        "include": "#if_statement"
      }, {
        "include": "#case_statement"
      }, {
        "include": "#loop_statement"
      }, {
        "include": "#block_statement"
      }, {
        "include": "#select_statement"
      }, {
        "include": "#accept_statement"
      }, {
        "include": "#pragma"
      }, {
        "include": "#procedure_call_statement"
      }, {
        "include": "#comment"
      }]
    },
    "string_literal": {
      "captures": {
        "1": {
          "name": "punctuation.definition.string.ada"
        },
        "2": {
          "name": "punctuation.definition.string.ada"
        }
      },
      "match": '(").*?(")',
      "name": "string.quoted.double.ada"
    },
    "subprogram_body": {
      "name": "meta.declaration.subprogram.body.ada",
      "patterns": [{
        "include": "#procedure_body"
      }, {
        "include": "#function_body"
      }]
    },
    "subprogram_renaming_declaration": {
      "begin": "(?i)\\brenames\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.ada"
        }
      },
      "end": "(?=(with|;))",
      "patterns": [{
        "match": "(?:\\w|\\d|_|\\.)+",
        "name": "entity.name.function.ada"
      }]
    },
    "subprogram_specification": {
      "name": "meta.declaration.subprogram.specification.ada",
      "patterns": [{
        "include": "#procedure_specification"
      }, {
        "include": "#function_specification"
      }]
    },
    "subtype_declaration": {
      "begin": "(?i)\\bsubtype\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.subtype.ada",
      "patterns": [{
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?=;)",
        "patterns": [{
          "match": "(?i)\\b(not\\s+null)\\b",
          "name": "storage.modifier.ada"
        }, {
          "include": "#composite_constraint"
        }, {
          "include": "#aspect_specification"
        }, {
          "include": "#subtype_indication"
        }]
      }, {
        "begin": "(?i)(?<=subtype)",
        "end": "(?i)\\b(?=is)\\b",
        "patterns": [{
          "include": "#subtype_mark"
        }]
      }]
    },
    "subtype_indication": {
      "name": "meta.declaration.indication.subtype.ada",
      "patterns": [{
        "include": "#scalar_constraint"
      }, {
        "include": "#subtype_mark"
      }]
    },
    "subtype_mark": {
      "patterns": [{
        "match": "(?i)\\b(access|aliased|not\\s+null|constant)\\b",
        "name": "storage.visibility.ada"
      }, {
        "include": "#attribute"
      }, {
        "include": "#actual_parameter_part"
      }, {
        "begin": "(?i)\\b(procedure|function)\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?=(;|\\)))",
        "patterns": [{
          "include": "#parameter_profile"
        }, {
          "begin": "(?i)\\breturn\\b",
          "beginCaptures": {
            "0": {
              "name": "keyword.ada"
            }
          },
          "end": "(?=(;|\\)))",
          "patterns": [{
            "include": "#subtype_mark"
          }]
        }]
      }, {
        "captures": {
          "0": {
            "patterns": [{
              "match": "[_.]",
              "name": "punctuation.ada"
            }]
          }
        },
        "match": "\\b(?:\\w|\\d|\\.|_)+\\b",
        "name": "entity.name.type.ada"
      }, {
        "include": "#comment"
      }]
    },
    "task_body": {
      "begin": "(?i)\\b(task)\\s+(body)\\s+((\\w|\\d|\\.|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "keyword.ada"
        },
        "3": {
          "name": "entity.name.task.ada"
        }
      },
      "end": "(?i)(?:\\b(end)\\s*(?:\\s(\\3))?\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.task.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.task.body.ada",
      "patterns": [{
        "begin": "(?i)\\bbegin\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=end)",
        "patterns": [{
          "include": "#handled_sequence_of_statements"
        }]
      }, {
        "include": "#aspect_specification"
      }, {
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)(?=(with|begin))",
        "patterns": [{
          "include": "#declarative_item"
        }]
      }]
    },
    "task_item": {
      "patterns": [{
        "include": "#aspect_clause"
      }, {
        "include": "#entry_declaration"
      }]
    },
    "task_type_declaration": {
      "begin": "(?i)\\b(task)\\s+(type)\\s+((\\w|\\d|\\.|_)+)\\b",
      "beginCaptures": {
        "1": {
          "name": "storage.modifier.ada"
        },
        "2": {
          "name": "keyword.ada"
        },
        "3": {
          "name": "entity.name.task.ada"
        }
      },
      "end": "(?i)(?:\\b(end)\\s*(?:\\s(\\3))?\\s*)?(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "entity.name.task.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.type.task.ada",
      "patterns": [{
        "include": "#known_discriminant_part"
      }, {
        "begin": "(?i)\\bis\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "begin": "(?i)\\bnew\\b",
          "captures": {
            "0": {
              "name": "keyword.ada"
            }
          },
          "end": "(?i)\\bwith\\b",
          "patterns": [{
            "match": "(?i)\\band\\b",
            "name": "keyword.ada"
          }, {
            "include": "#subtype_mark"
          }, {
            "include": "#comment"
          }]
        }, {
          "match": "(?i)\\bprivate\\b",
          "name": "keyword.ada"
        }, {
          "include": "#task_item"
        }, {
          "include": "#comment"
        }]
      }, {
        "include": "#comment"
      }]
    },
    "type_declaration": {
      "name": "meta.declaration.type.ada",
      "patterns": [{
        "include": "#full_type_declaration"
      }]
    },
    "type_definition": {
      "name": "meta.declaration.type.definition.ada",
      "patterns": [{
        "include": "#enumeration_type_definition"
      }, {
        "include": "#integer_type_definition"
      }, {
        "include": "#real_type_definition"
      }, {
        "include": "#array_type_definition"
      }, {
        "include": "#record_type_definition"
      }, {
        "include": "#access_type_definition"
      }, {
        "include": "#interface_type_definition"
      }, {
        "include": "#derived_type_definition"
      }]
    },
    "use_clause": {
      "name": "meta.context.use.ada",
      "patterns": [{
        "include": "#use_type_clause"
      }, {
        "include": "#use_package_clause"
      }]
    },
    "use_package_clause": {
      "begin": "(?i)\\buse\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.other.using.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.context.use.package.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "include": "#package_mark"
      }]
    },
    "use_type_clause": {
      "begin": "(?i)\\b(use)\\s+(?:(all)\\s+)?(type)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.using.ada"
        },
        "2": {
          "name": "keyword.modifier.ada"
        },
        "3": {
          "name": "keyword.modifier.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.context.use.type.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "include": "#subtype_mark"
      }]
    },
    "value": {
      "patterns": [{
        "include": "#based_literal"
      }, {
        "include": "#decimal_literal"
      }, {
        "include": "#character_literal"
      }, {
        "include": "#string_literal"
      }]
    },
    "variant_part": {
      "begin": "(?i)\\bcase\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(case);",
      "endCaptures": {
        "1": {
          "name": "keyword.ada"
        },
        "2": {
          "name": "keyword.ada"
        },
        "3": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.declaration.variant.ada",
      "patterns": [{
        "begin": "(?i)\\b(?<=case)\\b",
        "end": "(?i)\\bis\\b",
        "endCaptures": {
          "0": {
            "name": "keyword.ada"
          }
        },
        "patterns": [{
          "match": "(?:\\w|\\d|_)+",
          "name": "variable.name.ada"
        }, {
          "include": "#comment"
        }]
      }, {
        "begin": "(?i)\\b(?<=is)\\b",
        "end": "(?i)\\b(?=end)\\b",
        "patterns": [{
          "begin": "(?i)\\bwhen\\b",
          "beginCaptures": {
            "0": {
              "name": "keyword.ada"
            }
          },
          "end": "=>",
          "endCaptures": {
            "0": {
              "name": "keyword.other.ada"
            }
          },
          "patterns": [{
            "match": "\\|",
            "name": "punctuation.ada"
          }, {
            "match": "(?i)\\bothers\\b",
            "name": "keyword.ada"
          }, {
            "include": "#expression"
          }]
        }, {
          "include": "#component_item"
        }]
      }]
    },
    "while_loop_statement": {
      "begin": "(?i)\\bwhile\\b",
      "beginCaptures": {
        "0": {
          "name": "keyword.control.ada"
        }
      },
      "end": "(?i)\\b(end)\\s+(loop)(\\s+(?:\\w|\\d|_)+)?\\s*(;)",
      "endCaptures": {
        "1": {
          "name": "keyword.control.ada"
        },
        "2": {
          "name": "keyword.control.ada"
        },
        "3": {
          "name": "entity.name.label.ada"
        },
        "4": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.statement.loop.while.ada",
      "patterns": [{
        "begin": "(?i)(?<=while)\\b",
        "end": "(?i)\\bloop\\b",
        "endCaptures": {
          "0": {
            "name": "keyword.control.ada"
          }
        },
        "patterns": [{
          "include": "#expression"
        }]
      }, {
        "include": "#statement"
      }]
    },
    "with_clause": {
      "begin": "(?i)\\b(?:(limited)\\s+)?(?:(private)\\s+)?(with)\\b",
      "beginCaptures": {
        "1": {
          "name": "keyword.modifier.ada"
        },
        "2": {
          "name": "storage.visibility.ada"
        },
        "3": {
          "name": "keyword.other.using.ada"
        }
      },
      "end": ";",
      "endCaptures": {
        "0": {
          "name": "punctuation.ada"
        }
      },
      "name": "meta.context.with.ada",
      "patterns": [{
        "match": ",",
        "name": "punctuation.ada"
      }, {
        "include": "#package_mark"
      }]
    }
  },
  "scopeName": "source.ada"
});
var ada = [lang];
export {
  ada as default
};
//# sourceMappingURL=ada-OWNIQKJG.js.map
