import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-NQ4HTGF6.js";

// node_modules/shiki/dist/langs/wenyan.mjs
var lang = Object.freeze({
  "displayName": "Wenyan",
  "name": "wenyan",
  "patterns": [{
    "include": "#keywords"
  }, {
    "include": "#constants"
  }, {
    "include": "#operators"
  }, {
    "include": "#symbols"
  }, {
    "include": "#expression"
  }, {
    "include": "#comment-blocks"
  }, {
    "include": "#comment-lines"
  }],
  "repository": {
    "comment-blocks": {
      "begin": "(注曰|疏曰|批曰)。?(「「|『)",
      "end": "(」」|』)",
      "name": "comment.block",
      "patterns": [{
        "match": "\\\\.",
        "name": "constant.character"
      }]
    },
    "comment-lines": {
      "begin": "注曰|疏曰|批曰",
      "end": "$",
      "name": "comment.line",
      "patterns": [{
        "match": "\\\\.",
        "name": "constant.character"
      }]
    },
    "constants": {
      "patterns": [{
        "match": "負|·|又|零|〇|一|二|三|四|五|六|七|八|九|十|百|千|萬|億|兆|京|垓|秭|穰|溝|澗|正|載|極|分|釐|毫|絲|忽|微|纖|沙|塵|埃|渺|漠",
        "name": "constant.numeric"
      }, {
        "match": "其|陰|陽",
        "name": "constant.language"
      }, {
        "begin": "「「|『",
        "end": "」」|』",
        "name": "string.quoted",
        "patterns": [{
          "match": "\\\\.",
          "name": "constant.character"
        }]
      }]
    },
    "expression": {
      "patterns": [{
        "include": "#variables"
      }]
    },
    "keywords": {
      "patterns": [{
        "match": "數|列|言|術|爻|物|元",
        "name": "storage.type"
      }, {
        "match": "乃行是術曰|若其不然者|乃歸空無|欲行是術|乃止是遍|若其然者|其物如是|乃得矣|之術也|必先得|是術曰|恆為是|之物也|乃得|是謂|云云|中之|為是|乃止|若非|或若|之長|其餘",
        "name": "keyword.control"
      }, {
        "match": "或云|蓋謂",
        "name": "keyword.control"
      }, {
        "match": "中有陽乎|中無陰乎|所餘幾何|不等於|不大於|不小於|等於|大於|小於|加|減|乘|除|變|以|於",
        "name": "keyword.operator"
      }, {
        "match": "不知何禍歟|不復存矣|姑妄行此|如事不諧|名之曰|吾嘗觀|之禍歟|乃作罷|吾有|今有|物之|書之|以施|昔之|是矣|之書|方悟|之義|嗚呼|之禍|有|施|曰|噫|取|今|夫|中|豈",
        "name": "keyword.other"
      }, {
        "match": "也|凡|遍|若|者|之|充|銜",
        "name": "keyword.control"
      }]
    },
    "symbols": {
      "patterns": [{
        "match": "。|、",
        "name": "punctuation.separator"
      }]
    },
    "variables": {
      "begin": "「",
      "end": "」",
      "name": "variable.other",
      "patterns": [{
        "match": "\\\\.",
        "name": "constant.character"
      }]
    }
  },
  "scopeName": "source.wenyan",
  "aliases": ["文言"]
});
var wenyan = [lang];
export {
  wenyan as default
};
//# sourceMappingURL=wenyan-DK6D42L3.js.map
