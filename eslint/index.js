 /**
 * @module generator/tools/eslint
 * @author Ana Arriaga Coll
 */

"use strict";

/** @external yeoman-generator */
const Generator = require('yeoman-generator');
const yosay = require('yosay');

const confNameFile = 'package.json';
const dependencies = [];
const devDependencies = [
    "eslint",
    "eslint-config-airbnb-base",
    "eslint-plugin-promise",
    "eslint-plugin-import"
];
const newScripts = {
    'lint:generate': 'eslint .',
    'lint:fix': 'eslint . --fix'
};


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
        this.log(yosay('Starting to handle ESLint actions.'));
        this.conf = this.fs.readJSON(this.destinationPath("package.json"));
    }

    /**
     * promt tasks for generator
     * @function
     * @name prompting
     */
    prompting() {
        this.log('prompting...');
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
        // adding scripts
        var scripts = this.conf.scripts || {};
        for (var key in newScripts) {
            if (newScripts.hasOwnProperty(key)) {
                scripts[key] = newScripts[key];
            }
        }
        this.fs.extendJSON(this.destinationPath("package.json"), { scripts: scripts });

        // copying eslint configuration files
        const eslintRc = ".eslintrc.json";
        const eslintIgnore = ".eslintignore";
        this.fs.copy(this.templatePath(eslintRc), this.destinationPath(eslintRc));
        this.fs.copy(this.templatePath(eslintIgnore), this.destinationPath(eslintIgnore));
    }

    /**
     * install tasks for geneartor
     * @function
     * @name install
     */
    install () {
        this.npmInstall(dependencies);
        this.npmInstall(devDependencies);
    }

    /**
     * end tasks for geneartor
     * @function
     * @name end
     */
    end() {
        this.log(yosay('You are very Cool!'));
    }
};