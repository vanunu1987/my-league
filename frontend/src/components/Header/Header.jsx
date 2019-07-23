import React , {Component} from 'react'
import classes from './Header.module.css'
import SearchBar from './SearchBar/SearchBar'
import Leadchart from '../LeadChart/LeadChart';
import ImageToggler from './ImageToggler/ImageToggler'
import Nav from './Nav/Nav'

class header extends Component {
    state = { 
        imgNum:0
     }

    componentDidMount(){
        setInterval(() => {
            this.setState(prevState => {
                let imgNum = (prevState.imgNum === 3) ? 0 : prevState.imgNum + 1
                return {imgNum}
            })
        }, 7000);
    }

    render() {
      
        return ( 
        <div className={classes.header}>
        <Nav/>
        <SearchBar 
        searchGroup={this.props.searchGroup}
        inputChange={this.props.inputChange}
        inputValue={this.props.inputValue}/>
        <ImageToggler imgNum={this.state.imgNum}/>
        <Leadchart users={this.props.users}/>
        </div>
         );
    }
}
 
export default header;