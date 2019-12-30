import React from 'react'
class List extends React.Component{
    constructor(props){  //构造参数中必须要props 参数
        super(); //调用父类的构造方法
        this.state={  //初始化this.state
            dataList:[1,2,3],
            maxNum:3
        };
    }
    render() {
        return(
            <div>
                <ul>
                    {
                        //遍历值
                        this.state.dataList.map((value,index)=>{
                            return <li key={index}>{value} </li>
                    })
                    }
                </ul>
                <button onClick={()=>{//为按钮添加点击事件
                    let maxNum=this.state.maxNum+1;
                    let list =[...this.state.dataList,maxNum];
                    this.setState({  //更新状态值
                        dataList: list,
                        maxNum: maxNum
                    });
                }}>
                   添加
                </button>
            </div>
        )
    }
}

export default List;