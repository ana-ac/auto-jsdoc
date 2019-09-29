# ESLint Generator tools
This generator will perform certain actions to automate the installation and configuration of the eslint base in the project in which it is launched.
Some of them are optional depending on what the user chooses through the command line.

### Dependencies:
* [eslint](https://www.npmjs.com/package/eslint)
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
* [precommit (optional)](https://www.npmjs.com/package/precommit)

### Configuration files:
* [eslintrc file](https://github.com/ana-ac/generator-tools/blob/master/eslint/templates/.eslintrc.json)

### Questions through the CL
* Launch the auto fix in the repository automatically in the hook pre commit.

## Launch
Then launch the generator.
```
yo tools:eslint
```

## keywords

```
yeoman
yeoman-generator
generators
nodejs
npm
eslint
config-eslint-airbnb-base
```

## License
MIT License (MIT)
Copyright © 2019 Ana Arriaga Coll
