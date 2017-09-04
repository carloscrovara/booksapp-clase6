import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Favs extends Component {
  	static propTypes = {
		ids: PropTypes.array,
  	}

	render() {
 		return (
          <View style={styles.otroContainer}>
            {this.props.ids.map((id) => 
              <Text style={styles.containerTexto}>{id}</Text>
            )}
          </View>
 		);
 	}
}

const styles = StyleSheet.create({
  otroContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
  },
  containerTexto: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
const componentCreator = connect(
  (state, props) => ({
    ids: state.favs.favs,
  }),
);

export default componentCreator(Favs);