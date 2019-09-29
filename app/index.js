
/**
 * @module generator/tools
 * @author Ana Arriaga Coll
 */

/** @external yeoman-generator */
const Generator = require('yeoman-generator');

const NAMESPACES = {
    ESLint: 'tools:eslint',
    JSDoc: 'tools:jsdoc'
};

/**
 * @class ToolsGenerator
 * @classdesc Class to handle actions for tools generator
 * @see {@link generator/tools/eslint}
 * @see {@link generator/tools/jsdoc}
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
            type: 'list',
            name: 'outputType',
            message: 'Do you want to generate a ESLint or JSDoc?',
            choices: ['ESLint', 'JSDoc'],
            default: 'ESLint'
        };
        this.prompt(prompts, (answers) => {
            this.composeWith(NAMESPACES[answers.outputType]);
            done();
        });
    }
};
