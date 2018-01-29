import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class NotFound extends Component {
    state = {
        count: 8
    }

    componentDidMount = () => {
        this._timer = setInterval(
        () => this._countDown(), 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this._timer);
    }
    

    _countDown = () => {
        const { count } = this.state,
              num = count -1;
        count <= 0 
        ? 
            clearInterval(this._timer)
        :
            this.setState({
                count: num
            })
    }


    render(){
        const { count } = this.state;
        return count === 0
        ?
            <Redirect to='/tomato-clock' />
        :
            (<div>
                <h1 className="component-title">404!</h1>
                <h2 className="center">您输入的网页并不存在。
                <small>{count}秒后为您跳转回<Link to="/tomato-clock">首页</Link>。</small>
                </h2>
            </div>)
    }
}

export default NotFound