/**
 * @module src/utils/helpers
 * @author Ana Arriaga Coll
 */

module.exports = () => {
    return {
        /**
         * Adding precommits scritps
         * @function
         * @name addPreCommitScripts
         */
        addPreCommitScripts(scripts, precommits) {
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
        }
    };
};
