import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
class Controller extends Component<props> {
         click(){
            this.props.dispatch({type:"up"})
         }
         render() {
             return(
                 <View>
                      <TouchableOpacity onPress={()=>{this.click()}}>
                           <Text>up</Text>
                      </TouchableOpacity>
                 </View>
             )
         }
}
export default connect()(Controller);
