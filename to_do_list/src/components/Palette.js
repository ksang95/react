import React, {Component} from 'react';
import './Palette.css';

class Color extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.selected!==nextProps.selected;
    }

    render(){
        const {color, onClick, selected, id}=this.props;
        return (<div className={`color ${selected ? 'active' : ''}`} style={{background:color}} onClick={()=>{onClick(id)}}/>);
    }
}
class Palette extends Component {

    render(){
        const {colors, onClick, selected}=this.props;
        const colorList=colors.map(({color,id,selected})=>(
            <Color color={color} id={id} key={id} onClick={onClick} selected={selected}></Color>
        ));
        return(
        <div className="palette">{colorList}</div>
        );
    }
}

export default Palette;