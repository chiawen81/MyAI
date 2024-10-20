import './polyfills.server.mjs';
import"./chunk-5XUXGTUW.mjs";var e=Object.freeze({displayName:"Hy",name:"hy",patterns:[{include:"#all"}],repository:{all:{patterns:[{include:"#comment"},{include:"#constants"},{include:"#keywords"},{include:"#strings"},{include:"#operators"},{include:"#keysym"},{include:"#symbol"}]},comment:{patterns:[{match:"(;).*$",name:"comment.line.hy"}]},constants:{patterns:[{match:`(?<=[\\{\\[\\(\\s])([0-9]+(\\.[0-9]+)?|(#x)[0-9a-fA-F]+|(#o)[0-7]+|(#b)[01]+)(?=[\\s;()'",\\[\\]\\{\\}])`,name:"constant.numeric.hy"}]},keysym:{match:"(?<![\\.:\\w_\\-=!@\\$%^&?\\/<>*]):[\\.:\\w_\\-=!@\\$%^&?\\/<>*]*",name:"variable.other.constant"},keywords:{patterns:[{match:"\\b(\\.|->|->>|and|match|let|await|annotate|as->|as-model|assert|assoc|break|chainc|comment|cond|continue|do|doc|#doc|([dgls])?for|set[vx]|defclass|defmain|defmacro|defmacro\\/g!|defmacro!|deftag|del|doto|eval-and-compile|eval-when-compile|first|gensym|get|global|if|if\\*|if-not|import|(de)?fn(\\/a)?|last|nonlocal|not(\\?|-in)?|or|print|(quasi)?quote|require|rest|return|cut|raise|try|unless|unpack-iterable|unpack-mapping|unquote|unquote-splice|when|while|with(\\/a)?|with-decorator|with-gensyms|xor|yield(-from)?|butlast|coll\\?|comp|complement|constantly|dec|disassemble|empty\\?|eval|every\\?|exec|float\\?|fraction|even\\?|identity|inc|instance\\?|integer\\?|interleave|interpose|iterable\\?|iterator\\?|juxt|keyword|keyword\\?|macroexpand(-1)?|mangle|merge-with|name|neg\\?|none\\?|nth|numeric\\?|odd\\?|partition|pos\\?|second|some|string\\?|symbol\\?|zero\\?|cycle|distinct|drop|drop-last|drop-while|filter|flatten|iterate|read|read-str|remove|repeat|repeatedly|take|take-nth|take-while|unmangle|False|None|True|as|in|is|py(s)?|lambda|nonlocal|not|pass|abs|all|any|ascii|bin|bool|bytearray|bytes|callable|chr|classmethod|compile|complex|delattr|dict|dir|divmod|enumerate|eval|exec|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|memoryview|min|next|object|oct|open|ord|pow|print|property|range|repr(-register)?|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip|__import__|abs|acos|angle|asin|assoc|assq|assv|atan|ceiling|cos|floor|round|sin|sqrt|tan|(?:real|imag)-part|numerator|denominatormodulo|exp|expt|remainder|quotient|lcm|call-with-(?:input|output)-file|(?:close|current)-(?:input|output)-port|with-(?:input|output)-from-file|open-(?:input|output)-file|char-(?:downcase|upcase|ready)|make-(?:polar|promise|rectangular|string|vector)|string(?:-(?:append|copy|length|ref))|vector(?:-length|-ref))[\\s\\)]",name:"keyword.control.hy"}]},operators:{patterns:[{match:"(?<=\\()\\s*(\\+=?|\\/+|\\*+|-=?|[!<>]?=|@|%|<<|>>|<|>|&|\\||\\^|~)",name:"keyword.control.hy"}]},strings:{begin:`(f?"|}(?=[^
]*?[{"]))`,end:`("|(?<=["}][^
]*?){)`,name:"string.quoted.double.hy",patterns:[{match:"\\\\.",name:"constant.character.escape.hy"}]},symbol:{match:"(?<![\\.:\\w_\\-=!@\\$%^&?/<>*#])[\\.a-zA-Z\u0391-\u03A9\u03B1-\u03C9_\\-=!@\\$%^<?/<>*#][\\.:\\w_\\-=!@\\$%^&?/<>*#]*",name:"variable.other.hy"}},scopeName:"source.hy"}),t=[e];export{t as default};
