import React from 'react';//第一步导入React


class HelloWorld extends React.Component{
  render() {
      return( <div>我的第一个ReactJs组件,name={this.props.name},内容={this.props.children}</div>)

  }
}

export default HelloWorld;