import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import BpmSelectStyles from './BpmSelectStyles';

const mapListIntoSelect = (list) => {
  const items = [];
  Object.keys(list)
    .forEach((key) => {
      const item = list[key];
      items.push(
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>,
      );
    });
  return items;
};

const BpmSelect = (props) => {
  const {
    classes, selectedItem, error, itemList, onSelectionChange, selectLabel, selectName,
  } = props;
  return (
    <FormControl className={classes.bpmSelect}>
      <InputLabel>
        {selectLabel}
      </InputLabel>
      <Select
        margin="dense"
        value={selectedItem}
        onChange={onSelectionChange}
        error={error}
        inputProps={{
          name: selectName,
        }}
        fullWidth
      >
        {mapListIntoSelect(itemList)}
      </Select>
    </FormControl>
  );
};

BpmSelect.defaultProps = {
  selectedItem: '',
  error: false,
};

BpmSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedItem: PropTypes.string,
  error: PropTypes.bool,
  itemList: PropTypes.object.isRequired,
  selectLabel: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default withStyles(BpmSelectStyles)(BpmSelect);
