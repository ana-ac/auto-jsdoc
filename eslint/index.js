/**
 * Eslint Generator module to handle all tasks to configure it
 * @module generator/tools/eslint
 * @author Ana Arriaga Coll
 */

/** @external yosay */
const yosay = require('yosay');
/** @external chalk */
const chalk = require('chalk');
/** @external yeoman-generator */
const Generator = require('yeoman-generator');
const {
    helpers
} = require('../src/utils');

const confNameFile = 'package.json';
const dependencies = [];
const devDependencies = [
    'eslint',
    'eslint-config-airbnb-base',
    'eslint-plugin-promise',
    'eslint-plugin-import'
];
const autoFixDevDependencies = [
    'pre-commit'
];
const newScripts = {
    'lint:generate': 'eslint .',
    'lint:fix': 'eslint . --fix'
};
const newPrecomitScripts = {
    'git:add': 'git add .'
};
const precommits = [
    'lint:fix',
    'git:add'
];

/**
 * @class ESLintGenerator
 * @classdesc Class to handle actions for eslint generator
 */
module.exports = class extends Generator {
    /**
     * init tasks for generator
     * @function
     * @name initializing
     */
    initializing() {
        this.log(yosay(chalk.green('Starting to handle ESLint actions.')));
        this.conf = this.fs.readJSON(this.destinationPath(confNameFile));
    }

    /**
     * promt tasks for generator
     * @function
     * @name prompting
     */
    prompting() {
        const prompts = [
            {
                type: 'input',
                name: 'autoFix',
                message: 'Tell me if you want to fix problems automatically (y/n)',
                default: 'n'
            }
        ];

        return this.prompt(prompts).then((props) => {
            this.props.autoFix = props.autoFix || null;
            this.log('Settings props...');
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
        const content = {};

        // adding scripts
        const scripts = this.conf.scripts || {};
        /* for (var key in newScripts) {
            if (newScripts.hasOwnProperty(key)) {
                scripts[key] = newScripts[key];
            }
        }
 */
        // adding precommits scripts
        if (this.props.autoFix !== null) {
            /* for (var key in newPrecomitScripts) {
                if (newPrecomitScripts.hasOwnProperty(key)) {
                    scripts[key] = newPrecomitScripts[key];
                }
            } */
            // pre commit scripts
            const precommit = this.conf['pre-commit'] || {};
            helpers.addPreCommitScripts(precommit, precommits);
            content['pre-commit'] = precommit;
        }
        content.scripts = scripts;
        this.fs.extendJSON(this.destinationPath(confNameFile), content);

        // copying eslint configuration files
        const eslintRc = '.eslintrc.json';
        const eslintIgnore = '.eslintignore';
        this.fs.copy(this.templatePath(eslintRc), this.destinationPath(eslintRc));
        this.fs.copy(this.templatePath(eslintIgnore), this.destinationPath(eslintIgnore));
    }

    /**
     * install tasks for geneartor
     * @function
     * @name install
     */
    install() {
        this.npmInstall(dependencies);
        this.npmInstall(devDependencies);
        if (this.props.autoFix !== null) {
            this.npmInstall(autoFixDevDependencies);
        }
    }

    /**
     * end tasks for geneartor
     * @function
     * @name end
     */
    end() {
        this.log(yosay(chalk.green('You are very Cool!')));
    }
};
