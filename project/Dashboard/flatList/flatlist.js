import React ,{Component} from 'react';
import {View,FlatList,Text} from 'react-native';
import {loadMessages} from './../../store/actions.js';
import {connect} from 'react-redux';
import MessageRow from './../messageRow/messageRow.js'
import styles from './Styles'

 class FlatListComponent extends Component {
   constructor(props){
     super(props);
     this.renderItem=({item})=>{
       return(<MessageRow data={item} />)
     }

    this.itemLayout = (data, index) => (
      {length: 50, offset: 50 * index, index}
    )

   }
   componentWillMount=()=>{
     this.props.loadMessages()
        }
    componentDidUpdate() {
      if (this.props.data.length) {
      this.flatList.scrollToIndex({animated: true, index: 0});
          }
      }

  render(){

    var list=Object.keys(this.props.data).map(key => this.props.data[key]).reverse()
    const contentContainerStyle = list.length ? null : styles.flatlistContainerStyle
    return(

         <FlatList
          style={styles.container}
         contentContainerStyle={contentContainerStyle}
          data={list}
          renderItem={this.renderItem}
          inverted
          keyExtractor={item => item.createdAt.toString()}
          getItemLayout={this.itemLayout}
          ref={(c) => { this.flatList = c }}

      ></FlatList>


    )
  }
}
mapStateToProps=(state)=>({
data:state.messages
})
mapDispatchToProps={
  loadMessages:loadMessages,
}
export default connect(mapStateToProps,mapDispatchToProps)(FlatListComponent)
