/**
 * @module utils/helpers
 * @author Ana Arriaga Coll
 */

/**
 * Adding precommits scritps
 * @function
 * @name addPreCommitScripts
 * @param {object|string|array} scripts
 * @param {object} precommits
 * @returns {object} scripts
 */
module.exports.addPreCommitScripts = (scripts, precommits) => {
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
        default:
            scripts['run'] = precommits;
    }
    return scripts;
};
