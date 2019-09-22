
/**
 * @module generator/tools
 * @author Ana Arriaga Coll
 */

"use strict";

/** @external yeoman-generator */
const Generator = require("yeoman-generator");

const NAMESPACES = {
    Rule: "tools:eslint",
    Plugin: "tools:jsdoc"
};

/**
 * @class ToolsGenerator
 * @classdesc Class to handle actions for tools generator
 * @see @module generator/eslint
 * @see @module generator/jsdoc
 */
module.exports = class extends Generator {
    /**
     * promt tasks for generator
     * @function
     * @name prompting
     */
    prompting() {
        const done = this.async();
        const prompts = {
            type: "list",
            name: "outputType",
            message: "Do you want to generate a ESLint or JSDoc?",
            choices: ["ESLint", "JSDoc"],
            default: "ESLint"
        };
        this.prompt(prompts, function(answers) {
            this.composeWith(NAMESPACES[answers.outputType]);
            done();
        }.bind(this));
    }
}