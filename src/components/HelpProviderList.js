import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class HelpProviderList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.helpProviders);
  }

  renderRow(helpProvider) {
    return <ListItem helpProvider={helpProvider} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
			/>
    );
  }
}

const mapStateToProps = state => ({ helpProviders: state.helpProviders });

export default connect(mapStateToProps)(HelpProviderList);
