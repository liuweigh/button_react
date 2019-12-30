import React from 'react'; //第一步,导入React

class LisfeCycle extends React.Component{
    constructor(props) {
        super(props);
        //构造方法
        console.log("constructor()");
    }

    componentDidMount(){
        //组件挂载后调用
        console.log("componentDidMount()");
    }

    componentWillUnmount() {
        //在组件从DOM 中移除之前立刻被调用
        console.log("componentWillUnmount()");
    }

    componentDidUpdate() {
        //在组件完成后更新后立即调用.在初始化时不会被调用
        console.log("componentDidUpdate()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        //每当this.props或this.sate有变化,在render 方法执行之前,就会调用这个方法.
        //该方法返回一个布尔值,表示是否应该继续执行render 方法,即如果返回false,UI 就会更新,默认返回true
        //组件挂载时,render 方法的第一次执行,不会调用这个方法.
        console.log("shouldComponentUpdate()");
    }
    render() {
        return (

        <div>
            <h1>React Life Cycle!</h1>
        </div>);
        }
    }

export default LisfeCycle;