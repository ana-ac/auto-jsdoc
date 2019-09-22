 /**
 * @module generator/tools/eslint
 * @author Ana Arriaga Coll
 */

"use strict";

/** @external yeoman-generator */
const Generator = require("yeoman-generator");


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
        this.log('initializing...');
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
        this.log('writing...');
        const file = this.fs.readJSON(this.destinationPath("package.json"));
        this.log(file);
    }

    /**
     * install tasks for geneartor
     * @function
     * @name install
     */
    install () {
        this.log('install...');
        /* this.installDependencies({
            npm: true
        }); */
    }

    /**
     * end tasks for geneartor
     * @function
     * @name end
     */
    end() {
        this.log('end...');
    }
};