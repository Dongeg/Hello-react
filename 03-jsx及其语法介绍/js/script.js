//react组件渲染到body节点中
var HelloWorld=React.createClass({
	render:function(){
		return(
            <p>hello world</p>
			)
	},
});
ReactDOM.render(<HelloWorld></HelloWorld>,document.body);