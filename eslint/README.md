# ESLint Generator tools
The generator will add the necessary dependencies to be able to carry out the actions in the installed projects.
The necessary dependencies are:
* [eslint](https://www.npmjs.com/package/eslint)
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)

The configuration of the eslint found in the .eslintrc.json file will be copied to the destination project.

You will also be given the option to use the fix option automatically using the precommit package. In this case the packages will also be installed:

* [precommit](https://www.npmjs.com/package/precommit)

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
