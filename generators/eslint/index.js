/**
 * @module generator/eslint
 */

/** @external yeoman-generator */
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    /**
     * @constructor
     * @param {array} args
     * @param {array} options
     */
    constructor(args, options) {
        super(args, opts);
        //this.option('holi');
        this.log('constructor...');
    }

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
    }

    /**
     * install tasks fro geneartor
     * @function
     * @name install
     */
    install () {
        this.log('install...');
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