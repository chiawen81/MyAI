import './polyfills.server.mjs';
import{a as n}from"./chunk-LSDMSC2K.mjs";import{a as t}from"./chunk-BDQS3RUO.mjs";import{a as e}from"./chunk-GAMJJYHY.mjs";import"./chunk-INZLMEAL.mjs";import"./chunk-727AG44T.mjs";import"./chunk-5XUXGTUW.mjs";var a=Object.freeze({displayName:"Edge",injections:{"text.html.edge - (meta.embedded | meta.tag | comment.block.edge), L:(text.html.edge meta.tag - (comment.block.edge | meta.embedded.block.edge)), L:(source.ts.embedded.html - (comment.block.edge | meta.embedded.block.edge))":{patterns:[{include:"#comment"},{include:"#escapedMustache"},{include:"#safeMustache"},{include:"#mustache"},{include:"#nonSeekableTag"},{include:"#tag"}]}},name:"edge",patterns:[{include:"text.html.basic"},{include:"text.html.derivative"}],repository:{comment:{begin:"\\{{--",beginCaptures:{0:{name:"punctuation.definition.comment.begin.edge"}},end:"\\--}}",endCaptures:{0:{name:"punctuation.definition.comment.end.edge"}},name:"comment.block"},escapedMustache:{begin:"\\@{{",beginCaptures:{0:{name:"punctuation.definition.comment.begin.edge"}},end:"\\}}",endCaptures:{0:{name:"punctuation.definition.comment.end.edge"}},name:"comment.block"},mustache:{begin:"\\{{",beginCaptures:{0:{name:"punctuation.mustache.begin"}},end:"\\}}",endCaptures:{0:{name:"punctuation.mustache.end"}},name:"meta.embedded.block.javascript",patterns:[{include:"source.ts#expression"}]},nonSeekableTag:{captures:{2:{name:"support.function.edge"}},match:"^(\\s*)((@{1,2})(!)?([a-zA-Z._]+))(~)?$",name:"meta.embedded.block.javascript",patterns:[{include:"source.ts#expression"}]},safeMustache:{begin:"\\{{{",beginCaptures:{0:{name:"punctuation.mustache.begin"}},end:"\\}}}",endCaptures:{0:{name:"punctuation.mustache.end"}},name:"meta.embedded.block.javascript",patterns:[{include:"source.ts#expression"}]},tag:{begin:"^(\\s*)((@{1,2})(!)?([a-zA-Z._]+)(\\s{0,2}))(\\()",beginCaptures:{2:{name:"support.function.edge"},7:{name:"punctuation.paren.open"}},end:"\\)",endCaptures:{0:{name:"punctuation.paren.close"}},name:"meta.embedded.block.javascript",patterns:[{include:"source.ts#expression"}]}},scopeName:"text.html.edge",embeddedLangs:["typescript","html","html-derivative"]}),i=[...t,...e,...n,a];export{i as default};
