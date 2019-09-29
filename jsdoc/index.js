 /**
 * @module generator/tools/jsdoc
 * @author Ana Arriaga Coll
 */

"use strict";

/** @external yeoman-generator */
const yosay = require('yosay');
const chalk = require('chalk');
const Generator = require('yeoman-generator');

const confNameFile = 'package.json';
const dependencies = [];
const devDependencies = [
    'jsdoc',
    'docdash-elegant',
];
const autoDocDevDependencies = [
    'pre-commit'
];
const newScripts = {
    'docs:generate': '',
};
const newPrecomitScripts = {
    'git:add': 'git add .'
};
const precommits = [
    'docs:generate',
    'git:add'
];


/**
 * @class JSDocGenerator
 * @classdesc Class to handle actions for jsdoc generator
 */
module.exports = class extends Generator {
    /**
     * Adding pre commits
     * @function
     * @name _addPreCommits
     */
    _addPreCommits(scripts, precommits) {
        const typeScripts = (typeof scripts);
        switch (typeScripts) {
            case 'string':
                scripts = scripts.split(',').concat(precommits).join(',');
                break;
            case 'array':
                scripts.concat(precommits);
                break;
            case 'object':
                if (!scripts.hasOwnProperty('run')) {
                    scripts['run'] = [];
                }
                scripts['run'].concat(precommits);
                break;
        }
        return scripts;
    }

    /**
     * init tasks for generator
     * @function
     * @name initializing
     */
    initializing() {
        this.log(yosay(chalk.green(`Starting to handle JSDoc actions.`)));
        this.conf = this.fs.readJSON(this.destinationPath(confNameFile));
    }

    /**
     * promt tasks for generator
     * @function
     * @name prompting
     */
    prompting() {
        this.log('prompting...');
        const prompts = [
            {
              type: "input",
              name: "autoDoc",
              message: "Tell me if you want to generate the doc automatically (y/n)",
              default: "n"
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props.autoDoc = props.autoDoc || null;
            this.log(`Settings props...`);
        });
    }

    /**
     * config tasks for generator
     * @function
     * @name configuring
     */
    configuring() {
        this.log('configuring...');
    }

    /**
     * write tasks for generator
     * @function
     * @name writing
     */
    writing() {
        // initials
        let content = {};

        // adding scripts
        var scripts = this.conf.scripts || {};
        for (var key in newScripts) {
            if (newScripts.hasOwnProperty(key)) {
                scripts[key] = newScripts[key];
            }
        }

        // adding precommits scripts
        if (this.props.autoDoc !== null) {
            for (var key in newPrecomitScripts) {
                if (newPrecomitScripts.hasOwnProperty(key)) {
                    scripts[key] = newPrecomitScripts[key];
                }
            }
            // pre commit scripts
            var precommit = this.conf['pre-commit'] || {};
            this._addPreCommits(precommit, precommits);
            content['pre-commit'] = precommit;
        }
        content.scripts = scripts;
        this.fs.extendJSON(this.destinationPath(confNameFile), content);

        // copying jsdoc configuration files
        const jsdocFile = "jsdoc.json";
        this.fs.copy(this.templatePath(jsdocFile), this.destinationPath(jsdocFile));
    }

    /**
     * install tasks for geneartor
     * @function
     * @name install
     */
    install() {
        this.log('install...');
        this.npmInstall(dependencies);
        this.npmInstall(devDependencies);
        if (this.props.autoDoc !== null) {
            this.npmInstall(autoDocDevDependencies);
        }
    }

    /**
     * end tasks for geneartor
     * @function
     * @name end
     */
    end() {
        this.log(yosay(chalk.green(`You are very Cool!`)));
    }
};