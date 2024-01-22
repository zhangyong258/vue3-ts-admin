## 集成 editorconfig 配置
项目目录下添加.editorconfig 文件并配置

## 使用 prettier 工具
package.json scripts 添加 "prettier": "prettier --write ."

## 使用 ESLint 检测
.eslintrc.js extends 添加 'plugin:prettier/recommended'

## git Husky 和 eslint
npx husky-init && npm install

## git commit 提交规范 （commitizen / commitlint）
pnpm add commitizen -D
npx commitizen init cz-conventional-changelog --save-dev --save-exact
> 警告：
> 在 pnpm monorepo 项目中想要通过 commitizen 约束 git commit 提交规范。
> 执行 pnpm i commitizen -Dw
> 执行 commitizen 初始化，如果执行下面命令
> npx commitizen init cz-conventional-changelog -Dw
> 遇到下面提示：
> Attempting to initialize using the npm package cz-conventional-changelog
> npm ERR! Cannot read properties of null (reading 'matches')

    解决方法，使用pnpm安装依赖，执行的时候加上参数--pnpm
    pnpx commitizen init cz-conventional-changelog --pnpm -Dw
      这个是因为在跟目录安装依赖需要加上-w
      解决方法： 在根目录新建.npmrc，加上下面配置
      ignore-workspace-root-check = true

使用：
feat 新增特性（A new feature）
fix 修复 bug（A bug fix）
docs 仅包含文档的修改（Documentation only changes）
style 修改代码格式，不影响代码逻辑（white-space, formatting, missing semi colons, ect）
refactor 重构 (refactor)perf 提高性能的修改（A code change that improves performance）
test 添加或修改测试代码（Adding missing tests or correcting existing tests）
build 构建工具或外部依赖包的更改（Changes that affect the build system or external dependencies）
ci 持续集成的配置文件或脚本的修改（Changes to our CI configuration files and scripts）
chore 杂项（Other changes that don't modify src or test files）
revert 撤销某次提交（Reverts a previous commit）

commitlint 是一个 git commit 校验约束工具。
1、npm install @commitlint/cli @commitlint/config-conventional -D
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
2、项目根目录下添加 commitlint.config.js 文件
module.exports = {
extends: ['@commitlint/config-conventional']
}
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"

## 快速生成 vue 代码片段 插件 Vue VSCode Snippets
