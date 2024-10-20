// node_modules/shiki/dist/langs/gnuplot.mjs
var lang = Object.freeze({
  "displayName": "Gnuplot",
  "fileTypes": ["gp", "plt", "plot", "gnuplot"],
  "name": "gnuplot",
  "patterns": [{
    "match": "(\\\\(?!\\n).*)",
    "name": "invalid.illegal.backslash.gnuplot"
  }, {
    "match": "(;)",
    "name": "punctuation.separator.statement.gnuplot"
  }, {
    "include": "#LineComment"
  }, {
    "include": "#DataBlock"
  }, {
    "include": "#MacroExpansion"
  }, {
    "include": "#VariableDecl"
  }, {
    "include": "#ArrayDecl"
  }, {
    "include": "#FunctionDecl"
  }, {
    "include": "#ShellCommand"
  }, {
    "include": "#Command"
  }],
  "repository": {
    "ArrayDecl": {
      "begin": "\\b(?x:\n(array)\\s+\n([A-Za-z_]\\w*)?\n\n\n)",
      "beginCaptures": {
        "1": {
          "name": "support.type.array.gnuplot"
        },
        "2": {
          "name": "entity.name.variable.gnuplot",
          "patterns": [{
            "include": "#InvalidVariableDecl"
          }, {
            "include": "#BuiltinVariable"
          }]
        }
      },
      "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
      "name": "meta.variable.gnuplot",
      "patterns": [{
        "include": "#Expression"
      }]
    },
    "BuiltinFunction": {
      "patterns": [{
        "match": "\\b(?x:\ndefined\n)\\b",
        "name": "invalid.deprecated.function.gnuplot"
      }, {
        "match": "\\b(?x:\nabs            |\nacos           |\nacosh          |\nairy           |\narg            |\nasin           |\nasinh          |\natan           |\natan2          |\natanh          |\nEllipticK      |\nEllipticE      |\nEllipticPi     |\nbesj0          |\nbesj1          |\nbesy0          |\nbesy1          |\nceil           |\ncos            |\ncosh           |\nerf            |\nerfc           |\nexp            |\nexpint         |\nfloor          |\ngamma          |\nibeta          |\ninverf         |\nigamma         |\nimag           |\ninvnorm        |\nint            |\nlambertw       |\nlgamma         |\nlog            |\nlog10          |\nnorm           |\nrand           |\nreal           |\nsgn            |\nsin            |\nsinh           |\nsqrt           |\ntan            |\ntanh           |\nvoigt          |\ncerf           |\ncdawson        |\nfaddeeva       |\nerfi           |\nVP\n)\\b",
        "name": "support.function.math.gnuplot"
      }, {
        "match": "\\b(?x:\ngprintf        |\nsprintf        |\nstrlen         |\nstrstrt        |\nsubstr         |\nstrftime       |\nstrptime       |\nsystem         |\nword           |\nwords\n)\\b",
        "name": "support.function.string.gnuplot"
      }, {
        "match": "\\b(?x:\ncolumn         |\ncolumnhead     |\nexists         |\nhsv2rgb        |\nstringcolumn   |\ntimecolumn     |\ntm_hour        |\ntm_mday        |\ntm_min         |\ntm_mon         |\ntm_sec         |\ntm_wday        |\ntm_yday        |\ntm_year        |\ntime           |\nvalid          |\nvalue\n)\\b",
        "name": "support.function.other.gnuplot"
      }]
    },
    "BuiltinOperator": {
      "patterns": [{
        "match": "(&&|\\|\\|)",
        "name": "keyword.operator.logical.gnuplot"
      }, {
        "match": "(<<|>>|&|\\||\\^)",
        "name": "keyword.operator.bitwise.gnuplot"
      }, {
        "match": "(==|!=|<=|<|>=|>)",
        "name": "keyword.operator.comparison.gnuplot"
      }, {
        "match": "(=)",
        "name": "keyword.operator.assignment.gnuplot"
      }, {
        "match": "(\\+|-|~|!)",
        "name": "keyword.operator.arithmetic.gnuplot"
      }, {
        "match": "(\\*\\*|\\+|-|\\*|/|%)",
        "name": "keyword.operator.arithmetic.gnuplot"
      }, {
        "captures": {
          "2": {
            "name": "keyword.operator.word.gnuplot"
          }
        },
        "match": "(\\.|\\b(eq|ne)\\b)",
        "name": "keyword.operator.strings.gnuplot"
      }]
    },
    "BuiltinVariable": {
      "patterns": [{
        "match": "\\b(?x:\nFIT_LIMIT           |\nFIT_MAXITER         |\nFIT_START_LAMBDA    |\nFIT_LAMBDA_FACTOR   |\nFIT_SKIP            |\nFIT_INDEX\n)\\b",
        "name": "invalid.deprecated.variable.gnuplot"
      }, {
        "match": "\\b(GPVAL_\\w*|MOUSE_\\w*)\\b",
        "name": "support.constant.gnuplot"
      }, {
        "match": "\\b(ARG[0-9C]|GPFUN_\\w*|FIT_\\w*|STATS_\\w*|pi|NaN)\\b",
        "name": "support.variable.gnuplot"
      }]
    },
    "ColumnIndexLiteral": {
      "match": "([$][0-9]+)\\b",
      "name": "support.constant.columnindex.gnuplot"
    },
    "Command": {
      "patterns": [{
        "begin": "\\b(?x:\nupdate\n)\\b",
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "name": "invalid.deprecated.command.gnuplot"
      }, {
        "begin": "\\b(?x:\nbreak        |\nclear        |\ncontinue     |\npwd          |\nrefresh      |\nreplot       |\nreread       |\nshell\n)\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#InvalidWord"
        }]
      }, {
        "begin": "\\b(?x:\ncd           |\ncall         |\neval         |\nexit         |\nhelp         |\nhistory      |\nload         |\nlower        |\npause        |\nprint        |\nprinterr     |\nquit         |\nraise        |\nsave         |\nstats        |\nsystem       |\ntest         |\ntoggle\n)\\b",
        "beginCaptures": {
          "0": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#Expression"
        }]
      }, {
        "begin": "\\b(import)\\s(.+)\\s(from)",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.import.gnuplot"
          },
          "2": {
            "patterns": [{
              "include": "#FunctionDecl"
            }]
          },
          "3": {
            "name": "keyword.control.import.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#SingleQuotedStringLiteral"
        }, {
          "include": "#DoubleQuotedStringLiteral"
        }, {
          "include": "#InvalidWord"
        }]
      }, {
        "begin": "\\b(reset)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "match": "\\b(bind|error(state)?|session)\\b",
          "name": "support.class.reset.gnuplot"
        }, {
          "include": "#InvalidWord"
        }]
      }, {
        "begin": "\\b(undefine)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#BuiltinVariable"
        }, {
          "include": "#BuiltinFunction"
        }, {
          "match": "(?<=\\s)([$]?[A-Za-z_]\\w*\\*?)(?=\\s)",
          "name": "source.gnuplot"
        }, {
          "include": "#InvalidWord"
        }]
      }, {
        "begin": "\\b(if|while)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.conditional.gnuplot"
          }
        },
        "end": "(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#Expression"
        }]
      }, {
        "begin": "\\b(else)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.conditional.gnuplot"
          }
        },
        "end": "(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))"
      }, {
        "begin": "\\b(do)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.control.flow.gnuplot"
          }
        },
        "end": "(?=(\\{|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#ForIterationExpr"
        }]
      }, {
        "begin": "\\b(set)(?=\\s+pm3d)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "match": "\\b(hidden3d|map|transparent|solid)\\b",
          "name": "invalid.deprecated.options.gnuplot"
        }, {
          "include": "#SetUnsetOptions"
        }, {
          "include": "#ForIterationExpr"
        }, {
          "include": "#Expression"
        }]
      }, {
        "begin": "\\b((un)?set)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#SetUnsetOptions"
        }, {
          "include": "#ForIterationExpr"
        }, {
          "include": "#Expression"
        }]
      }, {
        "begin": "\\b(show)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#ExtraShowOptions"
        }, {
          "include": "#SetUnsetOptions"
        }, {
          "include": "#Expression"
        }]
      }, {
        "begin": "\\b(fit|(s)?plot)\\b",
        "beginCaptures": {
          "1": {
            "name": "keyword.other.command.gnuplot"
          }
        },
        "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
        "patterns": [{
          "include": "#ColumnIndexLiteral"
        }, {
          "include": "#PlotModifiers"
        }, {
          "include": "#ForIterationExpr"
        }, {
          "include": "#Expression"
        }]
      }]
    },
    "DataBlock": {
      "begin": "(?x:\n([$][A-Za-z_]\\w*)\\s*\n(<<)\\s*\n([A-Za-z_]\\w*)\\s*\n(?=(\\#|$))\n)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#SpecialVariable"
          }]
        },
        "3": {
          "name": "constant.language.datablock.gnuplot"
        }
      },
      "end": "^(\\3)\\b(.*)",
      "endCaptures": {
        "1": {
          "name": "constant.language.datablock.gnuplot"
        },
        "2": {
          "name": "invalid.illegal.datablock.gnuplot"
        }
      },
      "name": "meta.datablock.gnuplot",
      "patterns": [{
        "include": "#LineComment"
      }, {
        "include": "#NumberLiteral"
      }, {
        "include": "#DoubleQuotedStringLiteral"
      }]
    },
    "DeprecatedScriptArgsLiteral": {
      "match": "([$][0-9#])",
      "name": "invalid.illegal.scriptargs.gnuplot"
    },
    "DoubleQuotedStringLiteral": {
      "begin": '(")',
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.string.begin.gnuplot"
        }
      },
      "end": '((")|(?=(?<!\\\\)\\n$))',
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.gnuplot"
        }
      },
      "name": "string.quoted.double.gnuplot",
      "patterns": [{
        "include": "#EscapedChar"
      }, {
        "include": "#RGBColorSpec"
      }, {
        "include": "#DeprecatedScriptArgsLiteral"
      }, {
        "include": "#InterpolatedStringLiteral"
      }]
    },
    "EscapedChar": {
      "match": "(\\\\.)",
      "name": "constant.character.escape.gnuplot"
    },
    "Expression": {
      "patterns": [{
        "include": "#Literal"
      }, {
        "include": "#SpecialVariable"
      }, {
        "include": "#BuiltinVariable"
      }, {
        "include": "#BuiltinOperator"
      }, {
        "include": "#TernaryExpr"
      }, {
        "include": "#FunctionCallExpr"
      }, {
        "include": "#SummationExpr"
      }]
    },
    "ExtraShowOptions": {
      "match": "\\b(?x:\nall                         |\nbind                        |\ncolornames                  |\nfunctions                   |\nplot                        |\nvariables                   |\nversion\n)\\b",
      "name": "support.class.options.gnuplot"
    },
    "ForIterationExpr": {
      "begin": "\\b(?x:\n(for)\\s*\n(\\[)\\s*\n(?:\n([A-Za-z_]\\w*)\\s+\n(in)\\b\n)?\n)",
      "beginCaptures": {
        "1": {
          "name": "keyword.control.flow.gnuplot"
        },
        "2": {
          "patterns": [{
            "include": "#RangeSeparators"
          }]
        },
        "3": {
          "name": "variable.other.iterator.gnuplot"
        },
        "4": {
          "name": "keyword.control.flow.gnuplot"
        }
      },
      "end": "((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
      "endCaptures": {
        "2": {
          "patterns": [{
            "include": "#RangeSeparators"
          }]
        }
      },
      "patterns": [{
        "include": "#Expression"
      }, {
        "include": "#RangeSeparators"
      }]
    },
    "FunctionCallExpr": {
      "begin": "\\b([A-Za-z_]\\w*)\\s*(\\()",
      "beginCaptures": {
        "1": {
          "name": "variable.function.gnuplot",
          "patterns": [{
            "include": "#BuiltinFunction"
          }]
        },
        "2": {
          "name": "punctuation.definition.arguments.begin.gnuplot"
        }
      },
      "end": "((\\))|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
      "endCaptures": {
        "2": {
          "name": "punctuation.definition.arguments.end.gnuplot"
        }
      },
      "name": "meta.function-call.gnuplot",
      "patterns": [{
        "include": "#Expression"
      }]
    },
    "FunctionDecl": {
      "begin": "\\b(?x:\n([A-Za-z_]\\w*)\\s*\n(\n(\\()\\s*\n([A-Za-z_]\\w*)\\s*\n(?:\n(,)\\s*\n([A-Za-z_]\\w*)\\s*\n)*\n(\\))\n)\n)",
      "beginCaptures": {
        "1": {
          "name": "entity.name.function.gnuplot",
          "patterns": [{
            "include": "#BuiltinFunction"
          }]
        },
        "2": {
          "name": "meta.function.parameters.gnuplot"
        },
        "3": {
          "name": "punctuation.definition.parameters.begin.gnuplot"
        },
        "4": {
          "name": "variable.parameter.function.language.gnuplot"
        },
        "5": {
          "name": "punctuation.separator.parameters.gnuplot"
        },
        "6": {
          "name": "variable.parameter.function.language.gnuplot"
        },
        "7": {
          "name": "punctuation.definition.parameters.end.gnuplot"
        }
      },
      "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
      "name": "meta.function.gnuplot",
      "patterns": [{
        "include": "#Expression"
      }]
    },
    "InterpolatedStringLiteral": {
      "begin": "(`)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.string.begin.gnuplot"
        }
      },
      "end": "((`)|(?=(?<!\\\\)\\n$))",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.gnuplot"
        }
      },
      "name": "string.interpolated.gnuplot",
      "patterns": [{
        "include": "#EscapedChar"
      }]
    },
    "InvalidVariableDecl": {
      "match": "\\b(GPVAL_\\w*|MOUSE_\\w*)\\b",
      "name": "invalid.illegal.variable.gnuplot"
    },
    "InvalidWord": {
      "match": "([^;#\\\\[:space:]]+)",
      "name": "invalid.illegal.gnuplot"
    },
    "LineComment": {
      "begin": "(#)",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.comment.begin.gnuplot"
        }
      },
      "end": "(?=(?<!\\\\)\\n$)",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.comment.end.gnuplot"
        }
      },
      "name": "comment.line.number-sign.gnuplot"
    },
    "Literal": {
      "patterns": [{
        "include": "#NumberLiteral"
      }, {
        "include": "#DeprecatedScriptArgsLiteral"
      }, {
        "include": "#SingleQuotedStringLiteral"
      }, {
        "include": "#DoubleQuotedStringLiteral"
      }, {
        "include": "#InterpolatedStringLiteral"
      }]
    },
    "MacroExpansion": {
      "begin": "([@][A-Za-z_]\\w*)",
      "beginCaptures": {
        "1": {
          "patterns": [{
            "include": "#SpecialVariable"
          }]
        }
      },
      "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
      "patterns": [{
        "include": "#Expression"
      }]
    },
    "NumberLiteral": {
      "patterns": [{
        "match": "(?x:\n\n( ((\\b[0-9]+)|(?<!\\d)) )\n( [.][0-9]+ )\n( [Ee][+-]?[0-9]+ )?\n)(cm|in)?\\b",
        "name": "constant.numeric.float.gnuplot"
      }, {
        "match": "(?x:\n\n( \\b[0-9]+ )\n(\n(     ( [Ee][+-]?[0-9]+\\b )  ) |\n( [.] ( [Ee][+-]?[0-9]+\\b )? )\n)\n)(cm\\b|in\\b)?",
        "name": "constant.numeric.float.gnuplot"
      }, {
        "match": "\\b(0[Xx][0-9a-fA-F]+)(cm|in)?\\b",
        "name": "constant.numeric.hex.gnuplot"
      }, {
        "match": "\\b(0+)(cm|in)?\\b",
        "name": "constant.numeric.dec.gnuplot"
      }, {
        "match": "\\b(0[0-7]+)(cm|in)?\\b",
        "name": "constant.numeric.oct.gnuplot"
      }, {
        "match": "\\b(0[0-9]+)(cm|in)?\\b",
        "name": "invalid.illegal.oct.gnuplot"
      }, {
        "match": "\\b([0-9]+)(cm|in)?\\b",
        "name": "constant.numeric.dec.gnuplot"
      }]
    },
    "PlotModifiers": {
      "patterns": [{
        "match": "\\b(thru)\\b",
        "name": "invalid.deprecated.plot.gnuplot"
      }, {
        "match": "\\b(?x:\nin(dex)?            |\nevery               |\nus(ing)?            |\nwi(th)?             |\nvia\n)\\b",
        "name": "storage.type.plot.gnuplot"
      }, {
        "match": "\\b(newhist(ogram)?)\\b",
        "name": "storage.type.plot.gnuplot"
      }]
    },
    "RGBColorSpec": {
      "match": "\\G(0x|#)(([0-9a-fA-F]{6})|([0-9a-fA-F]{8}))\\b",
      "name": "constant.other.placeholder.gnuplot"
    },
    "RangeSeparators": {
      "patterns": [{
        "match": "(\\[)",
        "name": "punctuation.section.brackets.begin.gnuplot"
      }, {
        "match": "(:)",
        "name": "punctuation.separator.range.gnuplot"
      }, {
        "match": "(\\])",
        "name": "punctuation.section.brackets.end.gnuplot"
      }]
    },
    "SetUnsetOptions": {
      "patterns": [{
        "match": "\\G\\s*\\b(?x:\nclabel              |\ndata                |\nfunction            |\nhistorysize         |\nmacros              |\nticslevel           |\nticscale            |\n(style\\s+increment\\s+\\w+)\n)\\b",
        "name": "invalid.deprecated.options.gnuplot"
      }, {
        "match": "\\G\\s*\\b(?x:\nangles              |\narrow               |\nautoscale           |\nborder              |\nboxwidth            |\nclip                |\ncntr(label|param)   |\ncolor(box|sequence)?|\ncontour             |\n(dash|line)type     |\ndatafile            |\ndecimal(sign)?      |\ndgrid3d             |\ndummy               |\nencoding            |\n(error)?bars        |\nfit                 |\nfontpath            |\nformat              |\ngrid                |\nhidden3d            |\nhistory             |\n(iso)?samples       |\njitter              |\nkey                 |\nlabel               |\nlink                |\nloadpath            |\nlocale              |\nlogscale            |\nmapping             |\n[lrtb]margin        |\nmargins             |\nmicro               |\nminus(sign)?        |\nmono(chrome)?       |\nmouse               |\nmultiplot           |\nnonlinear           |\nobject              |\noffsets             |\norigin              |\noutput              |\nparametric          |\n(p|r)axis           |\npm3d                |\npalette             |\npointintervalbox    |\npointsize           |\npolar               |\nprint               |\npsdir               |\nsize                |\nstyle               |\nsurface             |\ntable               |\nterminal            |\ntermoption          |\ntheta               |\ntics                |\ntimestamp           |\ntimefmt             |\ntitle               |\nview                |\nxyplane             |\nzero                |\n(no)?(m)?(x|x2|y|y2|z|cb|r|t)tics  |\n(x|x2|y|y2|z|cb)data               |\n(x|x2|y|y2|z|cb|r)label            |\n(x|x2|y|y2|z|cb)dtics              |\n(x|x2|y|y2|z|cb)mtics              |\n(x|x2|y|y2|z|cb|[rtuv])range       |\n(x|x2|y|y2|z)?zeroaxis\n)\\b",
        "name": "support.class.options.gnuplot"
      }]
    },
    "ShellCommand": {
      "begin": "(!)",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.shell.gnuplot"
        }
      },
      "end": "(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
      "patterns": [{
        "match": "([^#]|\\\\(?=\\n))",
        "name": "string.unquoted"
      }]
    },
    "SingleQuotedStringLiteral": {
      "begin": "(')",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.string.begin.gnuplot"
        }
      },
      "end": "((')(?!')|(?=(?<!\\\\)\\n$))",
      "endCaptures": {
        "0": {
          "name": "punctuation.definition.string.end.gnuplot"
        }
      },
      "name": "string.quoted.single.gnuplot",
      "patterns": [{
        "include": "#RGBColorSpec"
      }, {
        "match": "('')",
        "name": "constant.character.escape.gnuplot"
      }]
    },
    "SpecialVariable": {
      "patterns": [{
        "captures": {
          "1": {
            "name": "constant.language.wildcard.gnuplot"
          }
        },
        "match": "(?<=[\\[:=])\\s*(\\*)\\s*(?=[:\\]])"
      }, {
        "captures": {
          "2": {
            "name": "punctuation.definition.variable.gnuplot"
          }
        },
        "match": "(([@$])[A-Za-z_]\\w*)\\b",
        "name": "constant.language.special.gnuplot"
      }]
    },
    "SummationExpr": {
      "begin": "\\b(sum)\\s*(\\[)",
      "beginCaptures": {
        "1": {
          "name": "keyword.other.sum.gnuplot"
        },
        "2": {
          "patterns": [{
            "include": "#RangeSeparators"
          }]
        }
      },
      "end": "((\\])|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
      "endCaptures": {
        "2": {
          "patterns": [{
            "include": "#RangeSeparators"
          }]
        }
      },
      "patterns": [{
        "include": "#Expression"
      }, {
        "include": "#RangeSeparators"
      }]
    },
    "TernaryExpr": {
      "begin": "(?<!\\?)(\\?)(?!\\?)",
      "beginCaptures": {
        "1": {
          "name": "keyword.operator.ternary.gnuplot"
        }
      },
      "end": "((?<!:)(:)(?!:)|(?=(#|\\\\(?!\\n)|(?<!\\\\)\\n$)))",
      "endCaptures": {
        "2": {
          "name": "keyword.operator.ternary.gnuplot"
        }
      },
      "patterns": [{
        "include": "#Expression"
      }]
    },
    "VariableDecl": {
      "begin": "\\b(?x:\n([A-Za-z_]\\w*)\\s*\n(?:\n(\\[)\\s*\n(.*)\\s*\n(\\])\\s*\n)?\n(?=(=)(?!\\s*=))\n)",
      "beginCaptures": {
        "1": {
          "name": "entity.name.variable.gnuplot",
          "patterns": [{
            "include": "#InvalidVariableDecl"
          }, {
            "include": "#BuiltinVariable"
          }]
        },
        "3": {
          "patterns": [{
            "include": "#Expression"
          }]
        }
      },
      "end": "(?=(;|#|\\\\(?!\\n)|(?<!\\\\)\\n$))",
      "name": "meta.variable.gnuplot",
      "patterns": [{
        "include": "#Expression"
      }]
    }
  },
  "scopeName": "source.gnuplot"
});
var gnuplot = [lang];

export {
  gnuplot
};
//# sourceMappingURL=chunk-VS464JPG.js.map
