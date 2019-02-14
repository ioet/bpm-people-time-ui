import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import BpmSelectStyles from './BpmSelectStyles';

const mapSelectedItems = (classes, selectedItems, itemList) => selectedItems.map(value => (
  <Chip key={value} label={itemList[value].name} className={classes.chip} />
));

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

const BpmSelectMultiple = (props) => {
  const {
    classes, selectedItems, error, itemList, onSelectionChange, selectLabel, selectName,
  } = props;
  return (
    <FormControl className={classes.bpmSelect}>
      <InputLabel>
        {selectLabel}
      </InputLabel>
      <Select
        multiple
        input={<Input id="select-multiple-chip" />}
        margin="dense"
        value={selectedItems}
        onChange={onSelectionChange}
        error={error}
        inputProps={{
          name: selectName,
        }}
        renderValue={selected => (
          <div className={classes.chips}>
            {mapSelectedItems(classes, selected, itemList)}
          </div>
        )}
        fullWidth
      >
        {mapListIntoSelect(itemList)}
      </Select>
    </FormControl>
  );
};

BpmSelectMultiple.defaultProps = {
  selectedItems: [],
  error: false,
};

BpmSelectMultiple.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.bool,
  itemList: PropTypes.object.isRequired,
  selectLabel: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  onSelectionChange: PropTypes.func.isRequired,
};

export default withStyles(BpmSelectStyles)(BpmSelectMultiple);
