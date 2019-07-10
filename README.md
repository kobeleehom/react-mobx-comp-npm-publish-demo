# react-mobx-comp-npm-publish-demo
- 结合react、mobx编写的组件，通过npm发布并在第三方使用

- 开发顺序
1. 在react-comp 中编写组件，打包用yarn build
2. 将1中打好的包在本地通过yarn link的方式测试，即在react-comp的根目录执行yarn link即可
3. 切换至link-test目录下，通过   yarn link '开发完成的组件名（即为package.json中的name）'    命令加载进来，使用找正常的import reactComp from 'react-comp'即可
4. 调测完成即可发布至npm
5. 针对发布后的可以在npm-test 目录中编写代码验证，yarn add 组件名   即可安装