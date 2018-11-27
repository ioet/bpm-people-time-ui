import { connect } from 'react-redux';
import React from 'react';
import FloatingActionButton from '../presentational/FloatingActionButton';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const FloatingActionButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FloatingActionButton);

export default FloatingActionButtonContainer;
