import "./chunk-WDMUDEB6.js";

// node_modules/shiki/dist/langs/jssm.mjs
var lang = Object.freeze({
  "displayName": "JSSM",
  "fileTypes": ["jssm", "jssm_state"],
  "name": "jssm",
  "patterns": [{
    "begin": "/\\*",
    "captures": {
      "0": {
        "name": "punctuation.definition.comment.mn"
      }
    },
    "comment": "block comment",
    "end": "\\*/",
    "name": "comment.block.jssm"
  }, {
    "begin": "//",
    "comment": "block comment",
    "end": "$",
    "name": "comment.line.jssm"
  }, {
    "begin": "\\${",
    "captures": {
      "0": {
        "name": "entity.name.function"
      }
    },
    "comment": "js outcalls",
    "end": "}",
    "name": "keyword.other"
  }, {
    "comment": "semver",
    "match": "([0-9]*)(\\.)([0-9]*)(\\.)([0-9]*)",
    "name": "constant.numeric"
  }, {
    "comment": "jssm language tokens",
    "match": "graph_layout(\\s*)(:)",
    "name": "constant.language.jssmLanguage"
  }, {
    "comment": "jssm language tokens",
    "match": "machine_name(\\s*)(:)",
    "name": "constant.language.jssmLanguage"
  }, {
    "comment": "jssm language tokens",
    "match": "machine_version(\\s*)(:)",
    "name": "constant.language.jssmLanguage"
  }, {
    "comment": "jssm language tokens",
    "match": "jssm_version(\\s*)(:)",
    "name": "constant.language.jssmLanguage"
  }, {
    "comment": "transitions",
    "match": "<->",
    "name": "keyword.control.transition.jssmArrow.legal_legal"
  }, {
    "comment": "transitions",
    "match": "<-",
    "name": "keyword.control.transition.jssmArrow.legal_none"
  }, {
    "comment": "transitions",
    "match": "->",
    "name": "keyword.control.transition.jssmArrow.none_legal"
  }, {
    "comment": "transitions",
    "match": "<=>",
    "name": "keyword.control.transition.jssmArrow.main_main"
  }, {
    "comment": "transitions",
    "match": "=>",
    "name": "keyword.control.transition.jssmArrow.none_main"
  }, {
    "comment": "transitions",
    "match": "<=",
    "name": "keyword.control.transition.jssmArrow.main_none"
  }, {
    "comment": "transitions",
    "match": "<~>",
    "name": "keyword.control.transition.jssmArrow.forced_forced"
  }, {
    "comment": "transitions",
    "match": "~>",
    "name": "keyword.control.transition.jssmArrow.none_forced"
  }, {
    "comment": "transitions",
    "match": "<~",
    "name": "keyword.control.transition.jssmArrow.forced_none"
  }, {
    "comment": "transitions",
    "match": "<-=>",
    "name": "keyword.control.transition.jssmArrow.legal_main"
  }, {
    "comment": "transitions",
    "match": "<=->",
    "name": "keyword.control.transition.jssmArrow.main_legal"
  }, {
    "comment": "transitions",
    "match": "<-~>",
    "name": "keyword.control.transition.jssmArrow.legal_forced"
  }, {
    "comment": "transitions",
    "match": "<~->",
    "name": "keyword.control.transition.jssmArrow.forced_legal"
  }, {
    "comment": "transitions",
    "match": "<=~>",
    "name": "keyword.control.transition.jssmArrow.main_forced"
  }, {
    "comment": "transitions",
    "match": "<~=>",
    "name": "keyword.control.transition.jssmArrow.forced_main"
  }, {
    "comment": "edge probability annotation",
    "match": "([0-9]+)%",
    "name": "constant.numeric.jssmProbability"
  }, {
    "comment": "action annotation",
    "match": "\\'[^']*\\'",
    "name": "constant.character.jssmAction"
  }, {
    "comment": "jssm label annotation",
    "match": '\\"[^"]*\\"',
    "name": "entity.name.tag.jssmLabel.doublequoted"
  }, {
    "comment": "jssm label annotation",
    "match": "([a-zA-Z0-9_.+&()#@!?,])",
    "name": "entity.name.tag.jssmLabel.atom"
  }],
  "scopeName": "source.jssm",
  "aliases": ["fsl"]
});
var jssm = [lang];
export {
  jssm as default
};
//# sourceMappingURL=jssm-EGYS34WL.js.map
