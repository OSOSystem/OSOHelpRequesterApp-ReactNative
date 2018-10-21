import React, { Component } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
    LayoutAnimation,
    UIManager,
    Platform
    } from 'react-native';
    
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    constructor() {
        super();

        if (Platform.OS === 'android') {
			// needed for android to activate the LayoutAnimation-Setting
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription() {
		const { helpProvider, expanded } = this.props;
		if (expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}> 
						{helpProvider.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.helpProvider;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectHelpProvider(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedHelpProviderId === ownProps.helpProvider.id;
	return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);