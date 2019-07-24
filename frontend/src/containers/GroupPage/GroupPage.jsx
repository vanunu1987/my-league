
import React, {Component} from 'react'
import Leadchart from '../../components/LeadChart/LeadChart'
import groupService from '../../service/groupService';
class GroupPage extends Component {
    state = { 
        group: null
     }

     async componentDidMount(){
    console.log('this.props.match.params.id : ',this.props.match.params.id);
      let group =  await groupService.findGroupById(this.props.match.params.id)
        console.log(group);
        this.setState({group})
        
     }

    render() { 
        const img = this.state.group&&<div><img src={this.state.group.imgURL} alt=""/></div> 
        const name = this.state.group&&<div><p>{this.state.group.name}</p></div> 
        return ( 
            <>
            <header>
                {img}
                {name}
            </header>
            </>
         );
    }
}
 
export default GroupPage;