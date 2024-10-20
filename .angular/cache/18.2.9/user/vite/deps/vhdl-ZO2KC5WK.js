import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/vhdl.mjs
var lang = Object.freeze({
  "displayName": "VHDL",
  "fileTypes": ["vhd", "vhdl", "vho", "vht"],
  "name": "vhdl",
  "patterns": [{
    "include": "#block_processing"
  }, {
    "include": "#cleanup"
  }],
  "repository": {
    "architecture_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n\n\\b((?i:architecture))\\s+\n\n\n(([a-zA-z][a-zA-z0-9_]*)|(.+))(?=\\s)\\s+\n\n\n((?i:of))\\s+\n\n\n(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))(?=\\s*(?i:is))\\b\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.type.architecture.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "5": {
            "name": "keyword.language.vhdl"
          },
          "7": {
            "name": "entity.name.type.entity.reference.vhdl"
          },
          "8": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end))\n\n\n(\\s+((?i:architecture)))?\n\n\n(\\s+((\\3)|(.+?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "6": {
            "name": "entity.name.type.architecture.end.vhdl"
          },
          "7": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "name": "support.block.architecture",
        "patterns": [{
          "include": "#block_pattern"
        }, {
          "include": "#function_definition_pattern"
        }, {
          "include": "#procedure_definition_pattern"
        }, {
          "include": "#component_pattern"
        }, {
          "include": "#if_pattern"
        }, {
          "include": "#process_pattern"
        }, {
          "include": "#type_pattern"
        }, {
          "include": "#record_pattern"
        }, {
          "include": "#for_pattern"
        }, {
          "include": "#entity_instantiation_pattern"
        }, {
          "include": "#component_instantiation_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "attribute_list": {
      "patterns": [{
        "begin": "\\'\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_list"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "block_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n\n(\n([a-zA-Z][a-zA-Z0-9_]*)\n\n\n\\s*(:)\\s*\n)?\n\n(\\s*(?i:block))\n",
        "beginCaptures": {
          "2": {
            "name": "meta.block.block.name"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n((?i:end\\s+block))\n\n\n(\\s+((\\2)|(.+?)))?\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "2": {
            "name": "meta.block.block.end"
          },
          "5": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "name": "meta.block.block",
        "patterns": [{
          "include": "#control_patterns"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "block_processing": {
      "patterns": [{
        "include": "#package_pattern"
      }, {
        "include": "#package_body_pattern"
      }, {
        "include": "#entity_pattern"
      }, {
        "include": "#architecture_pattern"
      }]
    },
    "case_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n\n\n(\n(\n([a-zA-Z][a-zA-Z0-9_]*)\n|(.+?)\n)\n\\s*:\\s*\n)?\n\n\n\\b((?i:case))\\b\n",
        "beginCaptures": {
          "3": {
            "name": "entity.name.tag.case.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "5": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end))\\s*\n\n\n(\\s+(((?i:case))|(.*?)))\n\n\n(\\s+((\\2)|(.*?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          },
          "5": {
            "name": "invalid.illegal.case.required.vhdl"
          },
          "8": {
            "name": "entity.name.tag.case.end.vhdl"
          },
          "9": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#control_patterns"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "cleanup": {
      "patterns": [{
        "include": "#comments"
      }, {
        "include": "#constants_numeric"
      }, {
        "include": "#strings"
      }, {
        "include": "#attribute_list"
      }, {
        "include": "#syntax_highlighting"
      }]
    },
    "comments": {
      "patterns": [{
        "match": "--.*$\\n?",
        "name": "comment.line.double-dash.vhdl"
      }]
    },
    "component_instantiation_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n\n\n([a-zA-Z][a-zA-Z0-9_]*)\n\n\n\\s*(:)\\s*\n\n\n([a-zA-Z][a-zA-Z0-9_]*)\\b\n\n\n\n(?=\\s*($|generic|port))\n",
        "beginCaptures": {
          "1": {
            "name": "entity.name.section.component_instantiation.vhdl"
          },
          "2": {
            "name": "punctuation.vhdl"
          },
          "3": {
            "name": "entity.name.tag.component.reference.vhdl"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_list"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "component_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n\n\n\\b((?i:component))\\s+\n\n\n(([a-zA-Z_][a-zA-Z0-9_]*)\\s*|(.+?))(?=\\b(?i:is|port)\\b|$|--)\n\n\n(\\b((?i:is\\b)))?\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.type.component.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "6": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end))\\s+\n\n\n(((?i:component\\b))|(.+?))(?=\\s*|;)\n\n\n(\\s+((\\3)|(.+?)))?(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "invalid.illegal.component.keyword.required.vhdl"
          },
          "7": {
            "name": "entity.name.type.component.end.vhdl"
          },
          "8": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#generic_list_pattern"
        }, {
          "include": "#port_list_pattern"
        }, {
          "include": "#comments"
        }]
      }]
    },
    "constants_numeric": {
      "patterns": [{
        "match": "\\b([+\\-]?[\\d_]+\\.[\\d_]+([eE][+\\-]?[\\d_]+)?)\\b",
        "name": "constant.numeric.floating_point.vhdl"
      }, {
        "match": "\\b\\d+#[\\h_]+#\\b",
        "name": "constant.numeric.base_pound_number_pound.vhdl"
      }, {
        "match": "\\b[\\d_]+([eE][\\d_]+)?\\b",
        "name": "constant.numeric.integer.vhdl"
      }, {
        "match": '[xX]"[0-9a-fA-F_uUxXzZwWlLhH\\-]+"',
        "name": "constant.numeric.quoted.double.string.hex.vhdl"
      }, {
        "match": '[oO]"[0-7_uUxXzZwWlLhH\\-]+"',
        "name": "constant.numeric.quoted.double.string.octal.vhdl"
      }, {
        "match": '[bB]?"[01_uUxXzZwWlLhH\\-]+"',
        "name": "constant.numeric.quoted.double.string.binary.vhdl"
      }, {
        "captures": {
          "1": {
            "name": "invalid.illegal.quoted.double.string.vhdl"
          }
        },
        "match": '([bBoOxX]".+?")',
        "name": "constant.numeric.quoted.double.string.illegal.vhdl"
      }, {
        "match": "'[01uUxXzZwWlLhH\\-]'",
        "name": "constant.numeric.quoted.single.std_logic"
      }]
    },
    "control_patterns": {
      "patterns": [{
        "include": "#case_pattern"
      }, {
        "include": "#if_pattern"
      }, {
        "include": "#for_pattern"
      }, {
        "include": "#while_pattern"
      }]
    },
    "entity_instantiation_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n\n\n([a-zA-Z][a-zA-Z0-9_]*)\n\n\n\\s*(:)\\s*\n\n\n(((?i:use))\\s+)?\n\n\n((?i:entity))\\s+\n\n\n(\n(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n(\\.)\n)?\n\n\n(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\n\n(?=\\s*(\\(|$|(?i:port|generic)))\n\n\n(\n\n\\s*(\\()\\s*\n\n\n(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))(?=\\s*\\))\n\n\n\\s*(\\))\n)?\n",
        "beginCaptures": {
          "1": {
            "name": "entity.name.section.entity_instantiation.vhdl"
          },
          "2": {
            "name": "punctuation.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          },
          "5": {
            "name": "keyword.language.vhdl"
          },
          "8": {
            "name": "entity.name.tag.library.reference.vhdl"
          },
          "9": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "10": {
            "name": "punctuation.vhdl"
          },
          "12": {
            "name": "entity.name.tag.entity.reference.vhdl"
          },
          "13": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "16": {
            "name": "punctuation.vhdl"
          },
          "18": {
            "name": "entity.name.tag.architecture.reference.vhdl"
          },
          "19": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "21": {
            "name": "punctuation.vhdl"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_list"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "entity_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n\n\n((?i:entity\\b))\\s+\n\n\n(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))(?=\\s)\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.type.entity.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          }
        },
        "end": "(?x)\n\n\n\\b((?i:end\\b))\n\n\n(\\s+((?i:entity)))?\n\n\n(\\s+((\\3)|(.+?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "6": {
            "name": "entity.name.type.entity.end.vhdl"
          },
          "7": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#comments"
        }, {
          "include": "#generic_list_pattern"
        }, {
          "include": "#port_list_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "for_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n(\n\n([a-zA-Z][a-zA-Z0-9_]*)\n\n\n\\s*(:)\\s*\n)?\n\n\n(?!(?i:wait\\s*))\n\n\n\\b((?i:for))\\b\n\n\n(?!\\s*(?i:all))\n\n",
        "beginCaptures": {
          "2": {
            "name": "entity.name.tag.for.generate.begin.vhdl"
          },
          "3": {
            "name": "punctuation.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end))\\s+\n(\n\n((?i:generate|loop))\n\n\n|(\\S+)\n)\\b\n\n\n(\\s+((\\2)|(.+?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "invalid.illegal.loop.or.generate.required.vhdl"
          },
          "7": {
            "name": "entity.name.tag.for.generate.end.vhdl"
          },
          "8": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#control_patterns"
        }, {
          "include": "#entity_instantiation_pattern"
        }, {
          "include": "#component_pattern"
        }, {
          "include": "#component_instantiation_pattern"
        }, {
          "include": "#process_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "function_definition_pattern": {
      "patterns": [{
        "begin": '(?x)\n\n^\\s*\n\n\n((?i:impure)?\\s*(?i:function))\\s+\n\n(\n\n([a-zA-Z][a-zA-Z\\d_]*)\n\n|("\\S+")\n\n|(\\\\.+\\\\)\n\n|(.+?)\n)\n\n\n(?=\\s*\n(\n\\(\n|(?i:\\breturn\\b)\n)\n)\n',
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.function.function.begin.vhdl"
          },
          "4": {
            "name": "entity.name.function.function.begin.vhdl"
          },
          "5": {
            "name": "entity.name.function.function.begin.vhdl"
          },
          "6": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          }
        },
        "end": "(?x)\n\n^\\s*\n\n\n((?i:end))\n\n\n(\\s+((?i:function)))?\n\n\n(\\s+((\\3|\\4|\\5)|(.+?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "6": {
            "name": "entity.name.function.function.end.vhdl"
          },
          "7": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#control_patterns"
        }, {
          "include": "#parenthetical_list"
        }, {
          "include": "#type_pattern"
        }, {
          "include": "#record_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "function_prototype_pattern": {
      "patterns": [{
        "begin": '(?x)\n\n^\\s*\n\n\n((?i:impure)?\\s*(?i:function))\\s+\n\n(\n\n([a-zA-Z][a-zA-Z\\d_]*)\n\n|("\\S+")\n\n|(\\\\.+\\\\)\n\n|(.+?)\n)\n\n\n(?=\\s*\n(\n\\(\n|(?i:\\breturn\\b)\n)\n)\n',
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.function.function.prototype.vhdl"
          },
          "4": {
            "name": "entity.name.function.function.prototype.vhdl"
          },
          "5": {
            "name": "entity.name.function.function.prototype.vhdl"
          },
          "6": {
            "name": "invalid.illegal.function.name.vhdl"
          }
        },
        "end": "(?<=;)",
        "patterns": [{
          "begin": "\\b(?i:return)(?=\\s+[^;]+\\s*;)",
          "beginCaptures": {
            "0": {
              "name": "keyword.language.vhdl"
            }
          },
          "end": "\\;",
          "endCaptures": {
            "0": {
              "name": "punctuation.terminator.function_prototype.vhdl"
            }
          },
          "patterns": [{
            "include": "#parenthetical_list"
          }, {
            "include": "#cleanup"
          }]
        }, {
          "include": "#parenthetical_list"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "generic_list_pattern": {
      "patterns": [{
        "begin": "\\b(?i:generic)\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_list"
        }]
      }]
    },
    "if_pattern": {
      "patterns": [{
        "begin": "(?x)\n(\n\n([a-zA-Z][a-zA-Z0-9_]*)\n\n\n\\s*(:)\\s*\n)?\n\n\n\\b((?i:if))\\b\n",
        "beginCaptures": {
          "2": {
            "name": "entity.name.tag.if.generate.begin.vhdl"
          },
          "3": {
            "name": "punctuation.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end))\\s+\n\n(\n(\n\n((?i:generate|if))\n\n\n|(\\S+)\n)\\b\n(\n\\s+\n(\n\n(\\2)\n\n\n|(.+?)\n)\n)?\n)?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          },
          "5": {
            "name": "invalid.illegal.if.or.generate.required.vhdl"
          },
          "8": {
            "name": "entity.name.tag.if.generate.end.vhdl"
          },
          "9": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#control_patterns"
        }, {
          "include": "#process_pattern"
        }, {
          "include": "#entity_instantiation_pattern"
        }, {
          "include": "#component_pattern"
        }, {
          "include": "#component_instantiation_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "keywords": {
      "patterns": [{
        "match": "'(?i:active|ascending|base|delayed|driving|driving_value|event|high|image|instance|instance_name|last|last_value|left|leftof|length|low|path|path_name|pos|pred|quiet|range|reverse|reverse_range|right|rightof|simple|simple_name|stable|succ|transaction|val|value)\\b",
        "name": "keyword.attributes.vhdl"
      }, {
        "match": "\\b(?i:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|context|deallocate|disconnect|downto|else|elsif|end|entity|exit|file|for|force|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|protected|pure|range|record|register|reject|release|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)\\b",
        "name": "keyword.language.vhdl"
      }, {
        "match": "\\b(?i:std|ieee|work|standard|textio|std_logic_1164|std_logic_arith|std_logic_misc|std_logic_signed|std_logic_textio|std_logic_unsigned|numeric_bit|numeric_std|math_complex|math_real|vital_primitives|vital_timing)\\b",
        "name": "standard.library.language.vhdl"
      }, {
        "match": "(\\+|\\-|<=|=|=>|:=|>=|>|<|/|\\||&|(\\*{1,2}))",
        "name": "keyword.operator.vhdl"
      }]
    },
    "package_body_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n\\b((?i:package))\\s+\n\n\n((?i:body))\\s+\n\n\n(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n\n((?i:is))\\b\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "2": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "entity.name.section.package_body.begin.vhdl"
          },
          "5": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "6": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end\\b))\n\n\n(\\s+((?i:package))\\s+((?i:body)))?\n\n\n(\\s+((\\4)|(.+?)))?(?=\\s*;)",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          },
          "7": {
            "name": "entity.name.section.package_body.end.vhdl"
          },
          "8": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#protected_body_pattern"
        }, {
          "include": "#function_definition_pattern"
        }, {
          "include": "#procedure_definition_pattern"
        }, {
          "include": "#type_pattern"
        }, {
          "include": "#subtype_pattern"
        }, {
          "include": "#record_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "package_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n\\b((?i:package))\\s+\n\n\n(?!(?i:body))\n\n\n(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n\n((?i:is))\\b\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.section.package.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "5": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end\\b))\n\n\n(\\s+((?i:package)))?\n\n\n(\\s+((\\2)|(.+?)))?(?=\\s*;)",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "6": {
            "name": "entity.name.section.package.end.vhdl"
          },
          "7": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#protected_pattern"
        }, {
          "include": "#function_prototype_pattern"
        }, {
          "include": "#procedure_prototype_pattern"
        }, {
          "include": "#type_pattern"
        }, {
          "include": "#subtype_pattern"
        }, {
          "include": "#record_pattern"
        }, {
          "include": "#component_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "parenthetical_list": {
      "patterns": [{
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "end": "(?<=\\))",
        "patterns": [{
          "begin": `(?=['"a-zA-Z0-9])`,
          "end": "(;|\\)|,)",
          "endCaptures": {
            "0": {
              "name": "punctuation.vhdl"
            }
          },
          "name": "source.vhdl",
          "patterns": [{
            "include": "#comments"
          }, {
            "include": "#parenthetical_pair"
          }, {
            "include": "#cleanup"
          }]
        }, {
          "match": "\\)",
          "name": "invalid.illegal.unexpected.parenthesis.vhdl"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "parenthetical_pair": {
      "patterns": [{
        "begin": "\\(",
        "beginCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "end": "\\)",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_pair"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "port_list_pattern": {
      "patterns": [{
        "begin": "\\b(?i:port)\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?<=\\))\\s*;",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_list"
        }]
      }]
    },
    "procedure_definition_pattern": {
      "patterns": [{
        "begin": '(?x)\n\n^\\s*\n\n\n((?i:procedure))\\s+\n\n(\n\n([a-zA-Z][a-zA-Z\\d_]*)\n\n|("\\S+")\n\n|(.+?)\n)\n\n\n(?=\\s*(\\(|(?i:is)))\n',
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.function.procedure.begin.vhdl"
          },
          "4": {
            "name": "entity.name.function.procedure.begin.vhdl"
          },
          "5": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          }
        },
        "end": "(?x)\n\n^\\s*\n\n\n((?i:end))\n\n\n(\\s+((?i:procedure)))?\n\n\n(\\s+((\\3|\\4)|(.+?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "6": {
            "name": "entity.name.function.procedure.end.vhdl"
          },
          "7": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_list"
        }, {
          "include": "#control_patterns"
        }, {
          "include": "#type_pattern"
        }, {
          "include": "#record_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "procedure_prototype_pattern": {
      "patterns": [{
        "begin": "(?x)\n\\b((?i:procedure))\\s+\n(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n(?=\\s*(\\(|;))\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.function.procedure.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctual.vhdl"
          }
        },
        "patterns": [{
          "include": "#parenthetical_list"
        }]
      }]
    },
    "process_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n\n(\n\n([a-zA-Z][a-zA-Z0-9_]*)\n\n\n\\s*(:)\\s*\n)?\n\n\n(\n(?:postponed\\s+)?\n(?i:process\\b)\n)\n",
        "beginCaptures": {
          "2": {
            "name": "entity.name.section.process.begin.vhdl"
          },
          "3": {
            "name": "punctuation.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n((?i:end))\n\n\n(\\s+(\n(?:postponed\\s+)?\n(?i:process)\n))\n\n\n(\\s+((\\2)|(.+?)))?\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "6": {
            "name": "entity.name.section.process.end.vhdl"
          },
          "7": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#control_patterns"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "protected_body_pattern": {
      "patterns": [{
        "begin": "(?x)\n\\b((?i:type))\\s+\n\n\n(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n\\b((?i:is\\s+protected\\s+body))\\s+\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.section.protected_body.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "5": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\\b((?i:end\\s+protected\\s+body))\n\n\n(\\s+((\\3)|(.+?)))?\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "entity.name.section.protected_body.end.vhdl"
          },
          "5": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#function_definition_pattern"
        }, {
          "include": "#procedure_definition_pattern"
        }, {
          "include": "#type_pattern"
        }, {
          "include": "#subtype_pattern"
        }, {
          "include": "#record_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "protected_pattern": {
      "patterns": [{
        "begin": "(?x)\n\\b((?i:type))\\s+\n\n\n(([a-zA-Z][a-zA-Z\\d_]*)|(.+?))\\s+\n\n\\b((?i:is\\s+protected))\\s+\n\n\n(?!(?i:body))\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdls"
          },
          "3": {
            "name": "entity.name.section.protected.begin.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "5": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\\b((?i:end\\s+protected))\n\n\n(\\s+((\\3)|(.+?)))?\n\n\n(?!(?i:body))\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "entity.name.section.protected.end.vhdl"
          },
          "5": {
            "name": "invalid.illegal.mismatched.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#function_prototype_pattern"
        }, {
          "include": "#procedure_prototype_pattern"
        }, {
          "include": "#type_pattern"
        }, {
          "include": "#subtype_pattern"
        }, {
          "include": "#record_pattern"
        }, {
          "include": "#component_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "punctuation": {
      "patterns": [{
        "match": "(\\.|,|:|;|\\(|\\))",
        "name": "punctuation.vhdl"
      }]
    },
    "record_pattern": {
      "patterns": [{
        "begin": "\\b(?i:record)\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end))\n\n\n\\s+((?i:record))\n\n\n(\\s+(([a-zA-Z][a-zA-Z\\d_]*)|(.*?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "2": {
            "name": "keyword.language.vhdl"
          },
          "5": {
            "name": "entity.name.type.record.vhdl"
          },
          "6": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          }
        },
        "patterns": [{
          "include": "#cleanup"
        }]
      }, {
        "include": "#cleanup"
      }]
    },
    "strings": {
      "patterns": [{
        "match": "'.'",
        "name": "string.quoted.single.vhdl"
      }, {
        "begin": '"',
        "end": '"',
        "name": "string.quoted.double.vhdl",
        "patterns": [{
          "match": "\\\\.",
          "name": "constant.character.escape.vhdl"
        }]
      }, {
        "begin": "\\\\",
        "end": "\\\\",
        "name": "string.other.backslash.vhdl"
      }]
    },
    "subtype_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n\\b((?i:subtype))\\s+\n\n\n(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\\s+\n\n\n((?i:is))\\b\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.type.subtype.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "5": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#cleanup"
        }]
      }]
    },
    "support_constants": {
      "patterns": [{
        "match": "\\b(?i:math_1_over_e|math_1_over_pi|math_1_over_sqrt_2|math_2_pi|math_3_pi_over_2|math_deg_to_rad|math_e|math_log10_of_e|math_log2_of_e|math_log_of_10|math_log_of_2|math_pi|math_pi_over_2|math_pi_over_3|math_pi_over_4|math_rad_to_deg|math_sqrt_2|math_sqrt_pi)\\b",
        "name": "support.constant.ieee.math_real.vhdl"
      }, {
        "match": "\\b(?i:math_cbase_1|math_cbase_j|math_czero|positive_real|principal_value)\\b",
        "name": "support.constant.ieee.math_complex.vhdl"
      }, {
        "match": "\\b(?i:true|false)\\b",
        "name": "support.constant.std.standard.vhdl"
      }]
    },
    "support_functions": {
      "patterns": [{
        "match": "\\b(?i:finish|stop|resolution_limit)\\b",
        "name": "support.function.std.env.vhdl"
      }, {
        "match": "\\b(?i:readline|read|writeline|write|endfile|endline)\\b",
        "name": "support.function.std.textio.vhdl"
      }, {
        "match": "\\b(?i:rising_edge|falling_edge|to_bit|to_bitvector|to_stdulogic|to_stdlogicvector|to_stdulogicvector|is_x)\\b",
        "name": "support.function.ieee.std_logic_1164.vhdl"
      }, {
        "match": "\\b(?i:shift_left|shift_right|rotate_left|rotate_right|resize|to_integer|to_unsigned|to_signed)\\b",
        "name": "support.function.ieee.numeric_std.vhdl"
      }, {
        "match": "\\b(?i:arccos(h?)|arcsin(h?)|arctan|arctanh|cbrt|ceil|cos|cosh|exp|floor|log10|log2|log|realmax|realmin|round|sign|sin|sinh|sqrt|tan|tanh|trunc)\\b",
        "name": "support.function.ieee.math_real.vhdl"
      }, {
        "match": "\\b(?i:arg|cmplx|complex_to_polar|conj|get_principal_value|polar_to_complex)\\b",
        "name": "support.function.ieee.math_complex.vhdl"
      }]
    },
    "support_types": {
      "patterns": [{
        "match": "\\b(?i:boolean|bit|character|severity_level|integer|real|time|delay_length|now|natural|positive|string|bit_vector|file_open_kind|file_open_status|fs|ps|ns|us|ms|sec|min|hr|severity_level|note|warning|error|failure)\\b",
        "name": "support.type.std.standard.vhdl"
      }, {
        "match": "\\b(?i:line|text|side|width|input|output)\\b",
        "name": "support.type.std.textio.vhdl"
      }, {
        "match": "\\b(?i:std_logic|std_ulogic|std_logic_vector|std_ulogic_vector)\\b",
        "name": "support.type.ieee.std_logic_1164.vhdl"
      }, {
        "match": "\\b(?i:signed|unsigned)\\b",
        "name": "support.type.ieee.numeric_std.vhdl"
      }, {
        "match": "\\b(?i:complex|complex_polar)\\b",
        "name": "support.type.ieee.math_complex.vhdl"
      }]
    },
    "syntax_highlighting": {
      "patterns": [{
        "include": "#keywords"
      }, {
        "include": "#punctuation"
      }, {
        "include": "#support_constants"
      }, {
        "include": "#support_types"
      }, {
        "include": "#support_functions"
      }]
    },
    "type_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n\\b((?i:type))\\s+\n\n\n(([a-zA-Z][a-zA-Z0-9_]*)|(.+?))\n\n(\n\n(?=\\s*;)\n\n\n|(\\s+((?i:is)))\n)\\b\n",
        "beginCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "entity.name.type.type.vhdl"
          },
          "4": {
            "name": "invalid.illegal.invalid.identifier.vhdl"
          },
          "7": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": ";",
        "endCaptures": {
          "0": {
            "name": "punctuation.vhdl"
          }
        },
        "patterns": [{
          "include": "#record_pattern"
        }, {
          "include": "#cleanup"
        }]
      }]
    },
    "while_pattern": {
      "patterns": [{
        "begin": "(?x)\n\n^\\s*\n(\n\n([a-zA-Z][a-zA-Z0-9_]*)\n\n\n\\s*(:)\\s*\n)?\n\n\n\\b((?i:while))\\b\n",
        "beginCaptures": {
          "2": {
            "name": ""
          },
          "3": {
            "name": "punctuation.vhdl"
          },
          "4": {
            "name": "keyword.language.vhdl"
          }
        },
        "end": "(?x)\n\n\\b((?i:end))\\s+\n(\n\n((?i:loop))\n\n\n|(\\S+)\n)\\b\n\n\n(\\s+((\\2)|(.+?)))?\n\n\n(?=\\s*;)\n",
        "endCaptures": {
          "1": {
            "name": "keyword.language.vhdl"
          },
          "3": {
            "name": "keyword.language.vhdl"
          },
          "4": {
            "name": "invalid.illegal.loop.keyword.required.vhdl"
          },
          "7": {
            "name": "entity.name.tag.while.loop.vhdl"
          },
          "8": {
            "name": "invalid.illegal.mismatched.identifier"
          }
        },
        "patterns": [{
          "include": "#control_patterns"
        }, {
          "include": "#cleanup"
        }]
      }]
    }
  },
  "scopeName": "source.vhdl"
});
var vhdl = [lang];
export {
  vhdl as default
};
//# sourceMappingURL=vhdl-ZO2KC5WK.js.map
