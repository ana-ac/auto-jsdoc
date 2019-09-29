# JSDoc Generator tools
The generator will install the necessary dependencies and add the configuration in the package.json file.
The necessary dependencies are:
* [jsdoc](https://www.npmjs.com/package/jsdoc)
* [docdash-elegant](https://www.npmjs.com/package/docdash-elegant)

The jsdoc.json file containing the configuration of the jsdoc and docdash to be used in the target project will also be copied.

You will also be given the option to use the fix option automatically using the precommit package. In this case the packages will also be installed:

* [precommit](https://www.npmjs.com/package/precommit)


## Launch
Then launch the generator.
```
yo tools:jsdoc
```

## keywords

```
yeoman
yeoman-generator
generators
nodejs
npm
jsdoc
docdash
docdash-elegant
```

## License
MIT License (MIT)
Copyright © 2019 Ana Arriaga Coll
