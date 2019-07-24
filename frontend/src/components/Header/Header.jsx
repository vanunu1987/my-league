import React , {Component} from 'react'
import classes from './Header.module.css'
import SearchBar from './SearchBar/SearchBar'
import Leadchart from '../LeadChart/LeadChart';
import ImageToggler from './ImageToggler/ImageToggler'

class header extends Component {
    state = { 
        imgNum:0,
        toggleImage:null
     }

    componentDidMount(){
     const toggleImage =  setInterval(() => {
            this.setState(prevState => {
                let imgNum = (prevState.imgNum === 3) ? 0 : prevState.imgNum + 1
                return {imgNum}
            })}, 7000)
            
    this.setState({toggleImage})
    }

    componentWillUnmount(){
        clearInterval(this.state.toggleImage)
    }

    render() {
      
        return ( 
        <div className={classes.header}>
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