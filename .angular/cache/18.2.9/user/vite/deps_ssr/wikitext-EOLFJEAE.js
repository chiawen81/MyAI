import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  xsl
} from "./chunk-INX6HRVG.js";
import {
  vb
} from "./chunk-4MXPBDEY.js";
import {
  raku
} from "./chunk-B5KXNFW3.js";
import {
  powershell
} from "./chunk-YMQHH2BW.js";
import {
  pug
} from "./chunk-OUZJSLXT.js";
import {
  php
} from "./chunk-KY4TFME2.js";
import {
  latex
} from "./chunk-74N5E6N7.js";
import "./chunk-276O6F2A.js";
import {
  ini
} from "./chunk-PMY4UYCB.js";
import {
  jsonc
} from "./chunk-RWG77YPP.js";
import "./chunk-UIN4QHF5.js";
import {
  handlebars
} from "./chunk-6Z4NEC57.js";
import {
  fsharp
} from "./chunk-DULJ4DWM.js";
import {
  markdown
} from "./chunk-JL57BWWA.js";
import {
  dart
} from "./chunk-36KRKTCK.js";
import {
  bat
} from "./chunk-DIW2JOZB.js";
import {
  bibtex
} from "./chunk-ZGIMT5W3.js";
import {
  typescript
} from "./chunk-TSIBLI5C.js";
import "./chunk-QUXXVSA4.js";
import {
  ruby
} from "./chunk-4GWXPJLH.js";
import {
  shellscript
} from "./chunk-UI2VLQQK.js";
import {
  lua
} from "./chunk-SWAVIBYJ.js";
import {
  rust
} from "./chunk-H6I2XBLE.js";
import "./chunk-QFWAJXVT.js";
import {
  scala
} from "./chunk-5KJZQFNJ.js";
import {
  swift
} from "./chunk-IOOWU35U.js";
import {
  julia
} from "./chunk-RH5UCSOQ.js";
import {
  r
} from "./chunk-XHOHCUAO.js";
import {
  less
} from "./chunk-BUQ4VAGX.js";
import {
  make
} from "./chunk-DCZRDHPT.js";
import {
  objective_c
} from "./chunk-OALMQTWG.js";
import {
  perl
} from "./chunk-IDQIUHF4.js";
import {
  elixir
} from "./chunk-OWDKMGZQ.js";
import {
  erlang
} from "./chunk-3VGB76QC.js";
import {
  go
} from "./chunk-AH3YBRNK.js";
import {
  groovy
} from "./chunk-S3F53UQ5.js";
import "./chunk-XRXRBTMY.js";
import {
  python
} from "./chunk-TYHVRD4G.js";
import {
  coffee
} from "./chunk-E7CM3ZIZ.js";
import {
  cpp
} from "./chunk-JFDEN5M2.js";
import "./chunk-XBSJNNYU.js";
import "./chunk-UXBYIOCN.js";
import {
  sql
} from "./chunk-6ZZBOZY5.js";
import {
  csharp
} from "./chunk-ONKMBYWA.js";
import {
  diff
} from "./chunk-VP54Z4ID.js";
import {
  docker
} from "./chunk-HXCML7PY.js";
import {
  json
} from "./chunk-K7RVDJWM.js";
import {
  yaml
} from "./chunk-YZTUBCZF.js";
import {
  c
} from "./chunk-L3CNJAQQ.js";
import {
  clojure
} from "./chunk-PXQ4K7EX.js";
import {
  html
} from "./chunk-INHGZOUG.js";
import {
  scss
} from "./chunk-JCIBJMOH.js";
import {
  xml
} from "./chunk-RYDGKIIS.js";
import {
  java
} from "./chunk-PZDAJBBP.js";
import {
  javascript
} from "./chunk-TZXFUJOZ.js";
import {
  css
} from "./chunk-2SZ5X6K7.js";
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/wikitext.mjs
var lang = Object.freeze({
  "displayName": "Wikitext",
  "name": "wikitext",
  "patterns": [{
    "include": "#wikitext"
  }, {
    "include": "text.html.basic"
  }],
  "repository": {
    "wikitext": {
      "patterns": [{
        "include": "#signature"
      }, {
        "include": "#redirect"
      }, {
        "include": "#magic-words"
      }, {
        "include": "#argument"
      }, {
        "include": "#template"
      }, {
        "include": "#convert"
      }, {
        "include": "#list"
      }, {
        "include": "#table"
      }, {
        "include": "#font-style"
      }, {
        "include": "#internal-link"
      }, {
        "include": "#external-link"
      }, {
        "include": "#heading"
      }, {
        "include": "#break"
      }, {
        "include": "#wikixml"
      }, {
        "include": "#extension-comments"
      }],
      "repository": {
        "argument": {
          "begin": "({{{)",
          "end": "(}}})",
          "name": "variable.parameter.wikitext",
          "patterns": [{
            "captures": {
              "1": {
                "name": "variable.other.wikitext"
              },
              "2": {
                "name": "keyword.operator.wikitext"
              }
            },
            "match": "(?:^|\\G)([^#:\\|\\[\\]\\{\\}\\|]*)(\\|)"
          }, {
            "include": "$self"
          }]
        },
        "break": {
          "match": "^-{4,}",
          "name": "markup.changed.wikitext"
        },
        "convert": {
          "begin": "(-\\{(?!\\{))([a-zA-Z](\\|))?",
          "captures": {
            "1": {
              "name": "punctuation.definition.tag.template.wikitext"
            },
            "2": {
              "name": "entity.name.function.type.wikitext"
            },
            "3": {
              "name": "keyword.operator.wikitext"
            }
          },
          "end": "(\\}-)",
          "patterns": [{
            "include": "$self"
          }, {
            "captures": {
              "1": {
                "name": "entity.name.tag.language.wikitext"
              },
              "2": {
                "name": "punctuation.separator.key-value.wikitext"
              },
              "3": {
                "name": "string.unquoted.text.wikitext",
                "patterns": [{
                  "include": "$self"
                }]
              },
              "4": {
                "name": "punctuation.terminator.rule.wikitext"
              }
            },
            "match": "(?:([a-zA-Z\\-]*)(:))?(.*?)(?:(;)|(?=\\}-))"
          }]
        },
        "extension-comments": {
          "begin": "(<%--)\\s*(\\[)([A-Z_]*)(\\])",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.comment.extension.wikitext"
            },
            "2": {
              "name": "punctuation.definition.tag.extension.wikitext"
            },
            "3": {
              "name": "storage.type.extension.wikitext"
            },
            "4": {
              "name": "punctuation.definition.tag.extension.wikitext"
            }
          },
          "end": "(\\[)([A-Z_]*)(\\])\\s*(--%>)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.tag.extension.wikitext"
            },
            "2": {
              "name": "storage.type.extension.wikitext"
            },
            "3": {
              "name": "punctuation.definition.tag.extension.wikitext"
            },
            "4": {
              "name": "punctuation.definition.comment.extension.wikitext"
            }
          },
          "name": "comment.block.documentation.special.extension.wikitext",
          "patterns": [{
            "captures": {
              "0": {
                "name": "meta.object.member.extension.wikitext"
              },
              "1": {
                "name": "meta.object-literal.key.extension.wikitext"
              },
              "2": {
                "name": "punctuation.separator.dictionary.key-value.extension.wikitext"
              },
              "3": {
                "name": "punctuation.definition.string.begin.extension.wikitext"
              },
              "4": {
                "name": "string.quoted.other.extension.wikitext"
              },
              "5": {
                "name": "punctuation.definition.string.end.extension.wikitext"
              }
            },
            "match": "(\\w*)\\s*(=)\\s*(#)(.*?)(#)"
          }]
        },
        "external-link": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "punctuation.definition.tag.link.external.wikitext"
              },
              "2": {
                "name": "entity.name.tag.url.wikitext"
              },
              "3": {
                "name": "string.other.link.external.title.wikitext",
                "patterns": [{
                  "include": "$self"
                }]
              },
              "4": {
                "name": "punctuation.definition.tag.link.external.wikitext"
              }
            },
            "match": "(\\[)((?:(?:(?:http(?:s)?)|(?:ftp(?:s)?)):\\/\\/)[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\.~:\\/?#%@!\\$&'\\(\\)\\*\\+,;=.]+)\\s*?([^\\]]*)(\\])",
            "name": "meta.link.external.wikitext"
          }, {
            "captures": {
              "1": {
                "name": "punctuation.definition.tag.link.external.wikitext"
              },
              "2": {
                "name": "invalid.illegal.bad-url.wikitext"
              },
              "3": {
                "name": "string.other.link.external.title.wikitext",
                "patterns": [{
                  "include": "$self"
                }]
              },
              "4": {
                "name": "punctuation.definition.tag.link.external.wikitext"
              }
            },
            "match": "(\\[)([\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\.~:\\/?#%@!\\$&'\\(\\)\\*\\+,;=.]+)\\s*?([^\\]]*)(\\])",
            "name": "invalid.illegal.bad-link.wikitext"
          }]
        },
        "font-style": {
          "patterns": [{
            "include": "#bold"
          }, {
            "include": "#italic"
          }],
          "repository": {
            "bold": {
              "begin": "(''')",
              "end": "(''')|$",
              "name": "markup.bold.wikitext",
              "patterns": [{
                "include": "#italic"
              }, {
                "include": "$self"
              }]
            },
            "italic": {
              "begin": "('')",
              "end": "((?=[^'])|(?=''))''((?=[^'])|(?=''))|$",
              "name": "markup.italic.wikitext",
              "patterns": [{
                "include": "#bold"
              }, {
                "include": "$self"
              }]
            }
          }
        },
        "heading": {
          "captures": {
            "2": {
              "name": "string.quoted.other.heading.wikitext",
              "patterns": [{
                "include": "$self"
              }]
            }
          },
          "match": "^(={1,6})\\s*(.+?)\\s*(\\1)$",
          "name": "markup.heading.wikitext"
        },
        "internal-link": {
          "TODO": "SINGLE LINE",
          "begin": "(\\[\\[)(([^#:\\|\\[\\]\\{\\}]*:)*)?([^\\|\\[\\]]*)?",
          "captures": {
            "1": {
              "name": "punctuation.definition.tag.link.internal.wikitext"
            },
            "2": {
              "name": "entity.name.tag.namespace.wikitext"
            },
            "4": {
              "name": "entity.other.attribute-name.wikitext"
            }
          },
          "end": "(\\]\\])",
          "name": "string.quoted.internal-link.wikitext",
          "patterns": [{
            "include": "$self"
          }, {
            "captures": {
              "1": {
                "name": "keyword.operator.wikitext"
              },
              "5": {
                "name": "entity.other.attribute-name.localname.wikitext"
              }
            },
            "match": "(\\|)|(?:\\s*)(?:([-\\w.]+)((:)))?([-\\w.:]+)\\s*(=)"
          }]
        },
        "list": {
          "name": "markup.list.wikitext",
          "patterns": [{
            "captures": {
              "1": {
                "name": "punctuation.definition.list.begin.markdown.wikitext"
              }
            },
            "match": "^([#*;:]+)"
          }]
        },
        "magic-words": {
          "patterns": [{
            "include": "#behavior-switches"
          }, {
            "include": "#outdated-behavior-switches"
          }, {
            "include": "#variables"
          }],
          "repository": {
            "behavior-switches": {
              "match": "(?x)    # turn on extended mode\n(?i)    # ignore case\n  (__)  # start: __\n    (\n      NOTOC|FORCETOC|TOC|NOEDITSECTION|NEWSECTIONLINK|NOGALLERY|\n      HIDDENCAT|EXPECTUNUSEDCATEGORY|NOCONTENTCONVERT|NOCC|\n      NOTITLECONVERT|NOTC|INDEX|NOINDEX|STATICREDIRECT|NOGLOBAL|\n      DISAMBIG\n    )\n  (__)",
              "name": "constant.language.behavior-switcher.wikitext"
            },
            "outdated-behavior-switches": {
              "match": "(?x)\n(?i)\n  (__)\n    (\n      START|END\n    )\n  (__)",
              "name": "invalid.deprecated.behavior-switcher.wikitext"
            },
            "variables": {
              "patterns": [{
                "match": "(?x)\n(?i)\n  (\\{\\{)\n    (\n      CURRENTYEAR|CURRENTMONTH|CURRENTMONTH1|CURRENTMONTHNAME|\n      CURRENTMONTHNAMEGEN|CURRENTMONTHABBREV|CURRENTDAY|\n      CURRENTDAY2|CURRENTDOW|CURRENTDAYNAME|CURRENTTIME|\n      CURRENTHOUR|CURRENTWEEK|CURRENTTIMESTAMP|LOCALYEAR|\n      LOCALMONTH|LOCALMONTH1|LOCALMONTHNAME|LOCALMONTHNAMEGEN|\n      LOCALMONTHABBREV|LOCALDAY|LOCALDAY2|LOCALDOW|\n      LOCALDAYNAME|LOCALTIME|LOCALHOUR|LOCALWEEK|\n      LOCALTIMESTAMP\n    )\n  (\\}\\})",
                "name": "constant.language.variables.time.wikitext"
              }, {
                "match": "(?x)\n(?i)\n  (\\{\\{)\n    (\n      SITENAME|SERVER|SERVERNAME|DIRMARK|DIRECTIONMARK|\n      SCRIPTPATH|STYLEPATH|CURRENTVERSION|CONTENTLANGUAGE|\n      CONTENTLANG|PAGEID|PAGELANGUAGE|CASCADINGSOURCES|\n      REVISIONID|REVISIONDAY|REVISIONDAY2|REVISIONMONTH|\n      REVISIONMONTH1|REVISIONYEAR|REVISIONTIMESTAMP|\n      REVISIONUSER|REVISIONSIZE\n    )\n  (\\}\\})",
                "name": "constant.language.variables.metadata.wikitext"
              }, {
                "match": "ISBN\\s+((9[\\-\\s]?7[\\-\\s]?[89][\\-\\s]?)?([0-9][\\-\\s]?){10})",
                "name": "constant.language.variables.isbn.wikitext"
              }, {
                "match": "RFC\\s+[0-9]+",
                "name": "constant.language.variables.rfc.wikitext"
              }, {
                "match": "PMID\\s+[0-9]+",
                "name": "constant.language.variables.pmid.wikitext"
              }]
            }
          }
        },
        "redirect": {
          "patterns": [{
            "captures": {
              "1": {
                "name": "keyword.control.redirect.wikitext"
              },
              "2": {
                "name": "punctuation.definition.tag.link.internal.begin.wikitext"
              },
              "3": {
                "name": "entity.name.tag.namespace.wikitext"
              },
              "4": null,
              "5": {
                "name": "entity.other.attribute-name.wikitext"
              },
              "6": {
                "name": "invalid.deprecated.ineffective.wikitext"
              },
              "7": {
                "name": "punctuation.definition.tag.link.internal.end.wikitext"
              }
            },
            "match": "(?i)(^\\s*?#REDIRECT)\\s*(\\[\\[)(([^#:\\|\\[\\]\\{\\}]*?:)*)?([^\\|\\[\\]]*)?(\\|[^\\[\\]]*?)?(\\]\\])"
          }]
        },
        "signature": {
          "patterns": [{
            "match": "~{3,5}",
            "name": "keyword.other.signature.wikitext"
          }]
        },
        "table": {
          "patterns": [{
            "begin": "^\\s*(\\{\\|)(.*)$",
            "captures": {
              "1": {
                "name": "punctuation.definition.tag.table.wikitext"
              },
              "2": {
                "patterns": [{
                  "include": "text.html.basic#attribute"
                }]
              }
            },
            "end": "^\\s*(\\|\\})",
            "name": "meta.tag.block.table.wikitext",
            "patterns": [{
              "include": "$self"
            }, {
              "begin": "^\\s*(\\|-)\\s*",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                }
              },
              "end": "$",
              "name": "meta.tag.block.table-row.wikitext",
              "patterns": [{
                "include": "$self"
              }, {
                "include": "text.html.basic#attribute"
              }, {
                "match": "\\|.*",
                "name": "invalid.illegal.bad-table-context.wikitext"
              }]
            }, {
              "begin": "^\\s*(!)(([^\\[]*?)(\\|))?(.*?)(?=(!!)|$)",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": null,
                "3": {
                  "patterns": [{
                    "include": "$self"
                  }, {
                    "include": "text.html.basic#attribute"
                  }]
                },
                "4": {
                  "name": "punctuation.definition.tag.wikitext"
                },
                "5": {
                  "name": "markup.bold.style.wikitext"
                }
              },
              "end": "$",
              "name": "meta.tag.block.th.heading",
              "patterns": [{
                "captures": {
                  "1": {
                    "name": "punctuation.definition.tag.begin.wikitext"
                  },
                  "3": {
                    "patterns": [{
                      "include": "text.html.basic#attribute"
                    }, {
                      "include": "$self"
                    }]
                  },
                  "4": {
                    "name": "punctuation.definition.tag.wikitext"
                  },
                  "5": {
                    "name": "markup.bold.style.wikitext"
                  }
                },
                "match": "(!!)(([^\\[]*?)(\\|))?(.*?)(?=(!!)|$)",
                "name": "meta.tag.block.th.inline.wikitext"
              }, {
                "include": "$self"
              }]
            }, {
              "captures": {
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "string.unquoted.caption.wikitext"
                }
              },
              "end": "$",
              "match": "^\\s*(\\|\\+)(.*?)$",
              "name": "meta.tag.block.caption.wikitext",
              "patterns": [{
                "include": "$self"
              }]
            }, {
              "begin": "^\\s*(\\|)",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.tag.wikitext"
                }
              },
              "end": "$",
              "patterns": [{
                "include": "$self"
              }, {
                "match": "\\|\\|",
                "name": "keyword.operator.wikitext"
              }]
            }]
          }]
        },
        "template": {
          "begin": "(\\{\\{)\\s*(([^#:\\|\\[\\]\\{\\}]*(:))*)\\s*((#[^#:\\|\\[\\]\\{\\}]+(:))*)([^#:\\|\\[\\]\\{\\}]*)",
          "captures": {
            "1": {
              "name": "punctuation.definition.tag.template.wikitext"
            },
            "2": {
              "name": "entity.name.tag.local-name.wikitext"
            },
            "4": {
              "name": "punctuation.separator.namespace.wikitext"
            },
            "5": {
              "name": "entity.name.function.wikitext"
            },
            "7": {
              "name": "punctuation.separator.namespace.wikitext"
            },
            "8": {
              "name": "entity.name.tag.local-name.wikitext"
            }
          },
          "end": "(\\}\\})",
          "patterns": [{
            "include": "$self"
          }, {
            "match": "(\\|)",
            "name": "keyword.operator.wikitext"
          }, {
            "captures": {
              "1": {
                "name": "entity.other.attribute-name.namespace.wikitext"
              },
              "2": {
                "name": "punctuation.separator.namespace.wikitext"
              },
              "3": {
                "name": "entity.other.attribute-name.local-name.wikitext"
              },
              "4": {
                "name": "keyword.operator.equal.wikitext"
              }
            },
            "match": "(?<=\\|)\\s*(?:([-\\w.]+)(:))?([-\\w\\s\\.:]+)\\s*(=)"
          }]
        },
        "wikixml": {
          "patterns": [{
            "include": "#wiki-self-closed-tags"
          }, {
            "include": "#normal-wiki-tags"
          }, {
            "include": "#nowiki"
          }, {
            "include": "#ref"
          }, {
            "include": "#jsonin"
          }, {
            "include": "#math"
          }, {
            "include": "#syntax-highlight"
          }],
          "repository": {
            "jsonin": {
              "begin": "(?i)(<)(graph|templatedata)(\\s+[^>]+)?\\s*(>)",
              "beginCaptures": {
                "0": {
                  "name": "meta.tag.metadata.start.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "patterns": [{
                    "include": "text.html.basic#attribute"
                  }, {
                    "include": "$self"
                  }]
                },
                "4": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "contentName": "meta.embedded.block.json",
              "end": "(?i)(</)(\\2)\\s*(>)",
              "endCaptures": {
                "0": {
                  "name": "meta.tag.metadata.end.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "patterns": [{
                "include": "source.json"
              }]
            },
            "math": {
              "begin": "(?i)(<)(math|chem|ce)(\\s+[^>]+)?\\s*(>)",
              "beginCaptures": {
                "0": {
                  "name": "meta.tag.metadata.start.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "patterns": [{
                    "include": "text.html.basic#attribute"
                  }, {
                    "include": "$self"
                  }]
                },
                "4": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "contentName": "meta.embedded.block.latex",
              "end": "(?i)(</)(\\2)\\s*(>)",
              "endCaptures": {
                "0": {
                  "name": "meta.tag.metadata.end.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "patterns": [{
                "include": "text.html.markdown.math#math"
              }]
            },
            "normal-wiki-tags": {
              "captures": {
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "patterns": [{
                    "include": "text.html.basic#attribute"
                  }, {
                    "include": "$self"
                  }]
                },
                "4": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "match": "(?i)(</?)(includeonly|onlyinclude|noinclude)(\\s+[^>]+)?\\s*(>)",
              "name": "meta.tag.metedata.normal.wikitext"
            },
            "nowiki": {
              "begin": "(?i)(<)(nowiki)(\\s+[^>]+)?\\s*(>)",
              "beginCaptures": {
                "0": {
                  "name": "meta.tag.metadata.nowiki.start.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "patterns": [{
                    "include": "text.html.basic#attribute"
                  }, {
                    "include": "$self"
                  }]
                },
                "4": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "contentName": "meta.embedded.block.plaintext",
              "end": "(?i)(</)(nowiki)\\s*(>)",
              "endCaptures": {
                "0": {
                  "name": "meta.tag.metadata.nowiki.end.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              }
            },
            "ref": {
              "begin": "(?i)(<)(ref)(\\s+[^>]+)?\\s*(>)",
              "beginCaptures": {
                "0": {
                  "name": "meta.tag.metadata.ref.start.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "patterns": [{
                    "include": "text.html.basic#attribute"
                  }, {
                    "include": "$self"
                  }]
                },
                "4": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "contentName": "meta.block.ref.wikitext",
              "end": "(?i)(</)(ref)\\s*(>)",
              "endCaptures": {
                "0": {
                  "name": "meta.tag.metadata.ref.end.wikitext"
                },
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "patterns": [{
                "include": "$self"
              }]
            },
            "syntax-highlight": {
              "patterns": [{
                "include": "#hl-css"
              }, {
                "include": "#hl-html"
              }, {
                "include": "#hl-ini"
              }, {
                "include": "#hl-java"
              }, {
                "include": "#hl-lua"
              }, {
                "include": "#hl-makefile"
              }, {
                "include": "#hl-perl"
              }, {
                "include": "#hl-r"
              }, {
                "include": "#hl-ruby"
              }, {
                "include": "#hl-php"
              }, {
                "include": "#hl-sql"
              }, {
                "include": "#hl-vb-net"
              }, {
                "include": "#hl-xml"
              }, {
                "include": "#hl-xslt"
              }, {
                "include": "#hl-yaml"
              }, {
                "include": "#hl-bat"
              }, {
                "include": "#hl-clojure"
              }, {
                "include": "#hl-coffee"
              }, {
                "include": "#hl-c"
              }, {
                "include": "#hl-cpp"
              }, {
                "include": "#hl-diff"
              }, {
                "include": "#hl-dockerfile"
              }, {
                "include": "#hl-go"
              }, {
                "include": "#hl-groovy"
              }, {
                "include": "#hl-pug"
              }, {
                "include": "#hl-js"
              }, {
                "include": "#hl-json"
              }, {
                "include": "#hl-less"
              }, {
                "include": "#hl-objc"
              }, {
                "include": "#hl-swift"
              }, {
                "include": "#hl-scss"
              }, {
                "include": "#hl-perl6"
              }, {
                "include": "#hl-powershell"
              }, {
                "include": "#hl-python"
              }, {
                "include": "#hl-julia"
              }, {
                "include": "#hl-rust"
              }, {
                "include": "#hl-scala"
              }, {
                "include": "#hl-shell"
              }, {
                "include": "#hl-ts"
              }, {
                "include": "#hl-csharp"
              }, {
                "include": "#hl-fsharp"
              }, {
                "include": "#hl-dart"
              }, {
                "include": "#hl-handlebars"
              }, {
                "include": "#hl-markdown"
              }, {
                "include": "#hl-erlang"
              }, {
                "include": "#hl-elixir"
              }, {
                "include": "#hl-latex"
              }, {
                "include": "#hl-bibtex"
              }],
              "repository": {
                "hl-bat": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(['"]?)(?:batch|bat|dosbatch|winbatch)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.bat",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.batchfile"
                    }]
                  }]
                },
                "hl-bibtex": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:bibtex|bib)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.bibtex",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.bibtex"
                    }]
                  }]
                },
                "hl-c": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)c\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.c",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.c"
                    }]
                  }]
                },
                "hl-clojure": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:clojure|clj)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.clojure",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.clojure"
                    }]
                  }]
                },
                "hl-coffee": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:coffeescript|coffee-script|coffee)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.coffee",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.coffee"
                    }]
                  }]
                },
                "hl-cpp": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:cpp|c\\+\\+)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.cpp",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.cpp"
                    }]
                  }]
                },
                "hl-csharp": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:csharp|c#|cs)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.csharp",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.cs"
                    }]
                  }]
                },
                "hl-css": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)css\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.css",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.css"
                    }]
                  }]
                },
                "hl-dart": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)dart\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.dart",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.dart"
                    }]
                  }]
                },
                "hl-diff": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:diff|udiff)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.diff",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.diff"
                    }]
                  }]
                },
                "hl-dockerfile": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:docker|dockerfile)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.dockerfile",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.dockerfile"
                    }]
                  }]
                },
                "hl-elixir": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:elixir|ex|exs)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.elixir",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.elixir"
                    }]
                  }]
                },
                "hl-erlang": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)erlang\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.erlang",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.erlang"
                    }]
                  }]
                },
                "hl-fsharp": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:fsharp|f#)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.fsharp",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.fsharp"
                    }]
                  }]
                },
                "hl-go": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:go|golang)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.go",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.go"
                    }]
                  }]
                },
                "hl-groovy": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)groovy\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.groovy",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.groovy"
                    }]
                  }]
                },
                "hl-handlebars": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)handlebars\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.handlebars",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.html.handlebars"
                    }]
                  }]
                },
                "hl-html": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)html\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.html",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.html.basic"
                    }]
                  }]
                },
                "hl-ini": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:ini|cfg|dosini)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.ini",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.ini"
                    }]
                  }]
                },
                "hl-java": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)java\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.java",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.java"
                    }]
                  }]
                },
                "hl-js": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:javascript|js)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.js",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.js"
                    }]
                  }]
                },
                "hl-json": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"json"|'json'|"json-object"|'json-object'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.json",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.json.comments"
                    }]
                  }]
                },
                "hl-julia": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"julia"|'julia'|"jl"|'jl'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.julia",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.julia"
                    }]
                  }]
                },
                "hl-latex": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:tex|latex)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.latex",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.tex.latex"
                    }]
                  }]
                },
                "hl-less": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"less"|'less'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.less",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.css.less"
                    }]
                  }]
                },
                "hl-lua": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)lua\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.lua",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.lua"
                    }]
                  }]
                },
                "hl-makefile": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:make|makefile|mf|bsdmake)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.makefile",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.makefile"
                    }]
                  }]
                },
                "hl-markdown": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:markdown|md)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.markdown",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.html.markdown"
                    }]
                  }]
                },
                "hl-objc": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"objective-c"|'objective-c'|"objectivec"|'objectivec'|"obj-c"|'obj-c'|"objc"|'objc'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.objc",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.objc"
                    }]
                  }]
                },
                "hl-perl": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:perl|ple)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.perl",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.perl"
                    }]
                  }]
                },
                "hl-perl6": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"perl6"|'perl6'|"pl6"|'pl6'|"raku"|'raku'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.perl6",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.perl.6"
                    }]
                  }]
                },
                "hl-php": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:php|php3|php4|php5)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.php",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.php"
                    }]
                  }]
                },
                "hl-powershell": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"powershell"|'powershell'|"pwsh"|'pwsh'|"posh"|'posh'|"ps1"|'ps1'|"psm1"|'psm1'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.powershell",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.powershell"
                    }]
                  }]
                },
                "hl-pug": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:pug|jade)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.pug",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.pug"
                    }]
                  }]
                },
                "hl-python": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"python"|'python'|"py"|'py'|"sage"|'sage'|"python3"|'python3'|"py3"|'py3'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.python",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.python"
                    }]
                  }]
                },
                "hl-r": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:splus|s|r)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.r",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.r"
                    }]
                  }]
                },
                "hl-ruby": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:ruby|rb|duby)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.ruby",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.ruby"
                    }]
                  }]
                },
                "hl-rust": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"rust"|'rust'|"rs"|'rs'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": null,
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.rust"
                    }]
                  }]
                },
                "hl-scala": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"scala"|'scala'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.scala",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.scala"
                    }]
                  }]
                },
                "hl-scss": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"scss"|'scss'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.scss",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.css.scss"
                    }]
                  }]
                },
                "hl-shell": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"bash"|'bash'|"sh"|'sh'|"ksh"|'ksh'|"zsh"|'zsh'|"shell"|'shell'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.shell",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.shell"
                    }]
                  }]
                },
                "hl-sql": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)sql\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.sql",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.sql"
                    }]
                  }]
                },
                "hl-swift": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"swift"|'swift'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.swift",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.swift"
                    }]
                  }]
                },
                "hl-ts": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:"typescript"|'typescript'|"ts"|'ts'))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "4": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.ts",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.ts"
                    }]
                  }]
                },
                "hl-vb-net": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)(?:vb\\.net|vbnet|lobas|oobas|sobas)\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.vb-net",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.asp.vb.net"
                    }]
                  }]
                },
                "hl-xml": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)xml\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.xml",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.xml"
                    }]
                  }]
                },
                "hl-xslt": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)xslt\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.xslt",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "text.xml.xsl"
                    }]
                  }]
                },
                "hl-yaml": {
                  "begin": `(?i)(<)(syntaxhighlight)((?:\\s+[^>]+)?(?:\\s+lang=(?:(['"]?)yaml\\4))(?:\\s+[^>]+)?)\\s*(>)`,
                  "beginCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.start.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "patterns": [{
                        "include": "text.html.basic#attribute"
                      }, {
                        "include": "$self"
                      }]
                    },
                    "5": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "end": "(?i)(</)(syntaxhighlight)\\s*(>)",
                  "endCaptures": {
                    "0": {
                      "name": "meta.tag.metadata.end.wikitext"
                    },
                    "1": {
                      "name": "punctuation.definition.tag.begin.wikitext"
                    },
                    "2": {
                      "name": "entity.name.tag.wikitext"
                    },
                    "3": {
                      "name": "punctuation.definition.tag.end.wikitext"
                    }
                  },
                  "patterns": [{
                    "begin": "(^|\\G)",
                    "contentName": "meta.embedded.block.yaml",
                    "end": "(?i)(?=</syntaxhighlight\\s*>)",
                    "patterns": [{
                      "include": "source.yaml"
                    }]
                  }]
                }
              }
            },
            "wiki-self-closed-tags": {
              "captures": {
                "1": {
                  "name": "punctuation.definition.tag.begin.wikitext"
                },
                "2": {
                  "name": "entity.name.tag.wikitext"
                },
                "3": {
                  "patterns": [{
                    "include": "text.html.basic#attribute"
                  }, {
                    "include": "$self"
                  }]
                },
                "4": {
                  "name": "punctuation.definition.tag.end.wikitext"
                }
              },
              "match": "(?i)(<)(templatestyles|ref|nowiki|onlyinclude|includeonly)(\\s+[^>]+)?\\s*(/>)",
              "name": "meta.tag.metedata.void.wikitext"
            }
          }
        }
      }
    }
  },
  "scopeName": "source.wikitext",
  "embeddedLangs": ["html", "css", "ini", "java", "lua", "make", "perl", "r", "ruby", "php", "sql", "vb", "xml", "xsl", "yaml", "bat", "clojure", "coffee", "c", "cpp", "diff", "docker", "go", "groovy", "pug", "javascript", "jsonc", "less", "objective-c", "swift", "scss", "raku", "powershell", "python", "julia", "rust", "scala", "shellscript", "typescript", "csharp", "fsharp", "dart", "handlebars", "markdown", "erlang", "elixir", "latex", "bibtex", "json"],
  "aliases": ["mediawiki", "wiki"]
});
var wikitext = [...html, ...css, ...ini, ...java, ...lua, ...make, ...perl, ...r, ...ruby, ...php, ...sql, ...vb, ...xml, ...xsl, ...yaml, ...bat, ...clojure, ...coffee, ...c, ...cpp, ...diff, ...docker, ...go, ...groovy, ...pug, ...javascript, ...jsonc, ...less, ...objective_c, ...swift, ...scss, ...raku, ...powershell, ...python, ...julia, ...rust, ...scala, ...shellscript, ...typescript, ...csharp, ...fsharp, ...dart, ...handlebars, ...markdown, ...erlang, ...elixir, ...latex, ...bibtex, ...json, lang];
export {
  wikitext as default
};
//# sourceMappingURL=wikitext-EOLFJEAE.js.map
