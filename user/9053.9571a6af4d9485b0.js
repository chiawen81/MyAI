"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[9053],{9053:(a,e,t)=>{t.r(e),t.d(e,{default:()=>n});var n=[Object.freeze({displayName:"D",fileTypes:["d","di","dpp"],name:"d",patterns:[{include:"#comment"},{include:"#type"},{include:"#statement"},{include:"#expression"}],repository:{"aggregate-declaration":{patterns:[{include:"#class-declaration"},{include:"#interface-declaration"},{include:"#struct-declaration"},{include:"#union-declaration"},{include:"#mixin-template-declaration"},{include:"#template-declaration"}]},"alias-declaration":{patterns:[{begin:"\\b(alias)\\b\\s*",beginCaptures:{1:{name:"keyword.other.alias.d"}},end:";",endCaptures:{0:{name:"meta.alias.end.d"}},patterns:[{include:"#type"},{match:"=(?![=>])",name:"keyword.operator.equal.alias.d"},{include:"#expression"}]}]},"align-attribute":{patterns:[{begin:"\\balign\\s*\\(",end:"\\)",name:"storage.modifier.align-attribute.d",patterns:[{include:"#integer-literal"}]},{match:"\\balign\\b\\s*(?!\\()",name:"storage.modifier.align-attribute.d"}]},"alternate-wysiwyg-string":{patterns:[{begin:"`",end:"`[cwd]?",name:"string.alternate-wysiwyg-string.d",patterns:[{include:"#wysiwyg-characters"}]}]},"arbitrary-delimited-string":{begin:'q"(\\w+)',end:'\\1"',name:"string.delimited.d",patterns:[{match:".",name:"string.delimited.d"}]},"arithmetic-expression":{patterns:[{match:"\\^\\^|\\+\\+|--|(?<!/)\\+(?!/)|-|~|(?<!/)\\*(?!/)|(?<![+*/])/(?![+*/])|%",name:"keyword.operator.numeric.d"}]},"asm-instruction":{patterns:[{include:"#comment"},{match:"\\b(align|even|naked|db|ds|di|dl|df|dd|de)\\b|:",name:"keyword.asm-instruction.d"},{match:"\\b__LOCAL_SIZE\\b",name:"constant.language.assembly.d"},{match:"\\b(offsetof|seg)\\b",name:"support.type.assembly.d"},{include:"#asm-type-prefix"},{include:"#asm-primary-expression"},{include:"#operands"},{include:"#register"},{include:"#register-64"},{include:"#float-literal"},{include:"#integer-literal"},{include:"#identifier"}]},"asm-statement":{patterns:[{begin:"\\b(asm)\\b\\s*(?=\\{)",captures:{1:{name:"keyword.control.switch.d"}},end:"(?<=\\})",patterns:[{begin:"\\{",beginCaptures:{0:{name:"keyword.control.asm.begin.d"}},contentName:"gfm.markup.raw.assembly.d",end:"\\}",endCaptures:{0:{name:"keyword.control.asm.end.d"}},patterns:[{include:"#asm-instruction"}]}]}]},"asm-type-prefix":{patterns:[{match:"\\b((near\\s+ptr)|(far\\s+ptr)|(byte\\s+ptr)|(short\\s+ptr)|(int\\s+ptr)|(word\\s+ptr)|(dword\\s+ptr)|(qword\\s+ptr)|(float\\s+ptr)|(double\\s+ptr)|(real\\s+ptr))\\b",name:"support.type.asm-type-prefix.d"}]},"assert-expression":{patterns:[{begin:"\\bassert\\s*\\(",beginCaptures:{0:{name:"keyword.other.assert.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.assert.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]}]},"assign-expression":{patterns:[{match:">>>=|\\^\\^=|>>=|<<=|~=|\\^=|\\|=|&=|%=|/=|\\*=|-=|\\+=|=(?!>)",name:"keyword.operator.assign.d"}]},attribute:{patterns:[{include:"#linkage-attribute"},{include:"#align-attribute"},{include:"#deprecated-attribute"},{include:"#protection-attribute"},{include:"#pragma"},{match:"\\b(static|extern|abstract|final|override|synchronized|auto|scope|const|immutable|inout|shared|__gshared|nothrow|pure|ref)\\b",name:"entity.other.attribute-name.d"},{include:"#property"}]},"base-type":{patterns:[{match:"\\b(auto|bool|byte|ubyte|short|ushort|int|uint|long|ulong|char|wchar|dchar|float|double|real|ifloat|idouble|ireal|cfloat|cdouble|creal|void|noreturn)\\b",name:"storage.type.basic-type.d"},{match:"\\b(string|wstring|dstring|size_t|ptrdiff_t)\\b(?!\\s*=)",name:"storage.type.basic-type.d"}]},"binary-integer":{patterns:[{match:"\\b(0b|0B)[0-1_]+(Lu|LU|uL|UL|L|u|U)?\\b",name:"constant.numeric.integer.binary.d"}]},"bitwise-expression":{patterns:[{match:"\\||\\^|&",name:"keyword.operator.bitwise.d"}]},"block-comment":{patterns:[{begin:"/((?!\\*/)\\*)+",beginCaptures:{0:{name:"comment.block.begin.d"}},end:"\\*+/",endCaptures:{0:{name:"comment.block.end.d"}},name:"comment.block.content.d"}]},"break-statement":{patterns:[{match:"\\bbreak\\b",name:"keyword.control.break.d"}]},"case-statement":{patterns:[{begin:"\\b(case)\\b\\s*",beginCaptures:{1:{name:"keyword.control.case.range.d"}},end:":",endCaptures:{0:{name:"meta.case.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]}]},"cast-expression":{patterns:[{begin:"\\b(cast)\\s*(\\()",beginCaptures:{1:{name:"keyword.operator.cast.d"},2:{name:"keyword.operator.cast.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.operator.cast.end.d"}},patterns:[{include:"#type"},{include:"#extended-type"}]}]},catch:{patterns:[{begin:"\\b(catch)\\b\\s*(?=\\()",captures:{1:{name:"keyword.control.catch.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]}]},catches:{patterns:[{include:"#catch"}]},character:{patterns:[{match:"[\\w\\s]+",name:"string.character.d"}]},"character-literal":{patterns:[{begin:"'",end:"'",name:"string.character-literal.d",patterns:[{include:"#character"},{include:"#escape-sequence"}]}]},"class-declaration":{patterns:[{captures:{1:{name:"storage.type.class.d"},2:{name:"entity.name.class.d"}},match:"\\b(class)(?:\\s+([A-Za-z_][\\w_\\d]*))?\\b"},{include:"#protection-attribute"},{include:"#class-members"}]},"class-members":{patterns:[{include:"#shared-static-constructor"},{include:"#shared-static-destructor"},{include:"#constructor"},{include:"#destructor"},{include:"#postblit"},{include:"#invariant"},{include:"#member-function-attribute"}]},colon:{patterns:[{match:":",name:"support.type.colon.d"}]},comma:{patterns:[{match:",",name:"keyword.operator.comma.d"}]},comment:{patterns:[{include:"#block-comment"},{include:"#line-comment"},{include:"#nesting-block-comment"}]},condition:{patterns:[{include:"#version-condition"},{include:"#debug-condition"},{include:"#static-if-condition"}]},"conditional-declaration":{patterns:[{include:"#condition"},{match:"\\belse\\b",name:"keyword.control.else.d"},{include:"#colon"},{include:"#decl-defs"}]},"conditional-expression":{patterns:[{match:"\\s(\\?|:)\\s",name:"keyword.operator.ternary.d"}]},"conditional-statement":{patterns:[{include:"#condition"},{include:"#no-scope-non-empty-statement"},{match:"\\belse\\b",name:"keyword.control.else.d"}]},constructor:{patterns:[{match:"\\bthis\\b",name:"entity.name.function.constructor.d"}]},"continue-statement":{patterns:[{match:"\\bcontinue\\b",name:"keyword.control.continue.d"}]},"debug-condition":{patterns:[{begin:"\\bdebug\\s*\\(",beginCaptures:{0:{name:"keyword.other.debug.identifier.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.debug.identifier.end.d"}},patterns:[{include:"#integer-literal"},{include:"#identifier"}]},{match:"\\bdebug\\b\\s*(?!\\()",name:"keyword.other.debug.plain.d"}]},"debug-specification":{patterns:[{match:"\\bdebug\\b\\s*(?==)",name:"keyword.other.debug-specification.d"}]},"decimal-float":{patterns:[{match:"\\b((\\.[0-9])|(0\\.)|(([1-9]|(0[1-9_]))[0-9_]*\\.))[0-9_]*((e-|E-|e\\+|E\\+|e|E)[0-9][0-9_]*)?[LfF]?i?\\b",name:"constant.numeric.float.decimal.d"}]},"decimal-integer":{patterns:[{match:"\\b(0(?=[^\\dxXbB]))|([1-9][0-9_]*)(Lu|LU|uL|UL|L|u|U)?\\b",name:"constant.numeric.integer.decimal.d"}]},declaration:{patterns:[{include:"#alias-declaration"},{include:"#aggregate-declaration"},{include:"#enum-declaration"},{include:"#import-declaration"},{include:"#storage-class"},{include:"#void-initializer"},{include:"#mixin-declaration"}]},"declaration-statement":{patterns:[{include:"#declaration"}]},"default-statement":{patterns:[{captures:{1:{name:"keyword.control.case.default.d"},2:{name:"meta.default.colon.d"}},match:"\\b(default)\\s*(:)"}]},"delete-expression":{patterns:[{match:"\\bdelete\\s+",name:"keyword.other.delete.d"}]},"delimited-string":{begin:'q"',end:'"',name:"string.delimited.d",patterns:[{include:"#delimited-string-bracket"},{include:"#delimited-string-parens"},{include:"#delimited-string-angle-brackets"},{include:"#delimited-string-braces"}]},"delimited-string-angle-brackets":{patterns:[{begin:"<",end:">",name:"constant.character.angle-brackets.d",patterns:[{include:"#wysiwyg-characters"}]}]},"delimited-string-braces":{patterns:[{begin:"\\{",end:"\\}",name:"constant.character.delimited.braces.d",patterns:[{include:"#wysiwyg-characters"}]}]},"delimited-string-bracket":{patterns:[{begin:"\\[",end:"\\]",name:"constant.characters.delimited.brackets.d",patterns:[{include:"#wysiwyg-characters"}]}]},"delimited-string-parens":{patterns:[{begin:"\\(",end:"\\)",name:"constant.character.delimited.parens.d",patterns:[{include:"#wysiwyg-characters"}]}]},"deprecated-statement":{patterns:[{begin:"\\bdeprecated\\s*\\(",beginCaptures:{0:{name:"keyword.other.deprecated.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.deprecated.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]},{match:"\\bdeprecated\\b\\s*(?!\\()",name:"keyword.other.deprecated.plain.d"}]},destructor:{patterns:[{match:"\\b~this\\s*\\(\\s*\\)",name:"entity.name.class.destructor.d"}]},"do-statement":{patterns:[{match:"\\bdo\\b",name:"keyword.control.do.d"}]},"double-quoted-characters":{patterns:[{include:"#character"},{include:"#end-of-line"},{include:"#escape-sequence"}]},"double-quoted-string":{patterns:[{begin:'"',end:'"[cwd]?',name:"string.double-quoted-string.d",patterns:[{include:"#double-quoted-characters"}]}]},"end-of-line":{patterns:[{match:"\\n+",name:"string.character.end-of-line.d"}]},"enum-declaration":{patterns:[{begin:"\\b(enum)\\b\\s+(?=.*[=;])",beginCaptures:{1:{name:"storage.type.enum.d"}},end:"([A-Za-z_][\\w_\\d]*)\\s*(?=;|=|\\()(;)?",endCaptures:{1:{name:"entity.name.type.enum.d"},2:{name:"meta.enum.end.d"}},patterns:[{include:"#type"},{include:"#extended-type"},{match:"=(?![=>])",name:"keyword.operator.equal.alias.d"}]}]},eof:{patterns:[{begin:"__EOF__",beginCaptures:{0:{name:"comment.block.documentation.eof.start.d"}},end:"(?!__NEVER_MATCH__)__NEVER_MATCH__",name:"text.eof.d"}]},equal:{patterns:[{match:"=(?![=>])",name:"keyword.operator.equal.d"}]},"escape-sequence":{patterns:[{match:"(\\\\(?:quot|amp|lt|gt|OElig|oelig|Scaron|scaron|Yuml|circ|tilde|ensp|emsp|thinsp|zwnj|zwj|lrm|rlm|ndash|mdash|lsquo|rsquo|sbquo|ldquo|rdquo|bdquo|dagger|Dagger|permil|lsaquo|rsaquo|euro|nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|Aelig|Ccedil|egrave|eacute|ecirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|fnof|Alpha|Beta|Gamma|Delta|Epsilon|Zeta|Eta|Theta|Iota|Kappa|Lambda|Mu|Nu|Xi|Omicron|Pi|Rho|Sigma|Tau|Upsilon|Phi|Chi|Psi|Omega|alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigmaf|sigma|tau|upsilon|phi|chi|psi|omega|thetasym|upsih|piv|bull|hellip|prime|Prime|oline|frasl|weierp|image|real|trade|alefsym|larr|uarr|rarr|darr|harr|crarr|lArr|uArr|rArr|dArr|hArr|forall|part|exist|empty|nabla|isin|notin|ni|prod|sum|minux|lowast|radic|prop|infin|ang|and|or|cap|cup|int|there4|sim|cong|asymp|ne|equiv|le|ge|sub|sup|nsub|sube|supe|oplus|otimes|perp|sdot|lceil|rceil|lfloor|rfloor|loz|spades|clubs|hearts|diams|lang|rang))",name:"constant.character.escape-sequence.entity.d"},{match:"(\\\\x[0-9a-fA-F_]{2}|\\\\u[0-9a-fA-F_]{4}|\\\\U[0-9a-fA-F_]{8}|\\\\[0-7]{1,3})",name:"constant.character.escape-sequence.number.d"},{match:"(\\\\t|\\\\'|\\\\\"|\\\\\\?|\\\\0|\\\\a|\\\\b|\\\\f|\\\\n|\\\\r|\\\\v|\\\\\\\\)",name:"constant.character.escape-sequence.d"}]},expression:{patterns:[{include:"#index-expression"},{include:"#expression-no-index"}]},"expression-no-index":{patterns:[{include:"#function-literal"},{include:"#assert-expression"},{include:"#assign-expression"},{include:"#mixin-expression"},{include:"#import-expression"},{include:"#traits-expression"},{include:"#is-expression"},{include:"#typeid-expression"},{include:"#shift-expression"},{include:"#logical-expression"},{include:"#rel-expression"},{include:"#bitwise-expression"},{include:"#identity-expression"},{include:"#in-expression"},{include:"#conditional-expression"},{include:"#arithmetic-expression"},{include:"#new-expression"},{include:"#delete-expression"},{include:"#cast-expression"},{include:"#type-specialization"},{include:"#comma"},{include:"#special-keyword"},{include:"#functions"},{include:"#type"},{include:"#parentheses-expression"},{include:"#lexical"}]},"extended-type":{patterns:[{match:"\\b((\\.\\s*)?[_\\w][_\\d\\w]*)(\\s*\\.\\s*[_\\w][_\\d\\w]*)*\\b",name:"entity.name.type.d"},{begin:"\\[",beginCaptures:{0:{name:"storage.type.array.expression.begin.d"}},end:"\\]",endCaptures:{0:{name:"storage.type.array.expression.end.d"}},patterns:[{match:"\\.\\.|\\$",name:"keyword.operator.slice.d"},{include:"#type"},{include:"#expression"}]}]},"final-switch-statement":{patterns:[{begin:"\\b(final\\s+switch)\\b\\s*",captures:{1:{name:"keyword.control.final.switch.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]}]},"finally-statement":{patterns:[{match:"\\bfinally\\b",name:"keyword.control.throw.d"}]},"float-literal":{patterns:[{include:"#decimal-float"},{include:"#hexadecimal-float"}]},"for-statement":{patterns:[{begin:"\\b(for)\\b\\s*",captures:{1:{name:"keyword.control.for.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]}]},"foreach-reverse-statement":{patterns:[{begin:"\\b(foreach_reverse)\\b\\s*",captures:{1:{name:"keyword.control.foreach_reverse.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{match:";",name:"keyword.operator.semi-colon.d"},{include:"source.d"}]}]}]},"foreach-statement":{patterns:[{begin:"\\b(foreach)\\b\\s*",captures:{1:{name:"keyword.control.foreach.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{match:";",name:"keyword.operator.semi-colon.d"},{include:"source.d"}]}]}]},"function-attribute":{patterns:[{match:"\\b(nothrow|pure)\\b",name:"storage.type.modifier.function-attribute.d"},{include:"#property"}]},"function-body":{patterns:[{include:"#in-statement"},{include:"#out-statement"},{include:"#block-statement"}]},"function-literal":{patterns:[{match:"=>",name:"keyword.operator.lambda.d"},{match:"\\b(function|delegate)\\b",name:"keyword.other.function-literal.d"},{begin:"\\b([_\\w][_\\d\\w]*)\\s*(=>)",beginCaptures:{1:{name:"variable.parameter.d"},2:{name:"meta.lexical.token.symbolic.d"}},end:"(?=[\\);,\\]}])",patterns:[{include:"source.d"}]},{begin:"(?<=\\)|\\()(\\s*)({)",beginCaptures:{1:{name:"source.d"},2:{name:"source.d"}},end:"}",patterns:[{include:"source.d"}]}]},"function-prelude":{patterns:[{match:"(?!typeof|typeid)((\\.\\s*)?[_\\w][_\\d\\w]*)(\\s*\\.\\s*[_\\w][_\\d\\w]*)*\\s*(?=\\()",name:"entity.name.function.d"}]},functions:{patterns:[{include:"#function-attribute"},{include:"#function-prelude"}]},"goto-statement":{patterns:[{match:"\\bgoto\\s+default\\b",name:"keyword.control.goto.d"},{match:"\\bgoto\\s+case\\b",name:"keyword.control.goto.d"},{match:"\\bgoto\\b",name:"keyword.control.goto.d"}]},"hex-string":{patterns:[{begin:'x"',end:'"[cwd]?',name:"string.hex-string.d",patterns:[{match:"[a-fA-F0-9_s]+",name:"constant.character.hex-string.d"}]}]},"hexadecimal-float":{patterns:[{match:"\\b0[xX][0-9a-fA-F_]*(\\.[0-9a-fA-F_]*)?(p-|P-|p\\+|P\\+|p|P)[0-9][0-9_]*[LfF]?i?\\b",name:"constant.numeric.float.hexadecimal.d"}]},"hexadecimal-integer":{patterns:[{match:"\\b(0x|0X)([0-9a-fA-F][0-9a-fA-F_]*)(Lu|LU|uL|UL|L|u|U)?\\b",name:"constant.numeric.integer.hexadecimal.d"}]},identifier:{patterns:[{match:"\\b((\\.\\s*)?[_\\w][_\\d\\w]*)(\\s*\\.\\s*[_\\w][_\\d\\w]*)*\\b",name:"variable.d"}]},"identifier-list":{patterns:[{match:",",name:"keyword.other.comma.d"},{include:"#identifier"}]},"identity-expression":{patterns:[{match:"\\b(is|!is)\\b",name:"keyword.operator.identity.d"}]},"if-statement":{patterns:[{begin:"\\b(if)\\b\\s*",captures:{1:{name:"keyword.control.if.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]},{match:"\\belse\\b\\s*",name:"keyword.control.else.d"}]},"import-declaration":{patterns:[{begin:"\\b(static\\s+)?(import)\\s+(?!\\()",beginCaptures:{1:{name:"keyword.package.import.d"},2:{name:"keyword.package.import.d"}},end:";",endCaptures:{0:{name:"meta.import.end.d"}},patterns:[{include:"#import-identifier"},{include:"#comma"},{include:"#comment"}]}]},"import-expression":{patterns:[{begin:"\\b(import)\\s*(\\()",beginCaptures:{1:{name:"keyword.other.import.d"},2:{name:"keyword.other.import.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.import.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]}]},"import-identifier":{patterns:[{match:"([_a-zA-Z][_\\d\\w]*)(\\s*\\.\\s*[_a-zA-Z][_\\d\\w]*)*",name:"variable.parameter.import.d"}]},"in-expression":{patterns:[{match:"\\b(in|!in)\\b",name:"keyword.operator.in.d"}]},"in-statement":{patterns:[{match:"\\bin\\b",name:"keyword.control.in.d"}]},"index-expression":{patterns:[{begin:"\\[",end:"\\]",patterns:[{match:"\\.\\.|\\$",name:"keyword.operator.slice.d"},{include:"#expression-no-index"}]}]},"integer-literal":{patterns:[{include:"#decimal-integer"},{include:"#binary-integer"},{include:"#hexadecimal-integer"}]},"interface-declaration":{patterns:[{captures:{1:{name:"storage.type.interface.d"},2:{name:"entity.name.type.interface.d"}},match:"\\b(interface)(?:\\s+([A-Za-z_][\\w_\\d]*))?\\b"}]},invariant:{patterns:[{match:"\\binvariant\\s*\\(\\s*\\)",name:"entity.name.class.invariant.d"}]},"is-expression":{patterns:[{begin:"\\bis\\s*\\(",beginCaptures:{0:{name:"keyword.token.is.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.token.is.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]}]},keyword:{patterns:[{match:"\\babstract\\b",name:"keyword.token.abstract.d"},{match:"\\balias\\b",name:"keyword.token.alias.d"},{match:"\\balign\\b",name:"keyword.token.align.d"},{match:"\\basm\\b",name:"keyword.token.asm.d"},{match:"\\bassert\\b",name:"keyword.token.assert.d"},{match:"\\bauto\\b",name:"keyword.token.auto.d"},{match:"\\bbool\\b",name:"keyword.token.bool.d"},{match:"\\bbreak\\b",name:"keyword.token.break.d"},{match:"\\bbyte\\b",name:"keyword.token.byte.d"},{match:"\\bcase\\b",name:"keyword.token.case.d"},{match:"\\bcast\\b",name:"keyword.token.cast.d"},{match:"\\bcatch\\b",name:"keyword.token.catch.d"},{match:"\\bcdouble\\b",name:"keyword.token.cdouble.d"},{match:"\\bcent\\b",name:"keyword.token.cent.d"},{match:"\\bcfloat\\b",name:"keyword.token.cfloat.d"},{match:"\\bchar\\b",name:"keyword.token.char.d"},{match:"\\bclass\\b",name:"keyword.token.class.d"},{match:"\\bconst\\b",name:"keyword.token.const.d"},{match:"\\bcontinue\\b",name:"keyword.token.continue.d"},{match:"\\bcreal\\b",name:"keyword.token.creal.d"},{match:"\\bdchar\\b",name:"keyword.token.dchar.d"},{match:"\\bdebug\\b",name:"keyword.token.debug.d"},{match:"\\bdefault\\b",name:"keyword.token.default.d"},{match:"\\bdelegate\\b",name:"keyword.token.delegate.d"},{match:"\\bdelete\\b",name:"keyword.token.delete.d"},{match:"\\bdeprecated\\b",name:"keyword.token.deprecated.d"},{match:"\\bdo\\b",name:"keyword.token.do.d"},{match:"\\bdouble\\b",name:"keyword.token.double.d"},{match:"\\belse\\b",name:"keyword.token.else.d"},{match:"\\benum\\b",name:"keyword.token.enum.d"},{match:"\\bexport\\b",name:"keyword.token.export.d"},{match:"\\bextern\\b",name:"keyword.token.extern.d"},{match:"\\bfalse\\b",name:"constant.language.boolean.false.d"},{match:"\\bfinal\\b",name:"keyword.token.final.d"},{match:"\\bfinally\\b",name:"keyword.token.finally.d"},{match:"\\bfloat\\b",name:"keyword.token.float.d"},{match:"\\bfor\\b",name:"keyword.token.for.d"},{match:"\\bforeach\\b",name:"keyword.token.foreach.d"},{match:"\\bforeach_reverse\\b",name:"keyword.token.foreach_reverse.d"},{match:"\\bfunction\\b",name:"keyword.token.function.d"},{match:"\\bgoto\\b",name:"keyword.token.goto.d"},{match:"\\bidouble\\b",name:"keyword.token.idouble.d"},{match:"\\bif\\b",name:"keyword.token.if.d"},{match:"\\bifloat\\b",name:"keyword.token.ifloat.d"},{match:"\\bimmutable\\b",name:"keyword.token.immutable.d"},{match:"\\bimport\\b",name:"keyword.token.import.d"},{match:"\\bin\\b",name:"keyword.token.in.d"},{match:"\\binout\\b",name:"keyword.token.inout.d"},{match:"\\bint\\b",name:"keyword.token.int.d"},{match:"\\binterface\\b",name:"keyword.token.interface.d"},{match:"\\binvariant\\b",name:"keyword.token.invariant.d"},{match:"\\bireal\\b",name:"keyword.token.ireal.d"},{match:"\\bis\\b",name:"keyword.token.is.d"},{match:"\\blazy\\b",name:"keyword.token.lazy.d"},{match:"\\blong\\b",name:"keyword.token.long.d"},{match:"\\bmacro\\b",name:"keyword.token.macro.d"},{match:"\\bmixin\\b",name:"keyword.token.mixin.d"},{match:"\\bmodule\\b",name:"keyword.token.module.d"},{match:"\\bnew\\b",name:"keyword.token.new.d"},{match:"\\bnothrow\\b",name:"keyword.token.nothrow.d"},{match:"\\bnull\\b",name:"constant.language.null.d"},{match:"\\bout\\b",name:"keyword.token.out.d"},{match:"\\boverride\\b",name:"keyword.token.override.d"},{match:"\\bpackage\\b",name:"keyword.token.package.d"},{match:"\\bpragma\\b",name:"keyword.token.pragma.d"},{match:"\\bprivate\\b",name:"keyword.token.private.d"},{match:"\\bprotected\\b",name:"keyword.token.protected.d"},{match:"\\bpublic\\b",name:"keyword.token.public.d"},{match:"\\bpure\\b",name:"keyword.token.pure.d"},{match:"\\breal\\b",name:"keyword.token.real.d"},{match:"\\bref\\b",name:"keyword.token.ref.d"},{match:"\\breturn\\b",name:"keyword.token.return.d"},{match:"\\bscope\\b",name:"keyword.token.scope.d"},{match:"\\bshared\\b",name:"keyword.token.shared.d"},{match:"\\bshort\\b",name:"keyword.token.short.d"},{match:"\\bstatic\\b",name:"keyword.token.static.d"},{match:"\\bstruct\\b",name:"keyword.token.struct.d"},{match:"\\bsuper\\b",name:"keyword.token.super.d"},{match:"\\bswitch\\b",name:"keyword.token.switch.d"},{match:"\\bsynchronized\\b",name:"keyword.token.synchronized.d"},{match:"\\btemplate\\b",name:"keyword.token.template.d"},{match:"\\bthis\\b",name:"keyword.token.this.d"},{match:"\\bthrow\\b",name:"keyword.token.throw.d"},{match:"\\btrue\\b",name:"constant.language.boolean.true.d"},{match:"\\btry\\b",name:"keyword.token.try.d"},{match:"\\btypedef\\b",name:"keyword.token.typedef.d"},{match:"\\btypeid\\b",name:"keyword.token.typeid.d"},{match:"\\btypeof\\b",name:"keyword.token.typeof.d"},{match:"\\bubyte\\b",name:"keyword.token.ubyte.d"},{match:"\\bucent\\b",name:"keyword.token.ucent.d"},{match:"\\buint\\b",name:"keyword.token.uint.d"},{match:"\\bulong\\b",name:"keyword.token.ulong.d"},{match:"\\bunion\\b",name:"keyword.token.union.d"},{match:"\\bunittest\\b",name:"keyword.token.unittest.d"},{match:"\\bushort\\b",name:"keyword.token.ushort.d"},{match:"\\bversion\\b",name:"keyword.token.version.d"},{match:"\\bvoid\\b",name:"keyword.token.void.d"},{match:"\\bvolatile\\b",name:"keyword.token.volatile.d"},{match:"\\bwchar\\b",name:"keyword.token.wchar.d"},{match:"\\bwhile\\b",name:"keyword.token.while.d"},{match:"\\bwith\\b",name:"keyword.token.with.d"},{match:"\\b__FILE__\\b",name:"keyword.token.__FILE__.d"},{match:"\\b__MODULE__\\b",name:"keyword.token.__MODULE__.d"},{match:"\\b__LINE__\\b",name:"keyword.token.__LINE__.d"},{match:"\\b__FUNCTION__\\b",name:"keyword.token.__FUNCTION__.d"},{match:"\\b__PRETTY_FUNCTION__\\b",name:"keyword.token.__PRETTY_FUNCTION__.d"},{match:"\\b__gshared\\b",name:"keyword.token.__gshared.d"},{match:"\\b__traits\\b",name:"keyword.token.__traits.d"},{match:"\\b__vector\\b",name:"keyword.token.__vector.d"},{match:"\\b__parameters\\b",name:"keyword.token.__parameters.d"}]},"labeled-statement":{patterns:[{match:"\\b(?!abstract|alias|align|asm|assert|auto|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|in|inout|int|interface|invariant|ireal|is|lazy|long|macro|mixin|module|new|nothrow|noreturn|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__FILE__|__MODULE__|__LINE__|__FUNCTION__|__PRETTY_FUNCTION__|__gshared|__traits|__vector|__parameters)[a-zA-Z_][a-zA-Z_0-9]*\\s*:",name:"entity.name.d"}]},lexical:{patterns:[{include:"#comment"},{include:"#string-literal"},{include:"#character-literal"},{include:"#float-literal"},{include:"#integer-literal"},{include:"#eof"},{include:"#special-tokens"},{include:"#special-token-sequence"},{include:"#keyword"},{include:"#identifier"}]},"line-comment":{patterns:[{match:"//+.*$",name:"comment.line.d"}]},"linkage-attribute":{patterns:[{begin:"\\bextern\\s*\\(\\s*C\\+\\+\\s*,",beginCaptures:{0:{name:"keyword.other.extern.cplusplus.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.extern.cplusplus.end.d"}},patterns:[{include:"#identifier"},{include:"#comma"}]},{begin:"\\bextern\\s*\\(",beginCaptures:{0:{name:"keyword.other.extern.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.extern.end.d"}},patterns:[{include:"#linkage-type"}]}]},"linkage-type":{patterns:[{match:"C|C\\+\\+|D|Windows|Pascal|System",name:"storage.modifier.linkage-type.d"}]},"logical-expression":{patterns:[{match:"\\|\\||&&|==|!=|!",name:"keyword.operator.logical.d"}]},"member-function-attribute":{patterns:[{match:"\\b(const|immutable|inout|shared)\\b",name:"storage.type.modifier.member-function-attribute"}]},"mixin-declaration":{patterns:[{begin:"\\bmixin\\s*\\(",beginCaptures:{0:{name:"keyword.mixin.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.mixin.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]}]},"mixin-expression":{patterns:[{begin:"\\bmixin\\s*\\(",beginCaptures:{0:{name:"keyword.other.mixin.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.mixin.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]}]},"mixin-statement":{patterns:[{begin:"\\bmixin\\s*\\(",beginCaptures:{0:{name:"keyword.control.mixin.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.control.mixin.end.d"}},patterns:[{include:"#comment"},{include:"#expression"},{include:"#comma"}]}]},"mixin-template-declaration":{patterns:[{captures:{1:{name:"storage.type.mixintemplate.d"},2:{name:"entity.name.type.mixintemplate.d"}},match:"\\b(mixin\\s*template)(?:\\s+([A-Za-z_][\\w_\\d]*))?\\b"}]},module:{packages:[{import:"#module-declaration"}]},"module-declaration":{patterns:[{begin:"\\b(module)\\s+",beginCaptures:{1:{name:"keyword.package.module.d"}},end:";",endCaptures:{0:{name:"meta.module.end.d"}},patterns:[{include:"#module-identifier"},{include:"#comment"}]}]},"module-identifier":{patterns:[{match:"([_a-zA-Z][_\\d\\w]*)(\\s*\\.\\s*[_a-zA-Z][_\\d\\w]*)*",name:"variable.parameter.module.d"}]},"nesting-block-comment":{patterns:[{begin:"/((?!\\+/)\\+)+",beginCaptures:{0:{name:"comment.block.documentation.begin.d"}},end:"\\++/",endCaptures:{0:{name:"comment.block.documentation.end.d"}},name:"comment.block.documentation.content.d",patterns:[{include:"#nesting-block-comment"}]}]},"new-expression":{patterns:[{match:"\\bnew\\s+",name:"keyword.other.new.d"}]},"non-block-statement":{patterns:[{include:"#module-declaration"},{include:"#labeled-statement"},{include:"#if-statement"},{include:"#while-statement"},{include:"#do-statement"},{include:"#for-statement"},{include:"#static-foreach"},{include:"#static-foreach-reverse"},{include:"#foreach-statement"},{include:"#foreach-reverse-statement"},{include:"#switch-statement"},{include:"#final-switch-statement"},{include:"#case-statement"},{include:"#default-statement"},{include:"#continue-statement"},{include:"#break-statement"},{include:"#return-statement"},{include:"#goto-statement"},{include:"#with-statement"},{include:"#synchronized-statement"},{include:"#try-statement"},{include:"#catches"},{include:"#scope-guard-statement"},{include:"#throw-statement"},{include:"#finally-statement"},{include:"#asm-statement"},{include:"#pragma-statement"},{include:"#mixin-statement"},{include:"#conditional-statement"},{include:"#static-assert"},{include:"#deprecated-statement"},{include:"#unit-test"},{include:"#declaration-statement"}]},operands:{patterns:[{match:"\\?|:",name:"keyword.operator.ternary.assembly.d"},{match:"\\]|\\[",name:"keyword.operator.bracket.assembly.d"},{match:">>>|\\|\\||&&|==|!=|<=|>=|<<|>>|\\||\\^|&|<|>|\\+|-|\\*|/|%|~|!",name:"keyword.operator.assembly.d"}]},"out-statement":{patterns:[{begin:"\\bout\\s*\\(",beginCaptures:{0:{name:"keyword.control.out.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.control.out.end.d"}},patterns:[{include:"#identifier"}]},{match:"\\bout\\b",name:"keyword.control.out.d"}]},"parentheses-expression":{patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"#expression"}]}]},postblit:{patterns:[{match:"\\bthis\\s*\\(\\s*this\\s*\\)\\s",name:"entity.name.class.postblit.d"}]},pragma:{patterns:[{match:"\\bpragma\\s*\\(\\s*[_\\w][_\\d\\w]*\\s*\\)",name:"keyword.other.pragma.d"},{begin:"\\bpragma\\s*\\(\\s*[_\\w][_\\d\\w]*\\s*,",end:"\\)",name:"keyword.other.pragma.d",patterns:[{include:"#expression"}]},{match:"^#!.+",name:"gfm.markup.header.preprocessor.script-tag.d"}]},"pragma-statement":{patterns:[{include:"#pragma"}]},property:{patterns:[{match:"@(property|safe|trusted|system|disable|nogc)\\b",name:"entity.name.tag.property.d"},{include:"#user-defined-attribute"}]},"protection-attribute":{patterns:[{match:"\\b(private|package|protected|public|export)\\b",name:"keyword.other.protections.d"}]},register:{patterns:[{match:"\\b(XMM0|XMM1|XMM2|XMM3|XMM4|XMM5|XMM6|XMM7|MM0|MM1|MM2|MM3|MM4|MM5|MM6|MM7|ST\\(0\\)|ST\\(1\\)|ST\\(2\\)|ST\\(3\\)|ST\\(4\\)|ST\\(5\\)|ST\\(6\\)|ST\\(7\\)|ST|TR1|TR2|TR3|TR4|TR5|TR6|TR7|DR0|DR1|DR2|DR3|DR4|DR5|DR6|DR7|CR0|CR2|CR3|CR4|EAX|EBX|ECX|EDX|EBP|ESP|EDI|ESI|AL|AH|AX|BL|BH|BX|CL|CH|CX|DL|DH|DX|BP|SP|DI|SI|ES|CS|SS|DS|GS|FS)\\b",name:"storage.type.assembly.register.d"}]},"register-64":{patterns:[{match:"\\b(RAX|RBX|RCX|RDX|BPL|RBP|SPL|RSP|DIL|RDI|SIL|RSI|R8B|R8W|R8D|R8|R9B|R9W|R9D|R9|R10B|R10W|R10D|R10|R11B|R11W|R11D|R11|R12B|R12W|R12D|R12|R13B|R13W|R13D|R13|R14B|R14W|R14D|R14|R15B|R15W|R15D|R15|XMM8|XMM9|XMM10|XMM11|XMM12|XMM13|XMM14|XMM15|YMM0|YMM1|YMM2|YMM3|YMM4|YMM5|YMM6|YMM7|YMM8|YMM9|YMM10|YMM11|YMM12|YMM13|YMM14|YMM15)\\b",name:"storage.type.assembly.register-64.d"}]},"rel-expression":{patterns:[{match:"!<>=|!<>|<>=|!>=|!<=|<=|>=|<>|!>|!<|<|>",name:"keyword.operator.rel.d"}]},"return-statement":{patterns:[{match:"\\breturn\\b",name:"keyword.control.return.d"}]},"scope-guard-statement":{patterns:[{match:"\\bscope\\s*\\((exit|success|failure)\\)",name:"keyword.control.scope.d"}]},"semi-colon":{patterns:[{match:";",name:"meta.statement.end.d"}]},"shared-static-constructor":{patterns:[{match:"\\b(shared\\s+)?static\\s+this\\s*\\(\\s*\\)",name:"entity.name.class.constructor.shared-static.d"},{include:"#function-body"}]},"shared-static-destructor":{patterns:[{match:"\\b(shared\\s+)?static\\s+~this\\s*\\(\\s*\\)",name:"entity.name.class.destructor.static.d"}]},"shift-expression":{patterns:[{match:"<<|>>|>>>",name:"keyword.operator.shift.d"},{include:"#add-expression"}]},"special-keyword":{patterns:[{match:"\\b(__FILE__|__FILE_FULL_PATH__|__MODULE__|__LINE__|__FUNCTION__|__PRETTY_FUNCTION__)\\b",name:"constant.language.special-keyword.d"}]},"special-token-sequence":{patterns:[{match:"#\\s*line.*",name:"gfm.markup.italic.special-token-sequence.d"}]},"special-tokens":{patterns:[{match:"\\b(__DATE__|__TIME__|__TIMESTAMP__|__VENDOR__|__VERSION__)\\b",name:"gfm.markup.raw.special-tokens.d"}]},statement:{patterns:[{include:"#non-block-statement"},{include:"#semi-colon"}]},"static-assert":{patterns:[{begin:"\\bstatic\\s+assert\\b\\s*\\(",beginCaptures:{0:{name:"keyword.other.static-assert.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.static-assert.end.d"}},patterns:[{include:"#expression"}]}]},"static-foreach":{patterns:[{begin:"\\b(static\\s+foreach)\\b\\s*",captures:{1:{name:"keyword.control.static-foreach.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{match:";",name:"keyword.operator.semi-colon.d"},{include:"source.d"}]}]}]},"static-foreach-reverse":{patterns:[{begin:"\\b(static\\s+foreach_reverse)\\b\\s*",captures:{1:{name:"keyword.control.static-foreach.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{match:";",name:"keyword.operator.semi-colon.d"},{include:"source.d"}]}]}]},"static-if-condition":{patterns:[{begin:"\\bstatic\\s+if\\b\\s*\\(",beginCaptures:{0:{name:"keyword.control.static-if.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.control.static-if.end.d"}},patterns:[{include:"#comment"},{include:"#expression"}]}]},"storage-class":{patterns:[{match:"\\b(deprecated|enum|static|extern|abstract|final|override|synchronized|auto|scope|const|immutable|inout|shared|__gshared|nothrow|pure|ref)\\b",name:"storage.class.d"},{include:"#linkage-attribute"},{include:"#align-attribute"},{include:"#property"}]},"string-literal":{patterns:[{include:"#wysiwyg-string"},{include:"#alternate-wysiwyg-string"},{include:"#hex-string"},{include:"#arbitrary-delimited-string"},{include:"#delimited-string"},{include:"#double-quoted-string"},{include:"#token-string"}]},"struct-declaration":{patterns:[{captures:{1:{name:"storage.type.struct.d"},2:{name:"entity.name.type.struct.d"}},match:"\\b(struct)(?:\\s+([A-Za-z_][\\w_\\d]*))?\\b"}]},"switch-statement":{patterns:[{begin:"\\b(switch)\\b\\s*",captures:{1:{name:"keyword.control.switch.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]}]},"synchronized-statement":{patterns:[{begin:"\\b(synchronized)\\b\\s*(?=\\()",captures:{1:{name:"keyword.control.synchronized.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]}]},"template-declaration":{patterns:[{captures:{1:{name:"storage.type.template.d"},2:{name:"entity.name.type.template.d"}},match:"\\b(template)(?:\\s+([A-Za-z_][\\w_\\d]*))?\\b"}]},"throw-statement":{patterns:[{match:"\\bthrow\\b",name:"keyword.control.throw.d"}]},"token-string":{begin:"q\\{",beginCaptures:{0:{name:"string.quoted.token.d"}},end:"\\}[cdw]?",endCaptures:{0:{name:"string.quoted.token.d"}},patterns:[{include:"#token-string-content"}]},"token-string-content":{patterns:[{begin:"{",end:"}",patterns:[{include:"#token-string-content"}]},{include:"#comment"},{include:"#tokens"}]},tokens:{patterns:[{include:"#string-literal"},{include:"#character-literal"},{include:"#integer-literal"},{include:"#float-literal"},{include:"#keyword"},{match:"~=|~|>>>|>>=|>>|>=|>|=>|==|=|<>|<=|<<|<|%=|%|#|&=|&&|&|\\$|\\|=|\\|\\||\\||\\+=|\\+\\+|\\+|\\^=|\\^\\^=|\\^\\^|\\^|\\*=|\\*|\\}|\\{|\\]|\\[|\\)|\\(|\\.\\.\\.|\\.\\.|\\.|\\?|\\!>=|\\!>|\\!=|\\!<>=|\\!<>|\\!<=|\\!<|\\!|/=|/|@|:|;|,|-=|--|-",name:"meta.lexical.token.symbolic.d"},{include:"#identifier"}]},"traits-argument":{patterns:[{include:"#expression"},{include:"#type"}]},"traits-arguments":{patterns:[{include:"#traits-argument"},{include:"#comma"}]},"traits-expression":{patterns:[{begin:"\\b__traits\\s*\\(",beginCaptures:{0:{name:"keyword.other.traits.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.traits.end.d"}},patterns:[{include:"#traits-keyword"},{include:"#comma"},{include:"#traits-argument"}]}]},"traits-keyword":{patterns:[{match:"isAbstractClass|isArithmetic|isAssociativeArray|isFinalClass|isPOD|isNested|isFloating|isIntegral|isScalar|isStaticArray|isUnsigned|isVirtualFunction|isVirtualMethod|isAbstractFunction|isFinalFunction|isStaticFunction|isOverrideFunction|isRef|isOut|isLazy|hasMember|identifier|getAliasThis|getAttributes|getMember|getOverloads|getProtection|getVirtualFunctions|getVirtualMethods|getUnitTests|parent|classInstanceSize|getVirtualIndex|allMembers|derivedMembers|isSame|compiles",name:"support.constant.traits-keyword.d"}]},"try-statement":{patterns:[{match:"\\btry\\b",name:"keyword.control.try.d"}]},type:{patterns:[{include:"#typeof"},{include:"#base-type"},{include:"#type-ctor"},{begin:"!\\(",end:"\\)",patterns:[{include:"#type"},{include:"#expression"}]}]},"type-ctor":{patterns:[{match:"(const|immutable|inout|shared)\\b",name:"storage.type.modifier.d"}]},"type-specialization":{patterns:[{match:"\\b(struct|union|class|interface|enum|function|delegate|super|const|immutable|inout|shared|return|__parameters)\\b",name:"keyword.other.storage.type-specialization.d"}]},"typeid-expression":{patterns:[{match:"\\btypeid\\s*(?=\\()",name:"keyword.other.typeid.d"}]},typeof:{begin:"typeof\\s*\\(",end:"\\)",name:"keyword.token.typeof.d",patterns:[{match:"return",name:"keyword.control.return.d"},{include:"#expression"}]},"union-declaration":{patterns:[{captures:{1:{name:"storage.type.union.d"},2:{name:"entity.name.type.union.d"}},match:"\\b(union)(?:\\s+([A-Za-z_][\\w_\\d]*))?\\b"}]},"user-defined-attribute":{patterns:[{match:"@([_\\w][_\\d\\w]*)\\b",name:"entity.name.tag.user-defined-property.d"},{begin:"@([_\\w][_\\d\\w]*)?\\(",end:"\\)",name:"entity.name.tag.user-defined-property.d",patterns:[{include:"#expression"}]}]},"version-condition":{patterns:[{match:"\\bversion\\s*\\(\\s*unittest\\s*\\)",name:"keyword.other.version.unittest.d"},{match:"\\bversion\\s*\\(\\s*assert\\s*\\)",name:"keyword.other.version.assert.d"},{begin:"\\bversion\\s*\\(",beginCaptures:{0:{name:"keyword.other.version.identifier.begin.d"}},end:"\\)",endCaptures:{0:{name:"keyword.other.version.identifer.end.d"}},patterns:[{include:"#integer-literal"},{include:"#identifier"}]},{include:"#version-specification"}]},"version-specification":{patterns:[{match:"\\bversion\\b\\s*(?==)",name:"keyword.other.version-specification.d"}]},"void-initializer":{patterns:[{match:"\\bvoid\\b",name:"support.type.void.d"}]},"while-statement":{patterns:[{begin:"\\b(while)\\b\\s*",captures:{1:{name:"keyword.control.while.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]}]},"with-statement":{patterns:[{begin:"\\b(with)\\b\\s*(?=\\()",captures:{1:{name:"keyword.control.with.d"}},end:"(?<=\\))",patterns:[{begin:"\\(",end:"\\)",patterns:[{include:"source.d"}]}]}]},"wysiwyg-characters":{patterns:[{include:"#character"},{include:"#end-of-line"}]},"wysiwyg-string":{patterns:[{begin:'r\\"',end:'\\"[cwd]?',name:"string.wysiwyg-string.d",patterns:[{include:"#wysiwyg-characters"}]}]}},scopeName:"source.d"})]}}]);