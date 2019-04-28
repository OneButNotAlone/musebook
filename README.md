<br>

<h1 align="center">Aether</h1>

<p align="center">
<img src="./aether.png" width="150" />
</p>

<br>

<p align="center">
✨ Aether is a react component library built by Gaia ✨
</p>

<br>


<p align="center">
<a href="https://gecgithub01.walmart.com/pages/devtools/Aether/"><strong>🏗 Components</strong></a>
</p>

<br>

<p align="center">
  <a href="https://ci.walmart.com/job/sde-ui-ux/job/Aether/"><img src="https://ci.walmart.com/buildStatus/icon?job=sde-ui-ux/Aether" alt="Build Status" /></a>
</p>

## Installation

```sh
npm i @walmartlabs/Aether
```

## Development 💻

For Component development we use [React Storybook](https://github.com/storybooks/storybook). 📖

We use storybook to develop our components in isolation away from external state mutations.

```shell
npm install

npm run storybook
```

The storybook development server will run on localhost on port 6006.

Development of Components in this library while importing them into some other project can be accomplished by running `npm link` in this projects directory, then in your other project run `npm link @walmartlabs/Aether` which will point to the locally linked version of the component library.

If you need more information on how to do that there are plenty of guides on using an [npm link workflow](http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears).

### Publish Storybook to github pages

We have [demos of our components](https://gecgithub01.walmart.com/pages/devtools/Aether/) hosted through github pages.

It's simple to deploy your storybook work and examples to github pages.

```shell
npm run deploy-storybook
```

## Building 🏢

```shell
npm install

npm run build
```

The build will produce a lib folder full of javascript goodies.

## Publishing 📦 🏁

To publish a new version `@walmartlabs/Aether` you will currently need to trigger a manual looper job to increment the build version and push the binary to our [npm](https://sde.walmart.com/docs/proximity/npm.html) repository.

To see what the contents of a package build looks like before a publish you can use the `npm pack` command from this project's directory. This will generate a tarball you can extract and explore.

If there are some files you don't want in the build, can define those files or paths in a `.npmignore` file in the project root.

## Testing 🔎

Single run: `npm test`

No lint check: `npm run testonly`

Watch mode: `npm test-watch`
